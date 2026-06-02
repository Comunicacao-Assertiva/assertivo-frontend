import type { Phase } from "@/types/game";

export const PHASES_DATA: Phase[] = [
  {
    id: 1,
    number: 1,
    title: "Expressão e Clareza",
    description: "Fase inicial — cenários diretos para calibrar o radar.",
    tip: "💡 Nível 1. Assertividade é <strong>falar o que precisa ser dito, com respeito</strong> — nem silêncio, nem agressão.",
    scenarios: [
      {
        id: "1-1",
        type: "choice",
        tag: "📋 Limite Profissional",
        question:
          "Um colega pede sua ajuda constantemente com tarefas que são responsabilidade dele. Você está sobrecarregado. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Continua ajudando sem dizer nada para não criar mal-estar.",
            points: 0,
            type: "wrong",
            feedback:
              "Silêncio aqui não é generosidade — é passividade que prejudica você e não ajuda o colega a crescer.",
          },
          {
            id: "b",
            text: "Fala claramente que não pode continuar ajudando com essas tarefas e explica o motivo.",
            points: 100,
            type: "correct",
            feedback:
              "Direto e respeitoso. Você comunicou seu limite sem atacar — isso é assertividade básica.",
          },
          {
            id: "c",
            text: "Reclama do colega para outros, mas nunca fala com ele diretamente.",
            points: 0,
            type: "wrong",
            feedback:
              "Falar dos outros pelas costas em vez de falar diretamente é triangulação — não resolve nada.",
          },
        ],
      },
      {
        id: "1-2",
        type: "choice",
        tag: "🗣️ Discordância na Reunião",
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
              "Isso é assertividade saudável. Você contribuiu, pediu espaço e trouxe sua perspectiva com respeito.",
          },
        ],
      },
      {
        id: "1-3",
        type: "spot",
        tag: "💬 Thread da Equipe",
        context:
          "Conversa no grupo da equipe sobre um prazo que vai ser perdido.",
        question:
          "Identifique a mensagem que quebra a comunicação assertiva da equipe.",
        messages: [
          {
            id: "m1",
            author: "Carla",
            text: "Pessoal, o prazo do projeto X está apertado. Precisamos ver o que podemos antecipar.",
            isTarget: false,
            explanation: "Mensagem clara e focada no problema — assertiva.",
          },
          {
            id: "m2",
            author: "Bruno",
            text: "Concordo. Posso adiantar minha parte até quinta se precisar.",
            isTarget: false,
            explanation: "Resposta colaborativa e objetiva — assertiva.",
          },
          {
            id: "m3",
            author: "Diego",
            text: "O problema é o André, que nunca entrega no prazo. Todo mundo já sabe disso.",
            isTarget: true,
            explanation:
              'Ataca uma pessoa publicamente usando "nunca" — generalizante e agressivo. Foca no indivíduo, não no problema.',
          },
          {
            id: "m4",
            author: "Ana",
            text: "Vou verificar minha agenda e atualizo o grupo ainda hoje.",
            isTarget: false,
            explanation: "Clara e comprometida — assertiva.",
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
      "Ouvir de verdade vai além do silêncio. Uma opção errada começa a parecer gentil.",
    tip: "💡 Nível 2. <strong>Escuta ativa é presença total</strong> — não é esperar sua vez de falar.",
    scenarios: [
      {
        id: "2-1",
        type: "choice",
        tag: "💬 Desabafo",
        question:
          "Um amigo está desabafando sobre um problema. No meio da conversa, você percebe que ele está cometendo um erro de julgamento. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Interrompe assim que percebe o erro para ajudá-lo a corrigir logo.",
            points: 0,
            type: "wrong",
            feedback:
              "Interromper sinaliza que você está mais interessado em resolver do que em ouvir. Ele precisa ser ouvido primeiro.",
          },
          {
            id: "b",
            text: 'Ouve até o fim e depois pergunta: "Tem um ponto que queria entender melhor — posso compartilhar uma perspectiva diferente?"',
            points: 100,
            type: "correct",
            feedback:
              "Você ouviu completamente, pediu permissão e só então ofereceu sua visão. Escuta ativa com respeito.",
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
        type: "spot",
        tag: "📧 Thread de E-mail",
        context:
          "Troca de e-mails sobre um projeto com atraso entre três colegas.",
        question: "Identifique o e-mail que usa comunicação não assertiva.",
        messages: [
          {
            id: "m1",
            author: "Fernanda",
            text: "Olá, o cliente pediu uma atualização do projeto. Vocês conseguem me passar o status hoje?",
            isTarget: false,
            explanation: "Pedido claro e direto — assertivo.",
          },
          {
            id: "m2",
            author: "Lucas",
            text: "Estou com 80% concluído. Só falta a parte de revisão, que entrego amanhã.",
            isTarget: false,
            explanation: "Resposta clara, com prazo — assertiva.",
          },
          {
            id: "m3",
            author: "Patrícia",
            text: "Já seria a terceira vez que você atrasa essa entrega, Lucas. Isso é uma falta de comprometimento sério.",
            isTarget: true,
            explanation:
              'Generaliza com "terceira vez", ataca o comprometimento da pessoa em vez do comportamento específico — não assertivo.',
          },
          {
            id: "m4",
            author: "Lucas",
            text: "Entendo a urgência. Posso adiantar para hoje à tarde se necessário.",
            isTarget: false,
            explanation: "Resposta proativa e focada na solução — assertiva.",
          },
        ],
      },
      {
        id: "2-3",
        type: "sort",
        tag: "📊 Pedido Extra",
        situation:
          "Seu gestor te pede mais uma tarefa urgente quando você já está sobrecarregado.",
        question: "Ordene as respostas da PIOR para a MELHOR:",
        items: [
          {
            id: "s1",
            text: "Aceita na hora sem questionar para não decepcionar.",
            rank: 2,
            explanation:
              "Parece profissional, mas gera expectativas que você não vai cumprir.",
          },
          {
            id: "s2",
            text: "Diz que não pode e explica toda sua carga atual para o grupo.",
            rank: 3,
            explanation:
              "Honesto, mas expor sua carga publicamente pode ser inadequado.",
          },
          {
            id: "s3",
            text: "Aceita e some depois sem entregar nem dar satisfação.",
            rank: 1,
            explanation: "Pior opção: destrói confiança e não resolve.",
          },
          {
            id: "s4",
            text: '"Posso conversar depois da reunião? Quero entender o escopo e ver como encaixo nas prioridades."',
            rank: 4,
            explanation:
              "Não cede, não recusa publicamente, cria espaço certo para conversa real.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    number: 3,
    title: "Postura sob Pressão",
    description: "Duas respostas começam a parecer certas. Leia com atenção.",
    tip: "💡 Nível 3. <strong>Assertividade é manter sua posição por razões, não por pressão.</strong>",
    scenarios: [
      {
        id: "3-1",
        type: "sort",
        tag: "📊 Resposta à Crítica Pública",
        situation:
          "Seu gestor te critica na frente da equipe de forma que você considera injusta.",
        question: "Ordene as reações da PIOR para a MELHOR:",
        items: [
          {
            id: "s1",
            text: "Revida na hora com o mesmo tom na frente de todos.",
            rank: 1,
            explanation:
              "Escala o conflito publicamente e prejudica sua imagem.",
          },
          {
            id: "s2",
            text: "Fica quieto e ignora — não vale a energia.",
            rank: 2,
            explanation: "A crítica fica sem resposta e o padrão se repete.",
          },
          {
            id: "s3",
            text: "Fica quieto na hora, mas depois reclama para colegas.",
            rank: 3,
            explanation:
              "Processa a emoção mas usa triangulação em vez de diálogo direto.",
          },
          {
            id: "s4",
            text: 'Mantém a calma e pede uma conversa privada depois: "Quero entender melhor o que aconteceu."',
            rank: 4,
            explanation:
              "Autorregulação + diálogo privado = resposta assertiva madura.",
          },
        ],
      },
      {
        id: "3-2",
        type: "choice",
        tag: "👥 Pressão Social",
        question:
          "Você expressou uma posição numa reunião. Colegas começam a pressionar para você mudar de ideia — mas sem novos argumentos, só pressão social. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Recua para preservar o bom relacionamento com o grupo.",
            points: 0,
            type: "wrong",
            feedback:
              "Ceder à pressão social sem novos argumentos não é flexibilidade — você está ensinando que pressão funciona.",
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
            text: '"Estou aberto a mudar de ideia — mas por argumentos, não por pressão. Me mostrem onde meu raciocínio está errado."',
            points: 100,
            type: "correct",
            feedback:
              "Assertividade exemplar. Firme, aberto e devolveu a responsabilidade a quem pressiona.",
          },
        ],
      },
      {
        id: "3-3",
        type: "spot",
        tag: "🔍 Conversa no Corredor",
        context:
          "Dois colegas conversando sobre uma decisão da empresa que foi mal recebida.",
        question: "Identifique a fala que quebra a comunicação assertiva.",
        messages: [
          {
            id: "m1",
            author: "Renata",
            text: "Não concordei com a decisão sobre o modelo de trabalho. Acho que deveríamos ter sido consultados antes.",
            isTarget: false,
            explanation:
              "Expressa discordância de forma clara e específica — assertiva.",
          },
          {
            id: "m2",
            author: "Gustavo",
            text: "Também senti falta de mais diálogo. Quero entender melhor os motivos antes de opinar.",
            isTarget: false,
            explanation:
              "Honesto sobre seus sentimentos e aberto ao diálogo — assertivo.",
          },
          {
            id: "m3",
            author: "Renata",
            text: "Honestamente, a gestão aqui nunca respeita a opinião de ninguém. É sempre assim, todo mundo sabe.",
            isTarget: true,
            explanation:
              '"Nunca" e "todo mundo sabe" são generalizações que fogem do fato específico e jogam a conversa para um campo emocional sem saída.',
          },
          {
            id: "m4",
            author: "Gustavo",
            text: "Acho que vale levar esse ponto formalmente para o RH ou numa reunião de feedback.",
            isTarget: false,
            explanation:
              "Propõe um canal adequado para a discordância — assertivo.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    number: 4,
    title: "Conflitos e Mediação",
    description:
      "Todas as opções têm alguma lógica aparente. A melhor exige mais reflexão.",
    tip: '💡 Nível 4. <strong>Em conflitos, o que parece mais "profissional" nem sempre é o mais assertivo.</strong>',
    scenarios: [
      {
        id: "4-1",
        type: "sort",
        tag: "📊 Mediar Conflito Relatado",
        situation:
          "Um membro da equipe te procura para relatar um conflito com um colega e pedir que você tome uma atitude.",
        question: "Ordene as reações do líder da PIOR para a MELHOR:",
        items: [
          {
            id: "s1",
            text: "Chama o outro membro e apresenta o que o primeiro te contou.",
            rank: 1,
            explanation:
              "Viola a confidencialidade e já posiciona o segundo como réu antes de ser ouvido.",
          },
          {
            id: "s2",
            text: "Diz que não interfere em conflitos pessoais entre membros.",
            rank: 2,
            explanation:
              "Negar o papel de liderança é irresponsabilidade disfarçada de neutralidade.",
          },
          {
            id: "s3",
            text: "Ouve com atenção e encaminha para o RH resolver.",
            rank: 3,
            explanation:
              "Pode ser necessário, mas terceirizar sem tentar resolver primeiro raramente é o caminho ideal.",
          },
          {
            id: "s4",
            text: "Ouve em confidência e diz que vai conversar com o outro membro separadamente antes de qualquer ação.",
            rank: 4,
            explanation:
              "Ouvir os dois lados separadamente, preservando a confidência, é o ponto de partida de uma mediação justa.",
          },
        ],
      },
      {
        id: "4-2",
        type: "choice",
        tag: "📉 Atraso com Causa Interna",
        question:
          "Você lidera um projeto atrasado por causa de um membro que não está entregando. Precisa comunicar o atraso ao cliente. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Menciona ao cliente que o atraso foi causado por um membro específico da equipe.",
            points: 0,
            type: "wrong",
            feedback:
              "Expor um membro ao cliente é falha de liderança. A responsabilidade do projeto é sua, independente da causa interna.",
          },
          {
            id: "b",
            text: "Comunica o atraso sem dar nenhuma explicação para manter discrição.",
            points: 25,
            type: "partial",
            feedback:
              "Discrição interna está certa, mas ausência total de contexto gera desconfiança. Transparência sobre o plano é diferente de expor a equipe.",
          },
          {
            id: "c",
            text: "Comunica o atraso com honestidade, explica o que está sendo feito e propõe uma nova data realista.",
            points: 100,
            type: "correct",
            feedback:
              "Comunicação profissional e assertiva. Clientes toleram atrasos muito melhor com informação proativa e plano claro.",
          },
        ],
      },
      {
        id: "4-3",
        type: "spot",
        tag: "🔍 Feedback Dado de Forma Inadequada",
        context:
          "Uma líder dando feedback para um membro da equipe após um evento com problemas.",
        question:
          "Identifique a fala que não segue os princípios do feedback assertivo.",
        messages: [
          {
            id: "m1",
            author: "Márcia (líder)",
            text: "Preciso conversar com você sobre o evento de ontem. Você tem um momento?",
            isTarget: false,
            explanation: "Pede espaço e cria contexto — abordagem assertiva.",
          },
          {
            id: "m2",
            author: "Pedro",
            text: "Claro, pode falar.",
            isTarget: false,
            explanation: "Receptivo.",
          },
          {
            id: "m3",
            author: "Márcia (líder)",
            text: "Você é sempre desorganizado. Não sei como chegou até aqui sendo assim.",
            isTarget: true,
            explanation:
              'Ataca o caráter ("você é assim") em vez do comportamento específico. "Sempre" é generalizante e o tom é desrespeitoso.',
          },
          {
            id: "m4",
            author: "Pedro",
            text: "Entendo sua insatisfação. O que especificamente não funcionou para eu corrigir?",
            isTarget: false,
            explanation: "Resposta madura — busca o concreto.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    number: 5,
    title: "Dinâmicas de Grupo",
    description:
      "As dinâmicas de grupo são sutis. Respostas parciais aqui são bem convincentes.",
    tip: '💡 Nível 5. <strong>O que parece "manter o ambiente saudável" às vezes perpetua o problema.</strong>',
    scenarios: [
      {
        id: "5-1",
        type: "spot",
        tag: "🔍 Reunião com Exclusão",
        context:
          "Reunião de equipe discutindo estratégias para o próximo trimestre.",
        question:
          "Identifique a fala que compromete a segurança psicológica do grupo.",
        messages: [
          {
            id: "m1",
            author: "Thiago",
            text: "Tenho uma ideia diferente da apresentada — posso compartilhar?",
            isTarget: false,
            explanation: "Pede espaço antes de falar — assertivo e respeitoso.",
          },
          {
            id: "m2",
            author: "Líder",
            text: "Com certeza, Thiago. Quero ouvir perspectivas diferentes.",
            isTarget: false,
            explanation: "Abre o espaço — assertivo.",
          },
          {
            id: "m3",
            author: "Sônia",
            text: "Bem, se é para opinar... eu prefiro nem falar. Toda vez que eu trago algo diferente, não vai a lugar nenhum de qualquer forma.",
            isTarget: false,
            explanation:
              "Expressa frustração real — não é um problema de comunicação em si, é um sintoma de ambiente inseguro.",
          },
          {
            id: "m4",
            author: "Carlos",
            text: "Thiago, com todo respeito, você está aqui há 3 meses. Talvez seja cedo para questionar estratégias consolidadas.",
            isTarget: true,
            explanation:
              "Invalida a contribuição baseando-se em tempo de casa, não no mérito da ideia. Cria hierarquia que silencia vozes novas.",
          },
        ],
      },
      {
        id: "5-2",
        type: "sort",
        tag: "📊 Novo Membro Dominante",
        situation:
          "Um novo membro da equipe domina todas as reuniões, interrompendo os outros constantemente.",
        question: "Ordene as reações do líder da PIOR para a MELHOR:",
        items: [
          {
            id: "s1",
            text: "Ignora — cada um tem seu espaço para se defender.",
            rank: 1,
            explanation:
              "Silêncio diante de dinâmica excludente é cumplicidade passiva.",
          },
          {
            id: "s2",
            text: "Espera a pessoa perceber sozinha com o tempo.",
            rank: 2,
            explanation:
              "O comportamento pode continuar por meses enquanto o ambiente se deteriora.",
          },
          {
            id: "s3",
            text: 'Na próxima interrupção, diz publicamente: "Deixa o [nome] terminar."',
            rank: 3,
            explanation:
              "Intervém no momento certo, mas o confronto público repetido pode criar mais constrangimento do que solução.",
          },
          {
            id: "s4",
            text: 'Conversa em particular: "Quero compartilhar algo que acho que vai te ajudar a colaborar ainda melhor com o time."',
            rank: 4,
            explanation:
              "Privado, direto e com intenção clara de ajudar — chance real de mudança duradoura.",
          },
        ],
      },
      {
        id: "5-3",
        type: "choice",
        tag: "🪞 Equipe Que Nunca Discorda",
        question:
          "Você lidera uma equipe onde ninguém nunca discorda de você nas reuniões. Decisões passam sempre facilmente. O que isso indica e o que você faz?",
        choices: [
          {
            id: "a",
            text: "Aprecia o alinhamento — o time confia em você e as decisões são boas.",
            points: 0,
            type: "wrong",
            feedback:
              "Equipes que nunca discordam do líder geralmente estão com medo, não alinhadas. Consenso fácil demais é sinal de alerta.",
          },
          {
            id: "b",
            text: "Pergunta ao final de cada reunião se alguém tem uma perspectiva diferente.",
            points: 25,
            type: "partial",
            feedback:
              "Melhor do que nada, mas perguntar coletivamente ao final — quando o grupo já consolidou consenso — raramente produz discordâncias reais.",
          },
          {
            id: "c",
            text: "Conversa individualmente com membros, admite que pode estar criando dinâmica inibidora e pede feedbacks sobre como tornar o espaço mais seguro.",
            points: 100,
            type: "correct",
            feedback:
              "Liderança autocrítica real. Ao nomear e assumir o problema, você cria condições para a cultura mudar de verdade.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    number: 6,
    title: "Dilemas Comunicacionais",
    description:
      'Cenários onde a resposta "correta" vai contra o instinto imediato.',
    tip: "💡 Nível 6. <strong>O que parece mais empático nem sempre é o mais assertivo.</strong> Cuidado com os instintos aqui.",
    scenarios: [
      {
        id: "6-1",
        type: "sort",
        tag: "📊 Reações ao Feedback Rejeitado",
        situation:
          "Você deu um feedback difícil para um colega e ele ficou claramente na defensiva e chateado.",
        question: "Ordene as reações da PIOR para a MELHOR:",
        items: [
          {
            id: "s1",
            text: "Recua e suaviza o que disse para aliviar o desconforto dele.",
            rank: 1,
            explanation:
              "Invalida o feedback e ensina que defensividade funciona para abrandar críticas.",
          },
          {
            id: "s2",
            text: "Deixa o tempo passar sem retomar — ele vai processar sozinho.",
            rank: 2,
            explanation:
              "O feedback pode ser lembrado apenas pelo desconforto, não pelo crescimento.",
          },
          {
            id: "s3",
            text: "Mantém o que disse e muda de assunto para aliviar o clima.",
            rank: 3,
            explanation: "Mantém a posição, mas encerra sem resolução real.",
          },
          {
            id: "s4",
            text: '"Percebo que foi difícil de ouvir. Não precisa responder agora — estou disponível para continuar quando quiser."',
            rank: 4,
            explanation:
              "Mantém o feedback, acolhe a reação sem validar a defensividade e deixa a porta aberta.",
          },
        ],
      },
      {
        id: "6-2",
        type: "spot",
        tag: "🔍 Conversa com Triangulação",
        context:
          "Uma colega vem até você falar sobre um problema que ela tem com outra pessoa da equipe.",
        question:
          "Identifique a fala que usa triangulação em vez de comunicação direta.",
        messages: [
          {
            id: "m1",
            author: "Juliana",
            text: "Preciso te contar uma coisa. A Clara tem falado mal de mim para o gestor. Você precisa me ajudar a confrontá-la.",
            isTarget: true,
            explanation:
              "Pede que um terceiro confronte a Clara em vez de ir diretamente à pessoa envolvida — isso é triangulação clássica.",
          },
          {
            id: "m2",
            author: "Você",
            text: "Entendo que está difícil. Mas você já tentou conversar diretamente com a Clara sobre isso?",
            isTarget: false,
            explanation: "Redireciona para a comunicação direta — assertivo.",
          },
          {
            id: "m3",
            author: "Juliana",
            text: "Não, fico com medo de piorar a situação.",
            isTarget: false,
            explanation: "Expressa dificuldade honestamente.",
          },
          {
            id: "m4",
            author: "Você",
            text: "Posso te ajudar a pensar em como abordar ela diretamente, se quiser. Acho que seria o caminho mais eficaz.",
            isTarget: false,
            explanation:
              "Oferece apoio sem se tornar intermediário — assertivo.",
          },
        ],
      },
      {
        id: "6-3",
        type: "choice",
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
              "Avaliação desonesta prejudica o amigo a longo prazo — ele não recebe o feedback que precisa — e compromete sua integridade profissional.",
          },
          {
            id: "b",
            text: "Faz avaliação totalmente honesta e envia sem comentar com o amigo antes.",
            points: 25,
            type: "partial",
            feedback:
              "A honestidade é certa, mas ser pego de surpresa por uma avaliação negativa de um amigo próximo pode danificar o relacionamento desnecessariamente.",
          },
          {
            id: "c",
            text: 'Avisa o amigo antes: "Precisei ser honesto — tenho observações importantes e quero conversar contigo antes que chegue ao gestor."',
            points: 100,
            type: "correct",
            feedback:
              "Honesto profissionalmente e cuidadoso no relacionamento. Amizade real inclui honestidade — e o aviso prévio demonstra respeito genuíno.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    number: 7,
    title: "Alta Complexidade",
    description:
      "Aqui o instinto imediato costuma errar. Pense duas vezes antes de responder.",
    tip: "💡 Nível 7. <strong>As melhores respostas muitas vezes são as mais contraintuitivas.</strong>",
    scenarios: [
      {
        id: "7-1",
        type: "choice",
        tag: "🕵️ Sabotagem Sutil",
        question:
          "Você percebe que um membro sênior está sistematicamente dificultando o trabalho de um colega mais novo — com comentários, atrasos e omissões. O que você faz?",
        choices: [
          {
            id: "a",
            text: "Conversa com o membro mais novo para que ele se proteja e documente os episódios.",
            points: 25,
            type: "partial",
            feedback:
              "Ajuda o indivíduo, mas não resolve o problema. O comportamento tóxico continua enquanto você não vai à raiz.",
          },
          {
            id: "b",
            text: "Documenta os comportamentos e aguarda mais evidências antes de agir.",
            points: 25,
            type: "partial",
            feedback:
              "Prudência tem valor, mas cada dia que você espera o dano continua. Há um ponto em que esperar mais evidências é omissão.",
          },
          {
            id: "c",
            text: "Conversa diretamente com o membro sênior sobre o que observou e o impacto que está gerando no time.",
            points: 100,
            type: "correct",
            feedback:
              "Ir à raiz é a única forma de resolver. Assertividade de liderança significa nomear o que você observa — sem esperar a situação estourar.",
          },
        ],
      },
      {
        id: "7-2",
        type: "sort",
        tag: "📊 Comunicar Mudança Impopular",
        situation:
          "Você precisa comunicar ao time uma mudança que sabe que vai ser impopular.",
        question: "Ordene as abordagens da PIOR para a MELHOR:",
        items: [
          {
            id: "s1",
            text: "Implementa gradualmente sem comunicar para não gerar reação imediata.",
            rank: 1,
            explanation:
              "Mudanças não comunicadas geram rumores que costumam ser piores do que a mudança em si.",
          },
          {
            id: "s2",
            text: "Consulta a equipe antes de decidir, mesmo com a decisão já tomada internamente.",
            rank: 2,
            explanation:
              "Consulta falsa é mais prejudicial do que não consultar — quando percebem, a confiança desaba.",
          },
          {
            id: "s3",
            text: "Anuncia a mudança e as razões com clareza, sem abrir para debate.",
            rank: 3,
            explanation:
              "Transparente, mas sem espaço para processar gera resistência silenciosa.",
          },
          {
            id: "s4",
            text: "Comunica a mudança com contexto e razões, e abre espaço real para perguntas — mesmo que a decisão não mude.",
            rank: 4,
            explanation:
              "Não finge que é negociável, mas dá espaço para as pessoas processarem e serem ouvidas.",
          },
        ],
      },
      {
        id: "7-3",
        type: "spot",
        tag: "🔍 Negociação sob Pressão",
        context:
          "Reunião de negociação com um cliente importante que está usando pressão para fechar rápido.",
        question:
          "Identifique a fala que demonstra falta de assertividade na negociação.",
        messages: [
          {
            id: "m1",
            author: "Cliente",
            text: "Precisamos fechar isso hoje. Nossa diretoria está esperando e não podemos atrasar mais.",
            isTarget: false,
            explanation:
              "Pressão do cliente — não é comunicação da sua equipe.",
          },
          {
            id: "m2",
            author: "Colega A",
            text: "Entendo a urgência. Preciso de algumas horas para avaliar adequadamente os termos. Posso retornar até as 17h?",
            isTarget: false,
            explanation: "Assertivo — mantém o controle sem ceder à pressão.",
          },
          {
            id: "m3",
            author: "Colega B",
            text: "Tudo bem, vamos fechar agora para não perder o cliente. Podemos ajustar os detalhes depois.",
            isTarget: true,
            explanation:
              'Cede à pressão artificial para "não perder o cliente" — fecha um acordo pior e valida a tática de pressão.',
          },
          {
            id: "m4",
            author: "Colega A",
            text: "Se o prazo de hoje não funcionar, podemos revisar o processo para atender a urgência sem comprometer a qualidade da decisão.",
            isTarget: false,
            explanation: "Propõe solução sem ceder — assertivo.",
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
      "O nível mais alto. A diferença entre as respostas é sutil e profunda.",
    tip: "💡 Nível especialista. <strong>Se errar, leia o feedback — ele ensina mais do que o acerto.</strong>",
    scenarios: [
      {
        id: "8-1",
        type: "spot",
        tag: "🔍 Após Erro do Líder",
        context:
          "Reunião da equipe no dia seguinte a uma decisão do líder que resultou em um erro que afetou todos.",
        question: "Identifique a fala do líder que não é assertiva.",
        messages: [
          {
            id: "m1",
            author: "Líder",
            text: "Quero falar sobre o que aconteceu ontem. A decisão foi minha e o resultado não foi o esperado.",
            isTarget: false,
            explanation: "Assume a responsabilidade — assertivo.",
          },
          {
            id: "m2",
            author: "Membro",
            text: "O prazo que perdemos vai afetar o cliente. Como vamos resolver?",
            isTarget: false,
            explanation: "Foco na solução — construtivo.",
          },
          {
            id: "m3",
            author: "Líder",
            text: "É verdade que errei, mas o contexto que tínhamos era limitado — o mercado mudou de uma hora para outra e praticamente ninguém teria feito diferente.",
            isTarget: true,
            explanation:
              'Começa assumindo responsabilidade mas dilui com justificativas e comparações ("ninguém teria feito diferente"). Reduz o impacto do reconhecimento inicial.',
          },
          {
            id: "m4",
            author: "Líder",
            text: "Aqui está o plano de correção. Quero ouvir sugestões de vocês para fortalecer a abordagem.",
            isTarget: false,
            explanation: "Foco em solução e colaboração — assertivo.",
          },
        ],
      },
      {
        id: "8-2",
        type: "choice",
        tag: "⚡ Confronto Parcialmente Justo",
        question:
          "Um colega te confronta publicamente de forma que você considera parcialmente injusta — ele tem um ponto válido, mas exagerou no tom. Como você reage?",
        choices: [
          {
            id: "a",
            text: "Defende sua posição na hora, explicando onde ele está errado sobre o tom e sobre o mérito ao mesmo tempo.",
            points: 25,
            type: "partial",
            feedback:
              "Misturar a discussão do mérito com a discussão do tom no mesmo momento cria confusão e dispersa a conversa.",
          },
          {
            id: "b",
            text: "Fica quieto para não escalar e depois ignora — não vale gastar energia.",
            points: 0,
            type: "wrong",
            feedback:
              "O ponto válido dele fica sem resposta e o tom inadequado sem consequência. Ambos precisam ser endereçados.",
          },
          {
            id: "c",
            text: 'Responde ao mérito com calma na hora, e depois conversa em particular sobre o tom: "Você levantou um ponto válido. Mas a forma como foi colocada foi difícil de ouvir."',
            points: 100,
            type: "correct",
            feedback:
              "Separar mérito de forma é comunicação assertiva de alto nível. Você reconheceu o que tinha valor, não cedeu ao que não tinha, e endereçou os dois no espaço certo.",
          },
        ],
      },
      {
        id: "8-3",
        type: "sort",
        tag: "📊 Decisão Revertida por Pressão",
        situation:
          "Você tomou uma decisão como líder. Após pressão emocional do time, está considerando reverter — mas não por novos argumentos, apenas pelo desconforto gerado.",
        question: "Ordene as reações da PIOR para a MELHOR:",
        items: [
          {
            id: "s1",
            text: "Reverte a decisão para recuperar o clima — liderança exige sensibilidade.",
            rank: 1,
            explanation:
              "Reverter por pressão emocional, sem novos argumentos, mina sua autoridade. O time aprende que pressionar funciona.",
          },
          {
            id: "s2",
            text: "Mantém a decisão sem dar nenhuma explicação adicional.",
            rank: 2,
            explanation:
              "Firmeza certa, mas sem diálogo o desconforto permanece e a relação com o time se deteriora.",
          },
          {
            id: "s3",
            text: "Pede uma reunião para ouvir as preocupações antes de decidir se mantém.",
            rank: 3,
            explanation:
              "Melhor — abre espaço para argumentos reais. Mas se já ouviu e só há pressão emocional, pode prolongar o impasse.",
          },
          {
            id: "s4",
            text: 'Explica novamente o raciocínio da decisão e diz: "Estou aberto a mudar por argumentos — mas não por pressão."',
            rank: 4,
            explanation:
              "Transparente, firme e justo. Dá ao time a oportunidade real de influenciar — por razões, não por clima.",
          },
        ],
      },
    ],
  },
];
