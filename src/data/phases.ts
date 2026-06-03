import type { Phase } from "@/types/game";

export const PHASES_DATA: Phase[] = [
  {
    id: 1,
    number: 1,
    title: "Expressão e Clareza",
    description:
      "Fase inicial — as respostas erradas são claramente inadequadas. Aquece o motor!",
    tip: "💡 Assertividade é falar o que precisa ser dito, com respeito. Nem silêncio, nem agressão.",
    scenarios: [
      {
        id: "1-1",
        tag: "📋 Aviso de Reunião",
        question:
          "Seu gestor pediu para você avisar a equipe sobre uma mudança de horário de reunião. Qual a melhor abordagem?",
        choices: [
          {
            id: "a",
            text: "Avisa só as pessoas com quem tem mais contato.",
            points: 0,
            type: "wrong",
            feedback:
              "Comunicação parcial cria exclusão. Todos os afetados precisam receber a mesma informação.",
          },
          {
            id: "b",
            text: "Manda mensagem clara para o grupo com novo horário, motivo e quem confirmar dúvidas.",
            points: 100,
            type: "correct",
            feedback:
              "Perfeito! O quê, por quê e como tirar dúvidas. Clareza comunicacional completa.",
          },
          {
            id: "c",
            text: "Avisa verbalmente só quem encontrar pelo caminho.",
            points: 25,
            type: "partial",
            feedback:
              "A intenção é boa, mas comunicação verbal informal não garante que todos recebam a mesma informação.",
          },
        ],
      },
      {
        id: "1-2",
        tag: "😤 Pedido Excessivo",
        question:
          "Um colega pede constantemente sua ajuda com tarefas que são responsabilidade dele. Você está sobrecarregado. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Continua ajudando sem dizer nada para não criar mal-estar.",
            points: 0,
            type: "wrong",
            feedback:
              "Silêncio aqui é passividade que prejudica você e não ajuda o colega a crescer.",
          },
          {
            id: "b",
            text: "Fala claramente que não pode continuar ajudando e explica brevemente o motivo.",
            points: 100,
            type: "correct",
            feedback:
              "Direto e respeitoso. Comunicou seu limite sem atacar — assertividade básica.",
          },
          {
            id: "c",
            text: "Reclama do colega para outras pessoas mas nunca fala com ele diretamente.",
            points: 0,
            type: "wrong",
            feedback:
              "Triangulação — falar dos outros pelas costas em vez de falar diretamente não resolve nada.",
          },
        ],
      },
      {
        id: "1-3",
        tag: "🗣️ Discordância",
        question:
          "Numa reunião, seu gestor propõe uma abordagem que você acredita que não vai funcionar. Como você age?",
        choices: [
          {
            id: "a",
            text: "Fica quieto — não é seu lugar questionar o gestor na frente de todos.",
            points: 25,
            type: "partial",
            feedback:
              "Às vezes o timing importa, mas calar uma perspectiva útil por hierarquia é perda para todos.",
          },
          {
            id: "b",
            text: "Diz que a ideia é ruim na frente de todos, sem explicar o porquê.",
            points: 0,
            type: "wrong",
            feedback:
              "Discordância sem argumento soa como sabotagem, não como contribuição.",
          },
          {
            id: "c",
            text: 'Pede a palavra: "Tenho uma preocupação sobre esse ponto — posso compartilhar?"',
            points: 100,
            type: "correct",
            feedback:
              "Assertividade saudável. Você contribuiu, pediu espaço e trouxe sua perspectiva com respeito.",
          },
        ],
      },
      {
        id: "1-4",
        tag: "📧 E-mail Urgente",
        question:
          "Você precisa pedir informações urgentes a um colega que frequentemente demora a responder. Como você aborda?",
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
              "Contexto + prazo + pedido direto. Isso facilita a resposta rápida sem criar atrito.",
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
        id: "1-5",
        tag: "🤔 Erro seu",
        question:
          "Você percebeu que enviou um relatório com dados errados para toda a equipe. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Espera alguém reclamar antes de agir.",
            points: 0,
            type: "wrong",
            feedback:
              "Você já sabe do erro. Esperar alguém reclamar é escolher a conveniência acima da integridade.",
          },
          {
            id: "b",
            text: "Envia imediatamente uma correção para todos, sem excessos de desculpa — apenas a correção clara.",
            points: 100,
            type: "correct",
            feedback:
              "Proatividade e integridade. Uma retificação rápida e direta é muito mais eficaz do que longa mensagem de desculpas.",
          },
          {
            id: "c",
            text: "Envia correção só para quem você acha que vai usar os dados.",
            points: 25,
            type: "partial",
            feedback:
              "Parcial. Se o erro foi para todos, a correção precisa chegar a todos.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    number: 2,
    title: "Escuta Ativa",
    description:
      "Uma opção errada começa a parecer gentil. Cuidado com os instintos.",
    tip: "💡 Escuta ativa é presença total — não é esperar sua vez de falar.",
    scenarios: [
      {
        id: "2-1",
        tag: "💬 Desabafo",
        question:
          "Um amigo está desabafando sobre um problema. No meio da conversa você percebe que ele está cometendo um erro de julgamento. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Interrompe para corrigir o erro assim que percebe — melhor cedo do que tarde.",
            points: 0,
            type: "wrong",
            feedback:
              "Interromper sinaliza que você está mais interessado em resolver do que em ouvir. Ele precisa ser ouvido primeiro.",
          },
          {
            id: "b",
            text: 'Ouve até o fim e depois pergunta: "Tem um ponto que quero entender melhor — posso compartilhar uma perspectiva diferente?"',
            points: 100,
            type: "correct",
            feedback:
              "Ouviu completamente, pediu permissão e só então ofereceu sua visão. Escuta ativa com respeito.",
          },
          {
            id: "c",
            text: "Ouve tudo e não fala nada sobre o erro para não desanimá-lo.",
            points: 25,
            type: "partial",
            feedback:
              "Parece gentil, mas omitir informação útil por medo de desanimar não é cuidado real.",
          },
        ],
      },
      {
        id: "2-2",
        tag: "📊 Reunião Rápida",
        question:
          "Seu gestor explica um problema complexo muito rapidamente. Você está perdendo o fio. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Fica quieto, anota o que consegue e depois pergunta para colegas o que ficou faltando.",
            points: 25,
            type: "partial",
            feedback:
              "Parece discreto, mas você vai trabalhar com informação incompleta e qualquer erro será consequência disso.",
          },
          {
            id: "b",
            text: 'Aguarda uma pausa natural e diz: "Quero confirmar se entendi certo — posso resumir o que captei?"',
            points: 100,
            type: "correct",
            feedback:
              "Correto. Confirmar o entendimento demonstra atenção e responsabilidade, não fraqueza.",
          },
          {
            id: "c",
            text: "Finge que entendeu para não parecer desatento.",
            points: 0,
            type: "wrong",
            feedback:
              "Fingir compreensão é uma das formas mais comuns de falha de comunicação — e cobra seu preço depois.",
          },
        ],
      },
      {
        id: "2-3",
        tag: "📣 Feedback Não Pedido",
        question:
          "Um colega apresentou um projeto com orgulho. Você percebeu falhas sérias. Ele não pediu sua opinião. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Não fala nada — ele não pediu sua opinião.",
            points: 25,
            type: "partial",
            feedback:
              "Respeitar o espaço é importante, mas omitir informações que podem evitar um problema real também tem custo.",
          },
          {
            id: "b",
            text: "Aponta as falhas na frente de todos logo após a apresentação.",
            points: 0,
            type: "wrong",
            feedback:
              "Feedback público não solicitado soa como sabotagem, não como ajuda.",
          },
          {
            id: "c",
            text: 'Busca uma conversa privada: "Posso compartilhar algumas observações? Acho que podem ser úteis antes do próximo passo."',
            points: 100,
            type: "correct",
            feedback:
              "Espaço privado, permissão pedida, intenção clara de ajudar. Comunicação assertiva com consideração.",
          },
        ],
      },
      {
        id: "2-4",
        tag: "🤝 Concordância Forçada",
        question:
          "Numa discussão em grupo, todo mundo parece concordar com uma ideia que você acha problemática. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Concorda também para não ser o único discordante.",
            points: 0,
            type: "wrong",
            feedback:
              "Concordância por pressão de grupo (groupthink) é exatamente o que enfraquece decisões coletivas.",
          },
          {
            id: "b",
            text: '"Tenho uma perspectiva diferente — posso compartilhar antes de fecharmos?"',
            points: 100,
            type: "correct",
            feedback:
              "Excelente. Você não deixou o consenso silenciar uma perspectiva relevante.",
          },
          {
            id: "c",
            text: "Fica quieto mas depois reclama da decisão para outros.",
            points: 0,
            type: "wrong",
            feedback:
              "Silêncio no momento certo + reclamação depois é a pior combinação: não contribuiu e ainda cria mal-estar.",
          },
        ],
      },
      {
        id: "2-5",
        tag: "🎯 Pedido de Conselho",
        question:
          "Um colega pede sua opinião sobre uma decisão de carreira. Você tem uma opinião clara, mas sabe que ele provavelmente não vai gostar. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Diz o que ele quer ouvir para não criar situação desconfortável.",
            points: 0,
            type: "wrong",
            feedback:
              "Conselho desonesto é uma forma de desrespeito disfarçado de gentileza. Ele pediu sua opinião real.",
          },
          {
            id: "b",
            text: 'Compartilha sua perspectiva honesta com cuidado: "Posso ser direto? Não é o que você espera ouvir, mas..."',
            points: 100,
            type: "correct",
            feedback:
              "Honestidade com cuidado. Você respeita o pedido e a pessoa ao mesmo tempo.",
          },
          {
            id: "c",
            text: "Diz que não sabe opinar para não ter que dar uma resposta difícil.",
            points: 25,
            type: "partial",
            feedback:
              "Evitar a desconforto parece razoável, mas você deixou de ajudar alguém que confiou em você.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    number: 3,
    title: "Postura Assertiva",
    description:
      "Duas respostas começam a parecer corretas. A diferença está nos detalhes.",
    tip: "💡 Assertividade real é manter sua posição por razões — não mudar por pressão social.",
    scenarios: [
      {
        id: "3-1",
        tag: "👥 Pressão Social",
        question:
          "Você expressou uma posição numa reunião. Colegas começam a pressionar para você mudar de ideia — mas sem novos argumentos. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Recua para preservar o bom relacionamento com o grupo.",
            points: 0,
            type: "wrong",
            feedback:
              "Ceder à pressão social sem novos argumentos ensina ao grupo que pressão funciona com você.",
          },
          {
            id: "b",
            text: "Mantém a posição em silêncio e para de responder.",
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
        id: "3-2",
        tag: "⚠️ Sobrecarga Visível",
        question:
          "Seu gestor pergunta publicamente, na frente da equipe, se você consegue pegar mais uma tarefa urgente. Você está no limite. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Aceita na frente de todos para não parecer que está reclamando.",
            points: 0,
            type: "wrong",
            feedback:
              "Aceitar por pressão do ambiente — não por capacidade real — resultará em trabalho de baixa qualidade.",
          },
          {
            id: "b",
            text: "Diz que não pode e explica toda sua carga detalhadamente para o grupo.",
            points: 25,
            type: "partial",
            feedback:
              "Melhor do que aceitar, mas expor sua carga detalhadamente em público pode soar como reclamação.",
          },
          {
            id: "c",
            text: '"Posso conversar sobre isso depois da reunião? Quero entender o escopo e ver como encaixo nas prioridades."',
            points: 100,
            type: "correct",
            feedback:
              "Não cedeu, não recusou publicamente, criou o espaço certo para uma conversa real.",
          },
        ],
      },
      {
        id: "3-3",
        tag: "💼 Crédito Não Dado",
        question:
          "Numa reunião, seu gestor apresentou uma ideia como se fosse dele. Era sua, desenvolvida por você. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Não faz nada para não parecer egocêntrico.",
            points: 25,
            type: "partial",
            feedback:
              "Parece maduro, mas é passividade que prejudica sua carreira. Se você não nomeia, ninguém nomeará.",
          },
          {
            id: "b",
            text: "Interrompe e diz para todos que a ideia foi sua.",
            points: 25,
            type: "partial",
            feedback:
              "A intenção é legítima, mas o confronto público raramente resolve e pode criar mais problemas.",
          },
          {
            id: "c",
            text: 'Ao fim da reunião, pede conversa particular com o gestor: "Quero conversar sobre como atribuímos crédito — isso é importante para mim."',
            points: 100,
            type: "correct",
            feedback:
              "Espaço certo, tom direto, intenção clara. Sem episódio público, sem silenciar.",
          },
        ],
      },
      {
        id: "3-4",
        tag: "🚫 Dizer Não",
        question:
          "Um amigo pede um favor que comprometeria seus valores pessoais. Você não quer fazer, mas tem dificuldade de recusar. Como você age?",
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
              "Resolve no curto prazo, mas desculpas falsas criam distância e desconfiança.",
          },
          {
            id: "c",
            text: '"Não consigo fazer isso — não está alinhado com o que acredito. Mas se precisar de ajuda com outra coisa, pode contar comigo."',
            points: 100,
            type: "correct",
            feedback:
              "Recusou com honestidade, manteve os limites e preservou a amizade com uma alternativa. Isso é assertividade.",
          },
        ],
      },
      {
        id: "3-5",
        tag: "🎤 Reconhecimento Público",
        question:
          "Seu gestor elogia publicamente um trabalho seu, mas atribui parte do crédito a um colega que não contribuiu. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Fica quieto — o elogio principal foi seu, não precisa corrigir.",
            points: 25,
            type: "partial",
            feedback:
              "Parece diplomático, mas deixar crédito incorreto circulando pode gerar problemas futuros e injustiças.",
          },
          {
            id: "b",
            text: 'Corrige publicamente na hora: "Só eu trabalhei nesse projeto."',
            points: 25,
            type: "partial",
            feedback:
              "A intenção é legítima, mas a forma pública pode criar constrangimento desnecessário.",
          },
          {
            id: "c",
            text: "Agradece o reconhecimento e depois esclarece em particular com o gestor quem contribuiu com o quê.",
            points: 100,
            type: "correct",
            feedback:
              "Você recebeu o reconhecimento, preservou o momento e corrigiu a informação no espaço certo.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    number: 4,
    title: "Gestão de Limites",
    description:
      "As respostas parciais ficam muito tentadoras aqui. Leia cada opção com atenção.",
    tip: "💡 Limites assertivos protegem tanto você quanto o outro. Dizer não com clareza é um ato de respeito.",
    scenarios: [
      {
        id: "4-1",
        tag: "⏰ Prazo Impossível",
        question:
          "Seu cliente exige um prazo que é tecnicamente impossível de cumprir com qualidade. Como você responde?",
        choices: [
          {
            id: "a",
            text: "Aceita o prazo para não perder o cliente e trabalha o que puder.",
            points: 0,
            type: "wrong",
            feedback:
              "Aceitar prazo impossível garante entrega ruim. Você perde o cliente de qualquer forma — mas também a credibilidade.",
          },
          {
            id: "b",
            text: '"Esse prazo compromete a qualidade. Posso entregar [X] até sua data ou [Y completo] em [data realista]. Qual prefere?"',
            points: 100,
            type: "correct",
            feedback:
              "Assertividade profissional. Você foi honesto sobre os limites e deu ao cliente opções reais para decidir.",
          },
          {
            id: "c",
            text: "Negocia um prazo ligeiramente menor do que o ideal para parecer flexível.",
            points: 25,
            type: "partial",
            feedback:
              "Negociar é válido, mas ceder mais do que consegue entregar ainda cria o mesmo problema no final.",
          },
        ],
      },
      {
        id: "4-2",
        tag: "📱 Mensagens Fora do Horário",
        question:
          "Seu gestor tem o hábito de mandar mensagens de trabalho às 22h esperando respostas imediatas. Isso está impactando seu descanso. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Responde sempre para mostrar comprometimento, mesmo às 22h.",
            points: 0,
            type: "wrong",
            feedback:
              "Responder sempre fora do horário valida a expectativa e perpetua o padrão. Sustentável por quanto tempo?",
          },
          {
            id: "b",
            text: "Ignora as mensagens sem comentar nada.",
            points: 25,
            type: "partial",
            feedback:
              "Melhor do que responder sempre, mas a falta de comunicação deixa expectativas no ar.",
          },
          {
            id: "c",
            text: 'Conversa com o gestor: "Quero dar 100% no trabalho. Para isso, preciso descansar à noite. Posso responder mensagens noturnas no próximo dia útil?"',
            points: 100,
            type: "correct",
            feedback:
              "Você nomeou o impacto, propôs uma solução e conectou seu limite ao desempenho profissional. Perfeito.",
          },
        ],
      },
      {
        id: "4-3",
        tag: "🤝 Favores em Cadeia",
        question:
          "Você ajudou um colega uma vez e agora ele volta constantemente pedindo mais favores, criando uma dependência. Como você age?",
        choices: [
          {
            id: "a",
            text: "Continua ajudando — você se ofereceu antes, seria inconsistente recusar agora.",
            points: 0,
            type: "wrong",
            feedback:
              "Ajudar uma vez não cria obrigação de ajudar sempre. Limites saudáveis podem (e devem) ser estabelecidos a qualquer momento.",
          },
          {
            id: "b",
            text: "Para de responder as mensagens dele gradualmente.",
            points: 25,
            type: "partial",
            feedback:
              "Evita o confronto, mas o colega fica sem entender o que aconteceu e o padrão pode voltar.",
          },
          {
            id: "c",
            text: '"Fico feliz em ajudar eventualmente, mas percebi que isso está virando rotina. Preciso focar nas minhas entregas — pode ser que eu não consiga sempre."',
            points: 100,
            type: "correct",
            feedback:
              "Honesto, gentil e claro. Você estabeleceu o limite sem romper o relacionamento.",
          },
        ],
      },
      {
        id: "4-4",
        tag: "💰 Salário Justo",
        question:
          "Você soube que um colega com menos experiência ganha mais do que você. Como você aborda com seu gestor?",
        choices: [
          {
            id: "a",
            text: "Não faz nada — falar sobre salário é constrangedor e pode soar ganancioso.",
            points: 0,
            type: "wrong",
            feedback:
              "Evitar essa conversa por medo de julgamento te prejudica financeiramente. É seu direito ser remunerado de forma justa.",
          },
          {
            id: "b",
            text: "Confronta o gestor dizendo que soube do salário do colega e isso é injusto.",
            points: 25,
            type: "partial",
            feedback:
              "A pauta é legítima, mas revelar que você sabe o salário do colega pode criar constrangimentos desnecessários.",
          },
          {
            id: "c",
            text: "Pede uma reunião para discutir seu desenvolvimento e remuneração, apresentando suas contribuições e uma referência de mercado.",
            points: 100,
            type: "correct",
            feedback:
              "Abordagem profissional e preparada. Você coloca a conversa em termos objetivos, não emocionais.",
          },
        ],
      },
      {
        id: "4-5",
        tag: "🎭 Papel Inadequado",
        question:
          "Você foi designado para uma tarefa que está claramente abaixo do seu nível de competência e não agrega ao seu desenvolvimento. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Faz sem questionar — é a empresa que decide as tarefas.",
            points: 25,
            type: "partial",
            feedback:
              "Cumprir suas responsabilidades é certo, mas não comunicar seu desenvolvimento é passividade que prejudica sua carreira.",
          },
          {
            id: "b",
            text: "Recusa a tarefa dizendo que está abaixo de você.",
            points: 0,
            type: "wrong",
            feedback:
              "Recusa direta sem diálogo pode parecer arrogância e criar conflito desnecessário.",
          },
          {
            id: "c",
            text: "Completa a tarefa e depois busca uma conversa sobre como alinhar as atribuições com seu plano de desenvolvimento.",
            points: 100,
            type: "correct",
            feedback:
              "Responsável com a entrega e assertivo com seu crescimento. O timing certo faz toda a diferença.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    number: 5,
    title: "Conflitos Interpessoais",
    description:
      "Todos as opções têm alguma lógica. Aqui começa a exigir reflexão real.",
    tip: "💡 Conflito bem gerido fortalece relações. O que você evita hoje, você paga com juros amanhã.",
    scenarios: [
      {
        id: "5-1",
        tag: "⚔️ Conflito Relatado",
        question:
          "Um membro da sua equipe vem relatar um conflito com um colega e pede que você tome uma atitude. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Chama o outro membro e apresenta o que o primeiro te contou.",
            points: 0,
            type: "wrong",
            feedback:
              "Isso viola a confidencialidade e já posiciona o segundo como réu antes de ser ouvido.",
          },
          {
            id: "b",
            text: "Diz que não interfere em conflitos pessoais entre membros.",
            points: 25,
            type: "partial",
            feedback:
              "Negar completamente o papel de liderança é irresponsabilidade disfarçada de neutralidade.",
          },
          {
            id: "c",
            text: "Ouve com atenção, mantém em confidência e diz que vai conversar com o outro membro separadamente antes de qualquer ação.",
            points: 100,
            type: "correct",
            feedback:
              "Ouvir os dois lados separadamente, preservando a confidência de cada um, é o ponto de partida de uma mediação justa.",
          },
        ],
      },
      {
        id: "5-2",
        tag: "🔥 Discussão Acalorada",
        question:
          "Numa reunião, a discussão esquenta e alguém começa a elevar a voz. Como você reage?",
        choices: [
          {
            id: "a",
            text: "Eleva a voz também para se fazer ouvir.",
            points: 0,
            type: "wrong",
            feedback:
              "Voz com voz cria caos. Quem mantém a calma tem muito mais poder de influência.",
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
        id: "5-3",
        tag: "📉 Decisão Discordante",
        question:
          "A liderança tomou uma decisão importante com a qual você discorda profundamente. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Reclama para os colegas, mas não fala nada com a liderança.",
            points: 0,
            type: "wrong",
            feedback:
              "Falar para os colegas o que deveria ser dito à liderança cria ambiente tóxico de fofoca.",
          },
          {
            id: "b",
            text: "Aceita a decisão sem questionar, mas fica insatisfeito internamente.",
            points: 25,
            type: "partial",
            feedback:
              "Se sua perspectiva pode contribuir para uma decisão melhor, a assertividade pede que você a compartilhe.",
          },
          {
            id: "c",
            text: 'Pede uma conversa: "Tenho uma perspectiva diferente sobre essa decisão. Posso compartilhar?"',
            points: 100,
            type: "correct",
            feedback:
              "Levar sua discordância diretamente a quem decidiu, com respeito, é o caminho assertivo.",
          },
        ],
      },
      {
        id: "5-4",
        tag: "🤐 Silêncio Hostil",
        question:
          "Após uma divergência, um colega passou a te responder com monossílabos e claramente te evita. O que você faz?",
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
            text: "Espera que o tempo resolva — as coisas tendem a se normalizar.",
            points: 25,
            type: "partial",
            feedback:
              "Às vezes o tempo ajuda, mas conflitos não resolvidos tendem a ressurgir em piores momentos.",
          },
          {
            id: "c",
            text: 'Busca uma conversa direta: "Percebi uma mudança entre nós depois daquele dia. Gostaria de resolver se pudermos."',
            points: 100,
            type: "correct",
            feedback:
              "Nomear o elefante na sala com abertura para diálogo é a forma mais assertiva de resolver tensões relacionais.",
          },
        ],
      },
      {
        id: "5-5",
        tag: "🏆 Competição Tóxica",
        question:
          "Um colega claramente compete com você de forma não saudável — sabota sutilmente seus projetos e pega crédito do seu trabalho perante o gestor. O que você faz?",
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
            text: "Documenta os episódios e aguarda mais evidências antes de agir.",
            points: 25,
            type: "partial",
            feedback:
              "Prudência tem valor, mas cada dia que você espera o dano continua.",
          },
          {
            id: "c",
            text: "Conversa diretamente com o colega sobre o que observou, e se continuar, leva ao gestor com fatos concretos.",
            points: 100,
            type: "correct",
            feedback:
              "Abordagem direta primeiro, escalamento estruturado se necessário. Assertividade com processo.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    number: 6,
    title: "Liderança e Equipe",
    description:
      "Cenários de liderança onde a omissão tem o mesmo peso que a ação errada.",
    tip: "💡 O que o líder tolera em silêncio, o grupo interpreta como aprovação.",
    scenarios: [
      {
        id: "6-1",
        tag: "🪞 Equipe Que Nunca Discorda",
        question:
          "Você lidera uma equipe onde ninguém nunca discorda de você nas reuniões. Decisões passam sempre facilmente. O que isso indica?",
        choices: [
          {
            id: "a",
            text: "Aprecia o alinhamento — o time confia em você e as decisões são boas.",
            points: 0,
            type: "wrong",
            feedback:
              "Equipes que nunca discordam do líder geralmente estão com medo, não alinhadas. Sinal de alerta.",
          },
          {
            id: "b",
            text: "Pergunta ao final de cada reunião se alguém tem perspectiva diferente.",
            points: 25,
            type: "partial",
            feedback:
              "Melhor, mas perguntar coletivamente ao final raramente produz discordâncias reais.",
          },
          {
            id: "c",
            text: "Conversa individualmente com membros, admite que pode estar criando dinâmica inibidora e pede feedbacks honestos.",
            points: 100,
            type: "correct",
            feedback:
              "Liderança autocrítica real. Ao nomear e assumir o problema, você cria condições para a cultura mudar.",
          },
        ],
      },
      {
        id: "6-2",
        tag: "🔒 Demissão e Curiosidade",
        question:
          "Você precisou demitir alguém. Colegas começam a questionar os motivos da saída. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Explica brevemente os motivos para aliviar o clima e evitar especulações.",
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
            text: '"Não posso entrar em detalhes. O que posso dizer é que foi uma decisão necessária e tratada com respeito. O time pode contar comigo."',
            points: 100,
            type: "correct",
            feedback:
              "Assertivo, discreto e presente. Fechou o espaço para especulação sem violar a privacidade de ninguém.",
          },
        ],
      },
      {
        id: "6-3",
        tag: "😤 Feedback Rejeitado",
        question:
          "Você deu um feedback difícil para um membro da equipe e ele ficou claramente na defensiva e chateado. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Recua e suaviza o que disse para aliviar o desconforto dele.",
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
              "Às vezes o tempo ajuda, mas encerrar com tensão aberta pode fazer o feedback ser lembrado pelo desconforto.",
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
      {
        id: "6-4",
        tag: "🎯 Erro do Líder",
        question:
          "Uma decisão sua como líder resultou em um erro que afetou toda a equipe. Vários membros estão desconfiantes. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Analisa internamente, corrige e comunica apenas o plano de ação — sem reabrir o episódio.",
            points: 25,
            type: "partial",
            feedback:
              "Eficiente, mas sem transparência a equipe se sente desconsiderada. Você perde a chance de construir confiança.",
          },
          {
            id: "b",
            text: "Distribui a responsabilidade entre os fatores externos que contribuíram para o erro.",
            points: 0,
            type: "wrong",
            feedback:
              "Dividir culpa com fatores externos quando a decisão era sua é fuga de responsabilidade. A equipe percebe.",
          },
          {
            id: "c",
            text: "Convoca a equipe, assume a responsabilidade pelo erro, explica o que aprendeu e apresenta o plano de correção.",
            points: 100,
            type: "correct",
            feedback:
              "Líderes que assumem erros publicamente constroem mais confiança do que os que nunca erram.",
          },
        ],
      },
      {
        id: "6-5",
        tag: "🕵️ Sabotagem Sutil",
        question:
          "Você percebe que um membro sênior está sistematicamente dificultando o trabalho de um colega mais novo. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Conversa com o membro mais novo para que ele se proteja e documente os episódios.",
            points: 25,
            type: "partial",
            feedback:
              "Ajuda o indivíduo, mas não resolve o problema. O comportamento tóxico continua.",
          },
          {
            id: "b",
            text: "Documenta e aguarda mais evidências antes de agir.",
            points: 25,
            type: "partial",
            feedback:
              "Prudência tem valor, mas cada dia que você espera o dano continua.",
          },
          {
            id: "c",
            text: "Conversa diretamente com o membro sênior sobre o que observou e o impacto que está gerando no time.",
            points: 100,
            type: "correct",
            feedback:
              "Ir à raiz é a única forma de resolver. Nomear o que observa — sem esperar a situação estourar.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    number: 7,
    title: "Situações Complexas",
    description:
      "O instinto imediato costuma errar aqui. Cada opção tem uma lógica — encontre a melhor.",
    tip: "💡 Nível avançado. A resposta certa frequentemente exige ir contra o impulso natural.",
    scenarios: [
      {
        id: "7-1",
        tag: "🤐 Avaliação de Amigo",
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
            text: "Faz avaliação honesta e envia sem comentar com o amigo antes.",
            points: 25,
            type: "partial",
            feedback:
              "A honestidade é certa, mas ser pego de surpresa por uma avaliação negativa de um amigo pode danificar o relacionamento.",
          },
          {
            id: "c",
            text: 'Avisa o amigo antes de enviar: "Precisei ser honesto — tenho observações importantes e quero conversar antes que chegue ao gestor."',
            points: 100,
            type: "correct",
            feedback:
              "Honesto profissionalmente e cuidadoso no relacionamento. Amizade real inclui honestidade.",
          },
        ],
      },
      {
        id: "7-2",
        tag: "🧩 Mudança Impopular",
        question:
          "Você precisa comunicar ao time uma mudança impopular. A decisão já está tomada. Como você comunica?",
        choices: [
          {
            id: "a",
            text: "Consulta a equipe antes de anunciar para gerar engajamento, mesmo com a decisão já tomada internamente.",
            points: 0,
            type: "wrong",
            feedback:
              "Consulta falsa é mais prejudicial do que não consultar. Quando percebem, a confiança desaba.",
          },
          {
            id: "b",
            text: "Comunica a mudança e as razões com clareza, abre espaço real para perguntas — mesmo que a decisão não mude.",
            points: 100,
            type: "correct",
            feedback:
              "Você não fingiu que era negociável, mas deu espaço real para as pessoas processarem e serem ouvidas.",
          },
          {
            id: "c",
            text: "Implementa gradualmente, sem comunicar claramente, para não gerar reação imediata.",
            points: 25,
            type: "partial",
            feedback:
              "Mudanças não comunicadas geram rumores que costumam ser piores do que a mudança em si.",
          },
        ],
      },
      {
        id: "7-3",
        tag: "⚡ Confronto Parcialmente Justo",
        question:
          "Um colega te confronta publicamente de forma que você considera parcialmente injusta — ele tem um ponto, mas exagerou no tom. Como você reage?",
        choices: [
          {
            id: "a",
            text: "Defende sua posição na hora, discutindo mérito e tom ao mesmo tempo.",
            points: 25,
            type: "partial",
            feedback:
              "Misturar mérito com tom no mesmo momento cria confusão — cada um merece espaço separado.",
          },
          {
            id: "b",
            text: "Fica quieto para não escalar e depois ignora — não vale gastar energia.",
            points: 0,
            type: "wrong",
            feedback:
              "O ponto válido dele fica sem resposta e o tom inadequado sem consequência. Os dois precisam ser endereçados.",
          },
          {
            id: "c",
            text: "Responde ao mérito com calma na hora, e depois conversa em particular sobre o tom.",
            points: 100,
            type: "correct",
            feedback:
              "Separar mérito de forma é comunicação de alto nível. Você reconheceu o que tinha valor e endereçou os dois no espaço certo.",
          },
        ],
      },
      {
        id: "7-4",
        tag: "🔄 Decisão Revertida por Pressão",
        question:
          "Você tomou uma decisão como líder. Após pressão emocional do time, está considerando reverter — não por novos argumentos, apenas pelo desconforto gerado. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Reverte a decisão para recuperar o clima — liderança exige sensibilidade.",
            points: 0,
            type: "wrong",
            feedback:
              "Reverter por pressão emocional sem novos argumentos mina sua autoridade. O time aprende que pressionar funciona.",
          },
          {
            id: "b",
            text: "Mantém a decisão sem dar nenhuma explicação adicional.",
            points: 25,
            type: "partial",
            feedback:
              "Firmeza certa, mas sem diálogo o desconforto permanece e a relação com o time se deteriora.",
          },
          {
            id: "c",
            text: "Reúne a equipe, explica o raciocínio novamente e diz que está aberto a mudar por argumentos — não por pressão.",
            points: 100,
            type: "correct",
            feedback:
              "Transparente, firme e justo. Dá ao time a oportunidade real de influenciar — por razões, não por clima.",
          },
        ],
      },
      {
        id: "7-5",
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
              "Aceitar sem processar e ignorar sem comunicar é a pior das opções. Você sai sem aprender e sem resolver.",
          },
          {
            id: "b",
            text: "Pede uma reunião e apresenta seus contra-argumentos de forma direta.",
            points: 25,
            type: "partial",
            feedback:
              "Contestar é legítimo, mas chegar com contra-argumentos já prontos pode parecer que você quer vencer — não entender.",
          },
          {
            id: "c",
            text: 'Pede uma reunião com postura de curiosidade: "Quero entender melhor seu ponto — pode haver algo que não estou enxergando."',
            points: 100,
            type: "correct",
            feedback:
              "Abertura genuína antes de contestar. Você pode discordar depois — mas ouvir primeiro abre um diálogo real.",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    number: 8,
    title: "Nível Especialista",
    description:
      "O nível mais alto. A diferença entre as respostas é sutil e profunda. Se errar, o feedback ensina mais do que o acerto.",
    tip: "💡 Especialista. Aqui não existe resposta óbvia — existe a resposta mais assertiva.",
    scenarios: [
      {
        id: "8-1",
        tag: "🎯 Negociação sob Pressão",
        question:
          "Numa negociação importante, a outra parte usa prazos fictícios e pressão emocional para te apressar. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Cede parcialmente para fechar logo e não perder o cliente.",
            points: 0,
            type: "wrong",
            feedback:
              "Ceder à pressão artificial valida a tática e garante que ela será usada novamente. Você fechou um acordo pior.",
          },
          {
            id: "b",
            text: 'Confronta diretamente: "Isso é uma tática de pressão e não vou aceitar."',
            points: 25,
            type: "partial",
            feedback:
              "Nomear a tática tem valor, mas o confronto direto pode criar hostilidade desnecessária.",
          },
          {
            id: "c",
            text: '"Entendo a urgência. Preciso de [X tempo] para avaliar adequadamente. Se isso não funcionar, posso sugerir que revisemos o processo juntos."',
            points: 100,
            type: "correct",
            feedback:
              "Você não cedeu, manteve o controle e propôs uma saída — sem confronto desnecessário.",
          },
        ],
      },
      {
        id: "8-2",
        tag: "🔍 Liderança Ausente",
        question:
          "Seu gestor está claramente evitando tomar uma decisão difícil, e a equipe está travada esperando. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Toma a decisão você mesmo para desbloquear a equipe.",
            points: 25,
            type: "partial",
            feedback:
              "Pode desbloquear no curto prazo, mas assumir decisões que não são suas cria outros problemas.",
          },
          {
            id: "b",
            text: "Espera — não é seu papel pressionar o gestor.",
            points: 0,
            type: "wrong",
            feedback:
              "Passividade diante de paralisia prejudica a equipe toda. Há formas assertivas de acionar seu gestor.",
          },
          {
            id: "c",
            text: 'Apresenta ao gestor o impacto concreto da indecisão e pede uma data para a decisão: "Precisamos de uma direção até [data] para conseguir entregar."',
            points: 100,
            type: "correct",
            feedback:
              "Você criou urgência com dados, não com pressão emocional. Isso é assertividade ascendente.",
          },
        ],
      },
      {
        id: "8-3",
        tag: "🧠 Concordância Estratégica",
        question:
          "Você discorda de uma estratégia da empresa, mas sua liderança deixou claro que a decisão está tomada. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Expressa sua discordância publicamente para que fique registrado que você não apoiava.",
            points: 0,
            type: "wrong",
            feedback:
              "Sabotagem velada ou resistência pública depois da decisão tomada compromete o time e sua credibilidade.",
          },
          {
            id: "b",
            text: "Aceita em silêncio e executa sem qualidade — afinal, não foi sua ideia.",
            points: 0,
            type: "wrong",
            feedback:
              "Executar mal para provar que estava certo é uma forma de sabotar. Prejudica o time e a você mesmo.",
          },
          {
            id: "c",
            text: "Registra formalmente sua discordância e as razões, e depois executa com comprometimento total — discordando e comprometendo.",
            points: 100,
            type: "correct",
            feedback:
              '"Disagree and commit" — o princípio mais maduro de liderança. Você foi honesto, foi ouvido, e depois deu o seu melhor.',
          },
        ],
      },
      {
        id: "8-4",
        tag: "🌀 Triangulação em Alta Escala",
        question:
          "Você descobre que um gestor sênior está usando informações que você compartilhou em confidência com um colega para influenciar decisões. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Para de compartilhar qualquer informação com qualquer pessoa na empresa.",
            points: 25,
            type: "partial",
            feedback:
              "Protege você no curto prazo, mas isola você e não resolve o comportamento inadequado.",
          },
          {
            id: "b",
            text: "Confronta o colega que vazou as informações publicamente.",
            points: 0,
            type: "wrong",
            feedback:
              "Confronto público sem ter todos os fatos pode criar injustiça e danos colaterais.",
          },
          {
            id: "c",
            text: "Conversa em particular com o colega para entender o que aconteceu, e se confirmado, com o gestor sênior sobre o impacto do uso de informações confidenciais.",
            points: 100,
            type: "correct",
            feedback:
              "Abordagem em camadas: entender primeiro, endereçar com fatos depois. Assertividade com processo.",
          },
        ],
      },
      {
        id: "8-5",
        tag: "🏁 Última Questão",
        question:
          "Você está prestes a encerrar um projeto importante. Percebe que um colega cometeu um erro crítico que pode comprometer o resultado — mas ele não percebeu. Revelá-lo pode atrasar tudo. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Corrige o erro silenciosamente sem contar para não criar constrangimento.",
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
              "Honestidade, colaboração e respeito pelo crescimento do outro acima da conveniência. Isso é comunicação assertiva no nível mais alto.",
          },
        ],
      },
    ],
  },
];
