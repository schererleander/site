import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Projects } from "@/data/projects";
import { Tools } from "@/data/tools";
import { Github, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <title>߸ home</title>
      <main className="container mx-auto py-12">
        <div className="relative flex justify-center items-center pt-24">
          {/* Gradient Blob */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-gradient-to-tr from-blue-400 via-purple-300 to-pink-300 opacity-60 blur-3xl rounded-full z-0 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 dark:opacity-30"
            style={{ pointerEvents: "none" }}
          />
          <section className="text-center relative z-10">
            <h1 className="text-4xl font-bold mb-4">
              Hi,{" "}
              <span className="text-blue-500 dark:text-purple-500">
                I'm Leander.
              </span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              Passionate about hardware & software, pursuing computer science
              studies. Currently building 3D-printing projects and exploring
              homelabing.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="mt-4">
                <a
                  href="https://github.com/schererleander"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github /> Github
                </a>
              </Button>
              <Button asChild className="mt-4 bg-blue-500 dark:bg-purple-500">
                <a
                  href="mailto:leander@schererleander.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail /> Mail
                </a>
              </Button>
            </div>
          </section>
        </div>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Interests</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>*nix systems</li>
            <li>3D printing</li>
            <li>Homelab & self-hosting</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Tools & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Tools.map((tool) => (
              <Card className="bg-secondary border border-border p-2">
                <div className="flex items-center px-4 py-2">
                  <div className={`p-2 rounded-sm ${tool.color}`}>
                    <img src={tool.image} alt={tool.name} className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <CardTitle>{tool.name}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Projects.map((project) => (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Card className="bg-secondary border border-border py-2">
                  <CardContent>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-64 h-64 rounded-lg mb-4 object-contain mx-auto"
                    />
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 my-4">
                      {project.badges.map((badge) => (
                        <Badge key={badge}>{badge}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
