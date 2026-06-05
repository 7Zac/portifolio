"use client";
import { experiences } from "@/app/lib/data";

const typeColor: Record<string, { bg: string; text: string }> = {
  CLT: { bg: "rgba(200,240,110,0.1)", text: "var(--accent)" },
  Freelancer: { bg: "rgba(99,153,255,0.1)", text: "#7eb3ff" },
};

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="section-pad"
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="page-container">
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
            <span className="accent-line" />Experiência
          </p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.1 }}
          >
            Histórico profissional
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "11px",
              top: "6px",
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, var(--border-hover), var(--border), transparent)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {experiences.map((exp, i) => (
              <div key={i} className="exp-timeline-row">
                {/* Dot */}
                <div style={{ flexShrink: 0, marginTop: "6px" }}>
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: i === 0 ? "var(--accent)" : "var(--bg-3)",
                      border: `2px solid ${i === 0 ? "var(--accent)" : "var(--border-hover)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {i === 0 && (
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--bg)" }} />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div
                  className="card-hover"
                  style={{
                    flex: 1,
                    background: "var(--bg-3)",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    padding: "clamp(1.125rem, 3vw, 1.5rem)",
                    minWidth: 0,
                  }}
                >
                  {/* Top row */}
                  <div className="exp-card-top">
                    <div>
                      <div style={{ fontSize: "16px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "2px" }}>
                        {exp.role}
                      </div>
                      <div
                        className="font-display"
                        style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 600 }}
                      >
                        {exp.company}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 500,
                          padding: "3px 10px",
                          borderRadius: "100px",
                          background: typeColor[exp.type]?.bg || "var(--bg)",
                          color: typeColor[exp.type]?.text || "var(--text-secondary)",
                        }}
                      >
                        {exp.type}
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1rem" }}>
                    {exp.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
