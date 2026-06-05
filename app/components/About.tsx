"use client";
import { personal, education } from "@/app/lib/data";

export default function About() {
  return (
    <section
      id="sobre"
      style={{
        padding: "6rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Label */}
      <div style={{ marginBottom: "3rem" }}>
        <p style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
          <span className="accent-line" />Sobre mim
        </p>
        <h2
          className="font-display"
          style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.1 }}
        >
          Designer que aprendeu<br />
          <span style={{ color: "var(--text-secondary)" }}>a falar com máquinas.</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
        {/* Text */}
        <div>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            {personal.about}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Localização", value: "Juazeiro do Norte, CE" },
              { label: "E-mail", value: personal.email },
              { label: "Idiomas", value: "Português nativo · Inglês (leitura)" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: "12px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", minWidth: "90px" }}>
                  {item.label}
                </span>
                <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Education card */}
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="card-hover"
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>
                  {edu.institution}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--accent)",
                    background: "var(--accent-dim)",
                    padding: "2px 10px",
                    borderRadius: "100px",
                    fontWeight: 500,
                  }}
                >
                  Graduado
                </span>
              </div>
              <p style={{ fontSize: "15px", fontWeight: 500, color: "var(--text-primary)", marginBottom: "4px" }}>
                {edu.course}
              </p>
              <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>{edu.degree} · {edu.period}</p>
            </div>
          ))}

          {/* Quick fact cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {[
              { num: "5+", text: "Anos de design" },
              { num: "2+", text: "Anos dev web" },
              { num: "22", text: "Repos no GitHub" },
              { num: "3", text: "Stacks dominadas" },
            ].map((item) => (
              <div
                key={item.num}
                className="card-hover"
                style={{
                  background: "var(--bg-3)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: "24px", fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}
                >
                  {item.num}
                </div>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "4px" }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #sobre > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
