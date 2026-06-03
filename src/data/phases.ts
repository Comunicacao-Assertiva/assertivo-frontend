import type { Topic } from "@/types/game";

export const PHASES_DATA: Topic[] = [
  {
    id: 1,
    number: 1,
    icon: "🗣️",
    title: "Expressão e Clareza",
    description:
      "Comunicar com clareza é a base de tudo. Aprenda a estruturar o que precisa ser dito.",
    subPhases: [
      {
        id: "1-1",
        title: "Clareza no Texto",
        description:
          "Mensagens mal escritas causam mais conflitos do que desacordos reais.",
        items: [
          {
            id: "1-1-tip",
            type: "tip",
            icon: "✏️",
            title: "Regra das 3 perguntas",
            content:
              "Antes de enviar qualquer mensagem importante:\n\n📌 O QUÊ você está comunicando?\n📌 POR QUÊ isso importa para o receptor?\n📌 COMO ele deve agir?\n\nSe não souber responder uma das três, revise antes de enviar.",
          },
        ],
      },
      {
        id: "1-2",
        title: "Clareza Verbal",
        description: "Como você fala importa tanto quanto o que você fala.",
        items: [
          {
            id: "1-2-tip",
            type: "tip",
            icon: "🎙️",
            title: "As 3 camadas da comunicação",
            content:
              '📊 7% das palavras · 38% do tom · 55% da linguagem corporal.\n\n"Tudo bem" pode ser reconfortante ou ameaçador dependendo de como é dito. Calibre as três camadas.',
          },
        ],
      },
      {
        id: "1-3",
        title: "Clareza sob Pressão",
        description:
          "Quando a pressão sobe, a clareza cai. Treine os momentos mais difíceis.",
        items: [
          {
            id: "1-3-tip",
            type: "tip",
            icon: "🧘",
            title: "A pausa assertiva",
            content:
              'Antes de responder algo importante sob pressão:\n\n💬 Diga: "Deixa eu pensar um segundo antes de responder."\n\nEssa frase te dá tempo e sinaliza que você leva a conversa a sério.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    number: 2,
    icon: "👂",
    title: "Escuta Ativa",
    description: "Ouvir de verdade é a habilidade mais rara e mais poderosa.",
    subPhases: [
      {
        id: "2-1",
        title: "Presença Total",
        description: "Escuta ativa começa com presença real — sem distrações.",
        items: [
          {
            id: "2-1-tip",
            type: "tip",
            icon: "🧠",
            title: "O ciclo da escuta ativa",
            content:
              "3 etapas em ordem:\n\n1️⃣ RECEBER — ouvir sem interromper\n2️⃣ PROCESSAR — o que a pessoa realmente está dizendo?\n3️⃣ RESPONDER — com base no que foi dito, não no que você queria dizer\n\nA maioria pula direto para o 3 ainda no 1.",
          },
        ],
      },
      {
        id: "2-2",
        title: "Escuta em Divergências",
        description:
          "Ouvir quem discorda de você é muito mais difícil — e mais valioso.",
        items: [
          {
            id: "2-2-tip",
            type: "tip",
            icon: "🤺",
            title: "Ouvir para entender",
            content:
              'Em divergências, 90% ouvem para rebater — não para entender.\n\nDesafio: resumir a perspectiva oposta tão bem que a outra pessoa diria "é exatamente isso".\n\n💡 Antes de discordar: "Só para garantir que entendi — você está dizendo que..."',
          },
        ],
      },
      {
        id: "2-3",
        title: "Perguntas que Aprofundam",
        description: "As perguntas certas revelam o que as palavras não dizem.",
        items: [
          {
            id: "2-3-tip",
            type: "tip",
            icon: "❓",
            title: "Perguntas abertas vs fechadas",
            content:
              'FECHADAS encerram: "Você ficou bravo?" → sim/não\n\nABERTAS constroem: "Como você se sentiu?" → aprofundamento\n\n🔑 Troque "Você" por "Como", "O que", "Me conta sobre".',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    number: 3,
    icon: "💪",
    title: "Postura Assertiva",
    description: "Ser assertivo é manter sua autenticidade com respeito.",
    subPhases: [
      {
        id: "3-1",
        title: "Fundamentos",
        description:
          'Assertividade vai além de "falar o que pensa". É saber quando e como.',
        items: [
          {
            id: "3-1-tip",
            type: "tip",
            icon: "⚖️",
            title: "O triângulo da comunicação",
            content:
              "😶 PASSIVO: evita expressar → ressentimento\n😤 AGRESSIVO: expressa sem considerar → relações danificadas\n✅ ASSERTIVO: expressa com respeito → resultados reais\n\nA maioria oscila entre passivo e agressivo.",
          },
        ],
      },
      {
        id: "3-2",
        title: "Sob Pressão Social",
        description:
          "Manter a postura quando o grupo pressiona é onde muitos falham.",
        items: [
          {
            id: "3-2-tip",
            type: "tip",
            icon: "🧲",
            title: "Como a pressão social funciona",
            content:
              'Pressão social ativa o instinto de conformidade — é neurológico.\n\nReconhecer ajuda:\n✅ "Estou sentindo pressão para concordar"\n✅ Pause antes de responder\n✅ "Estou cedendo por argumentos ou por desconforto?"',
          },
        ],
      },
      {
        id: "3-3",
        title: "Assertividade em Hierarquias",
        description:
          "Ser assertivo com autoridades exige mais habilidade — e é mais importante.",
        items: [
          {
            id: "3-3-tip",
            type: "tip",
            icon: "📊",
            title: "Assertividade ascendente",
            content:
              'Com pessoas de maior poder:\n\n1️⃣ DADOS — "Os números mostram que..."\n2️⃣ IMPACTO — "O resultado disso é..."\n3️⃣ PROPOSTA — "Minha sugestão seria..."\n4️⃣ ABERTURA — "O que você acha?"',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    number: 4,
    icon: "🛡️",
    title: "Gestão de Limites",
    description: "Limites saudáveis protegem tanto você quanto o outro.",
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
            title: "Os 4 tipos de limite",
            content:
              "⏰ TEMPO — o que você não pode comprometer\n💪 ENERGIA — o que te esgota além do razoável\n🧠 VALORES — o que vai contra o que você acredita\n🤝 RELAÇÕES — o que é inaceitável em como você é tratado\n\nSinal de limite ultrapassado: ressentimento.",
          },
        ],
      },
      {
        id: "4-2",
        title: "Comunicar Limites",
        description:
          "Saber onde está o limite é o começo. Comunicá-lo é a habilidade real.",
        items: [
          {
            id: "4-2-tip",
            type: "tip",
            icon: "📢",
            title: "A fórmula para comunicar limites",
            content:
              '1️⃣ OBSERVAÇÃO: "Quando [situação específica]..."\n2️⃣ IMPACTO: "...eu [como te afeta]..."\n3️⃣ PEDIDO: "...e preciso que [pedido concreto]."\n\nEspecificidade é essencial. Limites vagos não funcionam.',
          },
        ],
      },
      {
        id: "4-3",
        title: "Manter Limites",
        description:
          "Comunicar uma vez não é suficiente. Consistência é o que torna limites reais.",
        items: [
          {
            id: "4-3-tip",
            type: "tip",
            icon: "🔄",
            title: "Por que limites precisam ser repetidos",
            content:
              "Quando alguém ultrapassa um limite que você comunicou, nem sempre é desonestidade — é hábito.\n\nResposta assertiva:\n🔁 Repita o limite com calma\n📌 Seja específico sobre o que aconteceu\n⚡ Mencione a consequência se continuar",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    number: 5,
    icon: "⚔️",
    title: "Conflitos Interpessoais",
    description: "Conflito bem gerido fortalece relações.",
    subPhases: [
      {
        id: "5-1",
        title: "Entender o Conflito",
        description:
          "Todo conflito tem uma raiz. Identificá-la é o primeiro passo.",
        items: [
          {
            id: "5-1-tip",
            type: "tip",
            icon: "🌱",
            title: "A raiz de todo conflito",
            content:
              "Conflitos raramente são sobre o que parecem.\n\nDebaixo de toda discussão há uma necessidade não atendida:\n🤝 Reconhecimento · 🔒 Segurança · 🧠 Autonomia · 💬 Ser ouvido\n\nA necessidade real, a solução costuma ser mais simples.",
          },
        ],
      },
      {
        id: "5-2",
        title: "Resolver Conflitos",
        description: "Identificar é metade. Saber conduzir é a outra metade.",
        items: [
          {
            id: "5-2-tip",
            type: "tip",
            icon: "🧭",
            title: "Os 4 passos da resolução",
            content:
              "1️⃣ OUÇA CADA PARTE separadamente\n2️⃣ IDENTIFIQUE a necessidade real de cada um\n3️⃣ ENCONTRE O TERRENO COMUM\n4️⃣ FACILITE O DIÁLOGO com foco no futuro\n\n⚠️ Tomar partido = perder a credibilidade de ambos.",
          },
        ],
      },
      {
        id: "5-3",
        title: "Conflitos Difíceis",
        description:
          "Alguns conflitos têm mais camadas. Os cenários mais desafiadores.",
        items: [
          {
            id: "5-3-tip",
            type: "tip",
            icon: "🧩",
            title: "Conflitos sobre poder",
            content:
              "Sinais de conflito de poder:\n• A pessoa não aceita nenhuma solução\n• Cada resolução cria um novo problema\n• O comportamento piora quando você cresce\n\nEstrategia: nomeie o padrão, não o episódio.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    number: 6,
    icon: "📱",
    title: "Comunicação Digital",
    description: "Texto não tem tom, expressão facial nem contexto.",
    subPhases: [
      {
        id: "6-1",
        title: "Mensagens e E-mails",
        description:
          "A maioria dos conflitos digitais começa com uma mensagem mal interpretada.",
        items: [
          {
            id: "6-1-tip",
            type: "tip",
            icon: "✉️",
            title: "O teste do pior tom possível",
            content:
              "Antes de enviar:\n\n📖 Releia imaginando que o receptor está de péssimo humor.\n\nSe ainda funcionar → envie.\nSe parecer agressivo → revise.\n\nTexto não tem tom de voz nem expressão facial.",
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
            title: "Privado vs público no digital",
            content:
              "🔒 PRIVADO: conflito, feedback, problema pessoal, 1-2 pessoas\n📢 PÚBLICO: avisos gerais, informações para todos, celebrações\n\nMaior erro: resolver em público o que deveria ser privado.",
          },
        ],
      },
      {
        id: "6-3",
        title: "Reuniões Virtuais",
        description: "Reuniões online têm suas próprias regras assertivas.",
        items: [
          {
            id: "6-3-tip",
            type: "tip",
            icon: "💻",
            title: "Presença digital",
            content:
              "📷 Câmera ligada = presença\n🎤 Microfone em silêncio = respeito\n⌨️ Chat ativo = participação sem interromper\n🔇 Silêncio total longo = ausência percebida\n\nAssertividade online: peça a palavra no chat antes de falar.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    number: 7,
    icon: "🔄",
    title: "Feedback e Desenvolvimento",
    description:
      "Feedback bem dado transforma. Feedback evitado perpetua problemas.",
    subPhases: [
      {
        id: "7-1",
        title: "Dar Feedback",
        description: "Uma das habilidades mais difíceis e mais impactantes.",
        items: [
          {
            id: "7-1-tip",
            type: "tip",
            icon: "🎯",
            title: "O modelo SBI",
            content:
              "📍 SITUAÇÃO: quando e onde aconteceu\n🎬 COMPORTAMENTO: o que a pessoa fez (observável)\n💥 IMPACTO: o efeito concreto\n\nElimina julgamentos, generalizações e ataques à personalidade.",
          },
        ],
      },
      {
        id: "7-2",
        title: "Receber Feedback",
        description:
          "Saber receber é tão importante quanto saber dar. E mais raro.",
        items: [
          {
            id: "7-2-tip",
            type: "tip",
            icon: "🎁",
            title: "Feedback ativa ameaça",
            content:
              'Receber feedback ativa o circuito cerebral da ameaça — é neurológico.\n\nComo treinar:\n🛑 Pause antes de responder\n🔍 "O que nesse feedback pode ser verdade?"\n🙏 Agradeça antes de contestar',
          },
        ],
      },
      {
        id: "7-3",
        title: "Cultura de Feedback",
        description: "O maior impacto quando se torna hábito de um grupo.",
        items: [
          {
            id: "7-3-tip",
            type: "tip",
            icon: "🌱",
            title: "Como criar cultura de feedback",
            content:
              "Cultura se cria com comportamento:\n✅ Peça feedback ativamente\n✅ Agradeça publicamente quem deu feedback difícil\n✅ Admita erros e o que aprendeu\n✅ Feedback frequente > avaliação anual\n\nO que você modela, o grupo replica.",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    number: 8,
    icon: "🏆",
    title: "Liderança Assertiva",
    description:
      "Liderar é comunicar. Suas escolhas moldam a cultura do grupo.",
    subPhases: [
      {
        id: "8-1",
        title: "Clareza e Direção",
        description:
          "Líderes assertivos são claros nas expectativas e abertos nas conversas.",
        items: [
          {
            id: "8-1-tip",
            type: "tip",
            icon: "🧭",
            title: "O que líderes assertivos fazem diferente",
            content:
              "1️⃣ EXPECTATIVAS CLARAS — não deixam adivinhar\n2️⃣ ABERTURA CONSISTENTE — criam espaço para discordância\n3️⃣ RESPONSABILIDADE PÚBLICA — assumem erros na frente da equipe\n\nO que o líder tolera em silêncio, o time interpreta como aprovação.",
          },
        ],
      },
      {
        id: "8-2",
        title: "Criar Ambiente Seguro",
        description:
          "Segurança psicológica é o terreno onde a comunicação assertiva floresce.",
        items: [
          {
            id: "8-2-tip",
            type: "tip",
            icon: "🏰",
            title: "Segurança psicológica",
            content:
              '= você não será punido por falar o que pensa, perguntar ou admitir um erro.\n\n✅ CRIA: "Boa pergunta — eu também não tinha pensado nisso"\n✅ CRIA: "Errei. O que aprendemos?"\n❌ DESTRÓI: "Como você não sabia isso?"\n\nUm episódio de destruição apaga semanas de construção.',
          },
        ],
      },
      {
        id: "8-3",
        title: "Situações Extremas",
        description: "Onde a assertividade encontra os maiores desafios.",
        items: [
          {
            id: "8-3-tip",
            type: "tip",
            icon: "⚡",
            title: "Liderança assertiva sob pressão",
            content:
              "O que separa líderes assertivos:\n🧊 Mantêm a calma quando outros perdem\n🎯 Focam no problema, não nas pessoas\n🔍 Buscam entender antes de decidir\n💬 Comunicam com honestidade mesmo quando é difícil\n🤝 Assumem responsabilidade publicamente",
          },
        ],
      },
    ],
  },
];
