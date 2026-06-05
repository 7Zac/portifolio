"use client";
import { skills } from "@/app/lib/data";

const levelColor: Record<string, { bg: string; text: string; bar: string; width: string }> = {
  Avançado:    { bg: "rgba(200,240,110,0.1)", text: "var(--accent)", bar: "var(--accent)", width: "90%" },
  Intermediário: { bg: "rgba(99,153,255,0.1)", text: "#7eb3ff", bar: "#7eb3ff", width: "60%" },
  Básico:      { bg: "rgba(175,169,236,0.1)", text: "#AFA9EC", bar: "#AFA9EC", width: "35%" },
};

const iconMap: Record<string, string> = {
  monitor: "🖥",
  server: "⚙️",
  palette: "🎨",
  wrench: "🔧",
};

export default function Skills() {
  return (
    <section
      id="habilidades"
      style={{
        padding: "6rem 2rem",
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
            <span className="accent-line" />Habilidades
          </p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.1 }}
          >
            Stack & competências
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
          {Object.values(skills).map((category) => (
            <div
              key={category.label}
              className="card-hover"
              style={{
                background: "var(--bg-3)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                padding: "1.5rem",
              }}
            >
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "20px" }}>{iconMap[category.icon]}</span>
                <h3
                  className="font-display"
                  style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-primary)" }}
                >
                  {category.label}
                </h3>
              </div>

              {/* Skill items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {category.items.map((skill) => {
                  const lc = levelColor[skill.level] || levelColor["Básico"];
                  return (
                    <div key={skill.name}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                        <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: 500 }}>
                          {skill.name}
                        </span>
                        <span
                          style={{
                            fontSize: "10px",
                            fontWeight: 600,
                            padding: "2px 8px",
                            borderRadius: "100px",
                            background: lc.bg,
                            color: lc.text,
                          }}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div
                        style={{
                          height: "3px",
                          background: "var(--border)",
                          borderRadius: "2px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: lc.width,
                            background: lc.bar,
                            borderRadius: "2px",
                            transition: "width 1s ease",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
          {Object.entries(levelColor).map(([level, c]) => (
            <div key={level} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "20px", height: "3px", background: c.bar, borderRadius: "2px" }} />
              <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
