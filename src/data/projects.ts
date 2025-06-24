export interface Project {
  name: string;
  description: string;
  image?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    name: "Quiz Website",
    description: "Dynamic website fetching question from a database",
    url: "https://github.com/schererleander/quiz",
    image: "/images/quiz.webp",
  },
  {
    name: "Authentication",
    description: "Register & login API with passwords stored as salted bcrypt hashes",
    url: "https://github.com/schererleander/authentication",
    image: "/images/authentication.webp",
  },
  {
    name: "site",
    description: "React + Tailwind site auto-deployed to a VPS via GitHub Actions",
    url: "https://github.com/schererleander/site",
    image: "/images/site.webp",
  },
  {
    name: "Space Invaders",
    description: "Classic Space-Invaders clone built in Python with Pygame",
    url: "https://github.com/schererleander/space-invaders",
    image: "/images/spaceinvaders.webp",
  },
  {
    name: "Markdown Preview",
    description: "Live Markdown preview (basic syntax)",
    url: "https://github.com/schererleander/markdown-preview",
    image: "/images/markdownparser.webp",
  },
  {
    name: "todolist",
    description: "Simple ncurses CLI todo list (C)",
    url: "https://github.com/schererleander/todolist",
    image: "/images/todolist.webp",
  },
  {
    name: "specula",
    description: "Minimal TUI for file metadata (go)",
    url: "https://github.com/schererleander/specula",
    image: "/images/specula.webp",
  },
  {
    name: "Nix",
    description: "Exploring Nix to build a reproducible system configuration across all my devices.",
    url: "https://github.com/schererleander/nix",
    image: "/images/nix.webp",
  },
  {
    name: "Hackintosh",
    description: "macOS on PC hardware using opencore",
    url: "https://github.com/schererleander/opencore-config",
    image: "/images/hackintosh.webp",
  },
  {
    name: "raylib-shooter",
    description: "Unfinished FPS built with raylib",
    url: "https://github.com/schererleander/raylib-shooter",
    image: "/images/raylibshooter.webp",
  },
  {
    name: "Python ICS Modifier",
    description: "Changes reminders of .ics file",
    url: "https://github.com/schererleander/pyhton-ics-modifier",
    image: "/images/github.webp",
  },
];