import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { topicTitle, subTitle, topicNumber, subNumber } = await req.json();
  const difficulty = (topicNumber - 1) * 3 + subNumber;

  const prompt = `Você é um gerador de questões para um jogo educativo sobre comunicação em português brasileiro.

Nível de dificuldade: ${difficulty}/24

Gere EXATAMENTE 3 questões de múltipla escolha sobre situações reais do dia a dia.

REGRAS:
1. NUNCA mencione o tema, título ou assunto do módulo nas perguntas ou respostas.
2. Escreva situações concretas e humanas, não teóricas.
3. Cenários DIFERENTES nas 3 questões: casal, família, restaurante, médico, amigos, compras, vizinho, academia, redes sociais, viagem, trabalho, etc.
4. As respostas devem ser comportamentos reais, não frases de manual.
5. Quanto maior a dificuldade, mais sutil a diferença entre as opções.

Contexto interno (NÃO mencione nas perguntas): ${topicTitle} — ${subTitle}

Cada questão tem 3 opções:
- Resposta IDEAL: points 100, type "correct"
- Resposta RAZOÁVEL mas incompleta: points 50, type "partial"
- Resposta INADEQUADA mas comum: points 0, type "wrong"

Feedbacks: 1-2 frases diretas explicando o porquê, sem jargão técnico.
Varie qual opção (a, b ou c) é a correta nas 3 questões.

Retorne APENAS JSON válido, sem markdown, sem texto antes ou depois:
[
  {
    "id": "g1",
    "type": "choice",
    "tag": "emoji + contexto em 2-3 palavras",
    "question": "situação concreta + pergunta",
    "choices": [
      {"id":"a","text":"comportamento real","points":0,"type":"wrong","feedback":"explicação"},
      {"id":"b","text":"comportamento real","points":100,"type":"correct","feedback":"explicação"},
      {"id":"c","text":"comportamento real","points":50,"type":"partial","feedback":"explicação"}
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
