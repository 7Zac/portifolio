"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Activity, ExternalLink, FileText, GitFork, ShoppingBag, Users, type LucideIcon } from "lucide-react";
import { projects } from "@/app/lib/data";

const colorMap: Record<string, { accent: string; bg: string; border: string }> = {
  teal: { accent: "#5DCAA5", bg: "rgba(29,158,117,0.08)", border: "rgba(29,158,117,0.2)" },
  blue: { accent: "#7eb3ff", bg: "rgba(99,153,255,0.08)", border: "rgba(99,153,255,0.2)" },
  purple: { accent: "#AFA9EC", bg: "rgba(127,119,221,0.08)", border: "rgba(127,119,221,0.2)" },
  amber: { accent: "#EF9F27", bg: "rgba(186,117,23,0.08)", border: "rgba(186,117,23,0.2)" },
  cyan: {accent: "#00BBF0", bg: "rgba(0,59,163,0.08)", border: "rgba(0,59,163,0.2)"},
};

const iconMap: Record<string, LucideIcon> = {
  "shopping-bag": ShoppingBag,
  "file-text": FileText,
  activity: Activity,
  users: Users,
};

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="section-pad page-container">
      {/* Header */}
      <div style={{ marginBottom: "3.5rem" }}>
        <p style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
          <span className="accent-line" />Projetos
        </p>
        <h2
          className="font-display"
          style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.1 }}
        >
          O que já construí
        </h2>
      </div>

      {/* Featured grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        {featured.map((p) => {
          const c = colorMap[p.color];
          const isHov = hovered === p.slug;
          const IconComponent = iconMap[p.icon] ?? Users;
          return (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}/`}
              onMouseEnter={() => setHovered(p.slug)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: isHov ? c.bg : "var(--bg-2)",
                border: `1px solid ${isHov ? c.border : "var(--border)"}`,
                borderRadius: "20px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "all 0.25s ease",
                transform: isHov ? "translateY(-3px)" : "none",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: c.bg,
                    border: `1px solid ${c.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: c.accent,
                    transition: "transform 0.2s",
                    transform: isHov ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <IconComponent size={20} strokeWidth={1.8} />
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  {p.live && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(p.live, "_blank", "noreferrer");
                      }}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "var(--bg-3)",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "13px",
                        color: "var(--text-secondary)",
                        cursor: "pointer",
                      }}
                      title="Ver projeto ao vivo"
                    >
                      <ExternalLink size={14} />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(p.github, "_blank", "noreferrer");
                    }}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "var(--bg-3)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                      cursor: "pointer",
                    }}
                    title="Ver no GitHub"
                  >
                    <GitFork size={14} />
                  </button>
                </div>
              </div>

              {/* Image Preview */}
              {p.image && (
                <div
                  style={{
                    width: "100%",
                    height: "160px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: c.bg,
                    border: `1px solid ${c.border}`,
                    position: "relative",
                  }}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    style={{
                      transition: "transform 0.3s ease",
                      transform: isHov ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "6px" }}>
                  <h3
                    className="font-display"
                    style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)" }}
                  >
                    {p.title}
                  </h3>
                </div>
                <p style={{ fontSize: "12px", color: c.accent, fontWeight: 500, marginBottom: "10px" }}>
                  {p.subtitle}
                </p>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  {p.description}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      padding: "3px 10px",
                      borderRadius: "100px",
                      border: `1px solid ${isHov ? c.border : "var(--border)"}`,
                      color: isHov ? c.accent : "var(--text-secondary)",
                      background: isHov ? c.bg : "var(--bg-3)",
                      transition: "all 0.25s",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Other projects */}
      {others.length > 0 && (
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {others.map((p) => {
            const c = colorMap[p.color];
            return (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}/`}
                className="card-hover"
                style={{
                  flex: "1 1 min(100%, 260px)",
                  minWidth: 0,
                  background: "var(--bg-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "1.25rem 1.5rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  color: "inherit",
                }}
              >
                <div>
                  <p className="font-display" style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>
                    {p.title}
                  </p>
                  <p style={{ fontSize: "12px", color: "var(--text-secondary)" }}>{p.description}</p>
                  <div style={{ display: "flex", gap: "6px", marginTop: "10px", flexWrap: "wrap" }}>
                    {p.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
                <span style={{ color: "var(--text-muted)", fontSize: "18px", flexShrink: 0 }}>→</span>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
