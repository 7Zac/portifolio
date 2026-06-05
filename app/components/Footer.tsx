import { personal } from "@/app/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <div>
        <span
          className="font-display"
          style={{ fontWeight: 700, fontSize: "16px", color: "var(--text-primary)" }}
        >
          Isaac Lopes<span style={{ color: "var(--accent)" }}>.</span>
        </span>
        <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>
          © {new Date().getFullYear()} · Juazeiro do Norte, CE
        </p>
      </div>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          { label: "GitHub", href: personal.github },
          { label: "LinkedIn", href: personal.linkedin },
          { label: "Behance", href: personal.behance },
          { label: "Contato", href: `mailto:${personal.email}` },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            className="underline-anim"
            style={{ fontSize: "13px", color: "var(--text-muted)", textDecoration: "none" }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
