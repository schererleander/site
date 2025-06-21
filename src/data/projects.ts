import spaceInvadersImg from "../assets/spaceinvaders.webp";
import hackintoshImg from "../assets/hackintosh.webp";
import markdownPreviewImg from "../assets/markdownparser.webp";
import quizImg from "../assets/quiz.webp";
import raylibShooterImg from "../assets/raylibshooter.webp";
import authenticationImg from "../assets/authentication.webp";
import todoListImg from "../assets/todolist.webp";
import speculaImg from "../assets/specula.webp";
import gitHubImg from "../assets/github.webp";
import siteImg from "../assets/site.webp";
import nixImg from "../assets/nix.webp";

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
    image: quizImg,
  },
  {
    name: "Authentication",
    description: "Register & login API with passwords stored as salted bcrypt hashes",
    url: "https://github.com/schererleander/authentication",
    image: authenticationImg,
  },
  {
    name: "site",
    description: "React + Tailwind site auto-deployed to a VPS via GitHub Actions",
    url: "https://github.com/schererleander/site",
    image: siteImg,
  },
  {
    name: "Space Invaders",
    description: "Classic Space-Invaders clone built in Python with Pygame",
    url: "https://github.com/schererleander/space-invaders",
    image: spaceInvadersImg,
  },
  {
    name: "Markdown Preview",
    description: "Live Markdown preview (basic syntax)",
    url: "https://github.com/schererleander/markdown-preview",
    image: markdownPreviewImg,
  },
  {
    name: "todolist",
    description: "Simple ncurses CLI todo list (C)",
    url: "https://github.com/schererleander/todolist",
    image: todoListImg,
  },
  {
    name: "specula",
    description: "Minimal TUI for file metadata (go)",
    url: "https://github.com/schererleander/specula",
    image: speculaImg,
  },
  {
    name: "Nix",
    description: "Exploring Nix to build a reproducible system configuration across all my devices.",
    url: "https://github.com/schererleander/nix",
    image: nixImg,
  },
  {
    name: "Hackintosh",
    description: "macOS on PC hardware using opencore",
    url: "https://github.com/schererleander/opencore-config",
    image: hackintoshImg,
  },
  {
    name: "raylib-shooter",
    description: "Unfinished FPS built with raylib",
    url: "https://github.com/schererleander/raylib-shooter",
    image: raylibShooterImg,
  },
  {
    name: "Python ICS Modifier",
    description: "Changes reminders of .ics file",
    url: "https://github.com/schererleander/pyhton-ics-modifier",
    image: gitHubImg
  },
];
