import GitHubIcon from "./GitHubIcon";
import MailIcon from "./MailIcon";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center gap-2 py-4">
      <div className="flex gap-6">
        <a href="https://github.com/schererleander" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>

        <a href="mailto:leander@schererleander.de">
          <MailIcon />
        </a>
      </div>

      <span className="text-sm">© {year} Leander Scherer — ʕっ•ᴥ•ʔっ</span>
    </footer>
  );
}