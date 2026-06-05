import { personal } from "@/app/lib/data";

export default function Footer() {
  return (
    <footer
      className="section-pad-x"
      style={{
        paddingTop: "2rem",
        paddingBottom: "max(2rem, env(safe-area-inset-bottom, 0))",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="page-container footer-inner">
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
        <div className="footer-links" style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
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
              style={{
                fontSize: "13px",
                color: "var(--text-muted)",
                textDecoration: "none",
                padding: "4px 0",
                minHeight: "44px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
