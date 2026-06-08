import type { Topic } from "@/types/game";

export const PHASES_DATA: Topic[] = [
  {
    id: 1,
    number: 1,
    icon: "🗣️",
    title: "Expressao e Clareza",
    description: "Comunicar com clareza e a base de tudo.",
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
              "Antes de enviar qualquer mensagem importante:\n\nO QUE voce esta comunicando?\nPOR QUE isso importa para o receptor?\nCOMO ele deve agir?\n\nSe nao souber responder uma das tres, revise antes de enviar.",
          },
        ],
      },
      {
        id: "1-2",
        title: "Clareza Verbal",
        description: "Como voce fala importa tanto quanto o que voce fala.",
        items: [
          {
            id: "1-2-tip",
            type: "tip",
            icon: "🎙️",
            title: "As 3 camadas da comunicacao",
            content:
              "7% das palavras\n38% do tom de voz\n55% da linguagem corporal\n\nTudo bem pode ser reconfortante ou ameacador dependendo de como e dito.",
          },
        ],
      },
      {
        id: "1-3",
        title: "Clareza sob Pressao",
        description: "Quando a pressao sobe, a clareza cai.",
        items: [
          {
            id: "1-3-tip",
            type: "tip",
            icon: "🧘",
            title: "A pausa assertiva",
            content:
              "Antes de responder algo importante sob pressao:\n\nDiga: Deixa eu pensar um segundo antes de responder.\n\nEssa frase te da tempo e sinaliza que voce leva a conversa a serio.",
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
    description: "Ouvir de verdade e a habilidade mais rara e mais poderosa.",
    subPhases: [
      {
        id: "2-1",
        title: "Presenca Total",
        description: "Escuta ativa comeca com presenca real.",
        items: [
          {
            id: "2-1-tip",
            type: "tip",
            icon: "🧠",
            title: "O ciclo da escuta ativa",
            content:
              "3 etapas em ordem:\n\n1. RECEBER: ouvir sem interromper\n2. PROCESSAR: o que a pessoa realmente esta dizendo?\n3. RESPONDER: com base no que foi dito\n\nA maioria pula direto para o 3 ainda no 1.",
          },
        ],
      },
      {
        id: "2-2",
        title: "Escuta em Divergencias",
        description: "Ouvir quem discorda e muito mais dificil e mais valioso.",
        items: [
          {
            id: "2-2-tip",
            type: "tip",
            icon: "🤺",
            title: "Ouvir para entender",
            content:
              "Em divergencias, 90% ouvem para rebater.\n\nDesafio: resumir a perspectiva oposta tao bem que a outra pessoa diria: e exatamente isso.\n\nAntes de discordar: So para garantir que entendi, voce esta dizendo que...",
          },
        ],
      },
      {
        id: "2-3",
        title: "Perguntas que Aprofundam",
        description: "As perguntas certas revelam o que as palavras nao dizem.",
        items: [
          {
            id: "2-3-tip",
            type: "tip",
            icon: "❓",
            title: "Perguntas abertas vs fechadas",
            content:
              "FECHADAS encerram: Voce ficou bravo? Geram sim ou nao.\n\nABERTAS constroem: Como voce se sentiu? Convidam ao aprofundamento.\n\nTroque Voce por Como, O que, Me conta sobre.",
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
    description: "Ser assertivo e manter sua autenticidade com respeito.",
    subPhases: [
      {
        id: "3-1",
        title: "Fundamentos",
        description: "Assertividade vai alem de falar o que pensa.",
        items: [
          {
            id: "3-1-tip",
            type: "tip",
            icon: "⚖️",
            title: "O triangulo da comunicacao",
            content:
              "PASSIVO: evita expressar, gera ressentimento\nAGRESSIVO: expressa sem considerar, dana relacoes\nASSERTIVO: expressa com respeito, gera resultados\n\nA maioria oscila entre passivo e agressivo.",
          },
        ],
      },
      {
        id: "3-2",
        title: "Sob Pressao Social",
        description:
          "Manter a postura quando o grupo pressiona e onde muitos falham.",
        items: [
          {
            id: "3-2-tip",
            type: "tip",
            icon: "🧲",
            title: "Como a pressao social funciona",
            content:
              "Pressao social ativa o instinto de conformidade, e neurologico.\n\nReconheca: Estou sentindo pressao para concordar\nPause antes de responder\nPergunte: Estou cedendo por argumentos ou por desconforto?",
          },
        ],
      },
      {
        id: "3-3",
        title: "Assertividade em Hierarquias",
        description: "Ser assertivo com autoridades exige mais habilidade.",
        items: [
          {
            id: "3-3-tip",
            type: "tip",
            icon: "📊",
            title: "Assertividade ascendente",
            content:
              "Com pessoas de maior poder:\n\n1. DADOS: Os numeros mostram que...\n2. IMPACTO: O resultado disso e...\n3. PROPOSTA: Minha sugestao seria...\n4. ABERTURA: O que voce acha?",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    number: 4,
    icon: "🛡️",
    title: "Gestao de Limites",
    description: "Limites saudaveis protegem tanto voce quanto o outro.",
    subPhases: [
      {
        id: "4-1",
        title: "Identificar Limites",
        description: "Antes de comunicar um limite, saiba onde ele esta.",
        items: [
          {
            id: "4-1-tip",
            type: "tip",
            icon: "🔍",
            title: "Os 4 tipos de limite",
            content:
              "TEMPO: o que voce nao pode comprometer\nENERGIA: o que te esgota\nVALORES: o que vai contra o que voce acredita\nRELACOES: o que e inaceitavel em como voce e tratado\n\nSinal de limite ultrapassado: ressentimento.",
          },
        ],
      },
      {
        id: "4-2",
        title: "Comunicar Limites",
        description:
          "Saber onde esta o limite e o comeco. Comunica-lo e a habilidade real.",
        items: [
          {
            id: "4-2-tip",
            type: "tip",
            icon: "📢",
            title: "A formula para comunicar limites",
            content:
              "1. OBSERVACAO: Quando [situacao especifica]...\n2. IMPACTO: ...eu [como te afeta]...\n3. PEDIDO: ...e preciso que [pedido concreto].\n\nEspecificidade e essencial. Limites vagos nao funcionam.",
          },
        ],
      },
      {
        id: "4-3",
        title: "Manter Limites",
        description: "Consistencia e o que torna limites reais.",
        items: [
          {
            id: "4-3-tip",
            type: "tip",
            icon: "🔄",
            title: "Por que limites precisam ser repetidos",
            content:
              "Quando alguem ultrapassa um limite comunicado, nem sempre e desonestidade, e habito.\n\nRepita o limite com calma\nSeja especifico sobre o que aconteceu\nMencione a consequencia se continuar",
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
    description: "Conflito bem gerido fortalece relacoes.",
    subPhases: [
      {
        id: "5-1",
        title: "Entender o Conflito",
        description: "Todo conflito tem uma raiz.",
        items: [
          {
            id: "5-1-tip",
            type: "tip",
            icon: "🌱",
            title: "A raiz de todo conflito",
            content:
              "Conflitos raramente sao sobre o que parecem.\n\nDebaixo ha uma necessidade nao atendida:\nReconhecimento\nSeguranca\nAutonomia\nSer ouvido\n\nIdentifique a necessidade real, a solucao fica mais simples.",
          },
        ],
      },
      {
        id: "5-2",
        title: "Resolver Conflitos",
        description: "Identificar e metade. Conduzir e a outra metade.",
        items: [
          {
            id: "5-2-tip",
            type: "tip",
            icon: "🧭",
            title: "Os 4 passos da resolucao",
            content:
              "1. OUCA CADA PARTE separadamente\n2. IDENTIFIQUE a necessidade real de cada um\n3. ENCONTRE O TERRENO COMUM\n4. FACILITE O DIALOGO com foco no futuro\n\nTomar partido significa perder a credibilidade de ambos.",
          },
        ],
      },
      {
        id: "5-3",
        title: "Conflitos Dificeis",
        description: "Os cenarios mais desafiadores.",
        items: [
          {
            id: "5-3-tip",
            type: "tip",
            icon: "🧩",
            title: "Conflitos sobre poder",
            content:
              "Sinais de conflito de poder:\nPessoa nao aceita nenhuma solucao\nCada resolucao cria novo problema\nComportamento piora quando voce cresce\n\nEstrategia: nomeie o padrao, nao o episodio.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    number: 6,
    icon: "📱",
    title: "Comunicacao Digital",
    description: "Texto nao tem tom, expressao facial nem contexto.",
    subPhases: [
      {
        id: "6-1",
        title: "Mensagens e E-mails",
        description:
          "A maioria dos conflitos digitais comeca com mensagem mal interpretada.",
        items: [
          {
            id: "6-1-tip",
            type: "tip",
            icon: "✉️",
            title: "O teste do pior tom possivel",
            content:
              "Antes de enviar:\n\nReleia imaginando que o receptor esta de pessimo humor.\n\nSe ainda funcionar, envie.\nSe parecer agressivo, revise.\n\nTexto nao tem tom de voz nem expressao facial.",
          },
        ],
      },
      {
        id: "6-2",
        title: "Grupos e Redes Sociais",
        description: "Grupos amplificam a comunicacao para o bem e para o mal.",
        items: [
          {
            id: "6-2-tip",
            type: "tip",
            icon: "👥",
            title: "Privado vs publico no digital",
            content:
              "PRIVADO: conflito, feedback, problema pessoal\nPUBLICO: avisos gerais, celebracoes\n\nMaior erro: resolver em publico o que deveria ser privado.",
          },
        ],
      },
      {
        id: "6-3",
        title: "Reunioes Virtuais",
        description: "Reunioes online tem suas proprias regras.",
        items: [
          {
            id: "6-3-tip",
            type: "tip",
            icon: "💻",
            title: "Presenca digital",
            content:
              "Camera ligada: presenca\nMicrofone em silencio: respeito\nChat ativo: participacao sem interromper\nSilencio total longo: ausencia percebida",
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
        description: "Uma das habilidades mais dificeis e mais impactantes.",
        items: [
          {
            id: "7-1-tip",
            type: "tip",
            icon: "🎯",
            title: "O modelo SBI",
            content:
              "SITUACAO: quando e onde aconteceu\nCOMPORTAMENTO: o que a pessoa fez (observavel)\nIMPACTO: o efeito concreto\n\nElimina julgamentos e ataques a personalidade.",
          },
        ],
      },
      {
        id: "7-2",
        title: "Receber Feedback",
        description: "Saber receber e tao importante quanto saber dar.",
        items: [
          {
            id: "7-2-tip",
            type: "tip",
            icon: "🎁",
            title: "Feedback ativa ameaca",
            content:
              "Receber feedback ativa o circuito cerebral da ameaca, e neurologico.\n\nPause antes de responder\nO que nesse feedback pode ser verdade?\nAgradeça antes de contestar",
          },
        ],
      },
      {
        id: "7-3",
        title: "Cultura de Feedback",
        description: "O maior impacto quando se torna habito de um grupo.",
        items: [
          {
            id: "7-3-tip",
            type: "tip",
            icon: "🌱",
            title: "Como criar cultura de feedback",
            content:
              "Peca feedback ativamente\nAgradeça publicamente quem deu feedback dificil\nAdmita erros e o que aprendeu\nFeedback frequente e melhor que avaliacao anual\n\nO que voce modela, o grupo replica.",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    number: 8,
    icon: "🏆",
    title: "Lideranca Assertiva",
    description:
      "Liderar e comunicar. Suas escolhas moldam a cultura do grupo.",
    subPhases: [
      {
        id: "8-1",
        title: "Clareza e Direcao",
        description: "Lideres assertivos sao claros nas expectativas.",
        items: [
          {
            id: "8-1-tip",
            type: "tip",
            icon: "🧭",
            title: "O que lideres assertivos fazem diferente",
            content:
              "1. EXPECTATIVAS CLARAS: nao deixam adivinhar\n2. ABERTURA CONSISTENTE: criam espaco para discordancia\n3. RESPONSABILIDADE PUBLICA: assumem erros na frente da equipe\n\nO que o lider tolera em silencio, o time interpreta como aprovacao.",
          },
        ],
      },
      {
        id: "8-2",
        title: "Criar Ambiente Seguro",
        description:
          "Seguranca psicologica e o terreno onde a assertividade floresce.",
        items: [
          {
            id: "8-2-tip",
            type: "tip",
            icon: "🏰",
            title: "Seguranca psicologica",
            content:
              "Significa nao ser punido por falar o que pensa, perguntar ou admitir erro.\n\nCRIA: Boa pergunta, eu tambem nao tinha pensado nisso\nCRIA: Errei. O que aprendemos?\nDESTROI: Como voce nao sabia isso?",
          },
        ],
      },
      {
        id: "8-3",
        title: "Situacoes Extremas",
        description: "Onde a assertividade encontra os maiores desafios.",
        items: [
          {
            id: "8-3-tip",
            type: "tip",
            icon: "⚡",
            title: "Lideranca assertiva sob pressao",
            content:
              "O que separa lideres assertivos:\nMantêm a calma quando outros perdem\nFocam no problema, nao nas pessoas\nBuscam entender antes de decidir\nComunicam com honestidade mesmo quando e dificil",
          },
        ],
      },
    ],
  },
];

s;
