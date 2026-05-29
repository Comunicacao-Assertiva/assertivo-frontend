import type { Phase } from '@/types/game'

export const PHASES_DATA: Phase[] = [
  {
    id: 1, number: 1,
    title: 'Expressão e Clareza',
    description: 'Comunicar-se com clareza, objetividade e respeito é o primeiro passo para uma comunicação assertiva.',
    tip: '💡 Lembre-se: assertividade não é ser agressivo nem ser passivo — é ser <strong>claro e respeitoso ao mesmo tempo.</strong>',
    scenarios: [
      {
        id: '1-1', tag: '📲 Comunicação Digital',
        question: 'O pastor mudou o horário do culto e pediu para você avisar o grupo pelo WhatsApp. Qual mensagem você envia?',
        choices: [
          { id:'1-1-a', text:'"Gente, mudou o horário. Apareçam quando puderem."', points:25, type:'partial', feedback:'Razoável, mas falta clareza: qual o novo horário? Por quê mudou? Mensagens vagas geram confusão no grupo.' },
          { id:'1-1-b', text:'"Irmãos! O culto será às 19h (era 18h). Motivo: compromisso pastoral. Contamos com todos! Dúvidas, me chame."', points:100, type:'correct', feedback:'Assertivo! Você foi claro sobre o que mudou, por quê e como tirar dúvidas. Exatamente o que o grupo precisava.' },
          { id:'1-1-c', text:'"Não sei se alguém viu, mas acho que mudou alguma coisa no horário..."', points:0, type:'wrong', feedback:'Essa mensagem gera mais insegurança do que clareza. Uma comunicação assertiva transmite certeza, não dúvida.' },
        ],
      },
      {
        id: '1-2', tag: '🕐 Atraso Frequente',
        question: 'Um membro da sua equipe chega sempre atrasado e acaba atrapalhando o início das reuniões. Como você aborda?',
        choices: [
          { id:'1-2-a', text:'"Você é sempre o último! Isso é falta de respeito com todo mundo!"', points:0, type:'wrong', feedback:'Agressivo e generalizante. Atacar a pessoa ao invés do comportamento prejudica o relacionamento.' },
          { id:'1-2-b', text:'Você não fala nada para não criar conflito.', points:25, type:'partial', feedback:'Evitar o conflito pode parecer paz, mas o problema continua. A assertividade exige coragem para abordar com cuidado.' },
          { id:'1-2-c', text:'"Percebi que tem chegado depois do início. Tem algo acontecendo? Quero entender se posso ajudar."', points:100, type:'correct', feedback:'Excelente! Você descreveu o comportamento sem julgar, abriu espaço para escuta e ofereceu ajuda. Assertividade com empatia.' },
        ],
      },
      {
        id: '1-3', tag: '🎤 Falar em Público',
        question: 'Você precisa dar um anúncio importante para toda a congregação. O nervosismo bate. O que você faz?',
        choices: [
          { id:'1-3-a', text:'Fala tão rápido e nervoso que mistura vários recados — ninguém entende direito.', points:0, type:'wrong', feedback:'A ansiedade atropelou a mensagem. A comunicação assertiva exige preparação antes de falar.' },
          { id:'1-3-b', text:'Pede para outra pessoa falar por você, sem nem tentar.', points:25, type:'partial', feedback:'Às vezes pedir ajuda é prudente, mas evitar sistematicamente dificulta o desenvolvimento.' },
          { id:'1-3-c', text:'Respira fundo, organiza o recado em 2-3 pontos claros e fala olhando para as pessoas.', points:100, type:'correct', feedback:'Perfeito! Preparação + calma + contato visual = comunicação assertiva e eficaz.' },
        ],
      },
    ],
  },
  {
    id: 2, number: 2,
    title: 'Escuta Ativa e Empatia',
    description: 'Ouvir de verdade — sem interromper, sem julgamentos — é tão importante quanto saber falar.',
    tip: '💡 Regra de ouro: <strong>ouça para entender, não para responder.</strong> Tiago 1:19 — "seja pronto para ouvir, tardio para falar."',
    scenarios: [
      {
        id: '2-1', tag: '💔 Compartilhando uma Dor',
        question: 'Na reunião de célula, um membro começa a compartilhar uma situação difícil. O que você faz?',
        choices: [
          { id:'2-1-a', text:'Ouve alguns segundos e logo dá conselhos rápidos: "Vai passar! Ore mais."', points:25, type:'partial', feedback:'A intenção é boa, mas conselhos prematuros interrompem o processo de a pessoa se sentir ouvida.' },
          { id:'2-1-b', text:'Interrompe para contar uma situação parecida que você viveu.', points:0, type:'wrong', feedback:'Redirecionar para si mesmo invalida a experiência do outro. Escuta ativa exige deixar o protagonismo com quem fala.' },
          { id:'2-1-c', text:'Ouve até o fim sem interromper, faz uma pergunta empática e só então oferece apoio.', points:100, type:'correct', feedback:'Isso é escuta ativa! Você deu ao membro o que ele mais precisava: ser verdadeiramente ouvido.' },
        ],
      },
      {
        id: '2-2', tag: '💡 Ideia Divergente',
        question: 'Um líder mais jovem apresenta uma ideia. Você discorda, mas ele ainda está falando. O que você faz?',
        choices: [
          { id:'2-2-a', text:'Interrompe no meio da fala para dizer que a ideia não vai funcionar.', points:0, type:'wrong', feedback:'Interromper cria um ambiente inseguro. Mesmo discordando, ouça até o fim.' },
          { id:'2-2-b', text:'Ouve até o fim, mas não comenta nada para evitar conflito.', points:25, type:'partial', feedback:'Ouvir até o fim é ótimo, mas omitir sua perspectiva também é passividade.' },
          { id:'2-2-c', text:'Ouve até o fim, reconhece o esforço e pergunta: "Gostei! Como você pensaria em resolver X?"', points:100, type:'correct', feedback:'Brilhante! Você ouviu, reconheceu e fez uma pergunta construtiva. Isso valoriza e engaja.' },
        ],
      },
      {
        id: '2-3', tag: '🤔 Perspectiva Diferente',
        question: 'Um membro compartilha uma interpretação bíblica com a qual você discorda. O grupo está ouvindo.',
        choices: [
          { id:'2-3-a', text:'"Isso está errado. A Bíblia não fala assim." — de forma direta e firme.', points:0, type:'wrong', feedback:'A forma importa. Corrigir assim em público gera vergonha e fecha o coração do outro.' },
          { id:'2-3-b', text:'Concorda com tudo para não criar tensão, mesmo sem acreditar.', points:25, type:'partial', feedback:'A paz artificial não edifica. A assertividade pede honestidade — com amor.' },
          { id:'2-3-c', text:'"Obrigado por compartilhar! Tenho uma perspectiva diferente — posso compartilhar também?"', points:100, type:'correct', feedback:'Você valorizou a contribuição antes de apresentar a sua. Isso é falar a verdade em amor (Ef 4:15).' },
        ],
      },
    ],
  },
  {
    id: 3, number: 3,
    title: 'Postura Assertiva',
    description: 'Saber dizer não, reconhecer erros e receber críticas com maturidade são marcas de uma liderança saudável.',
    tip: '💡 Assertividade é <strong>equilíbrio entre firmeza e gentileza.</strong> Você pode ser direto sem ser duro.',
    scenarios: [
      {
        id: '3-1', tag: '🙏 Pedido Além dos Limites',
        question: 'O pastor pediu que você assumisse uma tarefa que está além da sua capacidade no momento. O que você faz?',
        choices: [
          { id:'3-1-a', text:'Aceita sem questionar, mesmo sabendo que não vai conseguir entregar.', points:25, type:'partial', feedback:'Aceitar para não desapontar cria expectativas não cumpridas. Um não honesto prejudica menos.' },
          { id:'3-1-b', text:'"Pastor, fico honrado(a). Mas não tenho capacidade para isso agora. Posso ajudar de outra forma?"', points:100, type:'correct', feedback:'Impecável! Honesto, com boa vontade e alternativa. Isso é assertividade com integridade.' },
          { id:'3-1-c', text:'Diz que sim na hora, mas some depois sem dar satisfação.', points:0, type:'wrong', feedback:'A pior das opções: gera frustração e destrói a confiança. Um não claro é sempre melhor que um sim vazio.' },
        ],
      },
      {
        id: '3-2', tag: '😤 Crítica Injusta',
        question: 'Um líder te critica publicamente de forma que você considera injusta. Como você reage?',
        choices: [
          { id:'3-2-a', text:'Revida na hora com o mesmo tom.', points:0, type:'wrong', feedback:'Reagir emocionalmente escala o conflito e prejudica sua credibilidade. Assertividade exige autocontrole.' },
          { id:'3-2-b', text:'Não diz nada, mas carrega o ressentimento por dentro.', points:25, type:'partial', feedback:'O ressentimento guardado corrói os relacionamentos. Meia solução.' },
          { id:'3-2-c', text:'Mantém a calma e depois busca conversa privada: "Quero entender melhor e resolver juntos."', points:100, type:'correct', feedback:'Maturidade em ação! Você se autorregulou e escolheu o diálogo privado — forma mais assertiva de resolver.' },
        ],
      },
      {
        id: '3-3', tag: '😬 Assumindo o Erro',
        question: 'Você cometeu um erro na organização de um evento importante. O que você faz?',
        choices: [
          { id:'3-3-a', text:'Tenta minimizar o erro e redireciona a culpa para as circunstâncias.', points:0, type:'wrong', feedback:'Negar responsabilidade corrói a confiança. Líderes que assumem erros inspiram mais.' },
          { id:'3-3-b', text:'Admite o erro somente se perguntado diretamente.', points:25, type:'partial', feedback:'Melhor do que negar, mas esperar ser perguntado ainda é evitar a responsabilidade proativamente.' },
          { id:'3-3-c', text:'"Eu errei nessa parte. Me desculpem. Vou corrigir o que puder e aprender com isso."', points:100, type:'correct', feedback:'Responsabilidade com humildade! Assumir erros sem defensividade é marca de liderança madura.' },
        ],
      },
    ],
  },
  {
    id: 4, number: 4,
    title: 'Gestão de Conflitos',
    description: 'Conflitos são inevitáveis na vida em comunidade. A questão não é se surgirão — é como você vai conduzi-los.',
    tip: '💡 <strong>Não fuja do conflito — gerencie-o.</strong> A comunicação assertiva transforma o conflito em oportunidade de crescimento.',
    scenarios: [
      {
        id: '4-1', tag: '⚔️ Conflito na Equipe',
        question: 'Dois membros da sua equipe estão em conflito e você fica sabendo por terceiros. Como você age?',
        choices: [
          { id:'4-1-a', text:'Chama os dois juntos sem aviso e confronta cada um na frente do outro.', points:0, type:'wrong', feedback:'Confrontar sem preparo pode escalar o conflito. As pessoas precisam de espaço seguro antes de dialogar.' },
          { id:'4-1-b', text:'Espera que se resolvam sozinhos para não se meter.', points:25, type:'partial', feedback:'Pode deixar feridas abertas que comprometem a equipe. Omitir-se como líder tem custo.' },
          { id:'4-1-c', text:'Conversa individualmente com cada um primeiro, depois propõe uma mediação conjunta.', points:100, type:'correct', feedback:'Mediação exemplar! Ouvir cada parte separadamente garante segurança e honestidade no diálogo.' },
        ],
      },
      {
        id: '4-2', tag: '🔥 Reunião Acalorada',
        question: 'Durante uma reunião, a discussão fica tensa e alguém começa a elevar a voz. Como você reage?',
        choices: [
          { id:'4-2-a', text:'Eleva a voz também para se fazer ouvir.', points:0, type:'wrong', feedback:'Voz com voz cria caos. Quem mantém a calma tem poder de influência muito maior.' },
          { id:'4-2-b', text:'Fica em silêncio, sem saber como reagir.', points:25, type:'partial', feedback:'O silêncio evita escalamento, mas uma intervenção calma e firme seria mais eficaz.' },
          { id:'4-2-c', text:'"Vamos pausar um momento. Todos queremos o melhor para a igreja. Podemos continuar com mais calma?"', points:100, type:'correct', feedback:'Liderança comunicacional! Você desescalou, reafirmou o propósito comum e propôs mudança de postura.' },
        ],
      },
      {
        id: '4-3', tag: '📋 Decisão Discordante',
        question: 'Você discorda de uma decisão importante tomada pela liderança. O que você faz?',
        choices: [
          { id:'4-3-a', text:'Reclama para os membros, mas não fala nada com a liderança.', points:0, type:'wrong', feedback:'Triangulação — falar para liderados o que deveria ir à liderança. Destrói confiança e envenena o ambiente.' },
          { id:'4-3-b', text:'Aceita a decisão sem questionar, mas fica insatisfeito internamente.', points:25, type:'partial', feedback:'Se sua perspectiva pode contribuir, a assertividade pede que você a compartilhe respeitosamente.' },
          { id:'4-3-c', text:'"Tenho uma perspectiva diferente sobre isso. Posso compartilhar com você?"', points:100, type:'correct', feedback:'Levar a discordância diretamente a quem decidiu, com respeito e abertura, é o caminho assertivo.' },
        ],
      },
    ],
  },
  {
    id: 5, number: 5,
    title: 'Ambiente e Pertencimento',
    description: 'Uma comunidade assertiva é aquela onde todos se sentem seguros para ser quem são e expressar o que sentem.',
    tip: '💡 <strong>Pertencimento se constrói em pequenos gestos.</strong> Uma palavra de acolhimento pode mudar a experiência de alguém.',
    scenarios: [
      {
        id: '5-1', tag: '👋 Membro Novo',
        question: 'Um rosto novo aparece no culto pela primeira vez. A pessoa parece perdida e tímida. O que você faz?',
        choices: [
          { id:'5-1-a', text:'Espera que alguém designado para o acolhimento cuide disso.', points:25, type:'partial', feedback:'Acolhimento genuíno vem de qualquer membro — não precisa de cargo.' },
          { id:'5-1-b', text:'Faz um aceno de longe e continua sua conversa.', points:0, type:'wrong', feedback:'O novo membro vai embora sem se sentir pertencente. Pequenos gestos fazem toda a diferença.' },
          { id:'5-1-c', text:'Vai até ele, se apresenta com cuidado e pergunta seu nome e como chegou até a igreja.', points:100, type:'correct', feedback:'Isso é criar pertencimento! Um simples gesto pode mudar a vida dessa pessoa.' },
        ],
      },
      {
        id: '5-2', tag: '😶 Afastamento Silencioso',
        question: 'Você percebe que um membro está se afastando gradualmente, sem explicação. O que você faz?',
        choices: [
          { id:'5-2-a', text:'Não faz nada — se ele quiser, ele mesmo fala.', points:0, type:'wrong', feedback:'O afastamento silencioso é quase sempre um pedido de atenção não verbalizado. Esperar contradiz o cuidado pastoral.' },
          { id:'5-2-b', text:'"Oi, sumido!" pelo WhatsApp.', points:25, type:'partial', feedback:'Melhor do que ignorar, mas o tom pode minimizar algo sério. Um contato mais cuidadoso demonstra mais genuinidade.' },
          { id:'5-2-c', text:'"Sinto sua falta. Está tudo bem? Se quiser conversar, estou disponível — sem pressão."', points:100, type:'correct', feedback:'Perfeito! Cuidado genuíno, espaço sem pressão, disponibilidade. Comunicação assertiva a serviço do cuidado pastoral.' },
        ],
      },
      {
        id: '5-3', tag: '🌡️ Comentário Polêmico',
        question: 'Durante uma partilha, alguém faz um comentário polêmico. O grupo fica em silêncio. Você:',
        choices: [
          { id:'5-3-a', text:'Concorda rapidamente para aliviar o clima.', points:25, type:'partial', feedback:'Falsa concordância pode validar algo que precisa de aprofundamento ou correção.' },
          { id:'5-3-b', text:'"Obrigado por compartilhar! Outras perspectivas são muito bem-vindas — quem quer contribuir?"', points:100, type:'correct', feedback:'Magistral! Você valorizou a coragem de quem falou e abriu espaço para diálogo saudável.' },
          { id:'5-3-c', text:'Ignora o comentário e muda de assunto imediatamente.', points:0, type:'wrong', feedback:'Ignorar perde uma oportunidade de diálogo genuíno. Ambiente seguro exige disposição de abordar o difícil.' },
        ],
      },
    ],
  },
]
