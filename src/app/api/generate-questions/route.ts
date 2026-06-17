import { NextRequest, NextResponse } from "next/server";

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const LETTERS = ["a", "b", "c", "d"];

const CONTEXTOS = {
  igreja: `Contexto: situações do ambiente eclesiástico. Use cenários como:
- Reuniões de liderança da igreja
- Conversas entre pastor e membros
- Conflitos no ministério de louvor
- Decisões em células ou grupos pequenos
- Voluntários e coordenadores de ministério
- Comunicação entre diáconos e presbíteros
- Situações com famílias da congregação
- Planejamento de eventos da igreja`,

  geral: `Contexto: situações do cotidiano geral. Use cenários variados como:
- Casal em casa discutindo algo
- Família no jantar
- Amigos num grupo de WhatsApp
- Médico e paciente na consulta
- Cliente e atendente no comércio
- Vizinhos com uma situação
- Academia ou esporte em grupo
- Redes sociais e mensagens digitais`,
};

export async function POST(req: NextRequest) {
  const {
    topicTitle,
    subTitle,
    topicNumber,
    subNumber,
    context = "igreja",
  } = await req.json();
  const difficulty = (topicNumber - 1) * 3 + subNumber;
  const contextoTexto =
    CONTEXTOS[context as "geral" | "igreja"] ?? CONTEXTOS.igreja;

  const prompt = `Você é um gerador de questões para um jogo educativo sobre comunicação em português brasileiro.

Nível de dificuldade: ${difficulty}/24

${contextoTexto}

Gere EXATAMENTE 3 questões de múltipla escolha sobre situações reais.

REGRAS:
1. NUNCA mencione o tema ou título do módulo nas perguntas ou respostas.
2. Cenários DIFERENTES nas 3 questões — use situações distintas.
3. As respostas devem ser comportamentos reais, não frases de manual.
4. Quanto maior a dificuldade, mais sutil a diferença entre as opções.
5. A ORDEM em que você escreve as opções não importa — elas serão reordenadas depois. Apenas marque corretamente o campo "type" de cada uma.

Contexto interno (NÃO mencione nas perguntas): ${topicTitle} — ${subTitle}

Cada questão tem EXATAMENTE 4 opções:
- Resposta IDEAL: points 100, type "correct" (apenas UMA)
- Resposta RAZOÁVEL mas incompleta: points 50, type "partial" (apenas UMA)
- Duas respostas INADEQUADAS mas comuns: points 0, type "wrong" (DUAS, com motivos diferentes de estarem erradas)

Feedbacks: 1-2 frases diretas explicando o porquê, sem jargão.

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
      {"id":"c","text":"comportamento real","points":50,"type":"partial","feedback":"explicação"},
      {"id":"d","text":"comportamento real","points":0,"type":"wrong","feedback":"explicação"}
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
        max_tokens: 2200,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await res.json();
    const text = data.content?.[0]?.text ?? "";
    const match = text.match(/\[[\s\S]*\]/);
    if (!match) throw new Error("JSON não encontrado");
    const questions = JSON.parse(match[0]);

    // Embaralha as opções de cada questão no servidor — garante aleatoriedade real
    const shuffledQuestions = questions.map((q: any, qi: number) => ({
      ...q,
      id: `g${qi}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      choices: shuffleArray(q.choices).map((c: any, ci: number) => ({
        ...c,
        id: LETTERS[ci] ?? `opt${ci}`,
      })),
    }));

    return NextResponse.json({ questions: shuffledQuestions });
  } catch (err) {
    console.error("Erro ao gerar questões:", err);
    return NextResponse.json(
      { error: "Falha ao gerar questões" },
      { status: 500 },
    );
  }
}
