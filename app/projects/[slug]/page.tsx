import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, GitFork, Layers, Sparkles, Tablet, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/app/lib/data";

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
      <div style={{ marginBottom: "clamp(2rem, 5vw, 3rem)" }}>
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
        <div className="space-y-8">
          <div className="card-hover" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "24px", padding: "1.5rem" }}>
            <div className="relative overflow-hidden rounded-3xl bg-[#111113]" style={{ minHeight: "320px" }}>
              <div className="absolute inset-0 bg-linear-to-br from-[#c8f06e]/12 via-transparent to-transparent" />
              <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>

            <div className="grid gap-4 sm:grid-cols-2" style={{ marginTop: "1rem" }}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8f06e]">Conceito</p>
                <p className="mt-3 text-sm text-[#d7d7d2]">{meta.role}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8f06e]">Foco</p>
                <p className="mt-3 text-sm text-[#d7d7d2]">{meta.focus}</p>
              </div>
            </div>
          </div>

          <div className="card-hover" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "24px", padding: "1.75rem" }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <p className="text-xs uppercase tracking-[0.25em] text-[#c8f06e]">Resumo estratégico</p>
              <p className="mt-4 text-base leading-8" style={{ color: "var(--text-secondary)" }}>{project.description}</p>
            </div>
            <p className="text-sm leading-7 text-[#d7d7d2]">{project.longDescription}</p>

            <div className="grid gap-4 sm:grid-cols-2" style={{ marginTop: "1.5rem" }}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 inline-flex items-center gap-2 text-[#c8f06e]">
                  <Layers size={18} />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold">Arquitetura</span>
                </div>
                <p className="text-sm text-[#d7d7d2]">Interfaces construídas com componentes reutilizáveis e layout responsivo, garantindo um fluxo de leitura rápido e claro.</p>
              </div>
              <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 inline-flex items-center gap-2 text-[#c8f06e]">
                  <Tablet size={18} />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold">Responsividade</span>
                </div>
                <p className="text-sm text-[#d7d7d2]">Design adaptável que preserva usabilidade em telas pequenas sem perder impacto visual em desktop.</p>
              </article>
            </div>
          </div>
        </div>

        <aside className="flex flex-col justify-around">
          <div className="card-hover" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "24px", padding: "1.5rem" }}>
            <p className="text-xs uppercase tracking-[0.25em] text-[#c8f06e]">Identidade</p>
            <h2 className="font-display" style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginTop: "0.75rem" }}>Experiência de usuário</h2>
            <p className="mt-4 text-sm leading-7 text-[#d7d7d2]">O layout usa hierarquia visual forte, contraste de leitura e espaçamento generoso para facilitar a compreensão instantânea das funcionalidades.</p>
          </div>

          <div className="card-hover" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "24px", padding: "1.5rem" }}>
            <div className="flex items-center gap-3 text-[#c8f06e]">
              <Sparkles size={18} />
              <h3 className="text-sm uppercase tracking-[0.25em] font-semibold">Valor</h3>
            </div>
            <ul className="space-y-3 text-sm text-[#d7d7d2]" style={{ marginTop: "1rem" }}>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#c8f06e]/15 text-[#c8f06e]">•</span>
                <span>Organização clara das informações para conversão e confiança do usuário.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#c8f06e]/15 text-[#c8f06e]">•</span>
                <span>Toques de microinteração e foco nos pontos de decisão estratégicos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#c8f06e]/15 text-[#c8f06e]">•</span>
                <span>Baixo ruído visual com grelha modular para leitura rápida em diferentes dispositivos.</span>
              </li>
            </ul>
          </div>

          <div className="card-hover" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "24px", padding: "1.5rem" }}>
            <div className="flex items-center gap-3 text-[#c8f06e]">
              <Users size={18} />
              <h3 className="text-sm uppercase tracking-[0.25em] font-semibold">Público alvo</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-[#d7d7d2]">Projetos pensados para quem busca soluções digitais confiáveis, com foco em varejo, operações clínicas e geração de vendas simples e escaláveis.</p>
          </div>
        </aside>
      </div>

      <section className="card-hover" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "24px", padding: "1.75rem", marginTop: "2rem" }}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#c8f06e]">Tecnologias usadas</p>
            <h2 className="font-display text-3xl text-white">Ferramentas e stacks</h2>
          </div>
          <p className="max-w-xl text-sm text-[#d7d7d2]">Componentes leves e integração moderna com APIs e frameworks para acelerar entrega e manter consistência visual.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" style={{ marginTop: "1rem" }}>
          {project.tech.map((tech) => (
            <div key={tech} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-[#d7d7d2]">
              <span className="inline-flex items-center gap-2 font-medium text-white">
                <ArrowRight size={14} /> {tech}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
