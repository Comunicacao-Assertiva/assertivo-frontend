import type { Topic } from "@/types/game";

export const PHASES_DATA: Topic[] = [
  {
    id: 1,
    number: 1,
    icon: "🗣️",
    title: "Expressão e Clareza",
    description: "Comunicar com clareza é a base de tudo.",
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
              "Antes de enviar qualquer mensagem importante, responda:\n\n📌 O QUÊ você está comunicando?\n📌 POR QUÊ isso importa para o receptor?\n📌 COMO ele deve agir?\n\nSe não souber responder uma das três, revise antes de enviar.",
          },
          {
            id: "1-1-q1",
            type: "choice",
            tag: "💬 Mensagem Ambígua",
            question:
              'Seu colega mandou: "Precisamos conversar sobre aquele projeto." Sem mais contexto. Você fica ansioso. O que você faz?',
            choices: [
              {
                id: "a",
                text: "Fica preocupado o dia todo tentando adivinhar o que é.",
                points: 0,
                type: "wrong",
                feedback:
                  "Ansiedade por falta de informação é evitável. Uma pergunta rápida resolve.",
              },
              {
                id: "b",
                text: 'Responde: "Claro! Qual aspecto especificamente? Assim já me preparo."',
                points: 100,
                type: "correct",
                feedback:
                  "Perfeito. Você eliminou a ambiguidade com uma pergunta direta e ainda demonstrou proatividade.",
              },
              {
                id: "c",
                text: 'Responde "Ok!" e espera ele elaborar.',
                points: 25,
                type: "partial",
                feedback:
                  "Funciona se ele elaborar logo, mas você pode esperar por horas desnecessariamente.",
              },
            ],
          },
          {
            id: "1-1-q2",
            type: "choice",
            tag: "📧 Tom Inadequado",
            question:
              "Você precisa corrigir um erro do fornecedor pelo terceiro mês seguido. Qual e-mail você envia?",
            choices: [
              {
                id: "a",
                text: '"Isso é INACEITÁVEL. Terceiro mês com o mesmo erro. Vou escalar para a diretoria."',
                points: 0,
                type: "wrong",
                feedback:
                  "Tom ameaçador queima a ponte e raramente resolve mais rápido do que uma abordagem profissional.",
              },
              {
                id: "b",
                text: '"Identificamos o mesmo problema de março e abril repetindo-se em maio. Precisamos entender a causa raiz e um prazo para correção definitiva."',
                points: 100,
                type: "correct",
                feedback:
                  "Fatos + padrão identificado + pedido específico. Profissional e difícil de ignorar.",
              },
              {
                id: "c",
                text: '"Olá, notamos novamente uma inconsistência. Podem verificar?"',
                points: 25,
                type: "partial",
                feedback:
                  "Educado demais para um erro recorrente. Não transmite a seriedade do problema.",
              },
            ],
          },
          {
            id: "1-1-q3",
            type: "choice",
            tag: "📋 Instrução Vaga",
            question:
              'Você delegou uma tarefa com: "Faz um relatório sobre as vendas do trimestre, tá?" O colaborador entregou algo completamente diferente do que você imaginava. De quem é a responsabilidade?',
            choices: [
              {
                id: "a",
                text: "Dele — você pediu um relatório de vendas, não precisa detalhar tudo.",
                points: 0,
                type: "wrong",
                feedback:
                  "Instrução vaga gera entrega vaga. A responsabilidade pela clareza na delegação é de quem delega.",
              },
              {
                id: "b",
                text: "Sua — a instrução não especificou formato, audiência, profundidade nem objetivo.",
                points: 100,
                type: "correct",
                feedback:
                  "Exato. Boa delegação inclui: objetivo, formato esperado, prazo e para quem serve o documento.",
              },
              {
                id: "c",
                text: "De ambos — ele deveria ter perguntado antes de começar.",
                points: 25,
                type: "partial",
                feedback:
                  "Parcialmente certo, mas a responsabilidade primária é de quem delegou. A instrução deveria ter dado base suficiente.",
              },
            ],
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
              'Pesquisas mostram:\n\n🔤 7% do impacto vem das palavras\n🎵 38% do tom de voz\n👁️ 55% da linguagem corporal\n\n"Tudo bem" pode ser reconfortante ou ameaçador dependendo de como é dito. Calibre as três camadas.',
          },
          {
            id: "1-2-q1",
            type: "choice",
            tag: "🎯 Feedback Verbal",
            question:
              "Você precisa dar um feedback negativo para um colega. Qual a melhor hora para fazê-lo?",
            choices: [
              {
                id: "a",
                text: "Logo após o erro acontecer, enquanto o contexto ainda está fresco.",
                points: 25,
                type: "partial",
                feedback:
                  "O contexto fresco ajuda, mas se você ou ele estiverem emocionados, o feedback perde eficácia.",
              },
              {
                id: "b",
                text: "Quando ambos estiverem calmos, em espaço privado e com tempo disponível.",
                points: 100,
                type: "correct",
                feedback:
                  "Timing + espaço + disponibilidade emocional = as condições ideais para um feedback ser ouvido.",
              },
              {
                id: "c",
                text: "Na próxima reunião de equipe para que todos saibam o que não fazer.",
                points: 0,
                type: "wrong",
                feedback:
                  "Feedback corretivo em público constrange e cria defensividade. O aprendizado vai para segundo plano.",
              },
            ],
          },
          {
            id: "1-2-q2",
            type: "choice",
            tag: "🗣️ Apresentação Travada",
            question:
              "No meio de uma apresentação importante você esquece completamente o que ia dizer. Silêncio por 5 segundos. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Pede desculpas várias vezes e começa a gaguejar visivelmente nervoso.",
                points: 0,
                type: "wrong",
                feedback:
                  "Excesso de desculpas amplifica o problema. O público sente mais ansiedade do que você precisa demonstrar.",
              },
              {
                id: "b",
                text: "Faz uma pausa natural, bebe um gole de água e continua de onde consegue retomar.",
                points: 100,
                type: "correct",
                feedback:
                  "Pausas são muito menos perceptíveis do que você imagina. Manter a calma profissionaliza o momento.",
              },
              {
                id: "c",
                text: "Pula aquela parte e continua no próximo tópico sem comentar.",
                points: 25,
                type: "partial",
                feedback:
                  "Funciona se não for um ponto crítico, mas pode deixar lacunas importantes na mensagem.",
              },
            ],
          },
          {
            id: "1-2-q3",
            type: "choice",
            tag: "🔊 Reunião Barulhenta",
            question:
              "Você está tentando fazer um ponto importante em reunião, mas duas pessoas estão conversando paralelamente e ninguém está te ouvindo. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Continua falando mais alto por cima das conversas paralelas.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode funcionar momentaneamente, mas falar mais alto não resolve o problema de atenção.",
              },
              {
                id: "b",
                text: "Para de falar, faz silêncio por 2-3 segundos até as conversas pararem, e então retoma.",
                points: 100,
                type: "correct",
                feedback:
                  "O silêncio estratégico é mais eficaz do que o volume. Chama atenção sem criar conflito.",
              },
              {
                id: "c",
                text: "Desiste de fazer o ponto — claramente não é o momento.",
                points: 0,
                type: "wrong",
                feedback:
                  "Silenciar seu ponto porque outros estão desatentos é passividade. A informação pode ser importante.",
              },
            ],
          },
        ],
      },
      {
        id: "1-3",
        title: "Clareza sob Pressão",
        description:
          "Quando a pressão sobe, a clareza cai. Aqui você treina os momentos mais difíceis.",
        items: [
          {
            id: "1-3-tip",
            type: "tip",
            icon: "🧘",
            title: "A pausa assertiva",
            content:
              'Sob pressão, o cérebro ativa o modo reativo.\n\nAntes de responder algo importante:\n\n💬 Diga: "Deixa eu pensar um segundo antes de responder."\n\nEssa frase simples te dá tempo e sinaliza que você leva a conversa a sério.',
          },
          {
            id: "1-3-q1",
            type: "choice",
            tag: "⚡ Pergunta na Hora Errada",
            question:
              "Numa reunião com o cliente, seu gestor te pergunta algo que você não sabe responder na hora. Todos olham para você. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Inventa uma resposta plausível para não parecer despreparado.",
                points: 0,
                type: "wrong",
                feedback:
                  "Informação inventada tem prazo de validade curto. Quando for descoberta, o dano à credibilidade é muito maior.",
              },
              {
                id: "b",
                text: '"Não tenho esse dado comigo agora — confirmo até amanhã com precisão."',
                points: 100,
                type: "correct",
                feedback:
                  "Honestidade + prazo específico = resposta profissional. Clientes preferem precisão a improviso.",
              },
              {
                id: "c",
                text: "Olha para o gestor esperando que ele resolva.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode funcionar se o gestor tomar a frente, mas parece despreparado e transfere a pressão.",
              },
            ],
          },
          {
            id: "1-3-q2",
            type: "choice",
            tag: "🔥 Acusação Injusta",
            question:
              "Num e-mail em cópia para toda a diretoria, um colega implica que o atraso do projeto foi culpa sua. Não foi. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Responde no mesmo e-mail (para todos) desmentindo e apresentando os fatos.",
                points: 25,
                type: "partial",
                feedback:
                  "Defensável, mas e-mail em cadeia com diretoria pode escalar. Considere se vale mais uma resposta direta e privada primeiro.",
              },
              {
                id: "b",
                text: "Responde apenas para o colega pedindo uma conversa, e depois, se necessário, esclarece para a diretoria.",
                points: 100,
                type: "correct",
                feedback:
                  "Resolve o mal-entendido diretamente primeiro. Se não resolver, a diretoria pode ser acionada com mais contexto.",
              },
              {
                id: "c",
                text: "Ignora — quem conhece seu trabalho sabe a verdade.",
                points: 0,
                type: "wrong",
                feedback:
                  "Silêncio num e-mail copiado para a diretoria pode ser interpretado como concordância. Não é o momento de confiar no subentendido.",
              },
            ],
          },
          {
            id: "1-3-q3",
            type: "choice",
            tag: "⏱️ Prazo Impossível Surpresa",
            question:
              "Sexta às 17h seu gestor diz que precisa de um relatório completo para segunda às 9h. Você já tinha planos de fim de semana importantes. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Cancela tudo e faz o relatório — prioridade é o trabalho.",
                points: 25,
                type: "partial",
                feedback:
                  "Comprometimento tem valor, mas aceitar sem questionar não dá ao gestor a chance de reavaliar a urgência real.",
              },
              {
                id: "b",
                text: '"Entendo a urgência. Posso entregar segunda às 14h ou uma versão simplificada na manhã. Qual atende melhor?"',
                points: 100,
                type: "correct",
                feedback:
                  "Você negocia sem recusar e dá opções reais. Isso é assertividade que gera resultado.",
              },
              {
                id: "c",
                text: "Diz que não consegue e pede para remarcar.",
                points: 0,
                type: "wrong",
                feedback:
                  "Recusa direta sem alternativa em situação urgente pode ser vista como falta de comprometimento.",
              },
            ],
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
    description:
      "Ouvir de verdade é a habilidade mais rara e mais poderosa da comunicação.",
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
              "Escuta ativa tem 3 etapas nessa ordem:\n\n1️⃣ RECEBER — ouvir sem interromper\n2️⃣ PROCESSAR — o que a pessoa realmente está dizendo?\n3️⃣ RESPONDER — com base no que foi dito, não no que você queria dizer\n\nA maioria pula direto para o 3 ainda no 1.",
          },
          {
            id: "2-1-q1",
            type: "choice",
            tag: "📱 Distração Digital",
            question:
              "Seu colaborador entra na sua sala para falar sobre algo que está te incomodando. Você está no meio de um e-mail urgente. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Continua digitando enquanto ouve — você é bom em multitarefa.",
                points: 0,
                type: "wrong",
                feedback:
                  "Multitarefa em conversas importantes é ilusória. Você perde nuances e a pessoa percebe que não está sendo prioridade.",
              },
              {
                id: "b",
                text: "Pede 2 minutos para terminar o e-mail, depois fecha o computador e dá atenção total.",
                points: 100,
                type: "correct",
                feedback:
                  "Honesto sobre a limitação do momento e comprometido com a conversa quando ela acontecer de verdade.",
              },
              {
                id: "c",
                text: "Para o e-mail e ouve, mesmo com a cabeça ainda no texto que estava escrevendo.",
                points: 25,
                type: "partial",
                feedback:
                  "Fisicamente presente, mentalmente ausente. Melhor do que continuar digitando, mas ainda não é escuta real.",
              },
            ],
          },
          {
            id: "2-1-q2",
            type: "choice",
            tag: "😢 Amigo em Crise",
            question:
              "Um amigo liga às 23h em pânico porque foi demitido. Você está exausto e tem reunião importante às 8h. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Atende, ouve por 30 minutos com presença real e combina continuar amanhã se necessário.",
                points: 100,
                type: "correct",
                feedback:
                  "Presença real por um tempo limitado vale muito mais do que horas de pseudo-escuta cansada.",
              },
              {
                id: "b",
                text: "Não atende — você pode ligar amanhã descansado e ser mais útil.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode fazer sentido dependendo do contexto, mas não atender sem explicação pode parecer abandono num momento crítico.",
              },
              {
                id: "c",
                text: "Atende e fica até ele parar de falar, mesmo que seja 2h da manhã.",
                points: 25,
                type: "partial",
                feedback:
                  "A intenção é ótima, mas escuta exausta tem qualidade baixa. Combinar um limite honesto pode ser mais assertivo.",
              },
            ],
          },
          {
            id: "2-1-q3",
            type: "choice",
            tag: "🤔 Quem Fala Mais",
            question:
              "Numa conversa 1:1 com seu colaborador, você percebe que já falou 80% do tempo. O que isso indica?",
            choices: [
              {
                id: "a",
                text: "Que você tem mais contexto e experiência para compartilhar — normal para um líder.",
                points: 0,
                type: "wrong",
                feedback:
                  "Líderes que falam 80% do tempo perdem 80% das informações que o colaborador poderia dar.",
              },
              {
                id: "b",
                text: "Que a dinâmica está invertida — você deveria estar ouvindo mais do que falando em 1:1s.",
                points: 100,
                type: "correct",
                feedback:
                  "1:1 é espaço do colaborador. Seu papel é fazer perguntas, não apresentar.",
              },
              {
                id: "c",
                text: "Nada de especial — algumas pessoas são mais quietas.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode haver pessoas mais quietas, mas como líder é sua responsabilidade criar o espaço para elas falar.",
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
              'Em divergências, 90% das pessoas ouvem para encontrar onde rebater.\n\nO desafio real: conseguir resumir a perspectiva oposta tão bem que a outra pessoa diria "é exatamente isso".\n\n💡 Antes de discordar: "Só para garantir que entendi — você está dizendo que..."\n\nQuem consegue fazer isso raramente perde debates importantes.',
          },
          {
            id: "2-2-q1",
            type: "choice",
            tag: "🗳️ Votação Unânime",
            question:
              "O time votou 6x1 numa decisão. Você é o 1. Como você lida com isso?",
            choices: [
              {
                id: "a",
                text: "Aceita — democracia é democracia. Maioria decidiu.",
                points: 25,
                type: "partial",
                feedback:
                  "Respeitar a decisão coletiva é certo, mas sem registrar sua perspectiva você pode estar deixando um risco ir embora não documentado.",
              },
              {
                id: "b",
                text: "Pede para documentar sua discordância e os motivos antes de seguir em frente.",
                points: 100,
                type: "correct",
                feedback:
                  '"Disagree and commit" com registro. Você respeita a decisão coletiva e mantém sua integridade intelectual.',
              },
              {
                id: "c",
                text: "Continua tentando mudar as mentes dos outros mesmo após a votação.",
                points: 0,
                type: "wrong",
                feedback:
                  "Insistir após decisão tomada é desgastante e cria resistência ao invés de abertura.",
              },
            ],
          },
          {
            id: "2-2-q2",
            type: "choice",
            tag: "🎓 O Especialista Discordante",
            question:
              'Um consultor externo apresenta dados que contradizem sua estratégia atual. Sua reação interna é "esses dados não refletem nossa realidade". O que você faz?',
            choices: [
              {
                id: "a",
                text: "Apresenta imediatamente os motivos pelos quais os dados dele não se aplicam ao seu contexto.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser válido, mas responder antes de investigar pode fazer você perder informação valiosa.",
              },
              {
                id: "b",
                text: "Faz perguntas para entender a metodologia e o contexto dos dados antes de concordar ou discordar.",
                points: 100,
                type: "correct",
                feedback:
                  "Curiosidade antes de defensividade. Você pode discordar depois com muito mais embasamento.",
              },
              {
                id: "c",
                text: "Concorda publicamente para não parecer fechado, mas ignora internamente.",
                points: 0,
                type: "wrong",
                feedback:
                  "Pseudoconcordância é desonesta e impede que você processe informação que pode ser útil.",
              },
            ],
          },
          {
            id: "2-2-q3",
            type: "choice",
            tag: "👨‍👩‍👧 Divergência Familiar",
            question:
              "Seus pais discordam fortemente de uma decisão de carreira que você tomou. A discussão está esquentando. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Explica pacientemente seus motivos até eles entenderem.",
                points: 25,
                type: "partial",
                feedback:
                  "Explicar é bom, mas insistir em convencer pode aumentar a resistência. Às vezes ouvir o medo deles primeiro é mais eficaz.",
              },
              {
                id: "b",
                text: "Pergunta o que especificamente os preocupa antes de defender sua posição.",
                points: 100,
                type: "correct",
                feedback:
                  "Entender o medo por trás da oposição muda completamente a conversa. Frequentemente a preocupação é mais simples do que parece.",
              },
              {
                id: "c",
                text: "Para a discussão — você já decidiu e não há o que debater.",
                points: 0,
                type: "wrong",
                feedback:
                  "Encerrar sem ouvir sinaliza que a opinião deles não importa. Isso machuca o relacionamento mesmo que a decisão seja sua.",
              },
            ],
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
              'Perguntas FECHADAS encerram: "Você ficou bravo?"\n→ Geram sim/não\n\nPerguntas ABERTAS constroem: "Como você se sentiu?"\n→ Convidam ao aprofundamento\n\n🔑 Troque "Você" por "Como", "O que", "Me conta sobre".',
          },
          {
            id: "2-3-q1",
            type: "choice",
            tag: "😶 Colaborador Calado",
            question:
              "Um colaborador que normalmente é ativo passou a ser silencioso nas últimas semanas. O que você pergunta?",
            choices: [
              {
                id: "a",
                text: '"Você está com algum problema pessoal?"',
                points: 25,
                type: "partial",
                feedback:
                  "Direta demais e pressupõe. Pode fazer a pessoa se sentir exposta antes de estar pronta.",
              },
              {
                id: "b",
                text: '"Tenho notado que você está mais quieto. Como você está se sentindo com o trabalho ultimamente?"',
                points: 100,
                type: "correct",
                feedback:
                  "Observação específica + pergunta aberta sobre o trabalho. Abre a conversa sem invadir a vida pessoal.",
              },
              {
                id: "c",
                text: '"Tudo bem com você?"',
                points: 0,
                type: "wrong",
                feedback:
                  'Pergunta fechada demais. A resposta mais provável é "sim" e a conversa não avança.',
              },
            ],
          },
          {
            id: "2-3-q2",
            type: "choice",
            tag: "🤝 Cliente Insatisfeito",
            question:
              'Um cliente diz "não estou satisfeito com os resultados". Qual a melhor primeira resposta?',
            choices: [
              {
                id: "a",
                text: '"Entendo. Vou verificar o que pode ter dado errado e te retorno."',
                points: 25,
                type: "partial",
                feedback:
                  "Profissional, mas você vai investigar sem saber o que realmente incomoda o cliente.",
              },
              {
                id: "b",
                text: '"O que especificamente não atendeu suas expectativas?"',
                points: 100,
                type: "correct",
                feedback:
                  'Antes de resolver, entenda o problema real. "Insatisfeito" pode significar coisas muito diferentes.',
              },
              {
                id: "c",
                text: '"Mas os indicadores mostram que atingimos as metas acordadas."',
                points: 0,
                type: "wrong",
                feedback:
                  "Apresentar dados antes de ouvir o cliente é defensivo. Ele vai se sentir ignorado e a relação vai piorar.",
              },
            ],
          },
          {
            id: "2-3-q3",
            type: "choice",
            tag: "🧩 Conflito Não Dito",
            question:
              "Você percebe que dois membros da equipe evitam se falar, mas nenhum dos dois comentou nada. Como você abre a conversa com cada um?",
            choices: [
              {
                id: "a",
                text: '"Vocês dois estão brigados? O que aconteceu?"',
                points: 0,
                type: "wrong",
                feedback:
                  "Pergunta direta demais que presume o problema e pode gerar negação defensiva.",
              },
              {
                id: "b",
                text: '"Tenho notado uma mudança na dinâmica entre vocês. Como você está se sentindo com a colaboração no time ultimamente?"',
                points: 100,
                type: "correct",
                feedback:
                  "Observação + pergunta aberta + contexto profissional. Cria espaço sem pressionar.",
              },
              {
                id: "c",
                text: "Não pergunta nada — se nenhum dos dois trouxe, não é problema seu intervir.",
                points: 25,
                type: "partial",
                feedback:
                  "Respeitar o espaço tem valor, mas quando afeta a colaboração do time, o líder tem papel na facilitação.",
              },
            ],
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
          'Assertividade real vai além de "falar o que pensa". É saber quando, como e para quê.',
        items: [
          {
            id: "3-1-tip",
            type: "tip",
            icon: "⚖️",
            title: "O triângulo da comunicação",
            content:
              "3 estilos:\n\n😶 PASSIVO: evita expressar → ressentimento acumulado\n😤 AGRESSIVO: expressa sem considerar o outro → relações danificadas\n✅ ASSERTIVO: expressa com respeito → resultados reais\n\nA maioria oscila entre passivo e agressivo. O assertivo exige prática constante.",
          },
          {
            id: "3-1-q1",
            type: "choice",
            tag: "🍽️ Pedido Errado no Restaurante",
            question:
              "O garçom traz seu prato errado. Você está com outras pessoas à mesa. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Come o que vieram para não criar situação constrangedora.",
                points: 0,
                type: "wrong",
                feedback:
                  "Sacrificar sua experiência para evitar um pedido simples é passividade desnecessária.",
              },
              {
                id: "b",
                text: "Chama o garçom discretamente e explica gentilmente que houve um engano.",
                points: 100,
                type: "correct",
                feedback:
                  "Direto, discreto, respeitoso. Comunicação assertiva não precisa ser dramática.",
              },
              {
                id: "c",
                text: "Reclama em voz alta para que o gerente ouça.",
                points: 0,
                type: "wrong",
                feedback:
                  "Constrange o garçom, incomoda a mesa e não resolve mais rápido do que uma abordagem direta.",
              },
            ],
          },
          {
            id: "3-1-q2",
            type: "choice",
            tag: "🎭 Opinião Pedida",
            question:
              "Um amigo te mostra o logotipo da empresa que ele criou com muito esforço. Você acha horrível. Ele pede sua opinião sincera. O que você faz?",
            choices: [
              {
                id: "a",
                text: '"Adorei! Ficou ótimo." — melhor não desanimá-lo.',
                points: 0,
                type: "wrong",
                feedback:
                  "Elogio falso não ajuda. Se ele vai ao mercado com um logo fraco, o dano é maior do que o desconforto da crítica agora.",
              },
              {
                id: "b",
                text: '"Tem coisas boas e coisas que poderiam ser diferentes. Quer que eu detalhe?"',
                points: 100,
                type: "correct",
                feedback:
                  "Reconhece o esforço, abre espaço para feedback real e pede permissão antes de criticar. Amizade assertiva.",
              },
              {
                id: "c",
                text: '"Não sou especialista em design, então minha opinião não vale muito."',
                points: 25,
                type: "partial",
                feedback:
                  "Esquiva inteligente, mas ele pediu sua perspectiva. Há formas de ser honesto sem fingir incompetência.",
              },
            ],
          },
          {
            id: "3-1-q3",
            type: "choice",
            tag: "📞 Ligação na Hora Errada",
            question:
              "Você está jantando em família quando seu gestor liga para falar sobre trabalho. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Atende e resolve — pode ser urgente.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser necessário às vezes, mas sistematicamente atender em todo momento familiar ensinará que não há limites.",
              },
              {
                id: "b",
                text: 'Não atende. Manda uma mensagem: "Estou em família. Posso ligar em 1h ou amanhã?"',
                points: 100,
                type: "correct",
                feedback:
                  "Você estabelece o limite, comunica a razão e oferece alternativa. Isso é assertividade com consideração.",
              },
              {
                id: "c",
                text: "Não atende e não avisa nada.",
                points: 0,
                type: "wrong",
                feedback:
                  "Ignorar sem comunicar cria ansiedade e pode ser mal interpretado como descaso.",
              },
            ],
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
              'Pressão social ativa o instinto de conformidade — é neurológico.\n\nReconhecer ajuda:\n✅ "Estou sentindo pressão para concordar"\n✅ Pause antes de responder\n✅ Pergunte: "Estou cedendo por argumentos ou por desconforto?"\n\nMudar por argumentos = crescimento\nCeder por pressão = erosão de autenticidade',
          },
          {
            id: "3-2-q1",
            type: "choice",
            tag: "🍻 Pressão Social Literal",
            question:
              "Numa confraternização da empresa, colegas insistem que você beba álcool mesmo depois de você recusar uma vez. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Aceita um drink para não ficar como o chato da turma.",
                points: 0,
                type: "wrong",
                feedback:
                  "Ceder a pressão sobre seu próprio corpo é a forma mais fundamental de falha de assertividade.",
              },
              {
                id: "b",
                text: 'Repete com tranquilidade e firmeza: "Não, obrigado. Já disse que não vou beber hoje."',
                points: 100,
                type: "correct",
                feedback:
                  "Sem justificativa, sem raiva, sem negociação. Limite repetido com calma encerra a pressão.",
              },
              {
                id: "c",
                text: 'Inventa uma desculpa médica para ter uma razão "válida".',
                points: 25,
                type: "partial",
                feedback:
                  "Funciona, mas você não deveria precisar de justificativa para uma escolha pessoal.",
              },
            ],
          },
          {
            id: "3-2-q2",
            type: "choice",
            tag: "💰 Vaquinha Obrigatória",
            question:
              "O grupo da empresa está fazendo uma vaquinha cara para um presente coletivo. Você está com o orçamento apertado mas ninguém sabe disso. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Coloca o valor mesmo apertado — não quer parecer mão-fechada.",
                points: 0,
                type: "wrong",
                feedback:
                  "Comprometer suas finanças por pressão social é um limite que vale comunicar.",
              },
              {
                id: "b",
                text: '"Posso contribuir com [X], que é o que consigo agora."',
                points: 100,
                type: "correct",
                feedback:
                  "Você participa dentro do que pode, sem justificativa excessiva. Direto e honesto.",
              },
              {
                id: "c",
                text: "Diz que esqueceu a carteira e some na hora de pagar.",
                points: 0,
                type: "wrong",
                feedback:
                  "Esquiva desonesta cria mais problemas a longo prazo do que uma conversa direta.",
              },
            ],
          },
          {
            id: "3-2-q3",
            type: "choice",
            tag: "🗳️ Pressão para Concordar",
            question:
              'Seu time inteiro parece animado com uma ideia nova. Você vê um risco que ninguém mencionou. Quanto mais entusiasmados ficam, mais você sente que seria "matar o astral" falar. O que você faz?',
            choices: [
              {
                id: "a",
                text: "Guarda para si — o entusiasmo vai morrer sozinho quando o risco aparecer.",
                points: 0,
                type: "wrong",
                feedback:
                  "Você tinha informação relevante e optou por não compartilhar. Isso não é discrição, é omissão.",
              },
              {
                id: "b",
                text: '"Adoro o entusiasmo. Posso compartilhar uma preocupação antes de fecharmos?"',
                points: 100,
                type: "correct",
                feedback:
                  "Você reconhece o positivo e cria espaço para seu ponto sem desanimar. Contribuição real.",
              },
              {
                id: "c",
                text: "Fala o risco imediatamente com todos os detalhes para garantir que foi ouvido.",
                points: 25,
                type: "partial",
                feedback:
                  "O conteúdo é certo mas o timing e o tom podem criar resistência desnecessária ao ponto válido.",
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
              'Com pessoas de maior poder:\n\n1️⃣ DADOS — "Os números mostram que..."\n2️⃣ IMPACTO — "O resultado disso é..."\n3️⃣ PROPOSTA — "Minha sugestão seria..."\n4️⃣ ABERTURA — "O que você acha?"\n\nFoco no problema, não na pessoa.',
          },
          {
            id: "3-3-q1",
            type: "choice",
            tag: "📝 Tarefa Além do Escopo",
            question:
              "Seu gestor te pede para fazer algo que claramente está fora da sua função e sem remuneração adicional. Não é urgente. O que você faz?",
            choices: [
              {
                id: "a",
                text: 'Faz sem questionar — faz parte de "vestir a camisa".',
                points: 25,
                type: "partial",
                feedback:
                  "Colaboração tem valor, mas aceitar sistematicamente tarefas além do escopo sem diálogo cria precedente problemático.",
              },
              {
                id: "b",
                text: "Pede uma conversa para entender se essa responsabilidade vai fazer parte permanente do seu papel e, se sim, como isso se reflete.",
                points: 100,
                type: "correct",
                feedback:
                  "Você abre o diálogo sem recusar. Assertividade inteligente que protege você e clarifica expectativas.",
              },
              {
                id: "c",
                text: "Recusa diretamente — não é sua função.",
                points: 0,
                type: "wrong",
                feedback:
                  "Recusa direta sem contexto pode parecer pouco colaborativo. Há formas mais eficazes de negociar o escopo.",
              },
            ],
          },
          {
            id: "3-3-q2",
            type: "choice",
            tag: "🔍 Processo Claramente Errado",
            question:
              "Você identifica um processo da empresa que está causando retrabalho em toda a equipe. Sua sugestão de melhoria já foi ignorada uma vez pelo gestor. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Desiste — se o gestor não quer mudar, não é sua batalha.",
                points: 0,
                type: "wrong",
                feedback:
                  "Desistir após a primeira tentativa de uma mudança que beneficia a equipe é passividade com custo coletivo.",
              },
              {
                id: "b",
                text: "Quantifica o impacto do problema (horas perdidas, custo) e apresenta novamente com dados concretos.",
                points: 100,
                type: "correct",
                feedback:
                  "Dados mudam conversas. Você transforma uma opinião em um argumento difícil de ignorar.",
              },
              {
                id: "c",
                text: "Vai direto para o gestor do gestor com a sugestão.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser necessário em algum momento, mas escalar sem dar ao gestor direto uma segunda chance queima pontes.",
              },
            ],
          },
          {
            id: "3-3-q3",
            type: "choice",
            tag: "⚠️ Pedido Antiético",
            question:
              "Seu gestor pede que você omita informações em um relatório para o cliente. Você entende que isso pode prejudicar o cliente. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Faz como pedido — ele tem mais contexto e experiência.",
                points: 0,
                type: "wrong",
                feedback:
                  "Hierarquia não justifica cumplicidade em algo que pode prejudicar terceiros. Você também é responsável.",
              },
              {
                id: "b",
                text: "Pede uma conversa privada para entender o motivo e expressar sua preocupação com as consequências.",
                points: 100,
                type: "correct",
                feedback:
                  "Você não recusa imediatamente nem obedece cegamente. Busca entender e posiciona sua preocupação.",
              },
              {
                id: "c",
                text: "Faz o relatório completo mesmo assim, sem avisar o gestor.",
                points: 25,
                type: "partial",
                feedback:
                  "A intenção ética é boa, mas agir contrariando o gestor sem diálogo cria um conflito evitável.",
              },
            ],
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
              "Limites existem em 4 áreas:\n\n⏰ TEMPO — o que você não pode comprometer\n💪 ENERGIA — o que te esgota além do razoável\n🧠 VALORES — o que vai contra o que você acredita\n🤝 RELAÇÕES — o que é inaceitável em como você é tratado\n\nSinal de limite ultrapassado: ressentimento. É o preço de não ter comunicado a tempo.",
          },
          {
            id: "4-1-q1",
            type: "choice",
            tag: "😤 Ressentimento Acumulado",
            question:
              "Você percebe que fica irritado toda vez que um colega específico te chama. Você nunca disse nada sobre o que incomoda. O que esse ressentimento indica?",
            choices: [
              {
                id: "a",
                text: "Que vocês são incompatíveis e é melhor evitar a pessoa.",
                points: 0,
                type: "wrong",
                feedback:
                  "Incompatibilidade raramente é inata. O ressentimento geralmente indica um limite não comunicado.",
              },
              {
                id: "b",
                text: "Que um limite está sendo ultrapassado repetidamente sem que você tenha comunicado.",
                points: 100,
                type: "correct",
                feedback:
                  "Exato. Ressentimento é o sintoma; o limite não comunicado é a causa. A solução é a comunicação, não o afastamento.",
              },
              {
                id: "c",
                text: "Que você está estressado com outras coisas e está descontando nessa pessoa.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser um fator, mas desconsiderar o padrão específico com essa pessoa é perder a informação mais importante.",
              },
            ],
          },
          {
            id: "4-1-q2",
            type: "choice",
            tag: "🔋 Limite de Energia",
            question:
              "Um amigo te liga frequentemente para longos desabafos e você sai dessas conversas esgotado. Você valoriza a amizade. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Continua atendendo sempre — amizade exige sacrifício.",
                points: 0,
                type: "wrong",
                feedback:
                  "Amizade que você sustenta às custas do próprio esgotamento não é sustentável a longo prazo.",
              },
              {
                id: "b",
                text: "Para de atender as ligações sem explicar o motivo.",
                points: 0,
                type: "wrong",
                feedback:
                  "Sumir sem explicação danifica a amizade desnecessariamente quando uma conversa honesta poderia resolver.",
              },
              {
                id: "c",
                text: "Fala com o amigo sobre como a dinâmica atual está te afetando e propõe um formato diferente para as conversas.",
                points: 100,
                type: "correct",
                feedback:
                  "Honestidade a serviço da amizade. Isso é mais respeitoso do que o silêncio ou o desaparecimento.",
              },
            ],
          },
          {
            id: "4-1-q3",
            type: "choice",
            tag: "🎭 Papel Forçado",
            question:
              "No trabalho, você é frequentemente chamado para mediar conflitos entre colegas, mas isso não faz parte da sua função. Você nunca reclamou. Agora está te sobrecarregando. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Continua mediando — você é bom nisso e as pessoas confiam em você.",
                points: 25,
                type: "partial",
                feedback:
                  "Ser bom em algo não significa ter a obrigação ilimitada de fazê-lo. Reconheça o limite antes do esgotamento.",
              },
              {
                id: "b",
                text: "Na próxima vez que pedirem, explica que não está em condições de absorver mais esse papel e sugere quem poderia ajudar.",
                points: 100,
                type: "correct",
                feedback:
                  "Você comunica o limite, não abandona as pessoas e aponta uma solução. Assertividade responsável.",
              },
              {
                id: "c",
                text: "Fala com o RH sobre a sobrecarga sem ter conversado com os colegas primeiro.",
                points: 0,
                type: "wrong",
                feedback:
                  "Escalar sem tentar resolver diretamente é triangulação. Tente a conversa direta primeiro.",
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
              'Use esta estrutura:\n\n1️⃣ OBSERVAÇÃO: "Quando [situação específica]..."\n2️⃣ IMPACTO: "...eu [impacto em você]..."\n3️⃣ PEDIDO: "...e preciso que [pedido concreto]."\n\nEspecificidade é essencial. Limites vagos não funcionam.',
          },
          {
            id: "4-2-q1",
            type: "choice",
            tag: "🌙 Mensagens Noturnas",
            question:
              "Seu gestor manda mensagens de trabalho às 23h esperando respostas rápidas. Isso está impactando seu sono. Como você aborda?",
            choices: [
              {
                id: "a",
                text: "Responde sempre para mostrar comprometimento.",
                points: 0,
                type: "wrong",
                feedback:
                  "Responder sempre valida a expectativa e garante que o padrão continue indefinidamente.",
              },
              {
                id: "b",
                text: "Ignora as mensagens sem nenhum comentário.",
                points: 25,
                type: "partial",
                feedback:
                  "Melhor do que responder sempre, mas a ausência de comunicação deixa expectativas no ar.",
              },
              {
                id: "c",
                text: '"Para dar meu melhor durante o dia, preciso descansar. Posso responder mensagens noturnas no próximo dia útil?"',
                points: 100,
                type: "correct",
                feedback:
                  "Você conecta seu limite ao desempenho (não ao conforto pessoal) e oferece solução. Profissional e eficaz.",
              },
            ],
          },
          {
            id: "4-2-q2",
            type: "choice",
            tag: "💸 Limite Financeiro",
            question:
              "Um familiar pede dinheiro emprestado pelo terceiro mês. Você quer ajudar mas está afetando suas finanças. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Empresta de novo — família é família.",
                points: 0,
                type: "wrong",
                feedback:
                  "Comprometer suas finanças sistematicamente por não conseguir comunicar um limite não é amor — é ausência de assertividade.",
              },
              {
                id: "b",
                text: '"Não consigo emprestar mais. Posso te ajudar a pensar em outras alternativas?"',
                points: 100,
                type: "correct",
                feedback:
                  "Recusou com clareza e ofereceu suporte alternativo. Limite + cuidado.",
              },
              {
                id: "c",
                text: "Diz que está sem dinheiro mesmo não estando.",
                points: 25,
                type: "partial",
                feedback:
                  "Resolve no curto prazo, mas a desonesta cria padrão de mentiras na relação.",
              },
            ],
          },
          {
            id: "4-2-q3",
            type: "choice",
            tag: "🎙️ Interrupções Constantes",
            question:
              "Um colega te interrompe constantemente nas reuniões. Já aconteceu várias vezes. Você nunca disse nada. Como você aborda?",
            choices: [
              {
                id: "a",
                text: 'Na próxima interrupção, diz em voz alta "você acabou de me interromper" na frente de todos.',
                points: 25,
                type: "partial",
                feedback:
                  "Nomear no momento pode ser necessário, mas a abordagem pública pode criar embaraço desnecessário.",
              },
              {
                id: "b",
                text: 'Busca uma conversa privada: "Percebi que às vezes você entra na minha fala antes de eu terminar. Pode me deixar concluir o raciocínio antes de responder?"',
                points: 100,
                type: "correct",
                feedback:
                  "Observação específica + pedido concreto + espaço privado. Assertividade que preserva a relação.",
              },
              {
                id: "c",
                text: "Passa a interrompê-lo também para ele sentir na pele.",
                points: 0,
                type: "wrong",
                feedback:
                  "Espelhar o comportamento ruim piora o ambiente sem resolver nada.",
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
              "Quando alguém ultrapassa um limite que você comunicou, não é sempre desonestidade — é hábito.\n\nResposta assertiva:\n🔁 Repita o limite com calma (sem mais emoção)\n📌 Seja específico sobre o que aconteceu\n⚡ Mencione a consequência se continuar\n\nSem consequências, limites são apenas sugestões.",
          },
          {
            id: "4-3-q1",
            type: "choice",
            tag: "🔁 Segundo Aviso",
            question:
              "Você já comunicou um limite claro para um colega. Ele voltou a ultrapassar. Qual é a diferença entre a primeira e a segunda conversa?",
            choices: [
              {
                id: "a",
                text: "A segunda conversa deve ser mais emocional para mostrar que você está sério.",
                points: 0,
                type: "wrong",
                feedback:
                  "Mais emoção na segunda conversa frequentemente reduz a eficácia. O padrão de resposta deve ser calmo e consistente.",
              },
              {
                id: "b",
                text: "A segunda conversa inclui a consequência caso o padrão continue.",
                points: 100,
                type: "correct",
                feedback:
                  "Na primeira: comunica o limite. Na segunda: repete o limite + consequência. Esse é o padrão assertivo.",
              },
              {
                id: "c",
                text: "Na segunda conversa você deve ser mais compreensivo — mudança de hábito é difícil.",
                points: 25,
                type: "partial",
                feedback:
                  "Compreensão tem valor, mas sem consequência o limite não tem peso.",
              },
            ],
          },
          {
            id: "4-3-q2",
            type: "choice",
            tag: "🚪 Cliente que Não Respeita",
            question:
              "Você comunicou claramente ao cliente que não atende fora do horário comercial. Ele continua ligando aos sábados. Você está na terceira situação. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Atende para não perder o cliente.",
                points: 0,
                type: "wrong",
                feedback:
                  "Atender após recusar repetidamente apaga todos os limites que você estabeleceu.",
              },
              {
                id: "b",
                text: "Não atende e na próxima reunião formal comunica que se o padrão continuar, precisará revisar os termos do contrato.",
                points: 100,
                type: "correct",
                feedback:
                  "Executou o limite e introduziu a consequência real. Limites sem consequências são apenas pedidos.",
              },
              {
                id: "c",
                text: "Pede desculpas por não poder atender e explica novamente a política de horários.",
                points: 25,
                type: "partial",
                feedback:
                  "Pedir desculpas por um limite seu confunde a mensagem. Você não deve desculpas por respeitar seu próprio contrato.",
              },
            ],
          },
          {
            id: "4-3-q3",
            type: "choice",
            tag: "🧩 Limite com Alguém Próximo",
            question:
              "Você estabeleceu um limite com seu parceiro(a) sobre não discutir problemas sérios quando um dos dois está bêbado. Aconteceu de novo. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Entra na discussão — o momento já está acontecendo e é melhor resolver logo.",
                points: 0,
                type: "wrong",
                feedback:
                  "Entrar na discussão que você disse que não entraria invalida seu próprio limite.",
              },
              {
                id: "b",
                text: '"Combinamos não discutir nessa condição. Vou dormir e continuamos amanhã."',
                points: 100,
                type: "correct",
                feedback:
                  "Você manteve o limite, citou o acordo e definiu quando retomar. Consistência sem agressão.",
              },
              {
                id: "c",
                text: "Fica em silêncio total até ele(a) parar.",
                points: 25,
                type: "partial",
                feedback:
                  "Melhor do que ceder, mas o silêncio sem comunicação pode ser interpretado como punição.",
              },
            ],
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
    description:
      "Conflito bem gerido fortalece relações. O que você evita hoje, paga com juros amanhã.",
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
              "Conflitos raramente são sobre o que parecem.\n\nDebaixo de toda discussão há uma necessidade não atendida:\n🤝 Reconhecimento\n🔒 Segurança\n🧠 Autonomia\n💬 Ser ouvido\n\nQuando você identifica a necessidade real, a solução costuma ser muito mais simples.",
          },
          {
            id: "5-1-q1",
            type: "choice",
            tag: "🔎 Conflito Recorrente",
            question:
              "Você e seu colega discutem sobre detalhes de apresentações toda semana. Superficialmente é sobre formatação. O que está realmente acontecendo?",
            choices: [
              {
                id: "a",
                text: "Um dos dois é perfeccionista demais e precisa aprender a ceder.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser um fator, mas reduzir a um traço de personalidade evita investigar a necessidade real por baixo.",
              },
              {
                id: "b",
                text: "Provavelmente um ou ambos têm uma necessidade de reconhecimento ou autonomia não atendida.",
                points: 100,
                type: "correct",
                feedback:
                  "Conflitos de superfície quase sempre têm raízes mais profundas. A formatação é o sintoma, não a causa.",
              },
              {
                id: "c",
                text: "O processo de aprovação de apresentações precisa ser revisto.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser parte da solução, mas resolver só o processo sem entender a necessidade humana não resolve o conflito.",
              },
            ],
          },
          {
            id: "5-1-q2",
            type: "choice",
            tag: "❄️ Silêncio Pós-Conflito",
            question:
              'Após uma discussão com um amigo, ele passou a te responder com "ok" e "sim" apenas. Você sente que algo ficou inacabado. O que você faz?',
            choices: [
              {
                id: "a",
                text: "Também responde com monossílabos — se ele quer guerra fria, terá uma.",
                points: 0,
                type: "wrong",
                feedback:
                  "Espelhar o comportamento hostil escala o afastamento sem resolver nada.",
              },
              {
                id: "b",
                text: 'Manda: "Percebi uma mudança desde nossa última conversa. Podemos falar sobre isso?"',
                points: 100,
                type: "correct",
                feedback:
                  "Nomeou o padrão com abertura para diálogo. É o caminho mais curto para resolver.",
              },
              {
                id: "c",
                text: "Espera ele se abrir — forçar a conversa pode piorar.",
                points: 25,
                type: "partial",
                feedback:
                  "Às vezes respeitar o tempo do outro é certo, mas esperar indefinidamente também tem um custo.",
              },
            ],
          },
          {
            id: "5-1-q3",
            type: "choice",
            tag: "🏠 Conflito Doméstico",
            question:
              "Você e seu(sua) parceiro(a) brigam sempre sobre quem faz o quê em casa. A mesma discussão, semanas diferentes. O que isso indica?",
            choices: [
              {
                id: "a",
                text: "Que vocês precisam de uma divisão de tarefas mais justa.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser parte da solução, mas resolver só a logística sem entender as necessidades por baixo frequentemente não resolve o conflito.",
              },
              {
                id: "b",
                text: "Que a solução logística que tentaram não atacou a necessidade real (reconhecimento, equidade, respeito).",
                points: 100,
                type: "correct",
                feedback:
                  "Conflito recorrente indica que a causa raiz não foi resolvida. A discussão de tarefas é o sintoma de algo maior.",
              },
              {
                id: "c",
                text: "Que vocês são incompatíveis no estilo de vida.",
                points: 0,
                type: "wrong",
                feedback:
                  "Conclusão precipitada. Conflitos recorrentes sobre logística raramente indicam incompatibilidade fundamental.",
              },
            ],
          },
        ],
      },
      {
        id: "5-2",
        title: "Resolver Conflitos",
        description:
          "Identificar o conflito é metade do caminho. Saber conduzi-lo é a outra metade.",
        items: [
          {
            id: "5-2-tip",
            type: "tip",
            icon: "🧭",
            title: "Os 4 passos da resolução",
            content:
              "1️⃣ OUÇA CADA PARTE separadamente\n2️⃣ IDENTIFIQUE a necessidade real de cada um\n3️⃣ ENCONTRE O TERRENO COMUM\n4️⃣ FACILITE O DIÁLOGO — com foco no futuro\n\n⚠️ Armadilha: tomar partido. O mediador que escolhe lados perde a credibilidade de ambos.",
          },
          {
            id: "5-2-q1",
            type: "choice",
            tag: "🏢 Conflito de Trabalho",
            question:
              "Dois colegas entram em conflito aberto numa reunião. Como líder, qual sua primeira ação?",
            choices: [
              {
                id: "a",
                text: "Pede que ambos se acalmem e continuem a reunião.",
                points: 25,
                type: "partial",
                feedback:
                  "Acalmar no momento é útil, mas não resolve o conflito — apenas o posterga.",
              },
              {
                id: "b",
                text: "Pausa a reunião, conversa individualmente com cada um e só então facilita o diálogo.",
                points: 100,
                type: "correct",
                feedback:
                  "Sequência correta: pausar → ouvir separado → facilitar junto. Pular etapas cria mais conflito.",
              },
              {
                id: "c",
                text: "Pede que resolvam fora da reunião e segue em frente.",
                points: 0,
                type: "wrong",
                feedback:
                  "Ignorar o conflito como líder sinaliza que o ambiente não é seguro. O problema vai voltar ampliado.",
              },
            ],
          },
          {
            id: "5-2-q2",
            type: "choice",
            tag: "🤝 Mediação Pedida",
            question:
              "Dois amigos te pedem para mediar um conflito entre eles. Ambos querem que você decida quem está certo. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Analisa os dois lados e dá seu veredicto — eles pediram sua opinião.",
                points: 0,
                type: "wrong",
                feedback:
                  "Dar veredicto em conflito entre amigos te posiciona como árbitro e você perde a amizade de um dos dois.",
              },
              {
                id: "b",
                text: "Diz que não é seu papel decidir quem está certo, mas pode ajudar os dois a se ouvirem.",
                points: 100,
                type: "correct",
                feedback:
                  "Você redefiniu seu papel de árbitro para facilitador. Isso é mais útil e preserva suas relações com ambos.",
              },
              {
                id: "c",
                text: "Recusa — não quer se meter em conflito de amigos.",
                points: 25,
                type: "partial",
                feedback:
                  "Respeitar os limites do papel é saudável, mas oferecer facilitar (sem julgar) seria mais útil do que recusar completamente.",
              },
            ],
          },
          {
            id: "5-2-q3",
            type: "choice",
            tag: "📧 Conflito por E-mail",
            question:
              "Uma cadeia de e-mails entre você e um colega está ficando tensa, com interpretações cada vez piores. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Continua respondendo por e-mail mas com cuidado redobrado nas palavras.",
                points: 25,
                type: "partial",
                feedback:
                  "Melhor do que escalar o tom, mas texto em clima de conflito raramente melhora — geralmente piora.",
              },
              {
                id: "b",
                text: 'Propõe uma ligação ou reunião rápida: "Acho que ficaria mais fácil por voz. Você tem 15 minutos?"',
                points: 100,
                type: "correct",
                feedback:
                  "Conflitos por texto se resolvem com conversa. A proposta de mudar o canal é a ação mais assertiva.",
              },
              {
                id: "c",
                text: "Vai falar com o gestor para que ele intervenha.",
                points: 0,
                type: "wrong",
                feedback:
                  "Escalar sem tentar resolver diretamente é precipitado. Mudar o canal de comunicação deve vir antes.",
              },
            ],
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
              'Alguns conflitos não são sobre o problema aparente — são sobre poder.\n\nSinais:\n• A pessoa não aceita nenhuma solução proposta\n• Cada resolução cria um novo problema\n• O comportamento piora quando você ganha visibilidade\n\nEstrategia: nomeie o padrão, não o episódio.\n"Percebo que temos tido dificuldades frequentes. Quero entender o que está por baixo disso."',
          },
          {
            id: "5-3-q1",
            type: "choice",
            tag: "🕵️ Comentários Sutis",
            question:
              'Um colega faz comentários sutis que questionam sua competência, sempre em tom de "brincadeira". Você ri junto mas fica incomodado depois. O que você faz?',
            choices: [
              {
                id: "a",
                text: "Faz brincadeiras de volta — mostra que você aguenta.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode criar um equilíbrio temporário, mas não resolve o padrão e pode escalar.",
              },
              {
                id: "b",
                text: 'Na próxima vez, em particular: "Percebo que você costuma brincar com minha competência. Isso me incomoda. Pode parar?"',
                points: 100,
                type: "correct",
                feedback:
                  "Nomear o padrão, o impacto e o pedido específico. Em particular para não constranger. Assertividade precisa.",
              },
              {
                id: "c",
                text: "Ri junto e deixa passar — são só brincadeiras.",
                points: 0,
                type: "wrong",
                feedback:
                  "Deixar passar sem nomear valida o padrão e garante que continue.",
              },
            ],
          },
          {
            id: "5-3-q2",
            type: "choice",
            tag: "👥 Aliança Contra Você",
            question:
              "Você percebe que dois colegas estão falando mal de você para outros membros da equipe. Rumores chegaram até você. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Conta para outras pessoas que eles estão fazendo isso — desfaz os rumores com a verdade.",
                points: 0,
                type: "wrong",
                feedback:
                  "Criar um contra-rumor só alimenta o ciclo. Você entra no mesmo jogo que os critica.",
              },
              {
                id: "b",
                text: 'Conversa diretamente com cada um: "Chegou ao meu conhecimento que há comentários negativos sobre mim. Prefiro resolver diretamente."',
                points: 100,
                type: "correct",
                feedback:
                  "Ir à fonte diretamente é a única forma de quebrar o ciclo. Coragem assertiva.",
              },
              {
                id: "c",
                text: "Vai ao gestor reportar o comportamento deles.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser necessário em algum momento, mas tentar o diálogo direto primeiro é mais assertivo e eficaz.",
              },
            ],
          },
          {
            id: "5-3-q3",
            type: "choice",
            tag: "🌡️ Conflito que Não Resolve",
            question:
              "Você tentou resolver um conflito com um colega duas vezes. Na terceira situação similar, ele age da mesma forma. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Tenta pela terceira vez com a mesma abordagem.",
                points: 0,
                type: "wrong",
                feedback:
                  "Fazer a mesma coisa esperando resultado diferente não é persistência — é falta de adaptação.",
              },
              {
                id: "b",
                text: "Leva ao gestor com documentação das tentativas anteriores e do padrão.",
                points: 100,
                type: "correct",
                feedback:
                  "Após duas tentativas diretas sem resultado, escalar com documentação é o próximo passo assertivo e profissional.",
              },
              {
                id: "c",
                text: "Aceita que é assim e passa a evitar trabalhar com esse colega.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser necessário como medida temporária, mas não resolve o problema para o time.",
              },
            ],
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
              "Antes de enviar mensagem importante:\n\n📖 Releia imaginando que o receptor está de péssimo humor.\n\nSe ainda funcionar → envie.\nSe parecer agressivo → revise.\n\nTexto não tem tom de voz nem expressão facial. O que você quis com leveza pode ser lido com dureza.",
          },
          {
            id: "6-1-q1",
            type: "choice",
            tag: '😤 "Visto" sem Resposta',
            question:
              "Você mandou uma mensagem importante para um colega. Ele viu e não respondeu há 3 horas. Você está ansioso. O que você faz?",
            choices: [
              {
                id: "a",
                text: 'Manda uma segunda mensagem: "???"',
                points: 0,
                type: "wrong",
                feedback:
                  "Mensagem de interrogação sem contexto soa agressiva e passivo-agressiva.",
              },
              {
                id: "b",
                text: 'Espera mais um tempo e, se urgente, liga ou manda: "Preciso de uma resposta até X hora — consegue?"',
                points: 100,
                type: "correct",
                feedback:
                  "Espera razoável + escalamento com prazo claro se urgente. Sem drama.",
              },
              {
                id: "c",
                text: "Interpreta o silêncio como rejeição e começa a se preocupar.",
                points: 0,
                type: "wrong",
                feedback:
                  "Interpretar silêncio digital sem tentar verificar é criar conflito onde pode não haver nenhum.",
              },
            ],
          },
          {
            id: "6-1-q2",
            type: "choice",
            tag: "📧 Tom Mal Interpretado",
            question:
              'Você recebe um e-mail do seu gestor com apenas: "Precisamos conversar sobre o relatório." Sem contexto. Qual é a resposta mais assertiva?',
            choices: [
              {
                id: "a",
                text: "Fica preocupado, relê o relatório procurando erros e espera a reunião.",
                points: 25,
                type: "partial",
                feedback:
                  "Preparar-se tem valor, mas criar ansiedade por falta de contexto é evitável com uma pergunta simples.",
              },
              {
                id: "b",
                text: 'Responde: "Claro! Há algo específico que quer revisar? Assim já me preparo."',
                points: 100,
                type: "correct",
                feedback:
                  "Elimina a ambiguidade com uma pergunta direta e mostra proatividade. Simples e eficaz.",
              },
              {
                id: "c",
                text: 'Responde "Ok!" e fica esperando.',
                points: 0,
                type: "wrong",
                feedback:
                  "Confirmar sem pedir contexto em situação que gera ansiedade é uma oportunidade perdida de esclarecer.",
              },
            ],
          },
          {
            id: "6-1-q3",
            type: "choice",
            tag: "🔥 E-mail Raivoso Recebido",
            question:
              "Você recebe um e-mail de um colega que soa raivoso e acusatório. Sua raiva imediata é igual à dele. O que você faz primeiro?",
            choices: [
              {
                id: "a",
                text: "Responde imediatamente com seus próprios argumentos — não pode deixar passar.",
                points: 0,
                type: "wrong",
                feedback:
                  "Responder emocionalmente por escrito cria um registro permanente do conflito e raramente resolve.",
              },
              {
                id: "b",
                text: "Fecha o e-mail, espera algumas horas, e decide se responde por escrito ou propõe uma conversa.",
                points: 100,
                type: "correct",
                feedback:
                  "A pausa é a decisão mais assertiva disponível nesse momento. Tempo = clareza.",
              },
              {
                id: "c",
                text: "Vai pessoalmente até a mesa dele resolver na hora.",
                points: 25,
                type: "partial",
                feedback:
                  "Conversa presencial pode ser mais eficaz, mas ir imediatamente ainda emocionado pode escalar.",
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
            title: "Privado vs público no digital",
            content:
              "Regra simples:\n\n🔒 PRIVADO: qualquer assunto que envolva 1-2 pessoas, conflito, feedback, problema pessoal\n\n📢 PÚBLICO: avisos gerais, informações para todos, celebrações\n\nMaior erro: resolver em público o que deveria ser privado → conflito que constrange todos.",
          },
          {
            id: "6-2-q1",
            type: "choice",
            tag: "📱 Conflito no Grupo",
            question:
              "Dois membros da família começam a discutir no grupo do WhatsApp da família. A situação está escalando. Você é o mais calmo. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Toma partido de quem você acha que está mais certo.",
                points: 0,
                type: "wrong",
                feedback:
                  "Tomar partido no grupo público amplia o conflito e te coloca no meio sem resolver.",
              },
              {
                id: "b",
                text: 'Manda no grupo: "Sugiro que resolvam isso em conversa privada. ❤️"',
                points: 100,
                type: "correct",
                feedback:
                  "Redirecionou sem julgamento e sem tomar partido. Simples e eficaz.",
              },
              {
                id: "c",
                text: "Sai do grupo temporariamente para não ser arrastado.",
                points: 25,
                type: "partial",
                feedback:
                  "Protege você, mas abandona o grupo no momento que mais precisa de alguém calmo.",
              },
            ],
          },
          {
            id: "6-2-q2",
            type: "choice",
            tag: "📰 Notícia Falsa no Grupo",
            question:
              "Um colega compartilhou no grupo da empresa uma informação claramente falsa sobre um assunto que você domina. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Corrige publicamente no grupo com todos os fatos.",
                points: 25,
                type: "partial",
                feedback:
                  "Corrigir no grupo pode ser necessário, mas dependendo do tom, pode constranger o colega.",
              },
              {
                id: "b",
                text: "Manda privado para o colega com a informação correta antes de qualquer ação pública.",
                points: 100,
                type: "correct",
                feedback:
                  "Dar ao colega a chance de corrigir sozinho preserva sua imagem e resolve mais rápido.",
              },
              {
                id: "c",
                text: "Não comenta — não é sua responsabilidade monitorar o que as pessoas compartilham.",
                points: 0,
                type: "wrong",
                feedback:
                  "Se você tem o conhecimento para corrigir, silenciar permite que a desinformação se espalhe.",
              },
            ],
          },
          {
            id: "6-2-q3",
            type: "choice",
            tag: "💬 Grupo que Fugiu do Escopo",
            question:
              "O grupo de trabalho virou espaço de memes e conversas pessoais. As notificações te atrapalham. Você não criou o grupo. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Sai do grupo silenciosamente.",
                points: 25,
                type: "partial",
                feedback:
                  "Resolve para você mas pode gerar interpretações negativas sobre sua saída.",
              },
              {
                id: "b",
                text: "Silencia o grupo e não faz nada — não é seu grupo para moderar.",
                points: 0,
                type: "wrong",
                feedback:
                  "Silenciar resolve seu problema individual mas o grupo perde sua função para todos.",
              },
              {
                id: "c",
                text: 'Sugere no grupo: "Esse espaço tem sido muito útil para trabalho. Podemos criar outro para conversas pessoais?"',
                points: 100,
                type: "correct",
                feedback:
                  "Propõe solução construtiva sem criticar ninguém. Cria espaço sem eliminar.",
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
              "Em reuniões virtuais:\n\n📷 Câmera ligada = presença e comprometimento\n🎤 Microfone em silêncio = respeito ao falante\n⌨️ Chat ativo = participação sem interrupção\n🔇 Silêncio total por muito tempo = ausência percebida\n\nAssertividade online: Peça a palavra no chat antes de falar.",
          },
          {
            id: "6-3-q1",
            type: "choice",
            tag: "🎥 Reunião sem Câmera",
            question:
              "Você está numa reunião virtual com 15 pessoas. Você é o único com a câmera ligada. Todas as câmeras dos outros estão desligadas. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Desliga também — não faz sentido ser o único exposto.",
                points: 25,
                type: "partial",
                feedback:
                  "Compreensível, mas você estava demonstrando engajamento. Decidir com base no comportamento dos outros é conformidade.",
              },
              {
                id: "b",
                text: "Mantém a câmera ligada — você se comprometeu com presença independente do que outros fazem.",
                points: 100,
                type: "correct",
                feedback:
                  "Assertividade é agir de acordo com seus valores, não espelhar o grupo. Você escolheu sua postura.",
              },
              {
                id: "c",
                text: "Pergunta ao facilitador se a câmera é obrigatória.",
                points: 25,
                type: "partial",
                feedback:
                  "Razoável, mas a pergunta pode interromper o fluxo da reunião desnecessariamente.",
              },
            ],
          },
          {
            id: "6-3-q2",
            type: "choice",
            tag: "🗣️ Travou na Reunião",
            question:
              "Em uma reunião virtual importante, você trava — esquece o que ia dizer, fica em silêncio por segundos. Como você lida?",
            choices: [
              {
                id: "a",
                text: "Pede desculpas várias vezes e fica vermelho visivelmente.",
                points: 0,
                type: "wrong",
                feedback:
                  "Excesso de desculpas amplifica o episódio. O grupo percebe mais o desconforto do que a pausa em si.",
              },
              {
                id: "b",
                text: 'Diz com naturalidade: "Perdi o fio — deixa eu retomar." E continua.',
                points: 100,
                type: "correct",
                feedback:
                  "Normalizar o momento sem drama é a resposta mais profissional. Todo mundo já travou em reunião.",
              },
              {
                id: "c",
                text: "Finge que está com problema técnico e desliga o microfone.",
                points: 25,
                type: "partial",
                feedback:
                  "Resolve o momento mas cria uma mentira desnecessária quando a honestidade seria mais fácil.",
              },
            ],
          },
          {
            id: "6-3-q3",
            type: "choice",
            tag: "⏱️ Reunião que Nunca Acaba",
            question:
              "Uma reunião online de 1h já vai na hora e meia. Você tem um compromisso marcado há semanas em 10 minutos. Como você lida?",
            choices: [
              {
                id: "a",
                text: "Sai sem falar nada — é responsabilidade do facilitador controlar o tempo.",
                points: 0,
                type: "wrong",
                feedback:
                  "Sair sem comunicar é rude e pode ser interpretado como desinteresse.",
              },
              {
                id: "b",
                text: 'Escreve no chat: "Tenho outro compromisso em 10 minutos. Posso contribuir com o ponto atual antes de sair."',
                points: 100,
                type: "correct",
                feedback:
                  "Transparente, não interrompe e ainda contribui. Assertividade discreta e eficaz.",
              },
              {
                id: "c",
                text: "Fica até o fim e cancela o outro compromisso.",
                points: 25,
                type: "partial",
                feedback:
                  "Às vezes necessário, mas sistematicamente sacrificar outros compromissos por reuniões sem controle de tempo é um problema a resolver.",
              },
            ],
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
        description:
          "Dar feedback assertivo é uma das habilidades mais difíceis e mais impactantes.",
        items: [
          {
            id: "7-1-tip",
            type: "tip",
            icon: "🎯",
            title: "O modelo SBI",
            content:
              "Use o modelo SBI:\n\n📍 SITUAÇÃO: quando e onde aconteceu\n🎬 COMPORTAMENTO: o que a pessoa fez (observável)\n💥 IMPACTO: o efeito concreto\n\nElimina julgamentos, generalizações e ataques à personalidade.",
          },
          {
            id: "7-1-q1",
            type: "choice",
            tag: "📝 Feedback Difícil",
            question:
              "Sua funcionária entrega trabalhos incompletos há 3 semanas. Você nunca falou nada esperando que melhorasse. Agora precisa agir. Qual a melhor abordagem?",
            choices: [
              {
                id: "a",
                text: '"Você está entregando trabalhos incompletos há semanas. Isso precisa melhorar."',
                points: 25,
                type: "partial",
                feedback:
                  'Direta mas genérica. Sem especificidade sobre o que é "incompleto" a pessoa não sabe exatamente o que mudar.',
              },
              {
                id: "b",
                text: '"Nas últimas 3 entregas notei que [exemplos específicos] estavam faltando. Isso impactou [consequência]. O que está acontecendo?"',
                points: 100,
                type: "correct",
                feedback:
                  "SBI aplicado + abertura para entender o contexto. Feedback que informa e convida ao diálogo.",
              },
              {
                id: "c",
                text: "Manda por e-mail para ter registro escrito.",
                points: 0,
                type: "wrong",
                feedback:
                  "Feedback corretivo por e-mail raramente funciona. A pessoa não pode esclarecer, você não vê a reação, e o texto pode soar pior do que a intenção.",
              },
            ],
          },
          {
            id: "7-1-q2",
            type: "choice",
            tag: "🌟 Elogio Específico",
            question:
              "Seu colaborador fez um trabalho excepcional num projeto difícil. Qual elogio tem mais impacto?",
            choices: [
              {
                id: "a",
                text: '"Ótimo trabalho! Você arrasou."',
                points: 0,
                type: "wrong",
                feedback:
                  'Genérico demais. A pessoa não sabe o que foi "ótimo" e o que deve repetir.',
              },
              {
                id: "b",
                text: '"A forma como você antecipou as objeções do cliente na apresentação mostrou preparo excepcional. Isso foi decisivo para fecharmos."',
                points: 100,
                type: "correct",
                feedback:
                  "Específico, comportamental e com impacto real. Isso a pessoa vai lembrar e repetir.",
              },
              {
                id: "c",
                text: "Não comenta — reconhecimento excessivo pode criar expectativas.",
                points: 0,
                type: "wrong",
                feedback:
                  "Omitir reconhecimento por medo de criar expectativas é uma falsa economia que desmotiva.",
              },
            ],
          },
          {
            id: "7-1-q3",
            type: "choice",
            tag: "🤐 Feedback de Amigo",
            question:
              "Seu melhor amigo lançou um negócio e te pede honestidade sobre o modelo de negócios. Você vê um problema sério. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Elogia o esforço e não menciona o problema — não é o momento de desanimá-lo.",
                points: 0,
                type: "wrong",
                feedback:
                  "Você tem informação que pode evitar um erro sério. Omitir por conforto não é lealdade — é omissão disfarçada de gentileza.",
              },
              {
                id: "b",
                text: 'Valoriza o esforço e depois: "Posso compartilhar uma preocupação que tive? Quero que você considere antes de avançar."',
                points: 100,
                type: "correct",
                feedback:
                  "Reconhecimento + permissão + perspectiva honesta. É possível ser gentil e honesto ao mesmo tempo.",
              },
              {
                id: "c",
                text: "Fala o problema diretamente sem rodeios — ele pediu honestidade.",
                points: 25,
                type: "partial",
                feedback:
                  "Honestidade tem valor, mas o contexto importa. Uma crítica direta sem reconhecimento pode fechar o ouvido do outro.",
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
            title: "Feedback ativa ameaça",
            content:
              'Receber feedback ativa o mesmo circuito cerebral da ameaça física — é neurológico.\n\nComo treinar a abertura:\n🛑 Pause antes de responder\n🔍 Pergunte: "O que nesse feedback pode ser verdade?"\n🙏 Agradeça antes de contestar\n\nVocê pode discordar — mas ouvir completamente primeiro qualifica sua discordância.',
          },
          {
            id: "7-2-q1",
            type: "choice",
            tag: "👂 Feedback Surpresa",
            question:
              "Na sua avaliação de desempenho, você recebe um feedback negativo que nunca havia sido mencionado antes. Você fica chocado. O que você faz?",
            choices: [
              {
                id: "a",
                text: 'Defende imediatamente: "Por que nunca me disseram isso antes?"',
                points: 25,
                type: "partial",
                feedback:
                  "A pergunta é válida, mas fazer isso imediatamente muda o foco do feedback para a crítica do processo.",
              },
              {
                id: "b",
                text: 'Ouve até o fim, agradece, e depois pergunta: "Por que isso não foi levantado antes? Quero entender para o futuro."',
                points: 100,
                type: "correct",
                feedback:
                  "Você processou o feedback primeiro e depois abordou o problema do processo — na ordem certa.",
              },
              {
                id: "c",
                text: "Concorda com tudo para não parecer defensivo.",
                points: 0,
                type: "wrong",
                feedback:
                  "Concordância estratégica sem processamento real não é maturidade — é performance.",
              },
            ],
          },
          {
            id: "7-2-q2",
            type: "choice",
            tag: "🔁 Mesmo Feedback de Várias Fontes",
            question:
              'Três pessoas diferentes, em momentos diferentes, deram a você um feedback similar sobre "sua comunicação ser direta demais". Você ainda acha que elas estão erradas. O que você faz?',
            choices: [
              {
                id: "a",
                text: "Confirma sua posição — três pessoas podem ter o mesmo viés.",
                points: 0,
                type: "wrong",
                feedback:
                  "Quando o mesmo feedback vem de fontes independentes, a probabilidade de ter algo de verdade aumenta muito.",
              },
              {
                id: "b",
                text: "Reflete com genuína curiosidade — feedback repetido independente quase sempre aponta algo real.",
                points: 100,
                type: "correct",
                feedback:
                  "Maturidade. Você não precisa concordar 100%, mas investigar com abertura é o caminho do crescimento.",
              },
              {
                id: "c",
                text: "Pede uma quarta opinião para desempatar.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser útil, mas buscar sistematicamente mais vozes para validar sua posição pode ser mecanismo de evitação.",
              },
            ],
          },
          {
            id: "7-2-q3",
            type: "choice",
            tag: "😤 Feedback que Você Discorda",
            question:
              "Seu gestor deu um feedback com o qual você discorda profundamente e com argumentos. Qual a sequência correta?",
            choices: [
              {
                id: "a",
                text: "Aceitar formalmente e ignorar internamente.",
                points: 0,
                type: "wrong",
                feedback:
                  "Pseudoaceitação não resolve — você sai sem aprender e sem resolver.",
              },
              {
                id: "b",
                text: "Ouvir completamente, agradecer, pedir um momento para refletir, e depois solicitar uma reunião para compartilhar sua perspectiva.",
                points: 100,
                type: "correct",
                feedback:
                  "Sequência ideal: ouvir → processar → contestar com contexto. Você se posiciona com maturidade.",
              },
              {
                id: "c",
                text: "Contestar imediatamente com todos os seus argumentos.",
                points: 25,
                type: "partial",
                feedback:
                  "Contestar é legítimo, mas fazer isso imediatamente pode parecer que você não ouviu de verdade.",
              },
            ],
          },
        ],
      },
      {
        id: "7-3",
        title: "Cultura de Feedback",
        description:
          "O maior impacto do feedback é quando se torna hábito de um grupo inteiro.",
        items: [
          {
            id: "7-3-tip",
            type: "tip",
            icon: "🌱",
            title: "Como criar cultura de feedback",
            content:
              "Cultura de feedback se cria com comportamento, não com política:\n\n✅ Peça feedback ativamente\n✅ Agradeça publicamente quem deu feedback difícil\n✅ Modele abertura: admita erros e o que aprendeu\n✅ Feedback frequente e pequeno > avaliação anual e grande\n\nO que você modela, o grupo replica.",
          },
          {
            id: "7-3-q1",
            type: "choice",
            tag: "🔕 Time sem Cultura de Feedback",
            question:
              "Você assumiu uma equipe onde as pessoas nunca se dão feedback. Avaliações anuais são vazias e protocolares. Como você começa a mudar isso?",
            choices: [
              {
                id: "a",
                text: "Implementa um processo formal de feedback trimestral com formulários.",
                points: 25,
                type: "partial",
                feedback:
                  "Processo pode ajudar, mas sem cultura, formulários viram protocolo vazio.",
              },
              {
                id: "b",
                text: "Começa pedindo feedback sobre seu próprio trabalho abertamente e agradece publicamente quando recebe.",
                points: 100,
                type: "correct",
                feedback:
                  "Modelar o comportamento é mais eficaz do que qualquer processo. Quando o líder pede feedback, a cultura muda.",
              },
              {
                id: "c",
                text: "Explica ao time a importância do feedback numa reunião.",
                points: 0,
                type: "wrong",
                feedback:
                  "Discurso sem comportamento correspondente não cria cultura. Ações são mais convincentes do que palavras.",
              },
            ],
          },
          {
            id: "7-3-q2",
            type: "choice",
            tag: "🎖️ Feedback Positivo Específico",
            question:
              "Você quer reconhecer publicamente o trabalho de um colaborador. Qual abordagem tem mais impacto duradouro?",
            choices: [
              {
                id: "a",
                text: 'Um elogio geral no grupo: "Parabéns ao Pedro pelo ótimo trabalho!"',
                points: 25,
                type: "partial",
                feedback:
                  "Público é bom, mas genérico não informa o que foi ótimo nem o que deve ser repetido.",
              },
              {
                id: "b",
                text: 'Na reunião: "Quero destacar como o Pedro estruturou a proposta do cliente — o detalhamento dos riscos foi o que fechou o negócio."',
                points: 100,
                type: "correct",
                feedback:
                  "Público + específico + com impacto. Isso motiva o Pedro e ensina aos outros o que é valorizado.",
              },
              {
                id: "c",
                text: "Um elogio direto e privado — reconhecimento em público pode causar ciúmes.",
                points: 0,
                type: "wrong",
                feedback:
                  "Medo de ciúmes não é razão para privar alguém de reconhecimento público merecido.",
              },
            ],
          },
          {
            id: "7-3-q3",
            type: "choice",
            tag: "🔄 Feedback entre Pares",
            question:
              "Um colega no mesmo nível que você está cometendo erros que afetam o resultado do time. Não é seu subordinado. Você:",
            choices: [
              {
                id: "a",
                text: "Não é sua função — fale com o gestor dele.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser necessário em algum momento, mas ir ao gestor antes de falar diretamente é triangulação.",
              },
              {
                id: "b",
                text: "Espera que o próprio gestor perceba.",
                points: 0,
                type: "wrong",
                feedback:
                  "Esperar passivamente enquanto o time sofre as consequências não é neutralidade — é omissão.",
              },
              {
                id: "c",
                text: 'Pede uma conversa: "Posso compartilhar uma observação sobre [projeto específico]? Acho que pode ajudar."',
                points: 100,
                type: "correct",
                feedback:
                  "Feedback entre pares com permissão e contexto específico. Respeita a relação horizontal.",
              },
            ],
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
      "Liderar é comunicar. Suas escolhas comunicativas moldam a cultura do grupo.",
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
              "3 características:\n\n1️⃣ EXPECTATIVAS CLARAS — não deixam as pessoas adivinhando\n2️⃣ ABERTURA CONSISTENTE — criam espaço real para discordância\n3️⃣ RESPONSABILIDADE PÚBLICA — assumem erros na frente da equipe\n\nO que o líder modela, o time replica.\nO que o líder tolera em silêncio, o time interpreta como aprovação.",
          },
          {
            id: "8-1-q1",
            type: "choice",
            tag: "🎯 Expectativa Clara",
            question:
              "Você delegou um projeto importante. Duas semanas depois, o resultado entregue é completamente diferente do que você imaginava. Quem tem mais responsabilidade?",
            choices: [
              {
                id: "a",
                text: "O colaborador — ele deveria ter pedido mais detalhes se tinha dúvida.",
                points: 25,
                type: "partial",
                feedback:
                  "O colaborador tem responsabilidade de pedir clareza, mas o líder tem responsabilidade primária de fornecê-la.",
              },
              {
                id: "b",
                text: "Você — delegou sem deixar claro o objetivo, o formato e os critérios de sucesso.",
                points: 100,
                type: "correct",
                feedback:
                  "Delegação assertiva inclui: objetivo, formato esperado, prazo, critérios de sucesso e checkpoints. Sem isso, o resultado é loteria.",
              },
              {
                id: "c",
                text: "Nenhum dos dois — comunicação é uma via de mão dupla.",
                points: 0,
                type: "wrong",
                feedback:
                  "Genérico demais. Em delegação, a responsabilidade pela clareza inicial é primariamente de quem delega.",
              },
            ],
          },
          {
            id: "8-1-q2",
            type: "choice",
            tag: "🔓 Decisão Explicada",
            question:
              "Você tomou uma decisão impopular. Metade do time concorda, metade discorda. Como você comunica?",
            choices: [
              {
                id: "a",
                text: "Apresenta a decisão como definitiva sem explicar os motivos — liderança não precisa se justificar.",
                points: 0,
                type: "wrong",
                feedback:
                  "Autoridade não é suficiente para gerar comprometimento. Sem entender o porquê, as pessoas executam sem engajamento.",
              },
              {
                id: "b",
                text: "Explica os motivos, reconhece que há perspectivas diferentes e deixa claro que está aberto a ajustes se surgirem novos dados.",
                points: 100,
                type: "correct",
                feedback:
                  "Transparência + reconhecimento da divergência + abertura a revisão. Isso gera comprometimento mesmo de quem discordava.",
              },
              {
                id: "c",
                text: "Vota com o time — decisões coletivas têm mais adesão.",
                points: 25,
                type: "partial",
                feedback:
                  "Decisões coletivas têm valor, mas nem toda decisão deve ou pode ser coletiva. Liderança assertiva inclui decidir quando necessário.",
              },
            ],
          },
          {
            id: "8-1-q3",
            type: "choice",
            tag: "📣 Notícia Ruim para o Time",
            question:
              "Você precisa anunciar corte de orçamento que vai eliminar um projeto que a equipe ama. Como você comunica?",
            choices: [
              {
                id: "a",
                text: "Manda por e-mail explicando os motivos — menos emocional e mais eficiente.",
                points: 0,
                type: "wrong",
                feedback:
                  "Notícias que impactam significativamente o time merecem conversa presencial. E-mail nesse caso soa como fuga.",
              },
              {
                id: "b",
                text: "Reúne o time, comunica diretamente com os motivos, reconhece o impacto e abre espaço para perguntas.",
                points: 100,
                type: "correct",
                feedback:
                  "Presença + clareza + empatia + abertura ao diálogo. Isso é comunicar má notícia com assertividade.",
              },
              {
                id: "c",
                text: "Pede para alguém do RH comunicar — menos conflituoso.",
                points: 0,
                type: "wrong",
                feedback:
                  "Ter alguém comunicar no seu lugar uma decisão que você tomou é ausência de liderança.",
              },
            ],
          },
        ],
      },
      {
        id: "8-2",
        title: "Criar Ambiente Seguro",
        description:
          "A segurança psicológica é o terreno onde a comunicação assertiva floresce.",
        items: [
          {
            id: "8-2-tip",
            type: "tip",
            icon: "🏰",
            title: "Segurança psicológica",
            content:
              'Segurança psicológica = você não será punido por falar o que pensa, perguntar, discordar ou admitir um erro.\n\n✅ CRIA: "Boa pergunta — eu também não tinha pensado nisso"\n✅ CRIA: "Errei aqui. O que aprendemos?"\n❌ DESTRÓI: "Como você não sabia isso?"\n❌ DESTRÓI: Ignorar contribuições em reunião\n\nUm episódio de destruição pode apagar semanas de construção.',
          },
          {
            id: "8-2-q1",
            type: "choice",
            tag: "🙋 Pergunta Básica",
            question:
              "Numa reunião técnica, um colaborador novo faz uma pergunta que parece muito básica para o contexto. Como você reage?",
            choices: [
              {
                id: "a",
                text: '"Isso a gente já resolveu na reunião passada. Você deveria ter essa base."',
                points: 0,
                type: "wrong",
                feedback:
                  "Essa resposta mata a segurança psicológica para toda a sala. Ninguém vai fazer outra pergunta depois disso.",
              },
              {
                id: "b",
                text: "Responde com naturalidade e respeito — toda pergunta tem razão de existir.",
                points: 100,
                type: "correct",
                feedback:
                  "Responder com respeito preserva a segurança psicológica do grupo inteiro, não só de quem perguntou.",
              },
              {
                id: "c",
                text: "Responde brevemente e sugere que ele se aprofunde no assunto depois.",
                points: 25,
                type: "partial",
                feedback:
                  "Razoável mas a sugestão pode soar como crítica velada se não for feita com cuidado.",
              },
            ],
          },
          {
            id: "8-2-q2",
            type: "choice",
            tag: "💡 Ideia Fora do Padrão",
            question:
              "Um colaborador junior apresenta uma ideia que vai completamente contra o processo estabelecido. A ideia tem mérito. Como você reage?",
            choices: [
              {
                id: "a",
                text: '"Não funciona assim aqui. Temos processos por um motivo."',
                points: 0,
                type: "wrong",
                feedback:
                  "Matar ideias por causa de processos cria uma equipe que para de pensar. E se o processo for o problema?",
              },
              {
                id: "b",
                text: "Explora a ideia com perguntas abertas, reconhece o que tem de interessante e facilita a avaliação com o time.",
                points: 100,
                type: "correct",
                feedback:
                  "Você criou um precedente: ideias são bem-vindas aqui. Isso vale mais do que qualquer processo.",
              },
              {
                id: "c",
                text: "Agradece a sugestão e diz que vai considerar.",
                points: 25,
                type: "partial",
                feedback:
                  '"Vou considerar" sem ação real é o cemitério das ideias. Se tem mérito, explore agora ou dê um prazo real.',
              },
            ],
          },
          {
            id: "8-2-q3",
            type: "choice",
            tag: "🚨 Erro Admitido",
            question:
              "Você errou numa decisão que custou tempo ao time. Todos sabem que foi sua decisão. O que você faz?",
            choices: [
              {
                id: "a",
                text: "Foca no que fazer daqui para frente sem mencionar o erro — o passado não importa.",
                points: 25,
                type: "partial",
                feedback:
                  "Orientação para o futuro tem valor, mas ignorar o erro deixa a equipe sem o modelo de responsabilidade que cria segurança.",
              },
              {
                id: "b",
                text: 'Assume publicamente: "Essa foi minha decisão e não foi a melhor. Aprendi [X]. Vamos [ação]."',
                points: 100,
                type: "correct",
                feedback:
                  "Assumir erros publicamente é o ato mais poderoso que um líder pode fazer para criar segurança psicológica.",
              },
              {
                id: "c",
                text: "Explica os fatores externos que contribuíram para o erro.",
                points: 0,
                type: "wrong",
                feedback:
                  "Minimizar responsabilidade com fatores externos quando a decisão foi sua corrói a confiança da equipe.",
              },
            ],
          },
        ],
      },
      {
        id: "8-3",
        title: "Liderança em Situações Extremas",
        description:
          "O nível especialista. Onde a assertividade encontra os maiores desafios.",
        items: [
          {
            id: "8-3-tip",
            type: "tip",
            icon: "⚡",
            title: "Liderança assertiva sob pressão",
            content:
              "Nos momentos de maior pressão, líderes revelam sua cultura real.\n\nO que separa líderes assertivos:\n🧊 Mantêm a calma quando outros perdem\n🎯 Focam no problema, não nas pessoas\n🔍 Buscam entender antes de decidir\n💬 Comunicam com honestidade mesmo quando é difícil\n🤝 Assumem responsabilidade publicamente",
          },
          {
            id: "8-3-q1",
            type: "choice",
            tag: "🚀 Crise em Tempo Real",
            question:
              "No lançamento de um produto, um erro crítico é descoberto 2 horas antes. O time está em pânico. O que você faz primeiro?",
            choices: [
              {
                id: "a",
                text: "Liga para o cliente avisando que pode ter um atraso.",
                points: 25,
                type: "partial",
                feedback:
                  "Comunicar ao cliente é necessário, mas fazer isso antes de entender o problema pode alarmar desnecessariamente.",
              },
              {
                id: "b",
                text: "Reúne o time por 10 minutos: diagnóstico do problema, opções disponíveis, decisão e ação.",
                points: 100,
                type: "correct",
                feedback:
                  "Clareza antes da ação. Você canaliza o pânico em estrutura. É o que a liderança assertiva faz em crise.",
              },
              {
                id: "c",
                text: "Pede que cada um resolva sua parte independentemente para ganhar tempo.",
                points: 0,
                type: "wrong",
                feedback:
                  "Fragmentar a equipe numa crise sem um diagnóstico compartilhado cria caos maior do que o problema original.",
              },
            ],
          },
          {
            id: "8-3-q2",
            type: "choice",
            tag: "🔮 Visão Impopular",
            question:
              "Você tem convicção de que a empresa precisa mudar de direção. A mudança é arriscada e vai gerar resistência. O time atual vai ter trabalho redobrado. Como você lidera isso?",
            choices: [
              {
                id: "a",
                text: "Apresenta a mudança como decisão definitiva e pede que todos se adaptem.",
                points: 0,
                type: "wrong",
                feedback:
                  "Mudanças significativas impostas sem envolvimento geram resistência passiva — as pessoas executam sem engajamento.",
              },
              {
                id: "b",
                text: "Apresenta o raciocínio com honestidade, reconhece o custo para o time, abre para perguntas e dá espaço para o time contribuir com o como.",
                points: 100,
                type: "correct",
                feedback:
                  "Você respeita a inteligência do time, reconhece o impacto e os engaja na solução. Isso transforma resistência em energia.",
              },
              {
                id: "c",
                text: "Implementa gradualmente sem comunicar a mudança completa — menos resistência de uma vez.",
                points: 25,
                type: "partial",
                feedback:
                  "Mudança incremental pode ser válida, mas omitir o destino final gera desconfiança quando as pessoas percebem o padrão.",
              },
            ],
          },
          {
            id: "8-3-q3",
            type: "choice",
            tag: "🏁 A Última Decisão",
            question:
              "Você tem duas opções para um projeto crítico. Opção A: segura, mas menor impacto. Opção B: arriscada, mas pode transformar os resultados. O time está dividido. Você:",
            choices: [
              {
                id: "a",
                text: "Escolhe A — liderança responsável evita riscos desnecessários.",
                points: 25,
                type: "partial",
                feedback:
                  "Pode ser a escolha certa dependendo do contexto, mas decidir por evitar risco sem análise profunda é gestão, não liderança.",
              },
              {
                id: "b",
                text: "Pesquisa mais, faz os cálculos de risco com o time, e decide baseado em critérios explícitos — mesmo que a decisão final seja sua.",
                points: 100,
                type: "correct",
                feedback:
                  "Processo rigoroso + decisão clara + transparência nos critérios. Isso é liderança assertiva na prática.",
              },
              {
                id: "c",
                text: "Pede que o time vote — afinal, são eles que vão executar.",
                points: 0,
                type: "wrong",
                feedback:
                  "Em decisões estratégicas de alto risco, democracia não substitui liderança. O time executa melhor quando o líder decide com clareza.",
              },
            ],
          },
        ],
      },
    ],
  },
];
