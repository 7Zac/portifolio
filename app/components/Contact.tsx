"use client";
import { useState } from "react";
import { personal } from "@/app/lib/data";

const socials = [
  { label: "GitHub", href: personal.github, icon: "⌥", desc: "github.com/7Zac" },
  { label: "LinkedIn", href: personal.linkedin, icon: "in", desc: "isaac-lopesalencar" },
  { label: "Behance", href: personal.behance, icon: "Bē", desc: "zacdesigner" },
  { label: "WhatsApp", href: personal.whatsapp, icon: "📱", desc: "+55 (88) 98823-0242" },
  { label: "E-mail", href: `mailto:${personal.email}`, icon: "✉", desc: personal.email },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setSent(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        setError("Algo deu errado. Tente novamente.");
      }
    } catch {
      setError("Erro de conexão. Tente novamente.");
    }
    setSending(false);
  };

  const inputStyle = {
    width: "100%",
    background: "var(--bg-3)",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    padding: "12px 14px",
    fontSize: "16px",
    color: "var(--text-primary)",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "var(--font-body)",
  } as React.CSSProperties;

  return (
    <section id="contato" className="section-pad page-container">
      <div style={{ marginBottom: "clamp(2rem, 5vw, 3.5rem)" }}>
        <p style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
          <span className="accent-line" />Contato
        </p>
        <h2
          className="font-display"
          style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.1 }}
        >
          Vamos construir<br />
          <span style={{ color: "var(--text-secondary)" }}>algo juntos?</span>
        </h2>
      </div>

      <div className="grid-2-col">
        <div>
          <p style={{ fontSize: "clamp(15px, 2vw, 16px)", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Estou aberto a novas oportunidades, projetos freelance e colaborações. Me mande uma mensagem ou encontre-me nas redes.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="card-hover"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  background: "var(--bg-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  minHeight: "44px",
                }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "var(--accent-dim)",
                    border: "1px solid rgba(200,240,110,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--accent)",
                    flexShrink: 0,
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {s.icon}
                </span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>{s.label}</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis" }}>{s.desc}</div>
                </div>
                <span style={{ marginLeft: "auto", color: "var(--text-muted)", fontSize: "14px", flexShrink: 0 }}>→</span>
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "var(--bg-2)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            padding: "clamp(1.25rem, 4vw, 2rem)",
            minWidth: 0,
          }}
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: "40px", marginBottom: "1rem" }}>✅</div>
              <h3 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "8px" }}>
                Mensagem enviada!
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
                Obrigado pelo contato. Responderei em breve!
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                style={{
                  marginTop: "1.5rem",
                  background: "var(--accent-dim)",
                  color: "var(--accent)",
                  border: "1px solid rgba(200,240,110,0.2)",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  minHeight: "44px",
                  fontSize: "14px",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                }}
              >
                Nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h3
                className="font-display"
                style={{ fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "6px" }}
              >
                Enviar mensagem
              </h3>
              <div>
                <label style={{ fontSize: "12px", color: "var(--text-muted)", display: "block", marginBottom: "6px", fontWeight: 500 }}>
                  Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={formState.name}
                  onChange={(e) => setFormState((f) => ({ ...f, name: e.target.value }))}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--border-hover)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <div>
                <label style={{ fontSize: "12px", color: "var(--text-muted)", display: "block", marginBottom: "6px", fontWeight: 500 }}>
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  placeholder="seu@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState((f) => ({ ...f, email: e.target.value }))}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--border-hover)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <div>
                <label style={{ fontSize: "12px", color: "var(--text-muted)", display: "block", marginBottom: "6px", fontWeight: 500 }}>
                  Mensagem
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Conte sobre o projeto ou oportunidade..."
                  value={formState.message}
                  onChange={(e) => setFormState((f) => ({ ...f, message: e.target.value }))}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--border-hover)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              {error && (
                <p style={{ fontSize: "13px", color: "#f09595" }}>{error}</p>
              )}
              <button
                type="submit"
                disabled={sending}
                style={{
                  background: sending ? "var(--bg-3)" : "var(--accent)",
                  color: sending ? "var(--text-muted)" : "var(--bg)",
                  border: "none",
                  borderRadius: "10px",
                  padding: "13px",
                  minHeight: "48px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: sending ? "not-allowed" : "pointer",
                  fontFamily: "var(--font-body)",
                  transition: "all 0.2s",
                  letterSpacing: "0.01em",
                  width: "100%",
                }}
              >
                {sending ? "Enviando..." : "Enviar mensagem →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
