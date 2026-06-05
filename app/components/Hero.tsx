"use client";
import { useEffect, useState } from "react";
import { personal, stats } from "@/app/lib/data";

const roles = [
  "Desenvolvedor FullStack Jr.",
  "Designer de Interfaces",
  "Apaixonado por código limpo",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        overflow: "hidden",
      }}
    >
      {/* Background effects */}
      <div className="hero-glow" />
      <div
        className="dot-grid"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Decorative vertical line */}
      <div
        style={{
          position: "absolute",
          left: "2rem",
          top: "25%",
          bottom: "25%",
          width: "1px",
          background:
            "linear-gradient(to bottom, transparent, var(--border-hover), transparent)",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", width: "100%", paddingTop: "6rem" }}>
        {/* Status badge */}
        <div
          className="fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--accent-dim2)",
            border: "1px solid rgba(200,240,110,0.2)",
            borderRadius: "100px",
            padding: "6px 14px",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--accent)",
              display: "block",
              animation: "blink 1.5s ease infinite",
            }}
          />
          <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 500, letterSpacing: "0.04em" }}>
            Disponível para novas oportunidades
          </span>
        </div>

        {/* Heading */}
        <h1
          className="fade-up-2 font-display"
          style={{
            fontSize: "clamp(42px, 7vw, 88px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            marginBottom: "1rem",
          }}
        >
          Isaac<br />
          <span style={{ color: "var(--accent)" }}>Lopes</span>
        </h1>

        {/* Typewriter */}
        <div
          className="fade-up-3"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(16px, 2.5vw, 22px)",
            color: "var(--text-secondary)",
            marginBottom: "1.5rem",
            height: "36px",
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <span>{displayed}</span>
          <span className="cursor" style={{ color: "var(--accent)" }}>|</span>
        </div>

        {/* Description */}
        <p
          className="fade-up-4"
          style={{
            fontSize: "16px",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            maxWidth: "520px",
            marginBottom: "2.5rem",
          }}
        >
          {personal.tagline}
        </p>

        {/* CTAs */}
        <div className="fade-up-5" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "4rem" }}>
          <a
            href="#projetos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--accent)",
              color: "var(--bg)",
              padding: "12px 28px",
              borderRadius: "100px",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              letterSpacing: "0.01em",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseOver={(e) => {
              const el = e.currentTarget;
              el.style.opacity = "0.9";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseOut={(e) => {
              const el = e.currentTarget;
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }}
          >
            Ver projetos →
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              color: "var(--text-primary)",
              padding: "12px 28px",
              borderRadius: "100px",
              border: "1px solid var(--border-hover)",
              fontWeight: 500,
              fontSize: "14px",
              textDecoration: "none",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseOver={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--text-muted)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseOut={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border-hover)";
              el.style.transform = "translateY(0)";
            }}
          >
            ⌥ GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              color: "var(--text-primary)",
              padding: "12px 28px",
              borderRadius: "100px",
              border: "1px solid var(--border-hover)",
              fontWeight: 500,
              fontSize: "14px",
              textDecoration: "none",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseOver={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--text-muted)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseOut={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border-hover)";
              el.style.transform = "translateY(0)";
            }}
          >
            in LinkedIn
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            flexWrap: "wrap",
            borderTop: "1px solid var(--border)",
            paddingTop: "2rem",
          }}
        >
          {stats.map((s, i) => (
            <div key={i}>
              <div
                className="font-display"
                style={{ fontSize: "28px", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1 }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
