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

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="nav-header"
      style={{
        background: scrolled ? "rgba(10,10,11,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <a
        href="#"
        onClick={closeMenu}
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(16px, 4vw, 18px)",
          color: "var(--text-primary)",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        IL<span style={{ color: "var(--accent)" }}>.</span>
      </a>

      <nav className="nav-desktop">
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
            padding: "8px 16px",
            borderRadius: "100px",
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "opacity 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseOver={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
          onMouseOut={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          GitHub
        </a>
      </nav>

      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-mobile-toggle"
        style={{
          background: "none",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "0 12px",
          cursor: "pointer",
          color: "var(--text-primary)",
          fontSize: "18px",
        }}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <nav className="nav-mobile-panel" aria-label="Menu principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-mobile-link" onClick={closeMenu}>
              {l.label}
            </a>
          ))}
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            style={{
              marginTop: "0.75rem",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "44px",
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--bg)",
              background: "var(--accent)",
              padding: "10px 20px",
              borderRadius: "100px",
              textDecoration: "none",
              alignSelf: "flex-start",
            }}
          >
            GitHub
          </a>
        </nav>
      )}
    </header>
  );
}
