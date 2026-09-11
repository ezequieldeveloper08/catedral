/**
 * CONFIGURAÇÃO CENTRALIZADA DE CONTEÚDO - NOVA CATEDRAL AD CATALÃO
 * 
 * Este arquivo contém todos os textos, chaves Pix, links, horários e dados
 * da landing page. Qualquer alteração feita aqui se refletirá automaticamente
 * em todo o site.
 */

export interface ChurchInfo {
  name: string
  shortName: string
  projectName: string
  tagline: string
  headline: string
  subheadline: string
  pedraFundamentalBadge: string
  pedraFundamentalDate: string
  statusNoticeTitle: string
  statusNoticeDescription: string
  address: {
    street: string
    neighborhood: string
    city: string
    state: string
    cep: string
    full: string
    mapsQuery: string
    googleMapsEmbedUrl: string
    wazeUrl: string
    googleMapsDirectionsUrl: string
  }
  contact: {
    phone: string
    whatsapp: string
    whatsappDisplay: string
    email: string
    domain: string
  }
  social: {
    instagram: string
    youtube: string
    facebook: string
    whatsappGroup?: string
  }
  legal: {
    cnpj: string
    legalName: string
  }
}

export interface MetricItem {
  value: string
  label: string
  description: string
  iconName: string
}

export interface RenderItem {
  id: string
  title: string
  subtitle: string
  description: string
  imageUrl: string
  badge: string
}

export interface ProjectPillar {
  title: string
  description: string
  badge: string
  iconName: string
}

export interface CultoItem {
  day: string
  time: string
  name: string
  description: string
  category: "celebracao" | "ensino" | "oracao" | "juventude"
}

export interface FaqItem {
  question: string
  answer: string
}

export const siteContent = {
  church: {
    name: "Igreja Evangélica Assembleia de Deus — Ministério Madureira",
    shortName: "AD Catalão",
    projectName: "Catedral AD Catalão",
    tagline: "Uma história escrita pelas mãos de um povo que caminha e constrói pela fé!",
    headline: "CONSTRUÍDO PELA FÉ: A Catedral da AD Catalão!",
    subheadline:
      "Mais do que paredes, colunas e concreto, estamos erguendo um memorial de milagres. Uma história escrita pelas mãos de um povo que caminha e constrói pela fé! A nossa catedral já é uma realidade em construção. Um projeto com arquitetura contemporânea e três pavimentos totalmente planejados para acolher as nossas famílias e expandir o Reino de Deus.",
    pedraFundamentalBadge: "Realidade em Construção • 4.000 Lugares • 3 Pavimentos",
    pedraFundamentalDate: "Em Andamento",
    statusNoticeTitle: "A obra não para, e a igreja também não!",
    statusNoticeDescription:
      "O maior testemunho da nossa fé é que, mesmo em meio aos tijolos e andaimes, a igreja segue em pleno funcionamento. Cada culto, cada oração e cada vida transformada acontecem enquanto o milagre da construção se espalha ao nosso redor. Cada tijolo carrega o amor, a dedicação e a semente de cada um de nós. Juntos, estamos edificando o amanhã!",
    address: {
      street: "Rua do Cristiano Aires, 649",
      neighborhood: "Bairro N. Sra. de Fátima",
      city: "Catalão",
      state: "GO",
      cep: "75709-280",
      full: "Rua do Cristiano Aires, 649 - Bairro N. Sra. de Fátima, Catalão - GO, CEP: 75709-280",
      mapsQuery: "Rua+do+Cristiano+Aires+649+Catalao+GO",
      googleMapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.849187315579!2d-47.94635672390175!3d-18.16434448286289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a6663f707f59d5%3A0x6335198bf9bcfeb1!2sIgreja%20Evang%C3%A9lica%20Assembleia%20de%20Deus%20-%20Minist%C3%A9rio%20Madureira%20-%20Sede!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
      wazeUrl: "https://waze.com/ul?q=Rua+Cristiano+Aires+649+Catalao+GO",
      googleMapsDirectionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=Rua+do+Cristiano+Aires+649+Catalao+GO",
    },
    contact: {
      phone: "(64) 3441-4477",
      whatsapp: "556434414477",
      whatsappDisplay: "(64) 3441-4477",
      email: "faleconosco@catedraladcatalao.com.br",
      domain: "catedraladcatalao.com.br",
    },
    social: {
      instagram: "https://www.instagram.com/adcatalaooficial",
      youtube: "https://www.youtube.com/@adcatalaooficial",
      facebook: "https://www.facebook.com/adcatalaooficial",
    },
    legal: {
      cnpj: "01.326.651/0001-39",
      legalName: "Igreja Evangélica Assembleia de Deus - Ministério de Madureira - Catalão GO",
    },
  },

  metrics: [
    {
      value: "4.000",
      label: "Lugares na Nave Principal",
      description: "Amplo auditório planejado para receber grandes celebrações com conforto e visibilidade irrestrita.",
      iconName: "Users",
    },
    {
      value: "3",
      label: "Pavimentos Estruturais",
      description: "Setores integrados para culto, ministérios, berçário, salas de aula e eventos especiais.",
      iconName: "Building2",
    },
    {
      value: "100%",
      label: "Acessibilidade Universal",
      description: "Rampas suaves, elevadores modernos e banheiros adaptados para acolher a todos.",
      iconName: "HeartHandshake",
    },
    {
      value: "100%",
      label: "Em Pleno Funcionamento",
      description: "A obra não para e a igreja também não! Reuniões e cultos com programação normal.",
      iconName: "ShieldCheck",
    },
  ] as MetricItem[],

  renders: [
    {
      id: "faixada-01",
      title: "Fachada Monumental & Acesso Principal",
      subtitle: "Arquitetura Contemporânea com Identidade Sagrada",
      description:
        "Composição imponente com brises arquitetônicos em tom dourado, vidro reflexivo e pórtico iluminado, criando um marco visual inconfundível para a cidade de Catalão.",
      imageUrl: "/images/faixada-01.jpeg",
      badge: "Perspectiva Frontal",
    },
    {
      id: "faixada-02",
      title: "Esplanada e Iluminação Cênica Noturna",
      subtitle: "Presença e Beleza no Cenário Urbano",
      description:
        "Projeto luminotécnico concebido para valorizar cada linha da construção à noite, transmitindo calor, acolhimento e solenidade aos que chegan para adorar.",
      imageUrl: "/images/faixada-02.jpeg",
      badge: "Vista Noturna",
    },
    {
      id: "faixada-03",
      title: "Integração Urbana & Fluxo de Acesso",
      subtitle: "Acessibilidade e Conforto para a Família",
      description:
        "Planejamento de calçadas amplas, entradas com recuo de segurança e acessos inteligentes projetados para entrada e saída seguras de milhares de pessoas.",
      imageUrl: "/images/faixada-03.jpeg",
      badge: "Perspectiva Urbana",
    },
  ] as RenderItem[],

  videoInstitutional: {
    title: "Apresentação 3D da Nova Catedral",
    subtitle: "Conheça cada detalhe deste grande projeto em vídeo",
    description:
      "Veja o tour virtual renderizado em alta definição mostrando a volumetria, os três pavimentos, a grandiosa nave de 4.000 lugares e os espaços ministeriais.",
    posterImage: "/images/faixada-01.jpeg",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    duration: "Tour 3D Completo",
  },

  pillars: [
    {
      title: "Arquitetura Contemporânea",
      description: "Linhas modernas e inovadoras que redefinem o cenário urbano da nossa cidade.",
      badge: "Design Contemporâneo",
      iconName: "Building2",
    },
    {
      title: "Tecnologia de Ponta",
      description: "Infraestrutura de som, iluminação e transmissão totalmente integradas para conectar você ao altar.",
      badge: "Alta Tecnologia",
      iconName: "Video",
    },
    {
      title: "Visibilidade Irrestrita",
      description: "Engenharia inteligente projetada para que cada uma das 4.000 pessoas tenha uma visão perfeita e imersiva de qualquer ponto do templo.",
      badge: "Visão Imperdível",
      iconName: "Eye",
    },
    {
      title: "Acessibilidade Total",
      description: "Ambientes amplos, rampas e rotas planejadas para acolher a todos com dignidade, conforto e segurança.",
      badge: "Inclusão e Conforto",
      iconName: "Accessibility",
    },
  ] as ProjectPillar[],

  donations: {
    modalTitle: "Faça Parte Desta Conquista Histórica",
    modalSubtitle: "Sua contribuição voluntária é fundamental para erguer este altar de adoração a Deus.",
    pix: {
      key: "ofertacatedral@gmail.com",
      keyType: "E-mail",
      beneficiary: "Igreja Evangélica Assembleia de Deus - Ministério de Madureira - Catalão GO",
      bank: "Unicred (136)",
      city: "Catalão - GO",
      copyPasteCode:
        "00020126580014br.gov.bcb.pix0125ofertacatedral@gmail.com5204000053039865802BR5925AD CATALAO MADUREIRA6007CATALAO62070503***6304D1B8",
      qrCodeStaticUrl: "/logos/MARCA-AD-CATALÃO-HORIZONTAL-COLORIDA.png",
      instructions: [
        "Abra o aplicativo do seu banco no celular.",
        "Escolha a opção 'Pix' e depois 'Pix Copia e Cola' ou 'Ler QR Code'.",
        "Cole o código ou aponte a câmera para o QR Code e confirme os dados.",
        "Guarde o comprovante como lembrança da sua semeadura na Casa de Deus!",
      ],
    },
    bankTransfer: {
      bankName: "Unicred (136)",
      agency: "5341",
      account: "1349520",
      accountType: "Conta Corrente",
      favored: "Igreja Evangélica Assembleia de Deus - Ministério de Madureira - Catalão GO",
      cnpj: "01.326.651/0001-39",
    },
  },

  leadership: {
    title: "Palavra Pastoral",
    subtitle: "Um legado de fé que transforma gerações em Catalão e no mundo.",
    pastorNames: "Pastores Presidentes do Campo de Catalão",
    role: "Presidência • AD Catalão Ministério Madureira",
    photoUrl: "/images/PASTORES.png",
    quote:
      "Essa casa de oração será um local onde vidas serão abençoadas e alcançadas pelo poder de Deus.",
    historyText: [
      "A Assembleia de Deus Ministério Madureira em Catalão consolida, há décadas, um legado de fé que transforma gerações ao semear esperança, amor e salvação. A partir de sua forte atuação local, a igreja expandiu suas fronteiras, estendendo seu impacto social e espiritual por todo o estado de Goiás, outros estados do Brasil e até outros países. Esse crescimento reflete o compromisso com a evangelização e com projetos sociais que apoiam a sociedade em diversas frentes.",
      "Com uma trajetória marcada por milagres, dedicação e zelo pelo evangelho de Cristo, a igreja viu, ao longo de décadas, famílias sendo reestruturadas, vidas transformadas e vocações despertadas. Diante disso, o projeto da nova catedral nasce como resposta à oração e ao crescimento contínuo do povo de Deus.",
      "Com a bênção do Senhor e o esforço conjunto de cada membro, congregado e até mesmo daqueles que, mesmo não professando a mesma fé, são movidos pelo Espírito Santo a abrir o coração para contribuir com esta obra, essa casa de oração será um local onde vidas serão abençoadas e alcançadas pelo poder de Deus.",
    ],
  },

  cultos: {
    title: "Nossos Horários",
    subtitle: "Venha clamar e adorar conosco! Nossa programação continua normal durante toda a obra:",
    schedule: [
      {
        day: "Segunda a Sexta",
        time: "06h às 08h e 18h",
        name: "Reunião de Oração",
        description: "Momentos diários de clamor, intercessão e busca da presença de Deus no início do dia e ao final da tarde.",
        category: "oracao",
      },
      {
        day: "Terça-feira",
        time: "19h30",
        name: "Culto de Ensino & Doutrina",
        description: "Ministração da Palavra de Deus para edificação espiritual da igreja e fortalecimento de toda a família.",
        category: "ensino",
      },
      {
        day: "Domingo",
        time: "09h00",
        name: "Escola Bíblica Dominical (EBD)",
        description: "Estudo aprofundado das Sagradas Escrituras dividido por faixas etárias para crescimento no conhecimento de Deus.",
        category: "ensino",
      },
      {
        day: "Domingo",
        time: "18h30",
        name: "Culto da Família & Celebração",
        description: "Reunião solene com louvor congregacional, adoração e ministração profética para abençoar o seu lar.",
        category: "celebracao",
      },
    ] as CultoItem[],
    photos: [
      { url: "/cultos/IMG_2803-scaled.jpg", caption: "Celebração e Louvor Congregacional" },
      { url: "/cultos/IMG_2806-scaled.jpg", caption: "Famílias reunidas na presença de Deus" },
      { url: "/cultos/IMG_2821-scaled.jpg", caption: "Ministração da Palavra Sagrada" },
      { url: "/cultos/IMG_2834-scaled.jpg", caption: "Comunhão e fervor espiritual" },
      { url: "/cultos/IMG_2838-scaled.jpg", caption: "Juventude adorando ao Senhor" },
      { url: "/cultos/IMG_2848-scaled.jpg", caption: "Momentos de oração e intercessão" },
    ],
  },

  volunteer: {
    title: "Seja um Voluntário — Mãos na Obra",
    subtitle: "Coloque seus dons, habilidades e coração a serviço da construção do Templo de Deus.",
    description:
      "Preencha seus dados abaixo. Ao clicar em enviar, você será direcionado diretamente ao WhatsApp oficial da nossa equipe com uma mensagem pré-formatada para combinarmos sua participação!",
    areas: [
      { id: "construcao", label: "Apoio em Obras, Engenharia ou Reformas" },
      { id: "recepcao", label: "Recepção, Acolhimento e Organização de Eventos" },
      { id: "oracao", label: "Equipe de Intercessão & Vigília pela Obra" },
      { id: "comunicacao", label: "Mídia, Fotografia, Vídeo e Redes Sociais" },
      { id: "materiais", label: "Doação de Materiais de Construção ou Serviços" },
      { id: "outro", label: "Desejo Ajudar no que for Necessário" },
    ],
  },

  faqs: [
    {
      question: "A igreja vai parar de funcionar durante a construção?",
      answer:
        "Não! A igreja permanece em pleno e contínuo funcionamento. A obra não para, e a igreja também não! Cada culto, cada oração e cada vida transformada acontecem normalmente.",
    },
    {
      question: "Quais são os horários dos cultos durante a obra?",
      answer:
        "Segunda a Sexta (Oração): das 6h às 8h e às 18h. Terça-feira (Culto): às 19h30. Domingo: 9h e 18h30.",
    },
    {
      question: "Como posso acompanhar o andamento da obra e a prestação de contas?",
      answer:
        "Toda a evolução da obra é apresentada periodicamente em nossos cultos administrativos, assembleias da igreja e através dos nossos canais oficiais (Instagram, YouTube e no site catedraladcatalao.com.br).",
    },
    {
      question: "Qualquer pessoa pode contribuir com a construção?",
      answer:
        "Sim! Toda contribuição voluntária de membros, congregados, amigos e parceiros movidos pelo Espírito Santo a semear nesta grande obra é muito bem-vinda e abençoada.",
    },
    {
      question: "Onde será a localização exata da Nova Catedral?",
      answer:
        "A Catedral está sendo edificada no endereço da Sede: Rua do Cristiano Aires, 649 - Bairro N. Sra. de Fátima, Catalão - GO, CEP: 75709-280.",
    },
  ] as FaqItem[],
}

