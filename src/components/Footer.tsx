function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.9 0-1.3.47-2.36 1.24-3.19-.12-.3-.54-1.51.12-3.15 0 0 1.01-.32 3.3 1.22a11.48 11.48 0 0 1 6 0c2.28-1.54 3.29-1.22 3.29-1.22.66 1.64.24 2.85.12 3.15.77.83 1.23 1.89 1.23 3.19 0 4.58-2.81 5.59-5.5 5.89.43.37.81 1.11.81 2.24v3.32c0 .32.21.7.82.58A12 12 0 0 0 12 0Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2-8 6-8-6h16Zm0 12H4V8l8 6 8-6v10Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center gap-2 py-4">
      <div className="flex gap-6">
        <a href="https://github.com/schererleander" target="_blank" rel="noopener noreferrer" aria-label="Leander Scherer's GitHub">
          <GitHubIcon />
        </a>

        <a href="mailto:leander@schererleander.de" aria-label="Send email to Leander Scherer">
          <MailIcon />
        </a>
      </div>

      <span className="text-sm">© {year} Leander Scherer — ʕっ•ᴥ•ʔっ</span>
    </footer>
  );
}