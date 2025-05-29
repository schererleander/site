import CardLink from '../components/CardLink';
import { projects, type Project } from '../data/projects';

export default function ProjectsPage() {
  return (
    <>
      <title>߸ projects</title>
      <h1>Projects</h1>

      <ul className="space-y-2">
        {projects.map((p: Project) => (
          <li key={p.name}>
            <CardLink
              title={p.name}
              body={p.description}
              href={p.url}
              imgSrc={p.image}
            />
          </li>
        ))}
      </ul>
    </>
  );
}