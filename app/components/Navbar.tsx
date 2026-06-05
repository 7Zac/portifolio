"use client";
import { useState, useEffect } from "react";
import { personal } from "@/app/lib/data";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#habilidades", label: "Skills" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(10,10,11,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "18px",
          color: "var(--text-primary)",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        IL<span style={{ color: "var(--accent)" }}>.</span>
      </a>

      {/* Desktop nav */}
      <nav
        style={{ display: "flex", gap: "2rem", alignItems: "center" }}
        className="hidden-mobile"
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="underline-anim"
            style={{
              fontSize: "13px",
              color: active === l.href ? "var(--text-primary)" : "var(--text-secondary)",
              textDecoration: "none",
              letterSpacing: "0.01em",
              transition: "color 0.2s",
            }}
            onClick={() => setActive(l.href)}
          >
            {l.label}
          </a>
        ))}
        <a
          href={personal.github}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: "var(--bg)",
            background: "var(--accent)",
            padding: "6px 16px",
            borderRadius: "100px",
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "opacity 0.2s",
          }}
          onMouseOver={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
          onMouseOut={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          GitHub
        </a>
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "1px solid var(--border)",
          borderRadius: "6px",
          padding: "6px 10px",
          cursor: "pointer",
          color: "var(--text-primary)",
          fontSize: "18px",
          display: "none",
        }}
        className="show-mobile"
        aria-label="Menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            background: "var(--bg-2)",
            borderBottom: "1px solid var(--border)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "16px",
                color: "var(--text-primary)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
