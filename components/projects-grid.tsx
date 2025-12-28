import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  videoSrc?: string;
	imageSrc?: string;
}

const projects: Project[] = [
  {
    title: "Boilerplate",
    description: "A comprehensive starter template for modern web development projects.",
    githubUrl: "https://github.com/schererleander/boilerplate",
    videoSrc: "/videos/boilerplate-preview.mp4",
  },
  {
    title: "Authentication",
    description: "Simple authentication system built using Express.js.",
    githubUrl: "https://github.com/schererleander/authentication",
		imageSrc: "/images/authentication-preview.png"
  },
  {
    title: "Space Invaders",
    description: "Space Invaders clone written in Python using Pygame for an old-school project.",
    githubUrl: "https://github.com/schererleander/spaceinvaders",
    videoSrc: "/videos/spaceinvaders-preview.mp4",
  },
  {
    title: "Specula",
    description: "A minimal TUI tool written in Go to view file metadata and description.",
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
              {project.videoSrc ? (
                  <video
                    className="w-full h-40 object-cover"
                    src={project.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label={`${project.title} preview`}
                  />
              ) : project.imageSrc ? (
								<Image
										className="w-full h-40 object-cover"
										src={project.imageSrc}
										alt={`${project.title} preview`}
										width={500}
										height={300}
									/>
							) : (
                <div className="w-full h-40 bg-muted animate-pulse" />
              )}
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
