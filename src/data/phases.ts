import type { Phase } from "@/types/game";

export const PHASES_DATA: Phase[] = [
  {
    id: 1,
    number: 1,
    title: "Expressão e Clareza",
    description:
      "Comunicar-se com clareza, objetividade e respeito é o primeiro passo para uma comunicação assertiva.",
    tip: "💡 Assertividade não é ser agressivo nem passivo — é ser <strong>claro e respeitoso ao mesmo tempo.</strong>",
    scenarios: [
      {
        id: "1-1",
        tag: "📋 Reunião de Equipe",
        question:
          "Seu líder mudou o horário de uma reunião importante e pediu para você avisar a equipe. Qual mensagem você envia no grupo?",
        choices: [
          {
            id: "1-1-a",
            text: '"Gente, mudou o horário. Apareçam quando puderem."',
            points: 25,
            type: "partial",
            feedback:
              "Razoável, mas falta clareza: qual o novo horário? Por quê mudou? Mensagens vagas geram confusão.",
          },
          {
            id: "1-1-b",
            text: '"Equipe! A reunião de hoje foi alterada para 15h (era 14h). Motivo: compromisso externo do gestor. Confirmem presença!"',
            points: 100,
            type: "correct",
            feedback:
              "Assertivo! Você foi claro sobre o que mudou, por quê e pediu confirmação. Exatamente o que a equipe precisava.",
          },
          {
            id: "1-1-c",
            text: '"Não sei se alguém viu, mas acho que mudou alguma coisa no horário..."',
            points: 0,
            type: "wrong",
            feedback:
              "Gera mais insegurança do que clareza. Comunicação assertiva transmite certeza, não dúvida.",
          },
        ],
      },
      {
        id: "1-2",
        tag: "🕐 Colega Atrasado",
        question:
          "Um colega de equipe chega sempre atrasado nas reuniões, atrapalhando o andamento. Como você aborda a situação?",
        choices: [
          {
            id: "1-2-a",
            text: '"Você é sempre o último! Isso atrasa todo mundo e é falta de respeito!"',
            points: 0,
            type: "wrong",
            feedback:
              "Agressivo e generalizante. Atacar a pessoa em vez do comportamento prejudica o relacionamento.",
          },
          {
            id: "1-2-b",
            text: "Você não fala nada para não criar clima ruim.",
            points: 25,
            type: "partial",
            feedback:
              "Evitar o conflito pode parecer paz, mas o problema continua. Assertividade exige coragem gentil.",
          },
          {
            id: "1-2-c",
            text: '"Percebi que você tem chegado depois do início. Tem algo acontecendo? Quero entender se posso ajudar."',
            points: 100,
            type: "correct",
            feedback:
              "Excelente! Você descreveu o comportamento sem julgar, abriu espaço para escuta e ofereceu ajuda.",
          },
        ],
      },
      {
        id: "1-3",
        tag: "🎤 Apresentação",
        question:
          "Você precisa apresentar um projeto para toda a empresa. O nervosismo bate forte. O que você faz?",
        choices: [
          {
            id: "1-3-a",
            text: "Fala tão rápido e nervoso que mistura as informações — ninguém entende direito.",
            points: 0,
            type: "wrong",
            feedback:
              "A ansiedade atropelou a mensagem. Comunicação assertiva exige preparação antes de falar.",
          },
          {
            id: "1-3-b",
            text: "Pede para um colega apresentar por você, sem nem tentar.",
            points: 25,
            type: "partial",
            feedback:
              "Às vezes pedir ajuda é prudente, mas evitar sistematicamente dificulta o desenvolvimento.",
          },
          {
            id: "1-3-c",
            text: "Respira fundo, organiza a fala em 3 pontos principais e faz contato visual com a audiência.",
            points: 100,
            type: "correct",
            feedback:
              "Perfeito! Preparação + calma + contato visual = comunicação assertiva e eficaz.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    number: 2,
    title: "Escuta Ativa e Empatia",
    description:
      "Ouvir de verdade — sem interromper, sem julgamentos — é tão importante quanto saber falar.",
    tip: "💡 Regra de ouro: <strong>ouça para entender, não para responder.</strong>",
    scenarios: [
      {
        id: "2-1",
        tag: "💔 Amigo em Dificuldade",
        question:
          "Um amigo próximo começa a desabafar sobre um problema sério que está vivendo. O que você faz?",
        choices: [
          {
            id: "2-1-a",
            text: 'Ouve alguns segundos e logo dá conselhos rápidos: "Calma, vai passar! Faz assim..."',
            points: 25,
            type: "partial",
            feedback:
              "A intenção é boa, mas conselhos prematuros interrompem o processo de a pessoa se sentir ouvida.",
          },
          {
            id: "2-1-b",
            text: "Interrompe para contar uma situação parecida que você viveu.",
            points: 0,
            type: "wrong",
            feedback:
              "Redirecionar a conversa para si mesmo invalida a experiência do outro.",
          },
          {
            id: "2-1-c",
            text: "Ouve até o fim sem interromper, faz uma pergunta empática e só então oferece apoio.",
            points: 100,
            type: "correct",
            feedback:
              "Isso é escuta ativa! A sensação de ser verdadeiramente ouvido é o que seu amigo mais precisava.",
          },
        ],
      },
      {
        id: "2-2",
        tag: "💡 Ideia do Colega",
        question:
          "Um colega mais novo apresenta uma ideia em reunião. Você discorda, mas ele ainda está falando. O que você faz?",
        choices: [
          {
            id: "2-2-a",
            text: "Interrompe no meio da fala para dizer que a ideia não vai funcionar.",
            points: 0,
            type: "wrong",
            feedback:
              "Interromper invalida o outro e cria um ambiente onde as pessoas têm medo de falar.",
          },
          {
            id: "2-2-b",
            text: "Ouve até o fim, mas não comenta nada para evitar conflito.",
            points: 25,
            type: "partial",
            feedback:
              "Ouvir até o fim é ótimo, mas omitir sua perspectiva também é passividade.",
          },
          {
            id: "2-2-c",
            text: 'Ouve até o fim, reconhece o esforço e pergunta: "Interessante. Como você pensou em resolver X?"',
            points: 100,
            type: "correct",
            feedback:
              "Brilhante! Você ouviu, reconheceu e fez uma pergunta construtiva. Isso cria um ambiente seguro.",
          },
        ],
      },
      {
        id: "2-3",
        tag: "🤔 Opinião Diferente",
        question:
          "Numa conversa em grupo, alguém defende uma posição com a qual você discorda. Todos estão ouvindo. Como você reage?",
        choices: [
          {
            id: "2-3-a",
            text: '"Isso está completamente errado. Você não entende nada sobre o assunto."',
            points: 0,
            type: "wrong",
            feedback:
              "A forma importa tanto quanto o conteúdo. Atacar gera defensividade e fecha o diálogo.",
          },
          {
            id: "2-3-b",
            text: "Concorda com tudo para não criar tensão, mesmo sem acreditar.",
            points: 25,
            type: "partial",
            feedback:
              "A concordância falsa não resolve nada e impede um diálogo genuíno.",
          },
          {
            id: "2-3-c",
            text: '"Entendo seu ponto. Tenho uma perspectiva diferente — posso compartilhar?"',
            points: 100,
            type: "correct",
            feedback:
              "Excelente! Você validou a contribuição antes de apresentar a sua. Isso é dialogar com respeito.",
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
      "Saber dizer não, reconhecer erros e receber críticas com maturidade são marcas de uma comunicação saudável.",
    tip: "💡 Assertividade é <strong>equilíbrio entre firmeza e gentileza.</strong> Você pode ser direto sem ser duro.",
    scenarios: [
      {
        id: "3-1",
        tag: "🙅 Dizer Não",
        question:
          "Seu gestor pediu que você assumisse mais uma tarefa urgente, mas sua agenda já está no limite. O que você faz?",
        choices: [
          {
            id: "3-1-a",
            text: "Aceita sem questionar, mesmo sabendo que não vai conseguir entregar bem.",
            points: 25,
            type: "partial",
            feedback:
              "Aceitar para não desapontar cria expectativas que não serão cumpridas. Um não honesto prejudica menos.",
          },
          {
            id: "3-1-b",
            text: '"Claro, pode deixar." E depois some sem dar retorno.',
            points: 0,
            type: "wrong",
            feedback:
              "Pior das opções: gera frustração e destrói a confiança. Sempre é melhor um não claro.",
          },
          {
            id: "3-1-c",
            text: '"Quero ajudar, mas minha agenda está cheia essa semana. Posso pegar isso na próxima, ou você quer que eu priorize isso e adie outra tarefa?"',
            points: 100,
            type: "correct",
            feedback:
              "Impecável! Honesto, com boa vontade e alternativa concreta. Isso é assertividade com responsabilidade.",
          },
        ],
      },
      {
        id: "3-2",
        tag: "😤 Crítica em Público",
        question:
          "Seu gestor te critica na frente da equipe de uma forma que você considera injusta. Como você reage?",
        choices: [
          {
            id: "3-2-a",
            text: "Revida na hora com o mesmo tom na frente de todos.",
            points: 0,
            type: "wrong",
            feedback:
              "Reagir emocionalmente em público escala o conflito e prejudica sua imagem.",
          },
          {
            id: "3-2-b",
            text: "Não diz nada, mas fica ruminando o ressentimento por dias.",
            points: 25,
            type: "partial",
            feedback:
              "O ressentimento guardado corrói os relacionamentos e sua saúde. Meia solução.",
          },
          {
            id: "3-2-c",
            text: 'Mantém a calma na hora e depois pede uma conversa privada: "Quero entender melhor o que aconteceu."',
            points: 100,
            type: "correct",
            feedback:
              "Maturidade em ação! Autorregulação no momento difícil + diálogo privado é o caminho assertivo.",
          },
        ],
      },
      {
        id: "3-3",
        tag: "😬 Assumindo o Erro",
        question:
          "Você cometeu um erro que atrasou a entrega de um projeto importante. O que você faz?",
        choices: [
          {
            id: "3-3-a",
            text: "Tenta minimizar o erro e redireciona a culpa para outros fatores.",
            points: 0,
            type: "wrong",
            feedback:
              "Negar responsabilidade corrói a confiança. Profissionais que assumem erros inspiram mais do que os que nunca erram.",
          },
          {
            id: "3-3-b",
            text: "Admite o erro somente se perguntado diretamente.",
            points: 25,
            type: "partial",
            feedback:
              "Melhor do que negar, mas esperar ser perguntado ainda é evitar a responsabilidade proativamente.",
          },
          {
            id: "3-3-c",
            text: '"Errei nessa etapa e isso atrasou o projeto. Me desculpem. Já tenho um plano para corrigir e evitar que se repita."',
            points: 100,
            type: "correct",
            feedback:
              "Responsabilidade com humildade e solução. Essa postura constrói confiança e credibilidade.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    number: 4,
    title: "Gestão de Conflitos",
    description:
      "Conflitos são inevitáveis em qualquer relação. A questão não é se surgirão — é como você vai conduzi-los.",
    tip: "💡 <strong>Não fuja do conflito — gerencie-o.</strong> Conflito bem conduzido fortalece as relações.",
    scenarios: [
      {
        id: "4-1",
        tag: "⚔️ Conflito na Equipe",
        question:
          "Dois membros da sua equipe estão em conflito aberto e o clima está pesado para todos. Como você age?",
        choices: [
          {
            id: "4-1-a",
            text: "Chama os dois juntos sem aviso prévio e confronta cada um na frente do outro.",
            points: 0,
            type: "wrong",
            feedback:
              "Confrontar sem preparo pode escalar o conflito. As pessoas precisam de espaço seguro antes de dialogar.",
          },
          {
            id: "4-1-b",
            text: "Finge que não está acontecendo para não se meter.",
            points: 25,
            type: "partial",
            feedback:
              "A omissão pode deixar feridas abertas que comprometem o clima e a produtividade da equipe.",
          },
          {
            id: "4-1-c",
            text: "Conversa individualmente com cada um para ouvir os dois lados, depois propõe uma reunião conjunta de mediação.",
            points: 100,
            type: "correct",
            feedback:
              "Mediação exemplar! Ouvir cada parte separadamente garante que todos se sintam seguros para ser honestos.",
          },
        ],
      },
      {
        id: "4-2",
        tag: "🔥 Discussão Acalorada",
        question:
          "Durante uma reunião, a discussão esquenta e alguém começa a elevar a voz. Como você reage?",
        choices: [
          {
            id: "4-2-a",
            text: "Eleva a voz também para se fazer ouvir.",
            points: 0,
            type: "wrong",
            feedback:
              "Voz com voz cria caos. Quem mantém a calma nesse momento tem muito mais poder de influência.",
          },
          {
            id: "4-2-b",
            text: "Fica em silêncio, sem saber como reagir.",
            points: 25,
            type: "partial",
            feedback:
              "O silêncio pode evitar o escalamento, mas uma intervenção calma e firme seria muito mais eficaz.",
          },
          {
            id: "4-2-c",
            text: '"Vamos pausar um momento. Todos queremos chegar a uma boa solução. Podemos continuar com mais calma?"',
            points: 100,
            type: "correct",
            feedback:
              "Liderança comunicacional! Você desescalou a tensão, reafirmou o objetivo comum e propôs uma mudança de postura.",
          },
        ],
      },
      {
        id: "4-3",
        tag: "📋 Decisão com a Qual Discorda",
        question:
          "A liderança tomou uma decisão importante com a qual você discorda. O que você faz?",
        choices: [
          {
            id: "4-3-a",
            text: "Reclama para os colegas, mas não fala nada com quem decidiu.",
            points: 0,
            type: "wrong",
            feedback:
              "Falar para os colegas o que deveria ser dito à liderança cria um ambiente tóxico de fofoca e desconfiança.",
          },
          {
            id: "4-3-b",
            text: "Aceita a decisão sem questionar, mas fica insatisfeito internamente.",
            points: 25,
            type: "partial",
            feedback:
              "Se sua perspectiva pode contribuir para uma decisão melhor, a assertividade pede que você a compartilhe.",
          },
          {
            id: "4-3-c",
            text: 'Pede uma conversa com a liderança: "Tenho uma perspectiva diferente sobre isso. Posso compartilhar?"',
            points: 100,
            type: "correct",
            feedback:
              "Exato! Levar sua discordância diretamente a quem decidiu, com respeito e abertura, é o caminho assertivo.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    number: 5,
    title: "Ambiente e Pertencimento",
    description:
      "Um ambiente saudável é aquele onde todos se sentem seguros para ser quem são e expressar o que pensam.",
    tip: "💡 <strong>Pertencimento se constrói em pequenos gestos.</strong> Uma palavra de acolhimento pode mudar o dia de alguém.",
    scenarios: [
      {
        id: "5-1",
        tag: "👋 Pessoa Nova no Grupo",
        question:
          "Uma pessoa nova entra na equipe e parece perdida e tímida nos primeiros dias. O que você faz?",
        choices: [
          {
            id: "5-1-a",
            text: "Espera que o RH ou o gestor faça a integração — não é sua responsabilidade.",
            points: 25,
            type: "partial",
            feedback:
              "Integração não é só responsabilidade formal. Qualquer membro da equipe pode e deve acolher.",
          },
          {
            id: "5-1-b",
            text: "Acena de longe no corredor e segue em frente.",
            points: 0,
            type: "wrong",
            feedback:
              "A pessoa nova provavelmente sai do primeiro dia sem se sentir pertencente. Pequenos gestos fazem diferença enorme.",
          },
          {
            id: "5-1-c",
            text: "Vai até ela, se apresenta, pergunta como está sendo a adaptação e oferece ajuda.",
            points: 100,
            type: "correct",
            feedback:
              "Isso é criar pertencimento! Um gesto simples pode ser o início de uma ótima parceria.",
          },
        ],
      },
      {
        id: "5-2",
        tag: "😶 Colega se Isolando",
        question:
          "Você percebe que um colega próximo está se afastando do grupo gradualmente, sem explicação. O que você faz?",
        choices: [
          {
            id: "5-2-a",
            text: "Não faz nada — se ele quiser falar, ele procura.",
            points: 0,
            type: "wrong",
            feedback:
              "O afastamento silencioso é quase sempre um sinal de que algo não vai bem. Esperar pode ser tarde demais.",
          },
          {
            id: "5-2-b",
            text: 'Manda um "ei, sumido!" por mensagem e pronto.',
            points: 25,
            type: "partial",
            feedback:
              "Melhor do que ignorar, mas o tom descontraído pode minimizar algo sério.",
          },
          {
            id: "5-2-c",
            text: '"Tenho sentido sua falta. Está tudo bem? Se quiser conversar, estou disponível — sem pressão."',
            points: 100,
            type: "correct",
            feedback:
              "Perfeito! Você expressou cuidado genuíno, abriu espaço sem pressionar e demonstrou disponibilidade.",
          },
        ],
      },
      {
        id: "5-3",
        tag: "🌡️ Comentário Constrangedor",
        question:
          "Durante uma conversa em grupo, alguém faz um comentário inapropriado. Todos ficam em silêncio. Você:",
        choices: [
          {
            id: "5-3-a",
            text: "Ri junto para não criar situação estranha.",
            points: 25,
            type: "partial",
            feedback:
              "Validar o comentário por conveniência contribui para um ambiente onde as pessoas não se sentem seguras.",
          },
          {
            id: "5-3-b",
            text: '"Esse comentário não foi legal. Acho que podemos nos tratar melhor do que isso."',
            points: 100,
            type: "correct",
            feedback:
              "Coragem assertiva! Você nomeou o problema com respeito e sem agredir. Isso cria ambientes psicologicamente seguros.",
          },
          {
            id: "5-3-c",
            text: "Ignora e muda de assunto rapidamente.",
            points: 0,
            type: "wrong",
            feedback:
              "Ignorar sinaliza para todos que esse tipo de comentário é aceitável. O silêncio tem um custo real.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    number: 6,
    title: "Comunicação Digital",
    description:
      "Mensagens de texto, e-mails e redes sociais ampliam mal-entendidos. Comunicação digital exige ainda mais cuidado.",
    tip: "💡 <strong>O que é escrito permanece.</strong> Antes de enviar, pergunte: 'Eu diria isso pessoalmente, da mesma forma?'",
    scenarios: [
      {
        id: "6-1",
        tag: "📱 Conflito por Mensagem",
        question:
          "Um desentendimento sério começou num grupo de WhatsApp da equipe. As mensagens foram mal interpretadas e o clima está pesado. Como você age?",
        choices: [
          {
            id: "6-1-a",
            text: "Entra no grupo e escreve um longo texto explicando sua posição e cobrando quem errou.",
            points: 0,
            type: "wrong",
            feedback:
              "Resolver publicamente o que devia ser privado escala o conflito e expõe as pessoas.",
          },
          {
            id: "6-1-b",
            text: "Sai do grupo sem falar nada.",
            points: 0,
            type: "wrong",
            feedback:
              "Fugir do conflito digital não o resolve — piora, porque gera mais interpretações negativas.",
          },
          {
            id: "6-1-c",
            text: "Envia mensagem privada para os envolvidos e propõe uma conversa por chamada ou pessoalmente.",
            points: 100,
            type: "correct",
            feedback:
              "Excelente! Conflitos sérios precisam de comunicação com voz e presença, não de texto.",
          },
        ],
      },
      {
        id: "6-2",
        tag: "📧 E-mail Mal Interpretado",
        question:
          "Você recebe um e-mail de um colega que soa agressivo e direto. Você se sente ofendido. O que você faz?",
        choices: [
          {
            id: "6-2-a",
            text: "Responde com o mesmo tom, deixando claro que não gostou.",
            points: 0,
            type: "wrong",
            feedback:
              "Responder agressividade com agressividade escalona o conflito por escrito — e fica registrado.",
          },
          {
            id: "6-2-b",
            text: "Engole e não faz nada, mas guarda a mágoa.",
            points: 25,
            type: "partial",
            feedback:
              "O ressentimento acumulado em silêncio cobra seu preço mais tarde no relacionamento.",
          },
          {
            id: "6-2-c",
            text: "Antes de responder, assume que pode ser falta de contexto e liga ou vai pessoalmente esclarecer.",
            points: 100,
            type: "correct",
            feedback:
              "Inteligência comunicacional! Tom de texto é difícil de interpretar. Verificar antes de reagir evita conflitos desnecessários.",
          },
        ],
      },
      {
        id: "6-3",
        tag: "💬 Crítica nas Redes",
        question:
          "A página da sua empresa nas redes sociais recebeu um comentário negativo público. Como você responde?",
        choices: [
          {
            id: "6-3-a",
            text: "Responde de forma defensiva, explicando por que o cliente está errado.",
            points: 0,
            type: "wrong",
            feedback:
              "Resposta defensiva em público prejudica a imagem da empresa e não resolve o problema do cliente.",
          },
          {
            id: "6-3-b",
            text: "Apaga o comentário sem responder.",
            points: 25,
            type: "partial",
            feedback:
              "Apagar pode parecer censura e gerar mais reação negativa.",
          },
          {
            id: "6-3-c",
            text: "Responde com respeito, agradece o feedback e convida para uma conversa privada para resolver.",
            points: 100,
            type: "correct",
            feedback:
              "Perfeito! Transparência + acolhimento + solução privada = comunicação assertiva no ambiente digital.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    number: 7,
    title: "Feedback e Desenvolvimento",
    description:
      "Dar e receber feedback com maturidade é uma das práticas mais transformadoras em qualquer relação profissional ou pessoal.",
    tip: "💡 <strong>Feedback é presente, não punição.</strong> A intenção de ajudar a crescer muda tudo.",
    scenarios: [
      {
        id: "7-1",
        tag: "🔧 Dar Feedback Difícil",
        question:
          "Um membro da sua equipe cometeu um erro sério que comprometeu um resultado. Você precisa conversar com ele. Como faz?",
        choices: [
          {
            id: "7-1-a",
            text: "Chama na hora, ainda frustrado, e fala o que pensa sem filtro.",
            points: 0,
            type: "wrong",
            feedback:
              "Feedback dado no calor da emoção vira ataque. Corrija o problema, não a pessoa.",
          },
          {
            id: "7-1-b",
            text: "Não fala nada para não criar clima ruim.",
            points: 25,
            type: "partial",
            feedback:
              "Evitar o feedback priva a pessoa da chance de crescer e sinaliza que erros não têm consequências.",
          },
          {
            id: "7-1-c",
            text: "Espera se acalmar, pede uma conversa privada e usa os fatos, o impacto e um pedido claro de mudança.",
            points: 100,
            type: "correct",
            feedback:
              "Impecável! Tempo certo + espaço privado + foco no comportamento = feedback que transforma.",
          },
        ],
      },
      {
        id: "7-2",
        tag: "👂 Receber Feedback",
        question:
          "Seu gestor te chama para dar um retorno negativo sobre algo que você fez. Como você reage?",
        choices: [
          {
            id: "7-2-a",
            text: "Fica na defensiva e começa a justificar cada ponto antes de ouvi-lo terminar.",
            points: 0,
            type: "wrong",
            feedback:
              "Defensividade bloqueia o aprendizado e frustra quem está tentando te ajudar a crescer.",
          },
          {
            id: "7-2-b",
            text: "Concorda com tudo sem questionar, mesmo sem entender ou concordar.",
            points: 25,
            type: "partial",
            feedback:
              "Concordância passiva não é maturidade — é evitar o desconforto sem processar o que foi dito.",
          },
          {
            id: "7-2-c",
            text: "Ouve até o fim com atenção, agradece a honestidade e faz perguntas para entender melhor como melhorar.",
            points: 100,
            type: "correct",
            feedback:
              "Maturidade exemplar! Quem sabe receber feedback cresce muito mais rápido do que quem se defende.",
          },
        ],
      },
      {
        id: "7-3",
        tag: "🤝 Feedback entre Pares",
        question:
          "Você percebe que um amigo e colega está tomando decisões que podem prejudicá-lo profissionalmente. Como você aborda?",
        choices: [
          {
            id: "7-3-a",
            text: "Comenta com outros colegas em vez de falar diretamente com ele.",
            points: 0,
            type: "wrong",
            feedback:
              "Falar com terceiros antes de falar com a pessoa é triangulação — prejudica a confiança e não resolve.",
          },
          {
            id: "7-3-b",
            text: "Não faz nada — não é problema seu.",
            points: 25,
            type: "partial",
            feedback:
              "Omissão quando você pode ajudar também tem um custo para a amizade e para o outro.",
          },
          {
            id: "7-3-c",
            text: "Pede um momento particular, compartilha o que observou com cuidado e pergunta como ele está se sentindo.",
            points: 100,
            type: "correct",
            feedback:
              "Isso é cuidado assertivo! Presença + honestidade + pergunta aberta = amizade de verdade.",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    number: 8,
    title: "Comunicação e Liderança",
    description:
      "Comunicação assertiva é a base de qualquer liderança saudável — seja no trabalho, na família ou em qualquer grupo.",
    tip: "💡 <strong>Liderar é comunicar.</strong> A forma como você se expressa define o ambiente que você cria.",
    scenarios: [
      {
        id: "8-1",
        tag: "🤝 Grupos em Tensão",
        question:
          "Dois grupos da organização estão em tensão por causa de um mal-entendido entre eles. Como líder, o que você faz?",
        choices: [
          {
            id: "8-1-a",
            text: "Toma partido do grupo que você acha que está certo.",
            points: 0,
            type: "wrong",
            feedback:
              "Tomar partido divide mais ainda. Líder assertivo facilita o diálogo, não escolhe lados.",
          },
          {
            id: "8-1-b",
            text: "Deixa que se resolvam sozinhos para não se envolver.",
            points: 25,
            type: "partial",
            feedback:
              "A omissão da liderança nesse momento permite que a tensão se enraíze e comprometa o ambiente.",
          },
          {
            id: "8-1-c",
            text: "Ouve cada grupo separadamente e depois facilita uma reunião com foco no objetivo comum.",
            points: 100,
            type: "correct",
            feedback:
              "Mediação exemplar! O objetivo comum é o elo que une quando as perspectivas divergem.",
          },
        ],
      },
      {
        id: "8-2",
        tag: "📣 Comunicar Mudança Difícil",
        question:
          "Você precisa comunicar uma mudança impopular para seu time. Como faz?",
        choices: [
          {
            id: "8-2-a",
            text: "Anuncia a mudança sem explicar o porquê e pede que todos aceitem.",
            points: 0,
            type: "wrong",
            feedback:
              'Anúncio sem contexto gera resistência. As pessoas precisam entender o "por quê" para aceitar o "o quê".',
          },
          {
            id: "8-2-b",
            text: "Adia o anúncio indefinidamente com medo da reação.",
            points: 25,
            type: "partial",
            feedback:
              "A procrastinação não elimina o problema — alimenta rumores e aumenta a ansiedade do time.",
          },
          {
            id: "8-2-c",
            text: "Explica o contexto e os motivos, ouve as preocupações e mantém canais abertos para perguntas.",
            points: 100,
            type: "correct",
            feedback:
              "Transparência + escuta = liderança que gera confiança mesmo nas mudanças mais difíceis.",
          },
        ],
      },
      {
        id: "8-3",
        tag: "🚪 Alguém Querendo Sair",
        question:
          "Um membro valioso da equipe demonstra insatisfação e sinaliza que pode sair. Como você age?",
        choices: [
          {
            id: "8-3-a",
            text: "Tenta convencê-lo a ficar com promessas que talvez não possa cumprir.",
            points: 0,
            type: "wrong",
            feedback:
              "Promessas vazias para reter pessoas criam problemas maiores no futuro e destroem a credibilidade.",
          },
          {
            id: "8-3-b",
            text: "Não faz nada — se ele quiser sair, é direito dele.",
            points: 25,
            type: "partial",
            feedback:
              "Indiferença com quem está insatisfeito também não é liderança. Vale ao menos ouvir.",
          },
          {
            id: "8-3-c",
            text: "Busca uma conversa honesta, ouve sem julgamento, entende as razões e respeita a decisão final.",
            points: 100,
            type: "correct",
            feedback:
              "Perfeito! Acolher, ouvir e respeitar a autonomia do outro — isso é liderança assertiva com humanidade.",
          },
        ],
      },
    ],
  },
];
