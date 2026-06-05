# 🧑‍💻 Isaac Lopes — Portfólio FullStack

Portfólio pessoal desenvolvido em **Next.js 15 (App Router)** com TypeScript e Tailwind CSS.

## 🚀 Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 15 (App Router) |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS + CSS Variables |
| Fontes | Syne (display) + DM Sans (body) |
| Animações | Framer Motion / CSS nativo |
| Backend API | Next.js Route Handlers |
| Deploy | Vercel (recomendado) |

## 📁 Estrutura

```
app/
├── api/contact/route.ts   # API de contato (POST)
├── components/
│   ├── Navbar.tsx         # Navegação responsiva
│   ├── Hero.tsx           # Seção inicial com typewriter
│   ├── About.tsx          # Sobre + formação
│   ├── Experience.tsx     # Timeline profissional
│   ├── Projects.tsx       # Grid de projetos
│   ├── Skills.tsx         # Habilidades com barras de progresso
│   ├── Contact.tsx        # Formulário + redes sociais
│   └── Footer.tsx         # Rodapé
├── lib/data.ts            # Dados centralizados
├── globals.css            # Tema escuro + utilitários
├── layout.tsx             # Layout raiz + metadados SEO
└── page.tsx               # Página principal
```

## ⚡ Rodando localmente

```bash
npm install
npm run dev
# Acesse http://localhost:3000
```

## 🌐 Deploy na Vercel

```bash
npm install -g vercel
vercel --prod
```

> Para ativar o formulário de contato por e-mail, configure a variável `RESEND_API_KEY` na Vercel e descomente o bloco de integração em `app/api/contact/route.ts`.

## ✏️ Personalizando

Todos os dados (projetos, experiências, habilidades, contatos) estão centralizados em:

```
app/lib/data.ts
```

Basta editar esse arquivo para atualizar qualquer informação do portfólio.

---

Desenvolvido por **Isaac Lopes** · [GitHub](https://github.com/7Zac) · [LinkedIn](https://www.linkedin.com/in/isaac-lopesalencar)
