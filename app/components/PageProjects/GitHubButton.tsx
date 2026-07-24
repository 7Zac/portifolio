import { projects } from "@/app/lib/data";
import { GitFork } from "lucide-react";
import Link from "next/link";


type GitHubButtonProps = {
  href: string;
};

//  const project = projects.find(
//     (project) => project.slug === project.slug
//  );

export function GitHubButton ({ href }: GitHubButtonProps) {
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
        <GitFork size={14} />
        <Link href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs"
        >
       GitHub
        </Link>
        </button>
        
    );

};

