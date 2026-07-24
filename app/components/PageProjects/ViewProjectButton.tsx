import { projects } from "@/app/lib/data";
import { ExternalLink } from "lucide-react";
import Link from "next/link";


type ViewProjectButtonProps = {
  href: string | null;
};

export function ViewProjectButton ({ href }: ViewProjectButtonProps) {
    if (!href) return (
    
        <button className="flex text-xs text-[#EF9F27]" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(186,117,23,0.08)",
            border: "1px solid rgba(186,117,23,0.2)",
            borderRadius: "100px",
            padding: "6px 14px",
        }}>
        Ops, este projeto ainda não foi feito o deploy!
        </button>);
    return (
        <button className="flex card-hover" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--accent-dim2)",
            border: "1px solid rgba(200,240,110,0.2)",
            borderRadius: "100px",
            padding: "6px 14px",
        }}>
        <ExternalLink size={14} />
        <Link href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs"
        >
       Ver projeto
        </Link>
        </button>
        
    );

};