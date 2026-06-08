import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { topicTitle, subTitle, topicNumber, subNumber } = await req.json();
  const difficulty = (topicNumber - 1) * 3 + subNumber;

  const prompt = `Você é um gerador de questões para um jogo educativo sobre comunicação assertiva em português brasileiro.

Tópico: ${topicTitle} (${topicNumber} de 8)
Módulo: ${subTitle}
Dificuldade: ${difficulty}/24

Gere EXATAMENTE 3 questões de múltipla escolha. Regras:

1. Cenários VARIADOS — use contextos diferentes nas 3 questões: casal, família, restaurante, vizinho, médico, cliente, amigos, compra, entrevista, festa, redes sociais, academia, etc. EVITE repetir reunião de escritório.

2. Cada questão tem 3 opções:
   - ASSERTIVA correta → points: 100, type: "correct"
   - Parece razoável mas é inadequada → points: 0, type: "wrong"
   - Parcialmente certa mas incompleta → points: 50, type: "partial"

3. Com dificuldade >16: as 3 opções devem parecer plausíveis. A distinção entre elas deve ser sutil.

4. Feedbacks explicam o PORQUÊ de cada resposta (2 frases objetivas).

5. Varie qual opção (a, b ou c) é a correta entre as 3 questões.

Retorne APENAS JSON válido, sem markdown, sem texto antes ou depois:
[
  {
    "id": "g1",
    "type": "choice",
    "tag": "emoji + contexto curto",
    "question": "situação como pergunta",
    "choices": [
      {"id":"a","text":"opção a","points":0,"type":"wrong","feedback":"explicação"},
      {"id":"b","text":"opção b","points":100,"type":"correct","feedback":"explicação"},
      {"id":"c","text":"opção c","points":50,"type":"partial","feedback":"explicação"}
    ]
  },
  { "id": "g2", "type": "choice", "tag": "...", "question": "...", "choices": [...] },
  { "id": "g3", "type": "choice", "tag": "...", "question": "...", "choices": [...] }
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
    if (!match) throw new Error("JSON não encontrado");
    const questions = JSON.parse(match[0]);
    return NextResponse.json({ questions });
  } catch (err) {
    console.error("Erro ao gerar questões:", err);
    return NextResponse.json(
      { error: "Falha ao gerar questões" },
      { status: 500 },
    );
  }
}
