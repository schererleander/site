import { Github, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center gap-2 py-4">
      <div className="flex gap-6">
        <a href="https://github.com/schererleander" target="_blank" rel="noopener noreferrer" aria-label="Leander Scherer's GitHub">
          <Github className="w-4 h-4" strokeWidth={3} />
        </a>

        <a href="mailto:leander@schererleander.de" aria-label="Send email to Leander Scherer">
          <Mail className="w-4 h-4" strokeWidth={3} />
        </a>
      </div>

      <span className="text-sm">© {year} Leander Scherer — ʕっ•ᴥ•ʔっ</span>
    </footer>
  );
}
