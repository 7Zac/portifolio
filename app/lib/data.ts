export const personal = {
  name: "Isaac Lopes",
  role: "Desenvolvedor FullStack Jr.",
  tagline:
    "Unindo código limpo, design de interfaces e soluções backend para criar experiências digitais que importam.",
  about:
    "Graduado em Sistemas de Informação pela UNINASSAU, combino sólida formação técnica com paixão por design gráfico desde os 14 anos. Isso me permite enxergar o produto além do código, unindo estética e funcionalidade em cada entrega. Atualmente trabalho como Analista de Suporte na Olinda Calçados e como Desenvolvedor FullStack Freelancer, sempre buscando soluções eficientes e escaláveis.",
  location: "Juazeiro do Norte, CE — Brasil",
  email: "isaac.lopesalencar@gmail.com",
  phone: "+55 (88) 98823-0242",
  github: "https://github.com/7Zac",
  linkedin: "https://www.linkedin.com/in/isaac-lopesalencar",
  behance: "https://www.behance.net/zacdesigner/",
  instagram: "https://www.instagram.com/isaacalencar_/",
  whatsapp: "https://wa.me/5588988230242",
};

export const experiences = [
  {
    company: "Olinda Calçados",
    role: "Analista de Suporte",
    period: "Out 2024 – Atual",
    type: "CLT",
    description:
      "Suporte técnico em máquinas e redes, manutenção de sistemas e apoio na implantação de software de gestão. Atuação com cadastros operacionais no sistema TOTVS e SENDA, manipulação de banco de dados PostgreSQL (consultas SQL, correção de IDs, ajustes de campos e relatórios). Participação no desenvolvimento e estilização do site institucional com HTML5, CSS3 e JavaScript.",
    tags: ["TOTVS", "SENDA", "PostgreSQL", "SQL", "HTML5", "CSS3", "JavaScript"],
  },
  {
    company: "Desenvolvedor FullStack Freelancer",
    role: "Autônomo",
    period: "Ago 2024 – Atual",
    type: "Freelancer",
    description:
      "Desenvolvimento de aplicações web com foco em boas práticas, acessibilidade e responsividade. Experiência com React e Next.js (CSR, SSR, SSG), integração com APIs REST, versionamento com Git. Implementação de back-end com Node.js (Express.js) e Java Spring Boot.",
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Java Spring Boot",
      "APIs REST",
      "Git",
    ],
  },
  {
    company: "Designer Freelancer",
    role: "Autônomo",
    period: "Mai 2021 – Atual",
    type: "Freelancer",
    description:
      "Produzo artes gráficas para social media, manipulação de imagens, logomarcas e landing pages desde os 19 anos. Utilizo Adobe Photoshop, Illustrator e Figma para entregar materiais alinhados à identidade visual dos clientes.",
    tags: ["Figma", "Photoshop", "Illustrator", "UI/UX", "Branding"],
  },
];

export const education = [
  {
    institution: "UNINASSAU",
    course: "Sistemas de Informação",
    degree: "Graduação — Bacharelado",
    period: "Fev 2022 – Dez 2025",
  },
];

export const skills = {
  frontend: {
    label: "Frontend",
    icon: "monitor",
    items: [
      { name: "HTML5 / CSS3", level: "Intermediário" },
      { name: "TailwindCSS", level: "Intermediário" },
      { name: "JavaScript ES6+", level: "Intermediário" },
      { name: "TypeScript", level: "Básico" },
      { name: "React", level: "Básico" },
      { name: "Next.js", level: "Básico" },
    ],
  },
  backend: {
    label: "Backend",
    icon: "server",
    items: [
      { name: "Node.js", level: "Básico" },
      { name: "Express.js", level: "Básico" },
      { name: "Java Spring Boot", level: "Básico" },
      { name: "PostgreSQL", level: "Básico" },
      { name: "Drizzle ORM", level: "Básico" },
      { name: "APIs REST", level: "Intermediário" },
    ],
  },
  design: {
    label: "Design",
    icon: "palette",
    items: [
      { name: "Figma", level: "Intermediário" },
      { name: "Adobe Photoshop", level: "Avançado" },
      { name: "Adobe Illustrator", level: "Intermediário" },
      { name: "UI/UX Design", level: "Intermediário" },
    ],
  },
  tools: {
    label: "Ferramentas",
    icon: "wrench",
    items: [
      { name: "Git / GitHub", level: "Intermediário" },
      { name: "Docker", level: "Básico" },
      { name: "VS Code", level: "Intermediário" },
      { name: "Notion", level: "Intermediário" },
      { name: "Stripe", level: "Básico" },
    ],
  },
};

export const projects = [
  {
    slug: "bewear-bootcamp",
    title: "Bewear Bootcamp",
    subtitle: "E-commerce completo",
    description:
      "Plataforma de e-commerce desenvolvida com Next.js e Node.js, com banco de dados PostgreSQL gerenciado via Drizzle ORM. Pagamentos integrados via Stripe com fluxo completo de checkout.",
    longDescription:
      "Projeto focado em estudos avançados de arquitetura fullstack. Cobre catálogo de produtos, carrinho de compras, autenticação e pagamento com Stripe. A camada de dados usa Drizzle ORM com PostgreSQL.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM", "Stripe"],
    github: "https://github.com/7Zac/bewear-bootcamp",
    live: null,
    image: "/projects/bewear.jpg",
    color: "purple",
    icon: "shopping-bag",
    featured: true,
  },
  {
    slug: "ecommerce-sandalias",
    title: "Ecommerce Sandalias",
    subtitle: "E-commerce completo",
    description:
      "O Ecommerce Sandálias é uma plataforma de e-commerce desenvolvida para apresentar e comercializar produtos da marca Olinda.",
    longDescription:
      "O site oferece uma experiência de compra intuitiva e moderna, com categorias específicas para diferentes públicos: homens, mulheres, crianças, bebês e licenciados. A aplicação foi construída com foco em performance, acessibilidade e design responsivo, visando proporcionar uma navegação fluida em dispositivos móveis e desktop.",
    tech: ["Next.js", "TypeScript", "Node.js", "React.js", "TailwindCSS"],
    github: "https://github.com/7Zac/ecommerce-sandalias",
    live: "https://ecommerce-sandalias.vercel.app",
    image: "/projects/ecommerce-sandalias.jpg",
    color: "cyan",
    icon: "shopping-bag",
    featured: true,
  },
  {
    slug: "e-contract",
    title: "e-Contract",
    subtitle: "Gerador de recibos",
    description:
      "Aplicação web para geração automática de recibos de venda. O vendedor preenche os dados da transação e o recibo é gerado instantaneamente, eliminando processos manuais.",
    longDescription:
      "Focado em simplicidade e praticidade para vendedores online e físicos. Construído com React + Vite e Tailwind, permitindo geração de recibos sem necessidade de cadastro.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/7Zac/e-contract",
    live: null,
    image: "/projects/e-contract.jpg",
    color: "blue",
    icon: "file-text",
    featured: true,
  },
  {
    slug: "clinica-saude",
    title: "Clínica Saúde",
    subtitle: "Gestão de fluxo de pacientes",
    description:
      "Sistema completo de gerenciamento de filas e atendimento clínico. Inclui totem de senhas, painel de TV, triagem, guichê, resultados e administração de setores e usuários.",
    longDescription:
      "Desenvolvido na disciplina Fábrica de Software da UNINASSAU. Frontend em Next.js consumindo API REST externa. Funcionalidades de login com RBAC, gestão de anúncios e exibição em tempo real.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "REST API"],
    github: "https://github.com/7Zac/fabricaDeSoftware_frontend",
    live: "https://fabrica-de-software-frontend.vercel.app",
    image: "/projects/clinica-saude.jpg",
    color: "teal",
    icon: "activity",
    featured: true,
  },
  {
    slug: "moreilandia",
    title: "Moreilandia",
    subtitle: "Projeto colaborativo",
    description:
      "Projeto desenvolvido em equipe com foco em colaboração, boas práticas de versionamento e desenvolvimento TypeScript moderno.",
    longDescription:
      "Trabalho em equipe priorizando code review, organização de branches e entrega contínua.",
    tech: ["TypeScript","Next.js","APIRest","TailwindCSS", "React.js","Colaborativo"],
    github: "https://github.com/GuilhermeMarqus/Moreilandia",
    live: "https://melreilandia.vercel.app",
    image: "/projects/moreilandia.jpg",
    color: "amber",
    icon: "users",
    featured: "true",
  },
];

export const stats = [
  { value: "22", label: "Repositórios" },
  { value: "5+", label: "Anos de design" },
  { value: "6+", label: "Projetos web" },
  { value: "2", label: "Conquistas GitHub" },
];
