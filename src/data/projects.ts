import spaceInvadersImg from "../assets/spaceinvaders.webp";
import hackintoshImg from "../assets/hackintosh.webp";
import markdownPreviewImg from "../assets/markdownparser.webp";
import quizImg from "../assets/quiz.webp";
import raylibShooterImg from "../assets/raylibshooter.webp";
import authenticationImg from "../assets/authentication.webp";
import todoListImg from "../assets/todolist.webp";
import speculaImg from "../assets/specula.webp";
import gitHubImg from "../assets/github.png";

export interface Project {
  name: string;
  description: string;
  image?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    name: "Space Invaders",
    description: "Old-school shooter coded long ago",
    url: "https://github.com/schererleander/space-invaders",
    image: spaceInvadersImg,
  },
  {
    name: "Hackintosh",
    description: "macOS on PC hardware (pre-MacBook era)",
    url: "https://github.com/schererleander/opencore-config",
    image: hackintoshImg,
  },
  {
    name: "Markdown Preview",
    description: "Live Markdown preview (basic syntax)",
    url: "https://github.com/schererleander/markdown-preview",
    image: markdownPreviewImg,
  },
  {
    name: "Quiz Website",
    description: "Plain but functional school project",
    url: "https://github.com/schererleander/quiz",
    image: quizImg,
  },
  {
    name: "raylib-shooter",
    description: "Unfinished FPS built with raylib",
    url: "https://github.com/schererleander/raylib-shooter",
    image: raylibShooterImg,
  },
  {
    name: "Authentication",
    description: "bcrypt + salted hashes",
    url: "https://github.com/schererleander/authentication",
    image: authenticationImg,
  },
  {
    name: "Python ICS Modifier",
    description: "Adds reminders to .ics files",
    url: "https://github.com/schererleander/pyhton-ics-modifier",
    image: gitHubImg
  },
  {
    name: "todolist (curses)",
    description: "Simple ncurses CLI todo list (C)",
    url: "https://github.com/schererleander/todolist",
    image: todoListImg,
  },
  {
    name: "specula",
    description: "Minimal TUI for file metadata",
    url: "https://github.com/schererleander/specula",
    image: speculaImg,
  },
];