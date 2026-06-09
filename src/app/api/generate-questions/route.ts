import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { topicTitle, subTitle, topicNumber, subNumber } = await req.json();
  const difficulty = (topicNumber - 1) * 3 + subNumber;

  const prompt = `Voce e um gerador de questoes para um jogo educativo sobre comunicacao assertiva em portugues brasileiro.

Topico: ${topicTitle} (${topicNumber} de 8)
Modulo: ${subTitle}
Dificuldade: ${difficulty}/24

Gere EXATAMENTE 3 questoes de multipla escolha. Regras:

1. Cenarios VARIADOS: use contextos diferentes nas 3 questoes. Use: casal, familia, restaurante, vizinho, medico, cliente, amigos, compra, entrevista, festa, redes sociais, academia, etc.

2. Cada questao tem 3 opcoes:
   - ASSERTIVA correta: points 100, type correct
   - Parece razoavel mas e inadequada: points 0, type wrong
   - Parcialmente certa mas incompleta: points 50, type partial

3. Feedbacks explicam o PORQUE de cada resposta em 2 frases.

4. Varie qual opcao a, b ou c e a correta entre as 3 questoes.

Retorne APENAS JSON valido, sem markdown, sem texto antes ou depois:
[
  {
    "id": "g1",
    "type": "choice",
    "tag": "emoji + contexto curto",
    "question": "situacao como pergunta",
    "choices": [
      {"id":"a","text":"opcao a","points":0,"type":"wrong","feedback":"explicacao"},
      {"id":"b","text":"opcao b","points":100,"type":"correct","feedback":"explicacao"},
      {"id":"c","text":"opcao c","points":50,"type":"partial","feedback":"explicacao"}
    ]
  },
  { "id": "g2", "type": "choice", "tag": "...", "question": "...", "choices": [] },
  { "id": "g3", "type": "choice", "tag": "...", "question": "...", "choices": [] }
]`;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": process.env.ANTHROPIC_API_KEY!,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 2000,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await res.json();
    const text = data.content?.[0]?.text ?? "";
    const match = text.match(/\[[\s\S]*\]/);
    if (!match) throw new Error("JSON nao encontrado");
    const questions = JSON.parse(match[0]);
    return NextResponse.json({ questions });
  } catch (err) {
    console.error("Erro ao gerar questoes:", err);
    return NextResponse.json(
      { error: "Falha ao gerar questoes" },
      { status: 500 },
    );
  }
}
