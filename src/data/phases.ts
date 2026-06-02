import type { Phase } from "@/types/game";

export const PHASES_DATA: Phase[] = [
  {
    id: 1,
    number: 1,
    title: "Expressão e Clareza",
    description:
      "Comunicar-se com clareza, objetividade e respeito é o primeiro passo.",
    tip: "💡 Assertividade não é ser agressivo nem passivo — é ser <strong>claro e respeitoso ao mesmo tempo.</strong>",
    scenarios: [
      {
        id: "1-1",
        tag: "📲 Comunicação Digital",
        question:
          "O pastor mudou o horário do culto e pediu para você avisar o grupo pelo WhatsApp. Qual mensagem você envia?",
        choices: [
          {
            id: "1-1-a",
            text: '"Gente, mudou o horário. Apareçam quando puderem."',
            points: 25,
            type: "partial",
            feedback: "Razoável, mas falta clareza: qual o novo horário?",
          },
          {
            id: "1-1-b",
            text: '"Irmãos! O culto será às 19h (era 18h). Motivo: compromisso pastoral. Dúvidas, me chame."',
            points: 100,
            type: "correct",
            feedback:
              "Assertivo! Claro sobre o que mudou, por quê e como tirar dúvidas.",
          },
          {
            id: "1-1-c",
            text: '"Não sei se alguém viu, mas acho que mudou alguma coisa no horário..."',
            points: 0,
            type: "wrong",
            feedback: "Gera mais insegurança do que clareza.",
          },
        ],
      },
      {
        id: "1-2",
        tag: "🕐 Atraso Frequente",
        question:
          "Um membro da sua equipe chega sempre atrasado e acaba atrapalhando o início das reuniões. Como você aborda?",
        choices: [
          {
            id: "1-2-a",
            text: '"Você é sempre o último! Isso é falta de respeito!"',
            points: 0,
            type: "wrong",
            feedback: "Agressivo e generalizante.",
          },
          {
            id: "1-2-b",
            text: "Você não fala nada para não criar conflito.",
            points: 25,
            type: "partial",
            feedback:
              "Evitar o conflito pode parecer paz, mas o problema continua.",
          },
          {
            id: "1-2-c",
            text: '"Percebi que tem chegado depois do início. Tem algo acontecendo? Quero entender se posso ajudar."',
            points: 100,
            type: "correct",
            feedback:
              "Excelente! Descreveu o comportamento sem julgar e ofereceu ajuda.",
          },
        ],
      },
      {
        id: "1-3",
        tag: "🎤 Falar em Público",
        question:
          "Você precisa dar um anúncio importante para toda a congregação. O nervosismo bate. O que você faz?",
        choices: [
          {
            id: "1-3-a",
            text: "Fala tão rápido e nervoso que mistura vários recados.",
            points: 0,
            type: "wrong",
            feedback: "A ansiedade atropelou a mensagem.",
          },
          {
            id: "1-3-b",
            text: "Pede para outra pessoa falar por você, sem nem tentar.",
            points: 25,
            type: "partial",
            feedback:
              "Às vezes pedir ajuda é prudente, mas evitar sistematicamente dificulta o crescimento.",
          },
          {
            id: "1-3-c",
            text: "Respira fundo, organiza o recado em 2-3 pontos claros e fala olhando para as pessoas.",
            points: 100,
            type: "correct",
            feedback: "Perfeito! Preparação + calma + contato visual.",
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
    tip: "💡 Regra de ouro: <strong>ouça para entender, não para responder.</strong> Tiago 1:19.",
    scenarios: [
      {
        id: "2-1",
        tag: "💔 Compartilhando uma Dor",
        question:
          "Na reunião de célula, um membro começa a compartilhar uma situação difícil. O que você faz?",
        choices: [
          {
            id: "2-1-a",
            text: 'Ouve alguns segundos e logo dá conselhos rápidos: "Vai passar! Ore mais."',
            points: 25,
            type: "partial",
            feedback:
              "A intenção é boa, mas conselhos prematuros impedem a pessoa de se sentir ouvida.",
          },
          {
            id: "2-1-b",
            text: "Interrompe para contar uma situação parecida que você viveu.",
            points: 0,
            type: "wrong",
            feedback:
              "Redirecionar para si mesmo invalida a experiência do outro.",
          },
          {
            id: "2-1-c",
            text: "Ouve até o fim sem interromper, faz uma pergunta empática e só então oferece apoio.",
            points: 100,
            type: "correct",
            feedback: "Isso é escuta ativa!",
          },
        ],
      },
      {
        id: "2-2",
        tag: "💡 Ideia Divergente",
        question:
          "Um líder mais jovem apresenta uma ideia. Você discorda, mas ele ainda está falando. O que você faz?",
        choices: [
          {
            id: "2-2-a",
            text: "Interrompe no meio da fala para dizer que a ideia não vai funcionar.",
            points: 0,
            type: "wrong",
            feedback: "Interromper cria um ambiente inseguro.",
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
            text: 'Ouve até o fim, reconhece o esforço e pergunta: "Gostei! Como você pensaria em resolver X?"',
            points: 100,
            type: "correct",
            feedback: "Brilhante!",
          },
        ],
      },
      {
        id: "2-3",
        tag: "🤔 Perspectiva Diferente",
        question:
          "Um membro compartilha uma interpretação bíblica com a qual você discorda. O grupo está ouvindo.",
        choices: [
          {
            id: "2-3-a",
            text: '"Isso está errado. A Bíblia não fala assim." — de forma direta e firme.',
            points: 0,
            type: "wrong",
            feedback: "A forma importa.",
          },
          {
            id: "2-3-b",
            text: "Concorda com tudo para não criar tensão.",
            points: 25,
            type: "partial",
            feedback: "A paz artificial não edifica.",
          },
          {
            id: "2-3-c",
            text: '"Obrigado por compartilhar! Tenho uma perspectiva diferente — posso compartilhar também?"',
            points: 100,
            type: "correct",
            feedback:
              "Você valorizou a contribuição antes de apresentar a sua.",
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
      "Saber dizer não, reconhecer erros e receber críticas com maturidade são marcas de uma liderança saudável.",
    tip: "💡 Assertividade é <strong>equilíbrio entre firmeza e gentileza.</strong>",
    scenarios: [
      {
        id: "3-1",
        tag: "🙏 Pedido Além dos Limites",
        question:
          "O pastor pediu que você assumisse uma tarefa que está além da sua capacidade no momento. O que você faz?",
        choices: [
          {
            id: "3-1-a",
            text: "Aceita sem questionar, mesmo sabendo que não vai conseguir entregar.",
            points: 25,
            type: "partial",
            feedback:
              "Aceitar para não desapontar cria expectativas não cumpridas.",
          },
          {
            id: "3-1-b",
            text: '"Pastor, fico honrado(a). Mas não tenho capacidade para isso agora. Posso ajudar de outra forma?"',
            points: 100,
            type: "correct",
            feedback: "Impecável! Honesto, com boa vontade e alternativa.",
          },
          {
            id: "3-1-c",
            text: "Diz que sim na hora, mas some depois sem dar satisfação.",
            points: 0,
            type: "wrong",
            feedback: "A pior opção: gera frustração e destrói a confiança.",
          },
        ],
      },
      {
        id: "3-2",
        tag: "😤 Crítica Injusta",
        question:
          "Um líder te critica publicamente de forma que você considera injusta. Como você reage?",
        choices: [
          {
            id: "3-2-a",
            text: "Revida na hora com o mesmo tom.",
            points: 0,
            type: "wrong",
            feedback: "Reagir emocionalmente escala o conflito.",
          },
          {
            id: "3-2-b",
            text: "Não diz nada, mas carrega o ressentimento por dentro.",
            points: 25,
            type: "partial",
            feedback: "O ressentimento guardado corrói os relacionamentos.",
          },
          {
            id: "3-2-c",
            text: 'Mantém a calma e depois busca conversa privada: "Quero entender melhor e resolver juntos."',
            points: 100,
            type: "correct",
            feedback: "Maturidade em ação!",
          },
        ],
      },
      {
        id: "3-3",
        tag: "😬 Assumindo o Erro",
        question:
          "Você cometeu um erro na organização de um evento importante. O que você faz?",
        choices: [
          {
            id: "3-3-a",
            text: "Tenta minimizar o erro e redireciona a culpa para as circunstâncias.",
            points: 0,
            type: "wrong",
            feedback: "Negar responsabilidade corrói a confiança.",
          },
          {
            id: "3-3-b",
            text: "Admite o erro somente se perguntado diretamente.",
            points: 25,
            type: "partial",
            feedback:
              "Melhor do que negar, mas ainda é evitar a responsabilidade.",
          },
          {
            id: "3-3-c",
            text: '"Eu errei nessa parte. Me desculpem. Vou corrigir o que puder e aprender com isso."',
            points: 100,
            type: "correct",
            feedback: "Responsabilidade com humildade!",
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
      "Conflitos são inevitáveis na vida em comunidade. A questão não é se surgirão — é como você vai conduzi-los.",
    tip: "💡 <strong>Não fuja do conflito — gerencie-o.</strong>",
    scenarios: [
      {
        id: "4-1",
        tag: "⚔️ Conflito na Equipe",
        question:
          "Dois membros da sua equipe estão em conflito e você fica sabendo por terceiros. Como você age?",
        choices: [
          {
            id: "4-1-a",
            text: "Chama os dois juntos sem aviso e confronta cada um na frente do outro.",
            points: 0,
            type: "wrong",
            feedback: "Confrontar sem preparo pode escalar o conflito.",
          },
          {
            id: "4-1-b",
            text: "Espera que se resolvam sozinhos para não se meter.",
            points: 25,
            type: "partial",
            feedback: "Pode deixar feridas abertas.",
          },
          {
            id: "4-1-c",
            text: "Conversa individualmente com cada um primeiro, depois propõe uma mediação conjunta.",
            points: 100,
            type: "correct",
            feedback: "Mediação exemplar!",
          },
        ],
      },
      {
        id: "4-2",
        tag: "🔥 Reunião Acalorada",
        question:
          "Durante uma reunião, a discussão fica tensa e alguém começa a elevar a voz. Como você reage?",
        choices: [
          {
            id: "4-2-a",
            text: "Eleva a voz também para se fazer ouvir.",
            points: 0,
            type: "wrong",
            feedback: "Voz com voz cria caos.",
          },
          {
            id: "4-2-b",
            text: "Fica em silêncio, sem saber como reagir.",
            points: 25,
            type: "partial",
            feedback:
              "O silêncio evita escalamento, mas uma intervenção calma seria mais eficaz.",
          },
          {
            id: "4-2-c",
            text: '"Vamos pausar um momento. Todos queremos o melhor para a igreja. Podemos continuar com mais calma?"',
            points: 100,
            type: "correct",
            feedback: "Liderança comunicacional!",
          },
        ],
      },
      {
        id: "4-3",
        tag: "📋 Decisão Discordante",
        question:
          "Você discorda de uma decisão importante tomada pela liderança. O que você faz?",
        choices: [
          {
            id: "4-3-a",
            text: "Reclama para os membros, mas não fala nada com a liderança.",
            points: 0,
            type: "wrong",
            feedback: "Triangulação — destrói a confiança.",
          },
          {
            id: "4-3-b",
            text: "Aceita a decisão sem questionar, mas fica insatisfeito internamente.",
            points: 25,
            type: "partial",
            feedback:
              "A assertividade pede que você compartilhe sua perspectiva com respeito.",
          },
          {
            id: "4-3-c",
            text: '"Tenho uma perspectiva diferente sobre isso. Posso compartilhar com você?"',
            points: 100,
            type: "correct",
            feedback:
              "Levar a discordância diretamente a quem decidiu é o caminho assertivo.",
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
      "Uma comunidade assertiva é aquela onde todos se sentem seguros para ser quem são.",
    tip: "💡 <strong>Pertencimento se constrói em pequenos gestos.</strong>",
    scenarios: [
      {
        id: "5-1",
        tag: "👋 Membro Novo",
        question:
          "Um rosto novo aparece no culto pela primeira vez. A pessoa parece perdida e tímida. O que você faz?",
        choices: [
          {
            id: "5-1-a",
            text: "Espera que alguém designado para o acolhimento cuide disso.",
            points: 25,
            type: "partial",
            feedback: "Acolhimento genuíno vem de qualquer membro.",
          },
          {
            id: "5-1-b",
            text: "Faz um aceno de longe e continua sua conversa.",
            points: 0,
            type: "wrong",
            feedback: "O novo membro vai embora sem se sentir pertencente.",
          },
          {
            id: "5-1-c",
            text: "Vai até ele, se apresenta com cuidado e pergunta seu nome e como chegou até a igreja.",
            points: 100,
            type: "correct",
            feedback: "Isso é criar pertencimento!",
          },
        ],
      },
      {
        id: "5-2",
        tag: "😶 Afastamento Silencioso",
        question:
          "Você percebe que um membro está se afastando gradualmente, sem explicação. O que você faz?",
        choices: [
          {
            id: "5-2-a",
            text: "Não faz nada — se ele quiser, ele mesmo fala.",
            points: 0,
            type: "wrong",
            feedback:
              "O afastamento silencioso é quase sempre um pedido de atenção.",
          },
          {
            id: "5-2-b",
            text: '"Oi, sumido!" pelo WhatsApp.',
            points: 25,
            type: "partial",
            feedback:
              "Melhor do que ignorar, mas o tom pode minimizar algo sério.",
          },
          {
            id: "5-2-c",
            text: '"Sinto sua falta. Está tudo bem? Se quiser conversar, estou disponível — sem pressão."',
            points: 100,
            type: "correct",
            feedback: "Cuidado genuíno, espaço sem pressão.",
          },
        ],
      },
      {
        id: "5-3",
        tag: "🌡️ Comentário Polêmico",
        question:
          "Durante uma partilha, alguém faz um comentário polêmico. O grupo fica em silêncio. Você:",
        choices: [
          {
            id: "5-3-a",
            text: "Concorda rapidamente para aliviar o clima.",
            points: 25,
            type: "partial",
            feedback:
              "Falsa concordância pode validar algo que precisa de aprofundamento.",
          },
          {
            id: "5-3-b",
            text: '"Obrigado por compartilhar! Outras perspectivas são muito bem-vindas — quem quer contribuir?"',
            points: 100,
            type: "correct",
            feedback: "Magistral!",
          },
          {
            id: "5-3-c",
            text: "Ignora o comentário e muda de assunto imediatamente.",
            points: 0,
            type: "wrong",
            feedback: "Ignorar perde uma oportunidade de diálogo genuíno.",
          },
        ],
      },
    ],
  },

  // ── FASES NOVAS ──────────────────────────────────────────

  {
    id: 6,
    number: 6,
    title: "Comunicação Digital",
    description:
      "O WhatsApp e as redes sociais são os novos campos de comunicação da igreja — e exigem ainda mais cuidado.",
    tip: "💡 <strong>O que é escrito permanece.</strong> Antes de enviar, pergunte: 'Eu diria isso pessoalmente, da mesma forma?'",
    scenarios: [
      {
        id: "6-1",
        tag: "📱 Conflito no WhatsApp",
        question:
          "Um desentendimento sério começou no grupo de WhatsApp da sua equipe. As mensagens foram mal interpretadas e o clima está pesado. Como você age?",
        choices: [
          {
            id: "6-1-a",
            text: "Entra no grupo e escreve um longo texto explicando sua posição e cobrando quem errou.",
            points: 0,
            type: "wrong",
            feedback:
              "Resolver publicamente o que devia ser privado escala o conflito.",
          },
          {
            id: "6-1-b",
            text: "Sai do grupo sem falar nada.",
            points: 0,
            type: "wrong",
            feedback: "Fugir do conflito digital não o resolve — piora.",
          },
          {
            id: "6-1-c",
            text: "Envia mensagem privada para os envolvidos e propõe resolver pessoalmente ou por chamada.",
            points: 100,
            type: "correct",
            feedback:
              "Excelente! Conflitos sérios precisam de comunicação com voz e presença.",
          },
        ],
      },
      {
        id: "6-2",
        tag: "📰 Fake News na Igreja",
        question:
          "Você recebe no WhatsApp uma 'notícia' polêmica sobre um líder cristão famoso. O grupo da igreja está esperando você se posicionar. O que você faz?",
        choices: [
          {
            id: "6-2-a",
            text: "Encaminha a notícia com um comentário de indignação.",
            points: 0,
            type: "wrong",
            feedback: "Compartilhar sem verificar alimenta a desinformação.",
          },
          {
            id: "6-2-b",
            text: "Ignora completamente, sem falar nada ao grupo.",
            points: 25,
            type: "partial",
            feedback:
              "Melhor do que espalhar, mas silenciar sem orientar deixa o grupo sem norte.",
          },
          {
            id: "6-2-c",
            text: "Pesquisa a fonte antes de opinar e pede ao grupo que verifiquem informações antes de compartilhar.",
            points: 100,
            type: "correct",
            feedback: "Liderança responsável!",
          },
        ],
      },
      {
        id: "6-3",
        tag: "💬 Crítica nas Redes",
        question:
          "A página da igreja no Instagram recebeu um comentário negativo público criticando a liderança. Como você responde?",
        choices: [
          {
            id: "6-3-a",
            text: "Responde de forma defensiva e agressiva protegendo a liderança.",
            points: 0,
            type: "wrong",
            feedback:
              "Resposta agressiva em público prejudica a imagem da igreja.",
          },
          {
            id: "6-3-b",
            text: "Apaga o comentário sem responder.",
            points: 25,
            type: "partial",
            feedback: "Apagar pode parecer censura.",
          },
          {
            id: "6-3-c",
            text: "Responde com respeito, agradece o feedback e convida a pessoa para uma conversa privada.",
            points: 100,
            type: "correct",
            feedback: "Transparência + acolhimento!",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    number: 7,
    title: "Feedback e Correção Fraterna",
    description:
      "Dar e receber feedback com maturidade é uma das práticas mais transformadoras da vida em comunidade.",
    tip: "💡 <strong>Feedback é presente, não punição.</strong> A intenção de edificar muda tudo.",
    scenarios: [
      {
        id: "7-1",
        tag: "🔧 Voluntário que Errou",
        question:
          "Um voluntário que você lidera cometeu um erro sério durante um evento. Você precisa conversar com ele. Como faz?",
        choices: [
          {
            id: "7-1-a",
            text: "Corrige na frente de todos logo após o evento, ainda emocionado.",
            points: 0,
            type: "wrong",
            feedback: "Correção pública humilha e fecha o coração.",
          },
          {
            id: "7-1-b",
            text: "Não fala nada para preservar o relacionamento.",
            points: 25,
            type: "partial",
            feedback:
              "Evitar o feedback priva o voluntário da chance de crescer.",
          },
          {
            id: "7-1-c",
            text: "Espera se acalmar, pede uma conversa privada e usa os 4 passos da CNV com cuidado.",
            points: 100,
            type: "correct",
            feedback: "Impecável! Tempo certo + espaço privado + CNV.",
          },
        ],
      },
      {
        id: "7-2",
        tag: "👂 Recebendo Feedback",
        question:
          "O pastor te chamou para dar um feedback sobre algo que você fez e que ele não gostou. Como você reage?",
        choices: [
          {
            id: "7-2-a",
            text: "Fica na defensiva e começa a justificar cada ponto antes de ouvi-lo terminar.",
            points: 0,
            type: "wrong",
            feedback: "Defensividade bloqueia o aprendizado.",
          },
          {
            id: "7-2-b",
            text: "Concorda com tudo sem questionar, mesmo sem entender.",
            points: 25,
            type: "partial",
            feedback: "Concordância passiva não é maturidade.",
          },
          {
            id: "7-2-c",
            text: "Ouve até o fim com atenção, agradece a transparência e faz perguntas para entender melhor.",
            points: 100,
            type: "correct",
            feedback: "Maturidade exemplar!",
          },
        ],
      },
      {
        id: "7-3",
        tag: "🤝 Correção Fraterna",
        question:
          "Você percebe que um amigo membro está agindo de forma que pode prejudicá-lo espiritualmente. Como você aborda?",
        choices: [
          {
            id: "7-3-a",
            text: "Fala diretamente para outras pessoas da liderança sem falar com ele primeiro.",
            points: 0,
            type: "wrong",
            feedback:
              "Ir à liderança antes de falar com a pessoa diretamente é triangulação (Mt 18:15).",
          },
          {
            id: "7-3-b",
            text: "Torce para que ele perceba sozinho e não faz nada.",
            points: 25,
            type: "partial",
            feedback: "Omissão também é uma forma de falta de amor.",
          },
          {
            id: "7-3-c",
            text: "Busca um momento particular, compartilha o que observou com amor e pergunta como ele está se sentindo.",
            points: 100,
            type: "correct",
            feedback: "Isso é correção fraterna!",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    number: 8,
    title: "Comunicação e Unidade",
    description:
      "A unidade da igreja não é ausência de diferenças — é a capacidade de comunicar as diferenças com amor e respeito.",
    tip: "💡 <strong>'Fazei tudo com amor.'</strong> 1 Coríntios 16:14.",
    scenarios: [
      {
        id: "8-1",
        tag: "🤝 Departamentos em Tensão",
        question:
          "Dois departamentos da igreja estão em tensão por causa de um mal-entendido. Como líder, o que você faz?",
        choices: [
          {
            id: "8-1-a",
            text: "Toma partido do departamento que você acha que está certo.",
            points: 0,
            type: "wrong",
            feedback: "Tomar partido divide mais ainda.",
          },
          {
            id: "8-1-b",
            text: "Deixa que se resolvam sozinhos para não se envolver.",
            points: 25,
            type: "partial",
            feedback: "A omissão do líder pode deixar a tensão crescer.",
          },
          {
            id: "8-1-c",
            text: "Ouve cada liderança separadamente, depois facilita uma reunião com foco na missão comum.",
            points: 100,
            type: "correct",
            feedback: "Mediação exemplar!",
          },
        ],
      },
      {
        id: "8-2",
        tag: "📣 Mudança Impopular",
        question:
          "Você precisa comunicar uma mudança impopular para a congregação. Como faz?",
        choices: [
          {
            id: "8-2-a",
            text: "Anuncia a mudança sem explicar o porquê e pede que todos aceitem.",
            points: 0,
            type: "wrong",
            feedback: "Anúncio sem contexto gera resistência.",
          },
          {
            id: "8-2-b",
            text: "Adia o anúncio indefinidamente com medo da reação.",
            points: 25,
            type: "partial",
            feedback: "A procrastinação alimenta rumores e desconfiança.",
          },
          {
            id: "8-2-c",
            text: "Explica o contexto e os motivos, ouve as preocupações e mantém canais abertos para perguntas.",
            points: 100,
            type: "correct",
            feedback:
              "Transparência + escuta = confiança mesmo nas mudanças difíceis.",
          },
        ],
      },
      {
        id: "8-3",
        tag: "🚪 Membro Ameaçando Sair",
        question:
          "Um membro antigo e influente está insatisfeito e ameaçando sair da igreja. Como você age?",
        choices: [
          {
            id: "8-3-a",
            text: "Tenta convencê-lo a ficar prometendo coisas que talvez não possa cumprir.",
            points: 0,
            type: "wrong",
            feedback: "Promessas vazias geram problemas maiores no futuro.",
          },
          {
            id: "8-3-b",
            text: "Não faz nada — se ele quiser sair, que saia.",
            points: 25,
            type: "partial",
            feedback: "Indiferença com quem está sofrendo não é pastoral.",
          },
          {
            id: "8-3-c",
            text: "Busca uma conversa honesta, ouve sem julgamento, expressa o valor dele e respeita sua decisão final.",
            points: 100,
            type: "correct",
            feedback:
              "Perfeito! Acolher, ouvir e respeitar a autonomia — comunicação assertiva com amor.",
          },
        ],
      },
    ],
  },
];
