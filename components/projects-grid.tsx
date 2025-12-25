import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Boilerplate",
    description: "A comprehensive starter template for modern web development projects.",
    githubUrl: "https://github.com/schererleander/boilerplate",
  },
  {
    title: "Quiz Website",
    description: "An interactive quiz platform built to test your knowledge.",
    githubUrl: "https://github.com/schererleander/quiz",
  },
  {
    title: "Space Invaders",
    description: "A classic arcade game clone recreated with modern web technologies.",
    githubUrl: "https://github.com/schererleander/spaceinvaders",
  },
  {
    title: "Specula",
    description: "A mirror project or reflection tool (Description inferred from name).",
    githubUrl: "https://github.com/schererleander/specula",
  },
];

export function ProjectsGrid() {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link href={project.githubUrl} key={project.title} target="_blank" className="block group h-full">
            <Card className="h-full transition-all duration-300 bg-card/50 hover:bg-card/80 shadow-none p-0 gap-0 overflow-hidden">
              <div className="w-full h-40 bg-muted animate-pulse" />
              <CardHeader className="p-6">
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">{project.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
