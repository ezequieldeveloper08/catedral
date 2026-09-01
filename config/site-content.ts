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
    projectName: "Nova Catedral AD Catalão",
    tagline: "Um novo marco de fé, adoração e esperança no coração de Catalão.",
    headline: "A Nova Catedral da AD Catalão: Um Altar para 4.000 Vidas",
    subheadline:
      "Um projeto arquitetônico solene e imponente com 3 pavimentos, acessibilidade plena e capacidade para acolher a cidade de Catalão em adoração.",
    pedraFundamentalBadge: "Lançamento Oficial • Pedra Fundamental",
    pedraFundamentalDate: "Dia 13 de Setembro de 2026",
    statusNoticeTitle: "Igreja em Pleno Funcionamento Durante as Obras",
    statusNoticeDescription:
      "Informamos a todos os membros, visitantes e à comunidade que nossos cultos e atividades continuam normais! A construção será executada em etapas planejadas, iniciando pelas novas fachadas e áreas externas antes de qualquer alteração na estrutura existente.",
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
      cnpj: "01.234.567/0001-89",
      legalName: "Igreja Evangélica Assembleia de Deus em Catalão - Ministério Madureira",
    },
  },

  metrics: [
    {
      value: "4.000",
      label: "Lugares na Nave Principal",
      description: "Amplo auditório planejado para receber grandes celebrações com conforto e visibilidade total.",
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
      value: "6.500 m²",
      label: "Área de Edificação",
      description: "Engenharia de ponta com tratamento acústico termoacústico e iluminação cênica sustentável.",
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
        "Projeto luminotécnico concebido para valorizar cada linha da construção à noite, transmitindo calor, acolhimento e solenidade aos que chegam para adorar.",
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
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", // Substitua pelo link real do vídeo do YouTube quando disponível
    duration: "Tour 3D Completo",
  },

  pillars: [
    {
      title: "Nave Principal para 4.000 Fiéis",
      description:
        "Visibilidade perfeita em qualquer ângulo, poltronas confortáveis e circulação otimizada para momentos de grande adoração e comunhão.",
      badge: "Capacidade & Conforto",
      iconName: "Users",
    },
    {
      title: "3 Pavimentos com Infraestrutura Completa",
      description:
        "Salas temáticas para o Departamento Infantil, auditório para a Juventude, salas pastorais, secretaria moderna e salas de apoio.",
      badge: "Espaço Ministerial",
      iconName: "Layers",
    },
    {
      title: "Acústica & Tecnologia de Ponta",
      description:
        "Isolamento acústico de padrão internacional e infraestrutura de áudio, vídeo 4K e transmissão ao vivo para alcançar o mundo.",
      badge: "Alta Tecnologia",
      iconName: "Volume2",
    },
    {
      title: "Construção Planejada em Fases",
      description:
        "Cronograma inteligente que viabiliza a execução da nova fachada e áreas externas mantendo as reuniões e cultos funcionando sem interrupção.",
      badge: "Engenharia Eficiente",
      iconName: "Hammer",
    },
  ] as ProjectPillar[],

  donations: {
    modalTitle: "Faça Parte Desta Conquista Histórica",
    modalSubtitle: "Sua contribuição voluntária é fundamental para erguer este altar de adoração a Deus.",
    pix: {
      key: "pix@catedraladcatalao.com.br",
      keyType: "Chave E-mail / CNPJ Oficial",
      beneficiary: "Igreja Evangélica Assembleia de Deus de Catalão",
      bank: "Sicoob / Bradesco",
      city: "Catalão - GO",
      // Código Pix Copia e Cola padrão (substituível pela string oficial Pix gerada pelo banco)
      copyPasteCode:
        "00020126580014br.gov.bcb.pix0136pix@catedraladcatalao.com.br5204000053039865802BR5925AD CATALAO MADUREIRA6007CATALAO62070503***6304D1B8",
      qrCodeStaticUrl: "/logos/MARCA-AD-CATALÃO-HORIZONTAL-COLORIDA.png",
      instructions: [
        "Abra o aplicativo do seu banco no celular.",
        "Escolha a opção 'Pix' e depois 'Pix Copia e Cola' ou 'Ler QR Code'.",
        "Cole o código ou aponte a câmera para o QR Code e confirme os dados.",
        "Guarde o comprovante como lembrança da sua semeadura na Casa de Deus!",
      ],
    },
    creditCard: {
      title: "Doação via Cartão de Crédito ou Boleto",
      description:
        "Caso prefira contribuir através de cartão de crédito (com opção de parcelamento) ou boleto bancário, você será direcionado para o nosso ambiente de pagamento 100% seguro.",
      paymentUrl: "https://doacoes.catedraladcatalao.com.br/contribuir",
      buttonText: "Contribuir no Cartão de Crédito",
    },
    bankTransfer: {
      bankName: "Banco Bradesco (237)",
      agency: "1234-5",
      account: "98765-4",
      accountType: "Conta Corrente",
      favored: "Igreja Evangélica Assembleia de Deus em Catalão",
      cnpj: "01.234.567/0001-89",
    },
  },

  leadership: {
    title: "Nossa História & Liderança Pastoral",
    subtitle: "Uma liderança comprometida com a Palavra e a expansão do Reino de Deus.",
    pastorNames: "Pastores Presidentes do Campo de Catalão",
    role: "Presidência • AD Catalão Ministério Madureira",
    photoUrl: "/logos/FOTO-PASTORES-DO-CAMPO-AD-CATALÃO.jpg",
    quote:
      "A construção da Nova Catedral não é apenas sobre concreto, vidro e ferro. É sobre edificar um refúgio de esperança, um celeiro de salvação e um legado de fé indelével para as futuras gerações de Catalão e de todo o Brasil.",
    historyText: [
      "A Assembleia de Deus Ministério Madureira em Catalão tem uma trajetória marcada por milagres, dedicação comunitária e zelo pelo evangelho de Cristo.",
      "Ao longo de décadas, a igreja viu milhares de famílias serem restauradas, vidas transformadas e vocações despertadas. O projeto da Nova Catedral nasce como resposta à oração e ao crescimento contínuo do povo de Deus.",
      "Com a bênção do Senhor e o esforço conjunto de cada membro e cooperador, este novo templo será um farol de luz no centro da nossa cidade.",
    ],
  },

  cultos: {
    title: "Horários de Cultos & Programação Semanal",
    subtitle: "A igreja permanece ativa! Venha celebrar conosco e trazer sua família.",
    schedule: [
      {
        day: "Domingo",
        time: "18h30",
        name: "Culto da Família & Celebração",
        description: "Reunião solene com louvor congregacional, adoração e ministração da Palavra para toda a família.",
        category: "celebracao",
      },
      {
        day: "Domingo",
        time: "09h00",
        name: "Escola Bíblica Dominical (EBD)",
        description: "Estudo aprofundado das Sagradas Escrituras dividido por faixas etárias para crescimento espiritual.",
        category: "ensino",
      },
      {
        day: "Terça-feira",
        time: "19h30",
        name: "Culto de Doutrina & Oração",
        description: "Ensino bíblico pastoral e momento especial de intercessão pelas famílias e pela nossa cidade.",
        category: "oracao",
      },
      {
        day: "Quinta-feira",
        time: "19h30",
        name: "Culto da Vitória & Libertação",
        description: "Clamor por curas, milagres e testemunhos do poder de Deus operando na vida do Seu povo.",
        category: "celebracao",
      },
      {
        day: "Sábado",
        time: "19h30",
        name: "Culto de Jovens (UMADC)",
        description: "Encontro vibrante da juventude com louvor contemporâneo, dinamismo e palavra inspiradora.",
        category: "juventude",
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
        "Não! A igreja permanece em pleno e contínuo funcionamento. O plano de engenharia foi estruturado em fases, iniciando pelas fachadas e áreas externas, garantindo que os cultos e atividades ministeriais ocorram normalmente.",
    },
    {
      question: "Como posso acompanhar o andamento da obra e a prestação de contas?",
      answer:
        "Toda a evolução da obra é apresentada periodicamente em nossos cultos administrativos, assembleias da igreja e através dos nossos canais oficiais (Instagram, YouTube e no site catedraladcatalao.com.br).",
    },
    {
      question: "Qualquer pessoa pode contribuir com a construção?",
      answer:
        "Sim! Toda contribuição voluntária de membros, amigos, empresas e parceiros que desejam semear nesta grande obra é muito bem-vinda e abençoada.",
    },
    {
      question: "Onde será a localização exata da Nova Catedral?",
      answer:
        "A Nova Catedral está sendo edificada no endereço da Sede: Rua do Cristiano Aires, 649 - Bairro N. Sra. de Fátima, Catalão - GO, CEP: 75709-280.",
    },
  ] as FaqItem[],
}
