import type { Topic } from "@/types/game";

export const PHASES_DATA: Topic[] = [
  // ══════════════════════════════════════════
  // TÓPICO 1 — Expressão e Clareza
  // ══════════════════════════════════════════
  {
    id: 1,
    number: 1,
    icon: "🗣️",
    title: "Expressão e Clareza",
    description:
      "Comunicar com clareza é a base de tudo. Aprenda a estruturar o que você quer dizer antes de dizer.",
    subPhases: [
      {
        id: "1-1",
        title: "Clareza no Texto",
        description:
          "Mensagens escritas mal estruturadas causam mais conflitos do que desacordos reais.",
        items: [
          {
            id: "1-1-tip",
            type: "tip",
            icon: "✏️",
            title: "Regra das 3 perguntas",
            content:
              "Antes de enviar qualquer mensagem importante, responda mentalmente:\n\n📌 O QUÊ você está comunicando?\n📌 POR QUÊ isso importa para o receptor?\n📌 COMO ele deve agir com essa informação?\n\nSe não souber responder uma das três, revise antes de enviar.",
          },
          {
            id: "1-1-q1",
            type: "choice",
            tag: "📧 E-mail Urgente",
            question:
              "Você precisa pedir informações urgentes a um colega que frequentemente demora a responder. Como você escreve o e-mail?",
            choices: [
              {
                id: "a",
                text: '"Você NUNCA responde a tempo! Preciso disso agora."',
                points: 0,
                type: "wrong",
                feedback:
                  '"Nunca" é generalizante e o tom agressivo vai gerar defensividade, não cooperação.',
              },
              {
                id: "b",
                text: '"Oi! Preciso dessas informações até as 15h porque tenho uma reunião. Consegue me ajudar?"',
                points: 100,
                type: "correct",
                feedback:
                  "Contexto claro + prazo específico + pedido direto. Isso facilita a resposta rápida sem criar atrito.",
              },
              {
                id: "c",
                text: "Manda o e-mail sem prazo e torce para ele responder.",
                points: 25,
                type: "partial",
                feedback:
                  "Melhor do que ser agressivo, mas sem prazo claro a urgência se perde.",
              },
            ],
          },
          {
            id: "1-1-q2",
            type: "choice",
            tag: "💬 Mensagem Vaga",
            question:
              'Você recebeu esta mensagem de um colega: "Aquele negócio que falamos — resolve aí." O que você faz?',
            choices: [
              {
                id: "a",
                text: "Tenta adivinhar o que ele quer e resolve da forma que entendeu.",
                points: 0,
                type: "wrong",
                feedback:
                  "Agir com base em interpretações gera retrabalho e frustração para os dois.",
              },
              {
                id: "b",
                text: "Ignora até ele explicar melhor.",
                points: 25,
                type: "partial",
                feedback:
                  "Esperar pode ser necessário, mas não comunicar que a mensagem foi ambígua deixa o colega sem feedback.",
              },
              {
                id: "c",
                text: 'Responde: "Pode especificar? Quero ter certeza de que vou resolver o ponto certo."',
                points: 100,
                type: "correct",
                feedback:
                  "Pedir clareza é sinal de profissionalismo, não de limitação. Você evita retrabalho e alinha expectativas.",
              },
            ],
          },
          {
            id: "1-1-q3",
            type: "choice",
            tag: "📋 Tarefa Delegada",
            question:
              "Você precisa delegar uma tarefa importante para um membro da equipe. Como você comunica?",
            choices: [
              {
                id: "a",
                text: '"Você cuida daquele relatório, tá?" e vai embora.',
                points: 0,
                type: "wrong",
                feedback:
                  "Delegação sem contexto gera entrega errada. A pessoa não sabe prazo, formato, nem a importância.",
              },
              {
                id: "b",
                text: "Envia um documento detalhado de 3 páginas com todas as instruções possíveis.",
                points: 25,
                type: "partial",
                feedback:
                  "Documentação é boa, mas excesso de informação pode paralisar. Clareza é diferente de volume.",
              },
              {
                id: "c",
                text: "Explica o objetivo, o prazo, o formato esperado e pergunta se ficou claro.",
                points: 100,
                type: "correct",
                feedback:
                  "Delegação assertiva: contexto + expectativas + confirmação de entendimento. Nada falta, nada sobra.",
              },
            ],
          },
        ],
      },
      {
        id: "1-2",
        title: "Clareza Verbal",
        description:
          "Como você fala importa tanto quanto o que você fala. Tom, ritmo e escolha de palavras moldam a mensagem.",
        items: [
          {
            id: "1-2-tip",
            type: "tip",
            icon: "🎙️",
            title: "As 3 camadas da comunicação",
            content:
              'Pesquisas mostram que em comunicações verbais:\n\n🔤 7% do impacto vem das palavras\n🎵 38% vem do tom de voz\n👁️ 55% vem da linguagem corporal\n\nIsso significa que "Tudo bem" pode ser reconfortante ou ameaçador dependendo de como é dito. Calibre as três camadas.',
          },
          {
            id: "1-2-q1",
            type: "choice",
            tag: "🎤 Apresentação",
            question:
              "Você precisa apresentar um projeto para toda a empresa. No meio da fala, percebe que errou uma informação 5 minutos atrás. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Termina a apresentação e corrige discretamente no final.",
                points: 25,
                type: "partial",
                feedback:
                  "A intenção é boa, mas a informação errada fica circulando por mais tempo e alguém pode agir com base nela.",
              },
              {
                id: "b",
                text: "Ignora — provavelmente ninguém prestou atenção nesse detalhe.",
                points: 0,
                type: "wrong",
                feedback:
                  "Você já sabe do erro. Fingir que não percebeu é escolher conveniência acima de integridade.",
              },
              {
                id: "c",
                text: 'Interrompe com naturalidade: "Preciso corrigir algo que disse há pouco — o dado correto é X."',
                points: 100,
                type: "correct",
                feedback:
                  "Coragem assertiva. A pausa breve para corrigir aumenta sua credibilidade, não diminui.",
              },
            ],
          },
          {
            id: "1-2-q2",
            type: "choice",
            tag: "🗣️ Tom de Voz",
            question:
              "Você está frustrado com um colega e precisa dar um feedback sobre o trabalho dele. Como você controla o tom?",
            choices: [
              {
                id: "a",
                text: "Fala o que precisa falar sem se preocupar com o tom — o importante é o conteúdo.",
                points: 0,
                type: "wrong",
                feedback:
                  "Tom inadequado faz o conteúdo ser recusado antes de ser processado. A forma é parte da mensagem.",
              },
              {
                id: "b",
                text: "Espera até estar completamente calmo e então inicia a conversa com fatos, não com emoção.",
                points: 100,
                type: "correct",
                feedback:
                  "Autorregulação emocional antes de dar feedback é fundamental. Você protege o relacionamento e a eficácia da mensagem.",
              },
              {
                id: "c",
                text: "Pede para outra pessoa passar o feedback para evitar o confronto.",
                points: 25,
                type: "partial",
                feedback:
                  "Às vezes delegar feedback é necessário, mas sistematicamente evitar conversas difíceis limita seu desenvolvimento como comunicador.",
              },
            ],
          },
          {
            id: "1-2-q3",
            type: "choice",
            tag: "📢 Anúncio em Grupo",
            question:
              "Você precisa dar uma notícia difícil para toda a equipe em uma reunião. Como você abre a conversa?",
            choices: [
              {
                id: "a",
                text: "Começa com muitos rodeios e amenizações antes de chegar ao ponto.",
                points: 25,
                type: "partial",
                feedback:
                  "Rodeios excessivos aumentam a ansiedade de quem ouve e reduzem a clareza da mensagem.",
              },
              {
                id: "b",
                text: 'Vai direto ao ponto sem nenhum contexto: "Precisamos cortar 20% do orçamento."',
                points: 25,
                type: "partial",
                feedback:
                  "Direto, mas sem contexto a notícia choca e gera resistência. Clareza não é brutalidade.",
              },
              {
                id: "c",
                text: "Contextualiza brevemente, anuncia a notícia com clareza e abre espaço para perguntas.",
                points: 100,
                type: "correct",
                feedback:
                  "Contexto + clareza + abertura ao diálogo. Isso é comunicar uma notícia difícil de forma assertiva.",
              },
            ],
          },
        ],
      },
      {
        id: "1-3",
        title: "Clareza sob Pressão",
        description:
          "Quando a pressão aumenta, a clareza costuma cair. Este módulo treina comunicação nos momentos mais difíceis.",
        items: [
          {
            id: "1-3-tip",
            type: "tip",
            icon: "🧘",
            title: "A pausa assertiva",
            content:
              'Sob pressão, o cérebro ativa o modo reativo — respostas rápidas, impulsivas e frequentemente inadequadas.\n\nA técnica da pausa assertiva: antes de responder algo importante sob pressão, respire fundo 3 vezes e diga:\n\n💬 "Deixa eu pensar um segundo antes de responder."\n\nEssa frase simples te dá tempo e sinaliza que você leva a conversa a sério.',
          },
          {
            id: "1-3-q1",
            type: "choice",
            tag: "⚡ Crítica Inesperada",
            question:
              "Em uma reunião importante, seu trabalho é criticado de forma inesperada e pública. Sua reação imediata é:",
            choices: [
              {
                id: "a",
                text: "Responde imediatamente, defendendo cada ponto criticado.",
                points: 25,
                type: "partial",
                feedback:
                  "Defender-se pode ser legítimo, mas responder imediatamente sob emoção raramente produz a melhor resposta.",
              },
              {
                id: "b",
                text: "Fica em silêncio, visivelmente abalado, sem dizer nada.",
                points: 25,
                type: "partial",
                feedback:
                  "O silêncio pode evitar escalamento, mas deixa a crítica sem resposta e você parece sem recursos.",
              },
              {
                id: "c",
                text: 'Respira, agradece o feedback e pede um momento: "Vou processar esse ponto e respondo com mais cuidado."',
                points: 100,
                type: "correct",
                feedback:
                  "Pausa assertiva em ação. Você não reagiu nem se retraiu — demonstrou maturidade comunicacional.",
              },
            ],
          },
          {
            id: "1-3-q2",
            type: "choice",
            tag: "🔥 Conflito Iminente",
            question:
              "Uma conversa com um colega está escalando rapidamente para um conflito. Você percebe que ambos estão emocionados. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Continua a conversa — parar agora seria fraqueza.",
                points: 0,
                type: "wrong",
                feedback:
                  "Continuar uma conversa quando ambos estão emocionados raramente resolve — costuma escalar.",
              },
              {
                id: "b",
                text: 'Propõe pausar: "Precisamos de um momento para respirar antes de continuar. Podemos retomar em 10 minutos?"',
                points: 100,
                type: "correct",
                feedback:
                  "Propor pausa não é fraqueza — é inteligência relacional. Você protege o relacionamento e a qualidade da conversa.",
              },
              {
                id: "c",
                text: "Encerra a conversa abruptamente e vai embora.",
                points: 25,
                type: "partial",
                feedback:
                  "Sair evita o pior no momento, mas encerrar sem combinar retomada deixa o conflito no ar.",
              },
            ],
          },
          {
            id: "1-3-q3",
            type: "choice",
            tag: "⏱️ Decisão Urgente",
            question:
              'Seu gestor te pede uma decisão importante "agora". Você não tem todas as informações que precisaria. O que você faz?',
            choices: [
              {
                id: "a",
                text: "Decide na hora para não parecer inseguro.",
                points: 25,
                type: "partial",
                feedback:
                  "Decisão rápida pode ser necessária às vezes, mas decidir sem informação suficiente por medo de parecer inseguro é arriscado.",
              },
              {
                id: "b",
                text: "Fala que não pode decidir sem as informações e não oferece alternativa.",
                points: 25,
                type: "partial",
                feedback:
                  "Honesto sobre o limite, mas sem proposta ativa você transfere o problema sem ajudar a resolvê-lo.",
              },
              {
                id: "c",
                text: '"Posso dar uma resposta preliminar agora e confirmar em 1 hora com os dados que faltam. Funciona?"',
                points: 100,
                type: "correct",
                feedback:
                  "Solução criativa que atende à urgência sem comprometer a qualidade. Assertividade prática.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════
  // TÓPICO 2 — Escuta Ativa
  // ══════════════════════════════════════════
  {
    id: 2,
    number: 2,
    icon: "👂",
    title: "Escuta Ativa",
    description:
      "Ouvir de verdade é a habilidade mais rara e mais poderosa da comunicação assertiva.",
    subPhases: [
      {
        id: "2-1",
        title: "Presença Total",
        description:
          "Escuta ativa começa com presença real — sem distrações, sem agenda paralela.",
        items: [
          {
            id: "2-1-tip",
            type: "tip",
            icon: "🧠",
            title: "O ciclo da escuta ativa",
            content:
              "Escuta ativa tem 3 etapas que precisam acontecer nessa ordem:\n\n1️⃣ RECEBER — ouvir sem interromper, sem formular resposta\n2️⃣ PROCESSAR — identificar o que a pessoa está realmente dizendo (e sentindo)\n3️⃣ RESPONDER — com base no que foi dito, não no que você queria dizer\n\nA maioria das pessoas pula direto para o 3 enquanto ainda está no 1.",
          },
          {
            id: "2-1-q1",
            type: "choice",
            tag: "💬 Amigo Desabafando",
            question:
              "Um amigo está desabafando sobre um problema difícil. No meio da conversa você percebe que ele está cometendo um erro de julgamento claro. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Interrompe para apontar o erro assim que percebe — melhor corrigir cedo.",
                points: 0,
                type: "wrong",
                feedback:
                  "Interromper sinaliza que você está mais interessado em resolver do que em ouvir. Ele precisa ser escutado primeiro.",
              },
              {
                id: "b",
                text: 'Ouve até o fim e depois pergunta: "Tem um ponto que quero entender melhor — posso compartilhar uma perspectiva?"',
                points: 100,
                type: "correct",
                feedback:
                  "Escuta completa + permissão pedida + perspectiva oferecida. Isso é escuta ativa com respeito.",
              },
              {
                id: "c",
                text: "Ouve tudo e não fala nada sobre o erro para não desanimá-lo.",
                points: 25,
                type: "partial",
                feedback:
                  "Parece gentil, mas omitir informação útil por medo não é cuidado real — é evitação disfarçada de consideração.",
              },
            ],
          },
          {
            id: "2-1-q2",
            type: "choice",
            tag: "📊 Explicação Longa",
            question:
              "Seu gestor explica um problema complexo muito rapidamente. Você está perdendo o fio. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Fica quieto, anota o que consegue e depois pergunta para colegas o que ficou faltando.",
                points: 25,
                type: "partial",
                feedback:
                  "Você vai trabalhar com informação incompleta e qualquer erro posterior será consequência disso.",
              },
              {
                id: "b",
                text: "Finge que entendeu para não parecer desatento.",
                points: 0,
                type: "wrong",
                feedback:
                  "Fingir compreensão é uma das formas mais comuns de falha de comunicação — e sempre cobra seu preço depois.",
              },
              {
                id: "c",
                text: 'Aguarda uma pausa natural e diz: "Quero confirmar se entendi — posso resumir o que captei?"',
                points: 100,
                type: "correct",
                feedback:
                  "Confirmar o entendimento demonstra atenção e responsabilidade. É um sinal de profissionalismo, não de fraqueza.",
              },
            ],
          },
          {
            id: "2-1-q3",
            type: "choice",
            tag: "🤝 Reunião 1:1",
            question:
              "Durante uma reunião 1:1, seu colaborador começa a falar sobre um problema pessoal que está afetando seu trabalho. Você tem outras prioridades. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Ouve superficialmente enquanto verifica e-mails discretamente.",
                points: 0,
                type: "wrong",
                feedback:
                  "Pseudo-escuta — estar fisicamente presente mas mentalmente ausente — é percebida e destrói a confiança.",
              },
              {
                id: "b",
                text: "Diz que não tem tempo agora e agenda para outro momento.",
                points: 25,
                type: "partial",
                feedback:
                  'Honesto sobre a disponibilidade, mas o timing importa. Às vezes o "outro momento" nunca chega.',
              },
              {
                id: "c",
                text: "Fecha o notebook, foca completamente e ouve até entender o que está acontecendo.",
                points: 100,
                type: "correct",
                feedback:
                  "Presença total. Você sinalizou que o colaborador importa mais do que as tarefas. Isso constrói confiança real.",
              },
            ],
          },
        ],
      },
      {
        id: "2-2",
        title: "Escuta em Divergências",
        description:
          "Ouvir quem discorda de você é muito mais difícil — e muito mais valioso.",
        items: [
          {
            id: "2-2-tip",
            type: "tip",
            icon: "🤺",
            title: "Ouvir para entender, não para rebater",
            content:
              'Em divergências, 90% das pessoas ouvem para encontrar onde rebater — não para entender.\n\nO desafio real: conseguir resumir a perspectiva oposta de forma tão precisa que a outra pessoa diria "é exatamente isso".\n\n💡 Tente antes de discordar: "Só para garantir que entendi — você está dizendo que..."\n\nQuem consegue fazer isso raramente perde debates importantes.',
          },
          {
            id: "2-2-q1",
            type: "choice",
            tag: "💡 Ideia que Você Discorda",
            question:
              "Numa reunião, um colega apresenta uma proposta que você claramente acha equivocada. Ele ainda está falando. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Interrompe no meio da apresentação para apontar o problema.",
                points: 0,
                type: "wrong",
                feedback:
                  "Interromper invalida o processo e cria um ambiente onde as pessoas têm medo de apresentar ideias.",
              },
              {
                id: "b",
                text: "Ouve até o fim sem comentar para evitar o confronto.",
                points: 25,
                type: "partial",
                feedback:
                  "Ouvir até o fim é certo, mas omitir sua perspectiva válida também tem um custo para o time.",
              },
              {
                id: "c",
                text: "Ouve completamente, depois resume o ponto dele e apresenta sua perspectiva diferente.",
                points: 100,
                type: "correct",
                feedback:
                  "Você demonstrou que ouviu de verdade antes de discordar. Isso cria um diálogo de alto nível.",
              },
            ],
          },
          {
            id: "2-2-q2",
            type: "choice",
            tag: "🤔 Perspectiva Oposta",
            question:
              'Alguém defende uma posição que você acha completamente errada e apresenta argumentos. Sua reação interna é "isso não faz sentido". O que você faz?',
            choices: [
              {
                id: "a",
                text: "Responde imediatamente com seus contra-argumentos.",
                points: 25,
                type: "partial",
                feedback:
                  "Responder rápido antes de processar completamente raramente produz o melhor diálogo.",
              },
              {
                id: "b",
                text: 'Pergunta: "Pode me dar um exemplo concreto de como isso funcionaria na prática?"',
                points: 100,
                type: "correct",
                feedback:
                  "Pedir exemplos te força a entender mais profundamente antes de discordar. Muitas vezes o desacordo some quando há exemplos concretos.",
              },
              {
                id: "c",
                text: "Fica quieto mas resolve internamente ignorar o argumento.",
                points: 0,
                type: "wrong",
                feedback:
                  "Escuta seletiva — ouvir apenas o que confirma sua visão — é o oposto da escuta ativa.",
              },
            ],
          },
          {
            id: "2-2-q3",
            type: "choice",
            tag: "🔁 Feedback Difícil",
            question:
              "Seu gestor te dá um feedback com o qual você discorda profundamente. Como você reage?",
            choices: [
              {
                id: "a",
                text: "Defende sua posição imediatamente com todos os argumentos que você tem.",
                points: 25,
                type: "partial",
                feedback:
                  "Defender-se antes de ouvir completamente pode fazer você parecer defensivo e perder informações valiosas.",
              },
              {
                id: "b",
                text: "Aceita em silêncio mas internamente decide ignorar.",
                points: 0,
                type: "wrong",
                feedback:
                  "Pseudoconcordância não resolve nada. Você sai sem aprender e sem resolver.",
              },
              {
                id: "c",
                text: "Ouve completamente, agradece, e pede uma reunião posterior para entender melhor os pontos e compartilhar sua perspectiva.",
                points: 100,
                type: "correct",
                feedback:
                  "Escuta antes de rebater. Você pode discordar depois — mas ouvir primeiro qualifica sua discordância.",
              },
            ],
          },
        ],
      },
      {
        id: "2-3",
        title: "Perguntas que Aprofundam",
        description:
          "As perguntas certas revelam o que as palavras não dizem. Aprenda a usar perguntas como ferramenta de escuta.",
        items: [
          {
            id: "2-3-tip",
            type: "tip",
            icon: "❓",
            title: "Perguntas abertas vs fechadas",
            content:
              'Perguntas FECHADAS encerram: "Você ficou bravo?", "Tudo bem?"\n→ Geram respostas de sim/não\n→ Encerram a conversa\n\nPerguntas ABERTAS constroem pontes: "Como você se sentiu?", "O que está pesando mais para você?"\n→ Convidam o outro a se aprofundar\n→ Mostram interesse genuíno\n\n🔑 Regra: quando quiser entender mais, troque "Você" por "Como", "O que", "Me conta".',
          },
          {
            id: "2-3-q1",
            type: "choice",
            tag: "💭 Aprofundamento",
            question:
              'Um colega diz: "Estou insatisfeito com a direção do projeto." Como você aprofunda a escuta?',
            choices: [
              {
                id: "a",
                text: '"Você está querendo sair do projeto?"',
                points: 0,
                type: "wrong",
                feedback:
                  "Pergunta fechada que pressupõe a conclusão mais extrema. Pode criar defensividade antes de entender o problema real.",
              },
              {
                id: "b",
                text: '"O que especificamente está te incomodando?"',
                points: 100,
                type: "correct",
                feedback:
                  "Pergunta aberta que convida ao aprofundamento sem presumir. Você vai entender o problema real, não a sua interpretação dele.",
              },
              {
                id: "c",
                text: '"Todo mundo às vezes fica insatisfeito — isso passa."',
                points: 0,
                type: "wrong",
                feedback:
                  "Minimizar sentimentos fecha a conversa e invalida a experiência do outro.",
              },
            ],
          },
          {
            id: "2-3-q2",
            type: "choice",
            tag: "🧩 Entender o Real Problema",
            question:
              'Um membro da sua equipe está com baixa produtividade. Ele diz "estou cansado". Como você investiga?',
            choices: [
              {
                id: "a",
                text: '"Você está doente?"',
                points: 25,
                type: "partial",
                feedback:
                  "Possível ângulo, mas muito estreito. Pode haver muitos outros fatores por trás do cansaço.",
              },
              {
                id: "b",
                text: '"Me conta mais — o que está pesando mais para você ultimamente?"',
                points: 100,
                type: "correct",
                feedback:
                  "Pergunta aberta e sem julgamento que cria espaço para o real problema emergir. Essa é a escuta que transforma.",
              },
              {
                id: "c",
                text: '"Você precisa se organizar melhor."',
                points: 0,
                type: "wrong",
                feedback:
                  "Dar conselho antes de entender o problema real é comunicação invasiva — e frequentemente errada.",
              },
            ],
          },
          {
            id: "2-3-q3",
            type: "choice",
            tag: "🤝 Resolução de Conflito",
            question:
              "Você está mediando um conflito entre dois colegas. Qual pergunta você faz para cada um separadamente?",
            choices: [
              {
                id: "a",
                text: '"O fulano disse que você foi grosseiro — é verdade?"',
                points: 0,
                type: "wrong",
                feedback:
                  "Apresentar o relato do outro como verdade viola a presunção de inocência e já cria um julgamento antes de ouvir.",
              },
              {
                id: "b",
                text: '"Me conta o que aconteceu do seu ponto de vista."',
                points: 100,
                type: "correct",
                feedback:
                  "Convite aberto e sem julgamento. Essa pergunta permite que cada pessoa se sinta ouvida sem se sentir acusada.",
              },
              {
                id: "c",
                text: '"Por que você reagiu assim com ele?"',
                points: 25,
                type: "partial",
                feedback:
                  'O "por quê" pode soar acusatório. Prefira "O que" ou "Como": "Como você se sentiu naquele momento?"',
              },
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════
  // TÓPICO 3 — Postura Assertiva
  // ══════════════════════════════════════════
  {
    id: 3,
    number: 3,
    icon: "💪",
    title: "Postura Assertiva",
    description:
      "Ser assertivo é manter sua autenticidade com respeito — nem passivo, nem agressivo.",
    subPhases: [
      {
        id: "3-1",
        title: "Fundamentos",
        description:
          "Entenda o que diferencia assertividade de agressividade e de passividade.",
        items: [
          {
            id: "3-1-tip",
            type: "tip",
            icon: "⚖️",
            title: "O triângulo da comunicação",
            content:
              "Existem 3 estilos de comunicação:\n\n😶 PASSIVO: evita expressar o que pensa, cede sempre\n→ Resultado: ressentimento acumulado\n\n😤 AGRESSIVO: expressa o que pensa sem considerar o outro\n→ Resultado: relações danificadas\n\n✅ ASSERTIVO: expressa o que pensa com respeito pelo outro\n→ Resultado: relações saudáveis e resultados reais\n\nA maioria das pessoas alterna entre passivo e agressivo. O assertivo é o ponto de equilíbrio que exige prática.",
          },
          {
            id: "3-1-q1",
            type: "choice",
            tag: "🙅 Dizer Não",
            question:
              "Um amigo te pede um favor que vai contra seus valores pessoais. Você não quer fazer. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Aceita para não decepcionar e depois se arrepende.",
                points: 0,
                type: "wrong",
                feedback:
                  "Aceitar contra seus valores por não conseguir dizer não cria ressentimento e prejudica a amizade a longo prazo.",
              },
              {
                id: "b",
                text: "Inventa uma desculpa para não ter que explicar o motivo real.",
                points: 25,
                type: "partial",
                feedback:
                  "Resolve no curto prazo, mas desculpas falsas criam distância e se acumulam como desonesidade.",
              },
              {
                id: "c",
                text: '"Não consigo fazer isso — não está alinhado com o que acredito. Mas se precisar de ajuda com outra coisa, pode contar comigo."',
                points: 100,
                type: "correct",
                feedback:
                  "Recusou com honestidade, manteve seus valores e preservou a amizade com uma alternativa. Assertividade real.",
              },
            ],
          },
          {
            id: "3-1-q2",
            type: "choice",
            tag: "🗣️ Expressar Opinião",
            question:
              "Numa reunião de brainstorming, você tem uma ideia diferente de todo mundo mas teme que vão julgar. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Guarda a ideia para si — provavelmente não é boa o suficiente.",
                points: 0,
                type: "wrong",
                feedback:
                  "Autocensura por medo de julgamento é passividade. Você priva o grupo de uma perspectiva potencialmente valiosa.",
              },
              {
                id: "b",
                text: 'Apresenta a ideia com excesso de qualificadores: "Talvez não faça sentido, mas..."',
                points: 25,
                type: "partial",
                feedback:
                  "Comunicar com excesso de qualificadores enfraquece a ideia antes de apresentá-la e sinaliza insegurança.",
              },
              {
                id: "c",
                text: 'Apresenta a ideia diretamente: "Tenho uma perspectiva diferente — posso compartilhar?"',
                points: 100,
                type: "correct",
                feedback:
                  "Pedir espaço antes de apresentar é assertivo. Você contribui sem impor e sem se diminuir.",
              },
            ],
          },
          {
            id: "3-1-q3",
            type: "choice",
            tag: "💬 Concordância Falsa",
            question:
              "Numa discussão em grupo, todo mundo parece concordar com uma decisão que você acha problemática. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Concorda também para não ser o único discordante.",
                points: 0,
                type: "wrong",
                feedback:
                  "Concordância por pressão de grupo (groupthink) é o que enfraquece decisões coletivas. Sua perspectiva tem valor.",
              },
              {
                id: "b",
                text: '"Tenho uma perspectiva diferente — posso compartilhar antes de fecharmos?"',
                points: 100,
                type: "correct",
                feedback:
                  "Você não deixou o consenso silenciar uma perspectiva relevante. Isso é assertividade a serviço do grupo.",
              },
              {
                id: "c",
                text: "Fica quieto mas depois reclama da decisão para outros.",
                points: 0,
                type: "wrong",
                feedback:
                  "Silêncio no momento + reclamação depois é a pior combinação. Você não contribuiu e ainda cria mal-estar.",
              },
            ],
          },
        ],
      },
      {
        id: "3-2",
        title: "Sob Pressão Social",
        description:
          "A pressão do grupo é um dos maiores desafios para a postura assertiva. Aqui você treina resistência.",
        items: [
          {
            id: "3-2-tip",
            type: "tip",
            icon: "🧲",
            title: "Como a pressão social funciona no cérebro",
            content:
              'A pressão social ativa o instinto de conformidade — é neurológico, não fraqueza.\n\nO cérebro interpreta discordância do grupo como ameaça à sobrevivência (herança evolutiva).\n\nSaber disso ajuda:\n\n✅ Reconheça: "Estou sentindo pressão para concordar"\n✅ Pause antes de responder\n✅ Pergunte: "Estou cedendo por argumentos ou por pressão?"\n\nMudar de ideia por argumentos = crescimento\nCeder por pressão = erosão da sua autenticidade',
          },
          {
            id: "3-2-q1",
            type: "choice",
            tag: "👥 Pressão do Grupo",
            question:
              "Você expressou uma posição numa reunião. Colegas começam a pressionar para você mudar — sem novos argumentos, só pressão social. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Recua para preservar o relacionamento com o grupo.",
                points: 0,
                type: "wrong",
                feedback:
                  "Ceder à pressão social sem novos argumentos ensina ao grupo que pressionar funciona com você.",
              },
              {
                id: "b",
                text: "Mantém a posição em silêncio e para de responder ao grupo.",
                points: 25,
                type: "partial",
                feedback:
                  "Manter a posição é certo, mas o silêncio pode parecer arrogância ou recusa ao diálogo.",
              },
              {
                id: "c",
                text: '"Estou aberto a mudar de ideia por argumentos. Me mostrem onde meu raciocínio está errado."',
                points: 100,
                type: "correct",
                feedback:
                  "Firme, aberto e devolveu a responsabilidade a quem pressiona. Assertividade exemplar.",
              },
            ],
          },
          {
            id: "3-2-q2",
            type: "choice",
            tag: "🏛️ Autoridade que Pressiona",
            question:
              "Uma pessoa de autoridade (gestor, líder sênior) está claramente esperando que você concorde com uma posição que você sabe que está errada. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Concorda para não criar atrito com quem tem mais poder.",
                points: 0,
                type: "wrong",
                feedback:
                  "Concordar com o que você sabe estar errado por medo de quem tem poder compromete sua integridade e pode prejudicar o resultado.",
              },
              {
                id: "b",
                text: "Discorda abertamente na frente de todos, sem se importar com o contexto.",
                points: 25,
                type: "partial",
                feedback:
                  "Coragem certa, mas contexto importa. Timing e espaço podem ser ajustados sem abrir mão do conteúdo.",
              },
              {
                id: "c",
                text: "Pede uma conversa privada para compartilhar sua perspectiva com dados concretos e tom respeitoso.",
                points: 100,
                type: "correct",
                feedback:
                  "Assertividade ascendente. Você não silenciou nem confrontou publicamente — escolheu o espaço mais eficaz.",
              },
            ],
          },
          {
            id: "3-2-q3",
            type: "choice",
            tag: "🔄 Reversão por Desconforto",
            question:
              "Você tomou uma decisão. Após desconforto geral — mas sem novos argumentos — está considerando reverter. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Reverte a decisão para recuperar o clima.",
                points: 0,
                type: "wrong",
                feedback:
                  "Reverter por pressão emocional, sem novos argumentos, mina sua credibilidade. O grupo aprende que pressão funciona.",
              },
              {
                id: "b",
                text: "Mantém a decisão sem qualquer diálogo — você decidiu e pronto.",
                points: 25,
                type: "partial",
                feedback:
                  "Firmeza certa, mas sem diálogo o desconforto permanece e a relação se deteriora.",
              },
              {
                id: "c",
                text: "Reúne as pessoas, explica o raciocínio novamente e diz que está aberto a mudar por argumentos — não por pressão.",
                points: 100,
                type: "correct",
                feedback:
                  "Transparente, firme e justo. Você deu ao grupo a oportunidade real de influenciar — por razões, não por clima.",
              },
            ],
          },
        ],
      },
      {
        id: "3-3",
        title: "Assertividade em Hierarquias",
        description:
          "Ser assertivo com autoridades exige mais habilidade — e é ainda mais importante.",
        items: [
          {
            id: "3-3-tip",
            type: "tip",
            icon: "📊",
            title: "A fórmula da assertividade ascendente",
            content:
              'Quando precisar discordar ou pressionar alguém com mais poder do que você, use esta estrutura:\n\n1️⃣ DADOS — "Os números mostram que..."\n2️⃣ IMPACTO — "O resultado disso é..."\n3️⃣ PROPOSTA — "Minha sugestão seria..."\n4️⃣ ABERTURA — "O que você acha?"\n\nEssa fórmula mantém o foco no problema, não na pessoa — e deixa claro que você está contribuindo, não atacando.',
          },
          {
            id: "3-3-q1",
            type: "choice",
            tag: "💼 Crédito Não Dado",
            question:
              "Numa reunião, seu gestor apresentou sua ideia como se fosse dele. Era sua, desenvolvida por você nas últimas semanas. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Não faz nada para não parecer egocêntrico.",
                points: 25,
                type: "partial",
                feedback:
                  "Parece maduro, mas é passividade que prejudica sua carreira. Se você não nomeia, ninguém nomeará por você.",
              },
              {
                id: "b",
                text: "Interrompe e diz para todos que a ideia foi sua.",
                points: 25,
                type: "partial",
                feedback:
                  "A intenção é legítima, mas o confronto público pode criar mais problemas do que a situação original.",
              },
              {
                id: "c",
                text: 'Ao fim da reunião, pede conversa particular: "Quero conversar sobre como atribuímos crédito — isso é importante para mim."',
                points: 100,
                type: "correct",
                feedback:
                  "Espaço certo, tom direto, intenção clara. Sem episódio público, sem silenciar.",
              },
            ],
          },
          {
            id: "3-3-q2",
            type: "choice",
            tag: "🚫 Pedido Antiético",
            question:
              "Seu gestor te pede para fazer algo que você considera antiético ou contrário às políticas da empresa. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Executa sem questionar — ele tem mais experiência e é seu superior.",
                points: 0,
                type: "wrong",
                feedback:
                  "Hierarquia não justifica cumplicidade em comportamentos antiéticos. Você também tem responsabilidade pelo resultado.",
              },
              {
                id: "b",
                text: "Recusa diretamente e vai ao RH imediatamente.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser necessário em casos extremos, mas escalar antes de uma conversa direta frequentemente escala o problema desnecessariamente.",
              },
              {
                id: "c",
                text: "Pede uma conversa privada para entender o pedido e comunicar seu desconforto com dados e alternativas.",
                points: 100,
                type: "correct",
                feedback:
                  "Tentativa de resolução direta primeiro. Você protege sua integridade e dá a chance de resolver sem conflito maior.",
              },
            ],
          },
          {
            id: "3-3-q3",
            type: "choice",
            tag: "📈 Discordando da Estratégia",
            question:
              "Você discorda de uma estratégia da empresa que já foi decidida pela liderança. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Expressa sua discordância publicamente para que fique registrado que você não apoiava.",
                points: 0,
                type: "wrong",
                feedback:
                  "Resistência pública depois da decisão tomada compromete o time e sua credibilidade como membro.",
              },
              {
                id: "b",
                text: "Aceita em silêncio e executa sem qualidade — afinal, não foi sua ideia.",
                points: 0,
                type: "wrong",
                feedback:
                  "Executar mal para provar que estava certo é uma forma de sabotagem. Prejudica o time e a você mesmo.",
              },
              {
                id: "c",
                text: "Registra formalmente sua discordância com os gestores e depois executa com comprometimento total.",
                points: 100,
                type: "correct",
                feedback:
                  '"Disagree and commit" — o princípio mais maduro de liderança. Honesto, ouvido, e depois deu o seu melhor.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════
  // TÓPICO 4 — Gestão de Limites
  // ══════════════════════════════════════════
  {
    id: 4,
    number: 4,
    icon: "🛡️",
    title: "Gestão de Limites",
    description:
      "Limites saudáveis protegem tanto você quanto o outro. Comunicá-los é um ato de respeito.",
    subPhases: [
      {
        id: "4-1",
        title: "Identificar Limites",
        description:
          "Antes de comunicar um limite, você precisa saber onde ele está.",
        items: [
          {
            id: "4-1-tip",
            type: "tip",
            icon: "🔍",
            title: "Como identificar seus limites",
            content:
              "Limites existem em 4 áreas:\n\n⏰ TEMPO — o que você não pode comprometer\n💪 ENERGIA — o que te esgota além do razoável\n🧠 VALORES — o que vai contra o que você acredita\n🤝 RELACIONAMENTOS — o que é inaceitável em como você é tratado\n\nSinal de que um limite foi ultrapassado: você sente ressentimento. Ressentimento é o preço que você paga por não ter comunicado um limite a tempo.",
          },
          {
            id: "4-1-q1",
            type: "choice",
            tag: "⏰ Limite de Tempo",
            question:
              "Você percebe que está constantemente trabalhando depois do horário por pedidos de última hora que poderiam ter sido planejados. O que isso indica?",
            choices: [
              {
                id: "a",
                text: "Que você é comprometido e vai além do básico.",
                points: 0,
                type: "wrong",
                feedback:
                  "Comprometimento é válido, mas trabalhar sistematicamente além do horário por falta de planejamento alheio não é dedicação — é falta de limite.",
              },
              {
                id: "b",
                text: "Que você não está sendo assertivo sobre sua disponibilidade e a situação se perpetua.",
                points: 100,
                type: "correct",
                feedback:
                  "Exato. A situação se perpetua porque não foi comunicada. Limites não comunicados não existem para quem ultrapassa.",
              },
              {
                id: "c",
                text: "Que você precisa trabalhar mais rápido para terminar no horário.",
                points: 0,
                type: "wrong",
                feedback:
                  "Trabalhar mais rápido não resolve o problema estrutural — apenas te exaure mais rapidamente.",
              },
            ],
          },
          {
            id: "4-1-q2",
            type: "choice",
            tag: "🔋 Limite de Energia",
            question:
              "Um colega costuma te procurar para desabafar extensamente sobre problemas pessoais, muitas vezes durante o trabalho. Você está se sentindo esgotado. O que isso indica?",
            choices: [
              {
                id: "a",
                text: "Que você precisa se tornar mais resiliente e suportar melhor.",
                points: 0,
                type: "wrong",
                feedback:
                  "Resiliência não significa absorver ilimitadamente os problemas dos outros. Isso é um limite de energia sendo ultrapassado.",
              },
              {
                id: "b",
                text: "Que você está com um limite de energia sendo ultrapassado e precisa comunicar isso.",
                points: 100,
                type: "correct",
                feedback:
                  "Reconhecer o esgotamento como sinal de limite ultrapassado é o primeiro passo. O próximo é comunicar.",
              },
              {
                id: "c",
                text: "Que você não é uma pessoa empática o suficiente.",
                points: 0,
                type: "wrong",
                feedback:
                  "Empatia tem limites saudáveis. Sentir esgotamento não é falta de empatia — é sinal de que a dinâmica não está equilibrada.",
              },
            ],
          },
          {
            id: "4-1-q3",
            type: "choice",
            tag: "💎 Limite de Valores",
            question:
              "Você percebe que em reuniões, quando discorda, simplesmente fica quieto para evitar qualquer atrito. Com o tempo, isso está te incomodando cada vez mais. O que está acontecendo?",
            choices: [
              {
                id: "a",
                text: "Você está sendo sábio ao escolher suas batalhas.",
                points: 25,
                type: "partial",
                feedback:
                  "Escolher batalhas é uma habilidade, mas silenciar sistematicamente seus pontos de vista não é sabedoria — é erosão de autenticidade.",
              },
              {
                id: "b",
                text: "Um limite de valores está sendo ultrapassado — você está comprometendo sua autenticidade.",
                points: 100,
                type: "correct",
                feedback:
                  "Exato. O incômodo crescente é o sinal de que algo importante está sendo suprimido. Limites de valores são os mais difíceis de identificar.",
              },
              {
                id: "c",
                text: "Você é introvertido e isso é normal para seu perfil.",
                points: 0,
                type: "wrong",
                feedback:
                  "Introversão é um estilo de processamento, não uma justificativa para nunca expressar discordâncias relevantes.",
              },
            ],
          },
        ],
      },
      {
        id: "4-2",
        title: "Comunicar Limites",
        description:
          "Saber onde está o limite é o começo. Comunicá-lo de forma assertiva é a habilidade real.",
        items: [
          {
            id: "4-2-tip",
            type: "tip",
            icon: "📢",
            title: "A fórmula para comunicar limites",
            content:
              'Use esta estrutura para comunicar limites sem atacar e sem se diminuir:\n\n1️⃣ OBSERVAÇÃO (sem julgamento): "Quando [situação específica acontece]..."\n2️⃣ IMPACTO (em você): "...eu me sinto [impacto real]..."\n3️⃣ PEDIDO ESPECÍFICO: "...e preciso que [pedido concreto]."\n\nExemplo: "Quando recebo mensagens de trabalho após as 21h, fico com dificuldade de descansar. Preciso que mensagens urgentes sejam enviadas até as 20h."\n\nEspecificidade é essencial — limites vagos não funcionam.',
          },
          {
            id: "4-2-q1",
            type: "choice",
            tag: "📱 Mensagens Fora do Horário",
            question:
              "Seu gestor manda mensagens de trabalho às 22h esperando respostas imediatas. Isso está impactando seu descanso. Como você comunica esse limite?",
            choices: [
              {
                id: "a",
                text: "Responde sempre para mostrar comprometimento e espera ele parar sozinho.",
                points: 0,
                type: "wrong",
                feedback:
                  "Responder sempre valida a expectativa e garante que o comportamento continue.",
              },
              {
                id: "b",
                text: '"Quero dar 100% no trabalho. Para isso, preciso descansar à noite. Posso responder mensagens noturnas no próximo dia útil?"',
                points: 100,
                type: "correct",
                feedback:
                  "Você conectou seu limite ao desempenho profissional e ofereceu uma solução concreta. Isso é comunicar limite de forma assertiva.",
              },
              {
                id: "c",
                text: "Ignora as mensagens sem comentar nada.",
                points: 25,
                type: "partial",
                feedback:
                  "Melhor do que responder sempre, mas a falta de comunicação deixa expectativas no ar e pode ser interpretada como desorganização.",
              },
            ],
          },
          {
            id: "4-2-q2",
            type: "choice",
            tag: "🤝 Favores em Excesso",
            question:
              "Um colega volta constantemente pedindo favores que consomem seu tempo de trabalho. Como você comunica o limite?",
            choices: [
              {
                id: "a",
                text: "Para de responder as mensagens dele gradualmente.",
                points: 25,
                type: "partial",
                feedback:
                  "Evita o confronto, mas o colega fica sem entender o que aconteceu e o padrão pode voltar.",
              },
              {
                id: "b",
                text: '"Fico feliz em ajudar eventualmente, mas percebi que isso está virando rotina. Preciso focar nas minhas entregas."',
                points: 100,
                type: "correct",
                feedback:
                  "Honesto, gentil e claro. Você estabeleceu o limite sem romper o relacionamento.",
              },
              {
                id: "c",
                text: "Continua ajudando mas reclamando para outros colegas.",
                points: 0,
                type: "wrong",
                feedback:
                  "Ajudar e reclamar é incoerência que só aumenta o ressentimento. A triangulação não resolve.",
              },
            ],
          },
          {
            id: "4-2-q3",
            type: "choice",
            tag: "💰 Remuneração Justa",
            question:
              "Você soube que um colega com menos experiência ganha mais do que você. Você quer conversar sobre remuneração com seu gestor. Como você aborda?",
            choices: [
              {
                id: "a",
                text: "Não faz nada — falar sobre salário é constrangedor.",
                points: 0,
                type: "wrong",
                feedback:
                  "Evitar essa conversa por medo de julgamento te prejudica financeiramente. É seu direito ser remunerado justamente.",
              },
              {
                id: "b",
                text: "Confronta o gestor dizendo que soube do salário do colega e isso é injusto.",
                points: 25,
                type: "partial",
                feedback:
                  "A pauta é legítima, mas revelar que você sabe o salário de colegas pode criar constrangimentos desnecessários.",
              },
              {
                id: "c",
                text: "Pede uma reunião apresentando suas contribuições e uma referência de mercado, sem mencionar o colega.",
                points: 100,
                type: "correct",
                feedback:
                  "Abordagem profissional e preparada. Você coloca a conversa em termos objetivos, não emocionais ou comparativos.",
              },
            ],
          },
        ],
      },
      {
        id: "4-3",
        title: "Manter Limites",
        description:
          "Comunicar um limite uma vez não é suficiente. A consistência é o que torna limites reais.",
        items: [
          {
            id: "4-3-tip",
            type: "tip",
            icon: "🔄",
            title: "Por que limites precisam ser repetidos",
            content:
              'Quando você comunica um limite e a pessoa ultrapassa de novo, não é desonestidade — é hábito sendo testado.\n\nA resposta assertiva para limite ultrapassado:\n\n🔁 Repita o limite com calma (não mais emoção)\n📌 Seja específico sobre o que aconteceu\n⚡ Mencione a consequência se continuar\n\n"Já comentei que [limite]. Aconteceu de novo hoje. Se isso continuar, precisarei [consequência]."\n\nRepetir um limite não é rigidez — é consistência. Sem consequências, limites são apenas sugestões.',
          },
          {
            id: "4-3-q1",
            type: "choice",
            tag: "🔁 Limite Repetido",
            question:
              "Você já comunicou um limite de horário para um colega. Ele voltou a ultrapassar. Como você reage?",
            choices: [
              {
                id: "a",
                text: "Ignora — você já falou uma vez e não vai ficar repetindo.",
                points: 0,
                type: "wrong",
                feedback:
                  "Não reforçar o limite após a segunda ultrapassagem sinaliza que o limite não é real.",
              },
              {
                id: "b",
                text: "Repete o limite com calma e menciona que se continuar, precisará de uma solução diferente.",
                points: 100,
                type: "correct",
                feedback:
                  "Consistência sem escalamento emocional. Você reforçou o limite e introduziu a consequência sem criar conflito.",
              },
              {
                id: "c",
                text: "Responde com irritação — você falou uma vez e ele não respeitou.",
                points: 25,
                type: "partial",
                feedback:
                  "A frustração é legítima, mas responder com irritação muda o foco do limite para a emoção.",
              },
            ],
          },
          {
            id: "4-3-q2",
            type: "choice",
            tag: "🎭 Papel Ultrapassado",
            question:
              "Você foi designado para uma tarefa e seu colega continua tomando decisões que são da sua responsabilidade. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Deixa ele decidir — menos trabalho para você.",
                points: 0,
                type: "wrong",
                feedback:
                  "Abrir mão de responsabilidades sem comunicar cria confusão de papéis e pode prejudicar o resultado.",
              },
              {
                id: "b",
                text: 'Conversa diretamente: "Percebo que está tomando decisões da minha área. Quero entender como dividimos isso."',
                points: 100,
                type: "correct",
                feedback:
                  "Nomeou o padrão sem atacar, abriu diálogo e propôs alinhamento. Isso é manter limite de papel profissional.",
              },
              {
                id: "c",
                text: "Reclama para o gestor sem falar com o colega.",
                points: 25,
                type: "partial",
                feedback:
                  "Escalar sem tentar resolver diretamente é triangulação. Tente o diálogo direto primeiro.",
              },
            ],
          },
          {
            id: "4-3-q3",
            type: "choice",
            tag: "⚡ Consequência Real",
            question:
              "Você comunicou um limite duas vezes para um fornecedor e ele voltou a descumprir. Qual é o próximo passo?",
            choices: [
              {
                id: "a",
                text: "Comunica o limite pela terceira vez, esperando que dessa vez funcione.",
                points: 0,
                type: "wrong",
                feedback:
                  "Comunicar o mesmo limite sem consequência três vezes sinaliza que o limite não tem peso.",
              },
              {
                id: "b",
                text: "Executa a consequência que você mencionou anteriormente e comunica o que acontecerá daqui para frente.",
                points: 100,
                type: "correct",
                feedback:
                  "Limites sem consequências são sugestões. Executar a consequência é o que torna os limites reais.",
              },
              {
                id: "c",
                text: "Aceita — com fornecedores você não tem muito poder.",
                points: 0,
                type: "wrong",
                feedback:
                  "Você sempre tem o poder de redefinir os termos de um relacionamento comercial. Aceitar silenciosamente valida o comportamento.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════
  // TÓPICO 5 — Conflitos Interpessoais
  // ══════════════════════════════════════════
  {
    id: 5,
    number: 5,
    icon: "⚔️",
    title: "Conflitos Interpessoais",
    description:
      "Conflito bem gerido fortalece relações. O que você evita hoje, você paga com juros amanhã.",
    subPhases: [
      {
        id: "5-1",
        title: "Entender o Conflito",
        description:
          "Todo conflito tem uma raiz. Identificá-la é o primeiro passo para resolvê-lo.",
        items: [
          {
            id: "5-1-tip",
            type: "tip",
            icon: "🌱",
            title: "A raiz de todo conflito",
            content:
              "Conflitos raramente são sobre o que parecem ser.\n\nDebaixo de toda discussão sobre prazos, decisões ou comportamentos, geralmente há uma necessidade não atendida:\n\n🤝 Necessidade de reconhecimento\n🔒 Necessidade de segurança\n🧠 Necessidade de autonomia\n💬 Necessidade de ser ouvido\n\nQuando você identifica a necessidade real, a solução costuma ser muito mais simples do que o conflito aparente.",
          },
          {
            id: "5-1-q1",
            type: "choice",
            tag: "🔎 Diagnóstico",
            question:
              "Dois colegas estão em conflito constante sobre pequenos detalhes de um projeto. Superficialmente, discutem sobre formatação e prazos. O que provavelmente está acontecendo de verdade?",
            choices: [
              {
                id: "a",
                text: "Eles são simplesmente incompatíveis e nunca vão se entender.",
                points: 0,
                type: "wrong",
                feedback:
                  "Incompatibilidade raramente é inata. Geralmente é falta de entendimento mútuo ou necessidades não atendidas.",
              },
              {
                id: "b",
                text: "Provavelmente um ou ambos têm uma necessidade não atendida — reconhecimento, autonomia ou segurança.",
                points: 100,
                type: "correct",
                feedback:
                  "Exato. Conflitos de superfície quase sempre têm raízes mais profundas. Identificar a necessidade real é o caminho.",
              },
              {
                id: "c",
                text: "Um deles está claramente errado e precisa ser corrigido.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode haver um que comete mais erros, mas tratar conflito como questão de certo/errado raramente resolve — gera mais resistência.",
              },
            ],
          },
          {
            id: "5-1-q2",
            type: "choice",
            tag: "😶 Silêncio Hostil",
            question:
              "Após uma divergência, um colega passou a te responder com monossílabos e te evita claramente. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Também passa a evitá-lo — se ele não quer falar, você também não precisa.",
                points: 0,
                type: "wrong",
                feedback:
                  "Espelhar o comportamento hostil escala o afastamento e o problema fica sem solução.",
              },
              {
                id: "b",
                text: 'Busca uma conversa direta: "Percebi uma mudança entre nós depois daquele dia. Gostaria de resolver se pudermos."',
                points: 100,
                type: "correct",
                feedback:
                  "Nomear o elefante na sala com abertura para diálogo é a forma mais assertiva de resolver tensões relacionais.",
              },
              {
                id: "c",
                text: "Espera que o tempo resolva — as coisas tendem a se normalizar.",
                points: 25,
                type: "partial",
                feedback:
                  "Às vezes o tempo ajuda, mas conflitos não resolvidos tendem a ressurgir em momentos piores.",
              },
            ],
          },
          {
            id: "5-1-q3",
            type: "choice",
            tag: "⚖️ Conflito de Visões",
            question:
              "Você e um colega têm visões completamente diferentes sobre como um projeto deve ser conduzido. A situação está travada. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Insiste na sua abordagem até ele ceder.",
                points: 0,
                type: "wrong",
                feedback:
                  "Insistência sem diálogo é disputa de poder, não resolução de conflito.",
              },
              {
                id: "b",
                text: "Propõe uma reunião estruturada onde cada um apresenta sua visão com critérios objetivos.",
                points: 100,
                type: "correct",
                feedback:
                  "Trazer critérios objetivos para o debate retira o ego e coloca o foco no que realmente importa: o melhor resultado.",
              },
              {
                id: "c",
                text: "Cede para evitar mais conflito.",
                points: 25,
                type: "partial",
                feedback:
                  "Ceder pode ser necessário às vezes, mas sistematicamente ceder gera ressentimento e piora a próxima situação.",
              },
            ],
          },
        ],
      },
      {
        id: "5-2",
        title: "Mediar Conflitos",
        description:
          "Quando você precisa ajudar outros a resolver conflitos, a habilidade de mediação é fundamental.",
        items: [
          {
            id: "5-2-tip",
            type: "tip",
            icon: "🧭",
            title: "Os 4 passos da mediação",
            content:
              "Quando mediar um conflito entre outros:\n\n1️⃣ OUÇA CADA PARTE SEPARADA — nunca em conjunto logo de início\n2️⃣ IDENTIFIQUE a necessidade real de cada um\n3️⃣ ENCONTRE O TERRENO COMUM — o que ambos querem?\n4️⃣ FACILITE O DIÁLOGO — com as partes juntas, foco no futuro\n\n⚠️ Armadilha: tomar partido de uma das partes. O mediador que escolhe lados perde a credibilidade de ambos.",
          },
          {
            id: "5-2-q1",
            type: "choice",
            tag: "⚖️ Mediação",
            question:
              "Um membro da sua equipe vem te relatar um conflito com um colega e pede que você tome uma atitude. O que você faz primeiro?",
            choices: [
              {
                id: "a",
                text: "Chama o outro membro e apresenta o que o primeiro te contou.",
                points: 0,
                type: "wrong",
                feedback:
                  "Isso viola confidencialidade e já posiciona o segundo como réu antes de ser ouvido.",
              },
              {
                id: "b",
                text: "Diz que não interfere em conflitos pessoais entre membros.",
                points: 25,
                type: "partial",
                feedback:
                  "Negar o papel de liderança é irresponsabilidade disfarçada de neutralidade.",
              },
              {
                id: "c",
                text: "Ouve em confidência e diz que vai conversar com o outro membro separadamente antes de qualquer ação.",
                points: 100,
                type: "correct",
                feedback:
                  "Ouvir os dois lados separadamente, preservando a confidência de cada um, é o ponto de partida de uma mediação justa.",
              },
            ],
          },
          {
            id: "5-2-q2",
            type: "choice",
            tag: "🔥 Reunião Acalorada",
            question:
              "Numa reunião, a discussão esquenta e alguém começa a elevar a voz. Como você age?",
            choices: [
              {
                id: "a",
                text: "Eleva a voz também para se fazer ouvir.",
                points: 0,
                type: "wrong",
                feedback:
                  "Voz com voz cria caos. Quem mantém a calma tem muito mais poder de influência nesse momento.",
              },
              {
                id: "b",
                text: "Fica em silêncio, esperando passar.",
                points: 25,
                type: "partial",
                feedback:
                  "O silêncio pode evitar escalamento, mas uma intervenção calma seria muito mais eficaz.",
              },
              {
                id: "c",
                text: '"Vamos pausar um momento. Todos queremos chegar a uma boa solução — podemos continuar com mais calma?"',
                points: 100,
                type: "correct",
                feedback:
                  "Desescalou a tensão, reafirmou o objetivo comum e propôs mudança de postura. Liderança comunicacional.",
              },
            ],
          },
          {
            id: "5-2-q3",
            type: "choice",
            tag: "🤝 Reconciliação",
            question:
              "Você mediou um conflito entre dois colegas. Eles chegaram a um acordo, mas dois dias depois estão em conflito de novo sobre o mesmo ponto. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Intervém novamente exatamente da mesma forma.",
                points: 25,
                type: "partial",
                feedback:
                  "A mesma mediação para o mesmo problema indica que a solução não foi a causa raiz. Algo precisa ser diferente.",
              },
              {
                id: "b",
                text: "Diz que não vai mais mediar — eles precisam resolver sozinhos.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser necessário em algum momento, mas desistir após a segunda tentativa sem entender a causa raiz é abandonar o problema.",
              },
              {
                id: "c",
                text: "Investiga o que aconteceu, entende por que o acordo não se sustentou e trabalha na causa raiz do conflito.",
                points: 100,
                type: "correct",
                feedback:
                  "Conflito recorrente indica causa raiz não resolvida. Investigar o padrão é o caminho para uma solução real.",
              },
            ],
          },
        ],
      },
      {
        id: "5-3",
        title: "Conflitos Complexos",
        description:
          "Alguns conflitos têm mais camadas. Aqui você enfrenta os cenários mais desafiadores.",
        items: [
          {
            id: "5-3-tip",
            type: "tip",
            icon: "🧩",
            title: "Quando conflitos são sobre poder",
            content:
              'Alguns conflitos não são sobre o problema aparente — são sobre poder e reconhecimento.\n\nSinais de que é um conflito de poder:\n• A pessoa não aceita nenhuma solução proposta\n• Cada resolução cria um novo problema\n• O comportamento piora quando você ganha mais visibilidade\n\nEstrategia assertiva: nomeie o padrão, não o episódio.\n\n"Percebo que temos tido dificuldades frequentes. Quero entender o que está por baixo disso."',
          },
          {
            id: "5-3-q1",
            type: "choice",
            tag: "🕵️ Sabotagem Sutil",
            question:
              "Você percebe que um colega sênior está sistematicamente dificultando seu trabalho — com comentários, atrasos e omissões deliberadas. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Documenta os comportamentos e aguarda mais evidências antes de agir.",
                points: 25,
                type: "partial",
                feedback:
                  "Prudência tem valor, mas cada dia que você espera o dano continua. Há um ponto em que esperar mais evidências é omissão.",
              },
              {
                id: "b",
                text: "Confronta publicamente na próxima reunião.",
                points: 0,
                type: "wrong",
                feedback:
                  "Confronto público sem privacidade raramente resolve — e pode piorar a situação e sua imagem.",
              },
              {
                id: "c",
                text: "Conversa diretamente com o colega sobre os padrões que observou e o impacto que estão gerando.",
                points: 100,
                type: "correct",
                feedback:
                  "Ir à raiz diretamente é a única forma de resolver. Você nomeia o padrão sem esperar a situação estourar.",
              },
            ],
          },
          {
            id: "5-3-q2",
            type: "choice",
            tag: "🏆 Competição Tóxica",
            question:
              "Um colega claramente compete com você de forma não saudável — sabota sutilmente e pega crédito do seu trabalho perante o gestor. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Começa a fazer o mesmo com ele — competição justa.",
                points: 0,
                type: "wrong",
                feedback:
                  "Entrar no jogo tóxico te rebaixa ao mesmo nível e corrompe o ambiente para todos.",
              },
              {
                id: "b",
                text: "Fala com o colega diretamente e, se continuar, leva ao gestor com fatos concretos.",
                points: 100,
                type: "correct",
                feedback:
                  "Abordagem direta primeiro, escalamento estruturado se necessário. Assertividade com processo.",
              },
              {
                id: "c",
                text: "Vai ao gestor imediatamente para proteger sua posição.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser necessário, mas escalar sem tentar resolver diretamente primeiro frequentemente escala o conflito.",
              },
            ],
          },
          {
            id: "5-3-q3",
            type: "choice",
            tag: "⚡ Confronto Parcialmente Justo",
            question:
              "Um colega te confronta publicamente de forma que você considera parcialmente injusta — ele tem um ponto válido, mas exagerou no tom. Como você reage?",
            choices: [
              {
                id: "a",
                text: "Fica quieto para não escalar e depois ignora.",
                points: 0,
                type: "wrong",
                feedback:
                  "O ponto válido fica sem resposta e o tom inadequado sem consequência. Os dois precisam ser endereçados.",
              },
              {
                id: "b",
                text: "Defende sua posição na hora discutindo mérito e tom ao mesmo tempo.",
                points: 25,
                type: "partial",
                feedback:
                  "Misturar mérito com tom no mesmo momento cria confusão — cada um merece espaço separado.",
              },
              {
                id: "c",
                text: "Responde ao mérito com calma na hora e depois conversa em particular sobre o tom.",
                points: 100,
                type: "correct",
                feedback:
                  "Separar mérito de forma é comunicação de alto nível. Você reconheceu o que tinha valor e endereçou os dois no espaço certo.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════
  // TÓPICO 6 — Comunicação Digital
  // ══════════════════════════════════════════
  {
    id: 6,
    number: 6,
    icon: "📱",
    title: "Comunicação Digital",
    description:
      "Texto não tem tom, expressão facial nem contexto. O que parece neutro para quem escreve pode soar agressivo para quem lê.",
    subPhases: [
      {
        id: "6-1",
        title: "Mensagens e E-mails",
        description:
          "A maior parte dos conflitos digitais começa com uma mensagem mal interpretada.",
        items: [
          {
            id: "6-1-tip",
            type: "tip",
            icon: "✉️",
            title: "O teste do pior tom possível",
            content:
              'Antes de enviar qualquer mensagem importante, faça este teste:\n\n📖 Releia sua mensagem imaginando que o receptor está de péssimo humor.\n\nSe o tom ainda funcionar → envie.\nSe parecer agressivo ou ambíguo → revise.\n\nTexto não tem:\n❌ Tom de voz\n❌ Expressão facial\n❌ Linguagem corporal\n\nPor isso, o que você quis dizer com leveza pode ser lido com dureza. Explicitize o tom quando necessário: "Pergunto isso com genuína curiosidade:" ou "Digo isso sem nenhum julgamento:"',
          },
          {
            id: "6-1-q1",
            type: "choice",
            tag: "📧 E-mail Mal Interpretado",
            question:
              "Você recebe um e-mail de um colega que parece agressivo e direto. Você se sente ofendido. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Responde de forma igualmente direta deixando claro que não gostou.",
                points: 25,
                type: "partial",
                feedback:
                  "Responder irritado por e-mail escala o conflito por escrito — e fica registrado para sempre.",
              },
              {
                id: "b",
                text: "Salva o e-mail para usar como evidência e não responde.",
                points: 0,
                type: "wrong",
                feedback:
                  'Guardar para "usar depois" é pensar em defesa antes de tentar resolver.',
              },
              {
                id: "c",
                text: "Considera que o tom pode ser leitura sua e fala diretamente com a pessoa antes de responder.",
                points: 100,
                type: "correct",
                feedback:
                  "Verificar a interpretação antes de reagir evita conflitos desnecessários. Texto é ambíguo — a conversa esclarece.",
              },
            ],
          },
          {
            id: "6-1-q2",
            type: "choice",
            tag: "⚡ Erro Enviado para Todos",
            question:
              "Você enviou um e-mail para toda a empresa com uma informação incorreta. Percebeu logo depois. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Envia correção só para quem você acha que vai usar os dados.",
                points: 25,
                type: "partial",
                feedback:
                  "Se o erro foi para todos, a correção precisa chegar a todos. Qualquer pessoa pode agir com base na informação errada.",
              },
              {
                id: "b",
                text: "Espera alguém reclamar antes de agir.",
                points: 0,
                type: "wrong",
                feedback:
                  "Você já sabe do erro. Esperar é escolher conveniência acima de integridade.",
              },
              {
                id: "c",
                text: "Envia imediatamente uma correção para todos, sem excesso de desculpas — apenas a correção clara.",
                points: 100,
                type: "correct",
                feedback:
                  "Proatividade e integridade. Uma retificação rápida é muito mais eficaz do que uma longa mensagem de desculpas.",
              },
            ],
          },
          {
            id: "6-1-q3",
            type: "choice",
            tag: "💬 Mensagem Vaga Recebida",
            question:
              'Você recebe: "Aquele negócio que falamos — resolve aí." Você não tem certeza do que é. O que você faz?',
            choices: [
              {
                id: "a",
                text: "Tenta adivinhar e resolve da forma que entendeu.",
                points: 0,
                type: "wrong",
                feedback:
                  "Agir com base em interpretações gera retrabalho e frustração para os dois.",
              },
              {
                id: "b",
                text: 'Responde: "Pode especificar? Quero ter certeza de que vou resolver o ponto certo."',
                points: 100,
                type: "correct",
                feedback:
                  "Pedir clareza é sinal de profissionalismo. Você evita retrabalho e alinha expectativas.",
              },
              {
                id: "c",
                text: "Ignora até ele explicar melhor.",
                points: 25,
                type: "partial",
                feedback:
                  "Melhor do que adivinhar, mas não comunicar que a mensagem foi ambígua deixa o outro sem feedback.",
              },
            ],
          },
        ],
      },
      {
        id: "6-2",
        title: "Grupos e Redes Sociais",
        description:
          "Grupos amplificam a comunicação — para o bem e para o mal.",
        items: [
          {
            id: "6-2-tip",
            type: "tip",
            icon: "👥",
            title: "A regra do privado vs público",
            content:
              "Em grupos digitais (WhatsApp, Slack, Teams), aplique esta regra:\n\n🔒 PRIVADO: qualquer assunto que envolva apenas uma ou duas pessoas, conflito, feedback, problema pessoal\n\n📢 PÚBLICO (grupo): avisos gerais, informações relevantes para todos, celebrações\n\nO maior erro nos grupos: resolver em público o que deveria ser privado.\n\nResultado: quem é criticado em grupo se defende publicamente → escalamento que constrange a todos.",
          },
          {
            id: "6-2-q1",
            type: "choice",
            tag: "📱 Conflito no Grupo",
            question:
              "Um desentendimento sério começou num grupo de WhatsApp da equipe. As mensagens estão sendo mal interpretadas e o clima está pesado. Como você age?",
            choices: [
              {
                id: "a",
                text: "Escreve um longo texto no grupo explicando sua posição e cobrando quem errou.",
                points: 0,
                type: "wrong",
                feedback:
                  "Resolver publicamente o que devia ser privado escala o conflito e expõe as pessoas.",
              },
              {
                id: "b",
                text: "Sai do grupo sem falar nada.",
                points: 0,
                type: "wrong",
                feedback:
                  "Fugir do conflito digital não o resolve — piora, porque gera interpretações negativas.",
              },
              {
                id: "c",
                text: "Manda mensagem privada para os envolvidos e propõe resolver pessoalmente ou por chamada.",
                points: 100,
                type: "correct",
                feedback:
                  "Conflitos sérios precisam de comunicação com voz e presença — não de texto em grupo.",
              },
            ],
          },
          {
            id: "6-2-q2",
            type: "choice",
            tag: "📰 Informação Não Verificada",
            question:
              'Você recebe no grupo da empresa uma "notícia" polêmica sobre um concorrente. O grupo está esperando você se posicionar. O que você faz?',
            choices: [
              {
                id: "a",
                text: "Encaminha com um comentário de indignação.",
                points: 0,
                type: "wrong",
                feedback:
                  "Compartilhar sem verificar alimenta a desinformação e pode prejudicar pessoas e empresas inocentes.",
              },
              {
                id: "b",
                text: "Pesquisa a fonte antes de opinar e pede ao grupo que verifiquem antes de compartilhar.",
                points: 100,
                type: "correct",
                feedback:
                  "Liderança responsável. Verificar antes de compartilhar é dever de quem influencia outros.",
              },
              {
                id: "c",
                text: "Ignora completamente sem orientar o grupo.",
                points: 25,
                type: "partial",
                feedback:
                  "Melhor do que espalhar, mas silenciar sem orientar deixa o grupo sem norte.",
              },
            ],
          },
          {
            id: "6-2-q3",
            type: "choice",
            tag: "🔇 Grupo que Fugiu do Foco",
            question:
              "Um grupo de trabalho no WhatsApp está sendo usado para memes e conversas irrelevantes durante o horário de trabalho, atrapalhando sua concentração. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Sai do grupo sem avisar.",
                points: 0,
                type: "wrong",
                feedback:
                  "Sair sem comunicar pode ser interpretado como rejeição e cria estranhamento.",
              },
              {
                id: "b",
                text: "Silencia as notificações e não faz nada.",
                points: 25,
                type: "partial",
                feedback:
                  "Resolve para você, mas o problema continua para o grupo.",
              },
              {
                id: "c",
                text: '"Pessoal, esse grupo é muito útil pro trabalho — mas as notificações constantes estão dificultando minha concentração. Podemos usá-lo só para assuntos do projeto?"',
                points: 100,
                type: "correct",
                feedback:
                  "Assertivo e construtivo. Você nomeou o impacto em você, sem atacar ninguém, e propôs uma solução clara.",
              },
            ],
          },
        ],
      },
      {
        id: "6-3",
        title: "Reuniões Virtuais",
        description:
          "Reuniões online têm suas próprias regras de comunicação assertiva.",
        items: [
          {
            id: "6-3-tip",
            type: "tip",
            icon: "💻",
            title: "Presença digital em reuniões",
            content:
              'Em reuniões virtuais, sua presença é medida de forma diferente:\n\n📷 Câmera ligada = presença e comprometimento\n🎤 Microfone em silêncio = respeito ao falante\n⌨️ Chat ativo = participação sem interrupção\n🔇 Silêncio total por muito tempo = ausência percebida\n\nAssertividade em reuniões online:\n→ Peça a palavra no chat antes de falar\n→ Retome pontos que foram ignorados: "Voltando ao ponto do João..."\n→ Nomeie quando a reunião saiu do foco: "Posso sugerir que voltemos à pauta?"',
          },
          {
            id: "6-3-q1",
            type: "choice",
            tag: "🎥 Câmera Desligada",
            question:
              "Em reuniões de equipe, você sempre mantém a câmera desligada. Seu gestor pediu que as câmeras ficassem ligadas. Como você age?",
            choices: [
              {
                id: "a",
                text: "Ignora o pedido — sua câmera, sua escolha.",
                points: 0,
                type: "wrong",
                feedback:
                  "Ignorar uma solicitação clara do gestor sem comunicar o motivo é passividade que pode ser interpretada como desrespeito.",
              },
              {
                id: "b",
                text: "Liga a câmera e pronto — não há o que discutir.",
                points: 25,
                type: "partial",
                feedback:
                  "Cumprir o pedido está correto, mas se houver um motivo legítimo para manter desligada, comunicá-lo seria assertivo.",
              },
              {
                id: "c",
                text: "Liga a câmera. Se houver um motivo legítimo para eventualmente mantê-la desligada, comunica com antecedência.",
                points: 100,
                type: "correct",
                feedback:
                  "Atende à solicitação e mantém a comunicação aberta para exceções justificadas. Isso é assertividade colaborativa.",
              },
            ],
          },
          {
            id: "6-3-q2",
            type: "choice",
            tag: "🗣️ Ponto Ignorado",
            question:
              "Durante uma reunião virtual, você fez um ponto importante que foi completamente ignorado e a conversa seguiu. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Fica quieto — provavelmente não era tão importante assim.",
                points: 0,
                type: "wrong",
                feedback:
                  "Silenciar quando seu ponto é ignorado valida a dinâmica e priva o grupo de uma contribuição potencialmente valiosa.",
              },
              {
                id: "b",
                text: "Espera o final da reunião e manda um e-mail com o ponto.",
                points: 25,
                type: "partial",
                feedback:
                  "Melhor do que silenciar, mas o momento de impacto já passou. O ponto perde força fora do contexto da discussão.",
              },
              {
                id: "c",
                text: 'Retoma: "Voltando ao ponto que mencionei — acho que vale a pena discutirmos antes de fechar."',
                points: 100,
                type: "correct",
                feedback:
                  "Assertividade em reunião. Você não deixou seu ponto ser engolido e trouxe de volta com naturalidade.",
              },
            ],
          },
          {
            id: "6-3-q3",
            type: "choice",
            tag: "⏱️ Reunião sem Foco",
            question:
              "Uma reunião online está durando o dobro do tempo previsto e claramente saiu do objetivo. Você tem outro compromisso. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Sai da reunião abruptamente sem avisar.",
                points: 0,
                type: "wrong",
                feedback:
                  "Sair sem comunicar é rude e pode ser interpretado como descaso com o grupo.",
              },
              {
                id: "b",
                text: "Fica até o fim mesmo perdendo o próximo compromisso.",
                points: 25,
                type: "partial",
                feedback:
                  "Às vezes necessário, mas sacrificar outros compromissos sem comunicar o conflito não é a melhor solução.",
              },
              {
                id: "c",
                text: '"Tenho um compromisso em 10 minutos. Podemos identificar os pontos críticos que ainda precisamos resolver ou posso contribuir de outra forma?"',
                points: 100,
                type: "correct",
                feedback:
                  "Você foi transparente sobre sua restrição e ofereceu alternativas. Assertividade com responsabilidade.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════
  // TÓPICO 7 — Feedback e Desenvolvimento
  // ══════════════════════════════════════════
  {
    id: 7,
    number: 7,
    icon: "🔄",
    title: "Feedback e Desenvolvimento",
    description:
      "Feedback bem dado transforma. Feedback mal dado — ou evitado — perpetua problemas que poderiam ser resolvidos com uma conversa.",
    subPhases: [
      {
        id: "7-1",
        title: "Dar Feedback",
        description:
          "Dar feedback assertivo é uma das habilidades mais difíceis e mais impactantes.",
        items: [
          {
            id: "7-1-tip",
            type: "tip",
            icon: "🎯",
            title: "O modelo SBI de feedback",
            content:
              'Use o modelo SBI para dar feedbacks claros e não defensivos:\n\n📍 S — SITUAÇÃO: quando e onde aconteceu\n"Na reunião de ontem..."\n\n🎬 B — COMPORTAMENTO: o que a pessoa fez (observável, sem julgamento)\n"...você interrompeu o João 3 vezes..."\n\n💥 I — IMPACTO: o efeito concreto que causou\n"...e ele desistiu de apresentar o ponto, o que nos custou uma perspectiva importante."\n\nEsse modelo elimina: julgamentos, generalizações e ataques à personalidade.',
          },
          {
            id: "7-1-q1",
            type: "choice",
            tag: "⏰ Timing do Feedback",
            question:
              "Um membro da sua equipe cometeu um erro sério durante um evento. Você está frustrado. Quando e como você aborda?",
            choices: [
              {
                id: "a",
                text: "Na hora, ainda no evento, para que ele corrija imediatamente.",
                points: 0,
                type: "wrong",
                feedback:
                  "Feedback dado no calor da emoção, em público, vira ataque. Corrija o comportamento, não a pessoa.",
              },
              {
                id: "b",
                text: "Nunca — o que passou, passou. Prefere não criar clima ruim.",
                points: 0,
                type: "wrong",
                feedback:
                  "Evitar o feedback priva a pessoa da chance de crescer e sinaliza que erros não têm consequências.",
              },
              {
                id: "c",
                text: "Após se acalmar, pede uma conversa privada e usa fatos, impacto e pedido concreto de mudança.",
                points: 100,
                type: "correct",
                feedback:
                  "Tempo certo + espaço privado + foco no comportamento = feedback que transforma.",
              },
            ],
          },
          {
            id: "7-1-q2",
            type: "choice",
            tag: "🤐 Amigo que Precisa Ouvir",
            question:
              "Seu gestor pede que você avalie formalmente o trabalho de um amigo próximo. O projeto tem falhas sérias. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Ameniza a avaliação para não prejudicar o amigo.",
                points: 0,
                type: "wrong",
                feedback:
                  "Avaliação desonesta prejudica o amigo a longo prazo — ele não recebe o feedback que precisa para crescer.",
              },
              {
                id: "b",
                text: "Faz avaliação honesta e envia sem falar com o amigo antes.",
                points: 25,
                type: "partial",
                feedback:
                  "A honestidade é certa, mas ser pego de surpresa por uma avaliação negativa de um amigo pode danificar o relacionamento.",
              },
              {
                id: "c",
                text: 'Avisa o amigo antes: "Precisei ser honesto — tenho observações importantes e quero conversar antes que chegue ao gestor."',
                points: 100,
                type: "correct",
                feedback:
                  "Honesto profissionalmente e cuidadoso no relacionamento. Amizade real inclui honestidade.",
              },
            ],
          },
          {
            id: "7-1-q3",
            type: "choice",
            tag: "😤 Feedback Rejeitado",
            question:
              "Você deu um feedback difícil para um colega e ele ficou claramente na defensiva e chateado. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Recua e suaviza o que disse para aliviar o desconforto.",
                points: 0,
                type: "wrong",
                feedback:
                  "Suavizar o feedback porque o outro ficou chateado invalida o que você disse e ensina que defensividade funciona.",
              },
              {
                id: "b",
                text: "Deixa o tempo passar — ele vai processar e entender.",
                points: 25,
                type: "partial",
                feedback:
                  "Às vezes o tempo ajuda, mas encerrar com tensão aberta pode fazer o feedback ser lembrado só pelo desconforto.",
              },
              {
                id: "c",
                text: '"Percebo que foi difícil de ouvir. Não precisa responder agora — estou disponível para continuar quando quiser."',
                points: 100,
                type: "correct",
                feedback:
                  "Manteve o feedback, acolheu a reação sem validar a defensividade e deixou a porta aberta. Integridade.",
              },
            ],
          },
        ],
      },
      {
        id: "7-2",
        title: "Receber Feedback",
        description:
          "Saber receber feedback é tão importante quanto saber dar. E muito mais raro.",
        items: [
          {
            id: "7-2-tip",
            type: "tip",
            icon: "🎁",
            title: "Feedback é dado de crescimento",
            content:
              'Receber feedback ativa o mesmo circuito cerebral da ameaça física — é neurológico.\n\nPor isso, a defensividade é automática, não escolhida.\n\nComo treinar a abertura:\n\n🛑 Pause antes de responder\n🔍 Pergunte: "O que nesse feedback pode ser verdade?"\n🙏 Agradeça antes de contestar\n💬 Faça perguntas para entender melhor\n\nVocê pode discordar — mas ouvir completamente primeiro aumenta muito a qualidade da sua discordância.',
          },
          {
            id: "7-2-q1",
            type: "choice",
            tag: "👂 Feedback do Gestor",
            question:
              "Seu gestor te chama para dar um retorno negativo sobre algo que você fez. Como você reage?",
            choices: [
              {
                id: "a",
                text: "Fica na defensiva e começa a justificar cada ponto antes de ouvi-lo terminar.",
                points: 0,
                type: "wrong",
                feedback:
                  "Defensividade bloqueia o aprendizado e frustra quem está tentando te ajudar a crescer.",
              },
              {
                id: "b",
                text: "Concorda com tudo sem questionar, mesmo sem entender.",
                points: 25,
                type: "partial",
                feedback:
                  "Pseudoconcordância não é maturidade — é evitar o desconforto sem processar.",
              },
              {
                id: "c",
                text: "Ouve até o fim, agradece a honestidade e faz perguntas para entender melhor.",
                points: 100,
                type: "correct",
                feedback:
                  "Maturidade exemplar. Quem sabe receber feedback cresce muito mais rápido.",
              },
            ],
          },
          {
            id: "7-2-q2",
            type: "choice",
            tag: "❓ Feedback que Você Discorda",
            question:
              "Você recebeu um feedback formal com o qual discorda profundamente. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Aceita formalmente mas decide internamente ignorar.",
                points: 0,
                type: "wrong",
                feedback:
                  "Aceitar sem processar e ignorar sem comunicar. Você sai sem aprender e sem resolver.",
              },
              {
                id: "b",
                text: "Pede uma reunião com contra-argumentos já preparados.",
                points: 25,
                type: "partial",
                feedback:
                  "Contestar é legítimo, mas chegar com argumentos prontos pode parecer que você quer vencer — não entender.",
              },
              {
                id: "c",
                text: 'Pede uma reunião com postura de curiosidade: "Quero entender melhor — pode haver algo que não estou enxergando."',
                points: 100,
                type: "correct",
                feedback:
                  "Abertura antes de contestar. Ouvir primeiro qualifica sua discordância.",
              },
            ],
          },
          {
            id: "7-2-q3",
            type: "choice",
            tag: "🔁 Mesmo Feedback Repetido",
            question:
              "Você recebeu o mesmo feedback de duas fontes diferentes em momentos diferentes. Você ainda acha que eles estão errados. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Descarta — duas pessoas podem compartilhar o mesmo preconceito.",
                points: 0,
                type: "wrong",
                feedback:
                  "Quando o mesmo feedback vem de fontes independentes, a probabilidade de ter algo de verdade aumenta muito.",
              },
              {
                id: "b",
                text: "Reflete mais profundamente — feedback repetido quase sempre aponta algo real, mesmo que parcial.",
                points: 100,
                type: "correct",
                feedback:
                  "Maturidade. Você não precisou concordar 100% para reconhecer que algo merece ser examinado.",
              },
              {
                id: "c",
                text: "Pede uma terceira opinião para desempatar.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser útil, mas o padrão de sempre buscar uma terceira opinião antes de aceitar pode ser mecanismo de evitação.",
              },
            ],
          },
        ],
      },
      {
        id: "7-3",
        title: "Cultura de Feedback",
        description:
          "O maior impacto do feedback não é individual — é quando se torna parte da cultura de um grupo.",
        items: [
          {
            id: "7-3-tip",
            type: "tip",
            icon: "🌱",
            title: "Como criar cultura de feedback",
            content:
              'Cultura de feedback não se cria com uma política — se cria com comportamento diário:\n\n✅ Peça feedback ativamente: "O que eu poderia ter feito diferente?"\n✅ Agradeça publicamente quem deu feedback difícil\n✅ Modele abertura: admita erros e o que aprendeu com eles\n✅ Dê feedback frequente, não só em avaliações formais\n\n📌 Lembrança: feedback frequente e pequeno > avaliação anual e grande\n\nQuando você modela abertura ao feedback, o grupo replica.',
          },
          {
            id: "7-3-q1",
            type: "choice",
            tag: "🔍 Sem Feedback no Time",
            question:
              "Você percebe que no seu time ninguém nunca dá ou pede feedback. As reuniões são sempre fáceis demais. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Aprecia o ambiente harmonioso — menos conflito, melhor.",
                points: 0,
                type: "wrong",
                feedback:
                  "Ambiente sem feedback não é harmonia — é supressão. Os problemas existem mas não aparecem.",
              },
              {
                id: "b",
                text: "Começa a modelar o comportamento: pede feedback sobre suas próprias ações e dá feedback construtivo regularmente.",
                points: 100,
                type: "correct",
                feedback:
                  "Cultura se cria por comportamento, não por discurso. Quando você modela, outros replicam.",
              },
              {
                id: "c",
                text: "Propõe uma política formal de feedback trimestral.",
                points: 25,
                type: "partial",
                feedback:
                  "Processo formal pode ajudar, mas sem cultura de abertura, as avaliações formais viram protocolo vazio.",
              },
            ],
          },
          {
            id: "7-3-q2",
            type: "choice",
            tag: "🎖️ Feedback Positivo",
            question:
              "Um membro da equipe fez um trabalho excelente. Como você comunica o reconhecimento de forma mais eficaz?",
            choices: [
              {
                id: "a",
                text: '"Bom trabalho!" — simples e direto.',
                points: 25,
                type: "partial",
                feedback:
                  "Melhor do que nada, mas vago. A pessoa não sabe o que exatamente foi bom e o que deve repetir.",
              },
              {
                id: "b",
                text: '"Na apresentação de ontem, a forma como você antecipou as objeções do cliente mostrou uma preparação excelente. Isso fez diferença real no resultado."',
                points: 100,
                type: "correct",
                feedback:
                  "Feedback positivo específico é tão importante quanto o corretivo. A pessoa sabe exatamente o que repetir.",
              },
              {
                id: "c",
                text: "Não comenta — reconhecimento em excesso pode gerar expectativas.",
                points: 0,
                type: "wrong",
                feedback:
                  "Feedback positivo é combustível para a motivação. Evitar reconhecimento por medo de expectativas é uma falsa economia.",
              },
            ],
          },
          {
            id: "7-3-q3",
            type: "choice",
            tag: "🔄 Feedback entre Pares",
            question:
              "Você percebe que um amigo e colega está tomando decisões que podem prejudicá-lo profissionalmente. Como você aborda?",
            choices: [
              {
                id: "a",
                text: "Comenta com outros colegas em vez de falar diretamente com ele.",
                points: 0,
                type: "wrong",
                feedback:
                  "Falar com terceiros antes da pessoa é triangulação — prejudica a confiança e não resolve.",
              },
              {
                id: "b",
                text: "Não faz nada — não é problema seu.",
                points: 25,
                type: "partial",
                feedback:
                  "Omissão quando você pode ajudar também tem um custo para a amizade e para o outro.",
              },
              {
                id: "c",
                text: "Pede um momento particular, compartilha o que observou com cuidado e pergunta como ele está se sentindo.",
                points: 100,
                type: "correct",
                feedback:
                  "Cuidado assertivo. Presença + honestidade + pergunta aberta = amizade de verdade.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════
  // TÓPICO 8 — Liderança Assertiva
  // ══════════════════════════════════════════
  {
    id: 8,
    number: 8,
    icon: "🏆",
    title: "Liderança Assertiva",
    description:
      "Liderar é comunicar. As escolhas comunicativas de um líder moldam a cultura inteira de um grupo.",
    subPhases: [
      {
        id: "8-1",
        title: "Comunicar com Clareza e Direção",
        description:
          "Líderes assertivos são claros nas expectativas e abertos nas conversas.",
        items: [
          {
            id: "8-1-tip",
            type: "tip",
            icon: "🧭",
            title: "O que líderes assertivos fazem diferente",
            content:
              "Líderes assertivos têm 3 características comunicacionais:\n\n1️⃣ EXPECTATIVAS CLARAS — não deixam as pessoas adivinhando o que querem\n2️⃣ ABERTURA CONSISTENTE — criam espaço real para perguntas e discordâncias\n3️⃣ RESPONSABILIDADE COMPARTILHADA — assumem seus erros em público\n\nO que o líder modela, o time replica.\nO que o líder tolera em silêncio, o time interpreta como aprovação.",
          },
          {
            id: "8-1-q1",
            type: "choice",
            tag: "📣 Comunicar Decisão Difícil",
            question:
              "Você precisa comunicar ao time uma decisão que sabe que vai ser impopular. A decisão já está tomada. Como você comunica?",
            choices: [
              {
                id: "a",
                text: "Consulta o time antes de anunciar para gerar engajamento, mesmo com a decisão já tomada internamente.",
                points: 0,
                type: "wrong",
                feedback:
                  "Consulta falsa é mais prejudicial do que não consultar. Quando percebem, a confiança desaba completamente.",
              },
              {
                id: "b",
                text: "Implementa gradualmente, sem comunicar claramente, para reduzir a reação imediata.",
                points: 25,
                type: "partial",
                feedback:
                  "Mudanças não comunicadas geram rumores que costumam ser piores do que a mudança em si.",
              },
              {
                id: "c",
                text: "Comunica com contexto e razões claras, abre espaço real para perguntas — mesmo que a decisão não mude.",
                points: 100,
                type: "correct",
                feedback:
                  "Você não fingiu que era negociável, mas deu espaço para as pessoas processarem e serem ouvidas. Isso é liderança assertiva.",
              },
            ],
          },
          {
            id: "8-1-q2",
            type: "choice",
            tag: "😔 Erro de Liderança",
            question:
              "Uma decisão sua como líder resultou num erro que afetou toda a equipe. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Analisa internamente e comunica apenas o plano de correção — sem reabrir o episódio.",
                points: 25,
                type: "partial",
                feedback:
                  "Eficiente, mas sem transparência a equipe se sente desconsiderada. Você perde a chance de construir confiança.",
              },
              {
                id: "b",
                text: "Distribui a responsabilidade entre os fatores externos que também contribuíram.",
                points: 0,
                type: "wrong",
                feedback:
                  "Dividir culpa com fatores externos quando a decisão era sua é fuga de responsabilidade. A equipe percebe.",
              },
              {
                id: "c",
                text: "Convoca a equipe, assume a responsabilidade, explica o que aprendeu e apresenta o plano de correção.",
                points: 100,
                type: "correct",
                feedback:
                  "Líderes que assumem erros publicamente constroem mais confiança do que os que nunca erram.",
              },
            ],
          },
          {
            id: "8-1-q3",
            type: "choice",
            tag: "🔒 Demissão e Curiosidade",
            question:
              "Você precisou demitir alguém. Colegas começam a questionar os motivos da saída. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Explica brevemente os motivos para aliviar o clima.",
                points: 0,
                type: "wrong",
                feedback:
                  "Mesmo com boa intenção, compartilhar motivos de demissão viola a privacidade da pessoa e pode gerar problemas jurídicos.",
              },
              {
                id: "b",
                text: "Fica em silêncio total e não responde nenhuma pergunta.",
                points: 25,
                type: "partial",
                feedback: "Silêncio total gera mais especulação, não menos.",
              },
              {
                id: "c",
                text: '"Não posso entrar em detalhes. O que posso dizer é que foi uma decisão necessária e tratada com respeito."',
                points: 100,
                type: "correct",
                feedback:
                  "Assertivo, discreto e presente. Fechou o espaço para especulação sem violar a privacidade de ninguém.",
              },
            ],
          },
        ],
      },
      {
        id: "8-2",
        title: "Criar Ambiente Seguro",
        description:
          "A segurança psicológica é o terreno onde a comunicação assertiva floresce — e o líder é o jardineiro.",
        items: [
          {
            id: "8-2-tip",
            type: "tip",
            icon: "🏰",
            title: "Segurança psicológica",
            content:
              'Segurança psicológica é a crença de que você não será punido por falar o que pensa, perguntar, discordar ou admitir um erro.\n\nComo o líder cria (ou destrói) isso:\n\n✅ CRIA: "Boa pergunta — eu também não tinha pensado nisso"\n✅ CRIA: "Errei aqui. O que aprendemos?"\n❌ DESTRÓI: "Como você não sabia isso?"\n❌ DESTRÓI: Ignorar contribuições em reunião\n❌ DESTRÓI: Punir discordâncias\n\nUm único episódio de destruição pode apagar semanas de construção.',
          },
          {
            id: "8-2-q1",
            type: "choice",
            tag: "🪞 Equipe Que Nunca Discorda",
            question:
              "Você lidera uma equipe onde ninguém nunca discorda de você. As decisões passam sempre facilmente. O que isso indica?",
            choices: [
              {
                id: "a",
                text: "Que o time confia em você e está alinhado.",
                points: 0,
                type: "wrong",
                feedback:
                  "Equipes que nunca discordam do líder geralmente estão com medo, não alinhadas. Consenso fácil demais é sinal de alerta.",
              },
              {
                id: "b",
                text: "Que você pode estar criando uma dinâmica inibidora e precisa investigar.",
                points: 100,
                type: "correct",
                feedback:
                  "Autoconsciência de liderança. Reconhecer o padrão problemático é o primeiro passo para mudá-lo.",
              },
              {
                id: "c",
                text: "Que você seleciona bem as pessoas — todas pensam de forma similar.",
                points: 0,
                type: "wrong",
                feedback:
                  "Times homogêneos em pensamento são mais frágeis e produzem piores decisões do que times com perspectivas diversas.",
              },
            ],
          },
          {
            id: "8-2-q2",
            type: "choice",
            tag: "🔇 Voz Ignorada",
            question:
              "Você percebe que um membro da equipe é sistematicamente ignorado nas reuniões — as pessoas falam por cima ou mudam de assunto quando ele fala. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Fala com ele em particular e sugere que se posicione de forma mais assertiva.",
                points: 25,
                type: "partial",
                feedback:
                  "Ajuda o indivíduo, mas não muda a dinâmica do grupo. O problema não é só dele — é do ambiente.",
              },
              {
                id: "b",
                text: "Não interfere — cada um tem seu espaço para se defender.",
                points: 0,
                type: "wrong",
                feedback:
                  "Silêncio diante de dinâmica excludente é cumplicidade passiva.",
              },
              {
                id: "c",
                text: 'Na próxima vez que acontecer, intervém naturalmente: "Espera — quero ouvir o que o [nome] estava dizendo."',
                points: 100,
                type: "correct",
                feedback:
                  "Criação ativa de ambiente seguro. Você agiu no momento certo, no espaço certo.",
              },
            ],
          },
          {
            id: "8-2-q3",
            type: "choice",
            tag: "🆕 Novo Dominante",
            question:
              "Um novo membro da equipe começa a dominar todas as discussões, interrompendo os outros. O grupo está incomodado mas ninguém fala nada. O que você faz como líder?",
            choices: [
              {
                id: "a",
                text: "Espera a pessoa perceber sozinha — chamá-la atenção seria constrangedor.",
                points: 25,
                type: "partial",
                feedback:
                  "O comportamento pode continuar por meses enquanto o ambiente se deteriora.",
              },
              {
                id: "b",
                text: "Corrige publicamente na próxima interrupção.",
                points: 25,
                type: "partial",
                feedback:
                  "Intervir no momento tem valor, mas correção pública repetida pode criar constrangimento sem resolver a causa.",
              },
              {
                id: "c",
                text: 'Conversa em particular: "Quero compartilhar algo que acho que vai te ajudar a colaborar ainda melhor com o time."',
                points: 100,
                type: "correct",
                feedback:
                  "Privado, direto, com intenção de ajudar. Chance real de mudança duradoura.",
              },
            ],
          },
        ],
      },
      {
        id: "8-3",
        title: "Liderança em Situações Extremas",
        description:
          "O nível especialista. Liderança assertiva nos momentos mais complexos e desafiadores.",
        items: [
          {
            id: "8-3-tip",
            type: "tip",
            icon: "⚡",
            title: "Liderança assertiva sob pressão",
            content:
              "Nos momentos de maior pressão, líderes revelam sua cultura real.\n\nO que separa líderes assertivos nos momentos difíceis:\n\n🧊 Mantêm a calma quando outros perdem\n🎯 Focam no problema, não nas pessoas\n🔍 Buscam entender antes de decidir\n💬 Comunicam com honestidade mesmo quando é difícil\n🤝 Assumem responsabilidade publicamente\n\nEm crises, comunicação assertiva não é luxo — é o que mantém o time unido.",
          },
          {
            id: "8-3-q1",
            type: "choice",
            tag: "🧩 Sabotagem Interna",
            question:
              "Você percebe que um membro sênior está sistematicamente dificultando o trabalho de um colega mais novo, com omissões e comentários negativos. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Conversa com o membro mais novo para que ele se proteja.",
                points: 25,
                type: "partial",
                feedback:
                  "Ajuda o indivíduo, mas não resolve o problema. O comportamento tóxico continua.",
              },
              {
                id: "b",
                text: "Documenta e aguarda mais evidências.",
                points: 25,
                type: "partial",
                feedback:
                  "Prudência tem valor, mas cada dia de espera o dano continua.",
              },
              {
                id: "c",
                text: "Conversa diretamente com o membro sênior sobre os padrões observados e o impacto no time.",
                points: 100,
                type: "correct",
                feedback:
                  "Ir à raiz é a única forma de resolver. Assertividade de liderança.",
              },
            ],
          },
          {
            id: "8-3-q2",
            type: "choice",
            tag: "🎯 Discordância Estratégica",
            question:
              "Você discorda de uma estratégia da empresa que já foi decidida. O que você faz como líder?",
            choices: [
              {
                id: "a",
                text: "Expressa discordância publicamente para que fique registrado.",
                points: 0,
                type: "wrong",
                feedback:
                  "Resistência pública depois da decisão tomada compromete o time e sua credibilidade.",
              },
              {
                id: "b",
                text: "Executa sem qualidade — afinal, não foi sua ideia.",
                points: 0,
                type: "wrong",
                feedback:
                  "Executar mal para provar que estava certo é sabotagem. Prejudica o time e a você mesmo.",
              },
              {
                id: "c",
                text: "Registra formalmente sua discordância com os gestores e depois executa com comprometimento total.",
                points: 100,
                type: "correct",
                feedback:
                  '"Disagree and commit" — o princípio mais maduro de liderança. Honesto, ouvido, e depois deu o seu melhor.',
              },
            ],
          },
          {
            id: "8-3-q3",
            type: "choice",
            tag: "🏁 O Desafio Final",
            question:
              "Você percebe que um colega cometeu um erro crítico num projeto que prestes a ser entregue — ele ainda não percebeu. Revelá-lo pode atrasar tudo. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Corrige silenciosamente sem contar para não criar constrangimento.",
                points: 25,
                type: "partial",
                feedback:
                  "Resolve o problema imediato, mas priva o colega de aprender e cria uma dinâmica de ocultação.",
              },
              {
                id: "b",
                text: "Expõe o erro para o gestor para se proteger de qualquer responsabilidade.",
                points: 0,
                type: "wrong",
                feedback:
                  "Usar o erro do colega para se proteger é traição, não assertividade.",
              },
              {
                id: "c",
                text: "Fala diretamente com o colega, mostra o que encontrou e trabalham juntos na correção — mesmo que atrase.",
                points: 100,
                type: "correct",
                feedback:
                  "Honestidade, colaboração e respeito pelo crescimento do outro acima da conveniência. Comunicação assertiva no nível mais alto.",
              },
            ],
          },
        ],
      },
    ],
  },
];
