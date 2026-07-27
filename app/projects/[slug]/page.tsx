import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CircleUserRound, GitFork, Layers, Sparkles, Tablet, TerminalIcon, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/app/lib/data";
import { GitHubButton } from "@/app/components/PageProjects/GitHubButton";
import { ViewProjectButton } from "@/app/components/PageProjects/ViewProjectButton";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) {
    notFound();
  }

  const meta = {
    role: project.role ?? project.subtitle,
    focus: project.focus ?? "Experiência de produto otimizada para interfaces modernas.",
  };

  return (
    <main className="section-pad page-container">

      <div className="max-sm:flex-col flex items-center sm:gap-4 justify-between" style={{padding: "14px 0 14px 0"}}>
        <div className="flex items-center gap-4">
      <Link  href="/" className="flex items-center justify-center w-20 rounded-full bg-[#c8f06e] text-[#0a0a0b] gap-3 hover:bg-[#c9f06e]/80 transition text-xs" style={{margin: "16px 0 16px 0", padding: "6px 14px"}}>
        <ArrowLeft size={12} />
        Voltar
      </Link>

          <GitHubButton href={project.github} />
        </div>

        
          <ViewProjectButton href={project.live} />
      </div>

      <div style={{ marginBottom: "clamp(1rem, 5vw, 1rem)" }}>
        <p style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>
          Projeto
        </p>
        <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "0.75rem" }}>
          {project.title}
        </h1>
        <p style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "var(--text-secondary)", maxWidth: "720px", lineHeight: 1.7 }}>
          {project.subtitle}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="flex flex-col gap-8">
          <div className="card-hover" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "24px", padding: "1.5rem" }}>
            <div className="relative overflow-hidden rounded-3xl bg-[#111113]" style={{ minHeight: "320px" }}>
              <div className="absolute inset-0 bg-linear-to-br from-[#c8f06e]/12 via-transparent to-transparent" />
              <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>

            <div className="grid gap-4 sm:grid-cols-2" style={{ marginTop: "1rem" }}>
              <div className="rounded-3xl border border-white/10 bg-white/5" style={{padding: "1.0rem"}}>
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8f06e] font-bold">Conceito</p>
                <p className="mt-3 text-sm text-[#d7d7d2]">{meta.role}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5" style={{padding: "1.0rem"}}>
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8f06e] font-bold">Foco</p>
                <p className="mt-3 text-sm text-[#d7d7d2]">{meta.focus}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 card-hover" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "24px", padding: "1.75rem" }}>
            <div className="flex flex-col gap-4">
              <p className="text-base uppercase tracking-[0.25em] text-[#c8f06e] font-bold">Resumo estratégico</p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{project.description}</p>
            </div>
            <p className="text-sm text-[#d7d7d2]">{project.longDescription}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5" style={{padding: "1.0rem"}}>
                <div className="mb-3 inline-flex items-center gap-2 text-[#c8f06e]">
                  <Layers size={18} />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold">Arquitetura</span>
                </div>
                <p className="text-sm text-[#d7d7d2]">Interfaces construídas com componentes reutilizáveis e layout responsivo, garantindo um fluxo de leitura rápido e claro.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5" style={{padding: "1.0rem"}}>
                <div className="mb-3 inline-flex items-center gap-2 text-[#c8f06e]">
                  <Tablet size={18} />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold">Responsividade</span>
                </div>
                <p className="text-sm text-[#d7d7d2]">Design adaptável que preserva usabilidade em telas pequenas sem perder impacto visual em desktop.</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-8">
          <div className="card-hover" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "24px", padding: "1.5rem" }}>
            <p className="flex gap-3 text-xs uppercase tracking-[0.25em] text-[#c8f06e] font-bold">
              <CircleUserRound size={18} />
              Identidade
              </p>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginTop: "0.75rem" }}>Experiência de usuário</h2>
            <p className="mt-4 text-sm text-[#d7d7d2]">O layout usa hierarquia visual forte, contraste de leitura e espaçamento generoso para facilitar a compreensão instantânea das funcionalidades.</p>
          </div>

          <div className="card-hover" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "24px", padding: "1.5rem" }}>
            <div className="flex items-center gap-3 text-[#c8f06e]">
              <Sparkles size={18} />
              <h3 className="text-sm uppercase tracking-[0.25em] font-semibold">Valor</h3>
            </div>
            <ul className="flex flex-col gap-3 text-sm text-[#d7d7d2]" style={{ marginTop: "1rem" }}>
              <li className="flex items-start gap-3">
                <span className="items-center justify-center text-[#c8f06e]">•</span>
                <span>Organização clara das informações para conversão e confiança do usuário.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="items-center justify-center text-[#c8f06e]">•</span>
                <span>Toques de microinteração e foco nos pontos de decisão estratégicos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="items-center justify-center text-[#c8f06e]">•</span>
                <span>Baixo ruído visual com grelha modular para leitura rápida em diferentes dispositivos.</span>
              </li>
            </ul>
          </div>

          <div className="card-hover" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "24px", padding: "1.5rem" }}>
            <div className="flex items-center gap-3 text-[#c8f06e]">
              <Users size={18} />
              <h3 className="text-sm uppercase tracking-[0.25em] font-semibold">Público alvo</h3>
            </div>
            <p className="text-sm text-[#d7d7d2]" style={{marginTop: "1rem"}}>Projetos pensados para quem busca soluções digitais confiáveis, com foco em varejo, operações clínicas e geração de vendas simples e escaláveis.</p>
          </div>
        </aside>
      </div>

      <section className="card-hover" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "24px", padding: "1.75rem", marginTop: "2rem" }}>
        <div className="flex flex-col gap-3 sm:justify-between">
          <div>
            <p className="text-base uppercase tracking-[0.25em] text-[#c8f06e] font-bold">Tecnologias usadas</p>
            <h2 className="text-3xl text-white">Ferramentas e stacks</h2>
          </div>
          <p className="max-w-xl text-sm text-[#d7d7d2]">Componentes leves e integração moderna com APIs e frameworks para acelerar entrega e manter consistência visual.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" style={{ marginTop: "1rem" }}>
          {project.tech.map((tech) => (
            <div key={tech} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-[#d7d7d2]" style={{padding: "0.5rem"}}>
              <span className="flex items-center gap-2 font-medium text-white">
                <TerminalIcon size={14} className="text-[#c8f06e]" /> 
                {tech}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
