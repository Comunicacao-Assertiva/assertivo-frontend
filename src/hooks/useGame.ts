const FALLBACK_QUESTIONS = (topicTitle: string): ChoiceItem[] => [
  {
    id: `fb-1-${topicTitle}`,
    type: "choice",
    tag: "💬 Situação do dia a dia",
    question:
      "Alguém te faz uma crítica inesperada em público. O que você faz?",
    choices: [
      {
        id: "a",
        text: "Rebate imediatamente sem ouvir completamente.",
        points: 0,
        type: "wrong",
        feedback:
          "Reagir sem ouvir raramente resolve. A defensividade fecha o diálogo.",
      },
      {
        id: "b",
        text: "Ouve com atenção, agradece e pede exemplos concretos.",
        points: 100,
        type: "correct",
        feedback:
          "Abertura genuína antes de contestar. Você aprende mais e responde melhor.",
      },
      {
        id: "c",
        text: "Concorda com tudo para evitar conflito.",
        points: 25,
        type: "partial",
        feedback:
          "Evitar o conflito tem um custo: você não processa nem resolve nada de verdade.",
      },
    ],
  },
  {
    id: `fb-2-${topicTitle}`,
    type: "choice",
    tag: "🤝 Relação interpessoal",
    question:
      "Você precisa dizer não para alguém próximo que pede um favor além do que consegue fazer. Como age?",
    choices: [
      {
        id: "a",
        text: "Aceita mesmo sem querer para não decepcionar.",
        points: 0,
        type: "wrong",
        feedback:
          "Aceitar contra sua vontade gera ressentimento e prejudica o relacionamento.",
      },
      {
        id: "b",
        text: "Recusa com clareza, explica o motivo e oferece uma alternativa.",
        points: 100,
        type: "correct",
        feedback:
          "Direto, respeitoso e construtivo. Isso é assertividade na prática.",
      },
      {
        id: "c",
        text: "Inventa uma desculpa para evitar a conversa direta.",
        points: 25,
        type: "partial",
        feedback:
          "Resolve o momento mas cria um padrão de desonestidade na relação.",
      },
    ],
  },
  {
    id: `fb-3-${topicTitle}`,
    type: "choice",
    tag: "💡 Tomada de decisão",
    question:
      "Uma decisão importante está sendo tomada em grupo e você discorda da direção. O que você faz?",
    choices: [
      {
        id: "a",
        text: "Fica quieto para não ser o único discordante.",
        points: 0,
        type: "wrong",
        feedback:
          "Silenciar sua perspectiva válida priva o grupo de informação importante.",
      },
      {
        id: "b",
        text: 'Pede espaço: "Tenho uma perspectiva diferente — posso compartilhar?"',
        points: 100,
        type: "correct",
        feedback:
          "Você contribui sem impor e cria diálogo real. Assertividade que serve ao grupo.",
      },
      {
        id: "c",
        text: "Concorda na reunião mas reclama depois para outros.",
        points: 0,
        type: "wrong",
        feedback: "Triangulação não resolve e cria ambiente de desconfiança.",
      },
    ],
  },
];
