import { useParams, Link } from "react-router-dom";
import NotFoundPage from "./404Page";

interface PostFile {
  attributes: {
    title: string;
    date: string;
    cover?: string;
  };
  markdown: string;
  ReactComponent: React.FC<any>;
}

const posts = import.meta.glob("../blog/*.md", {
  eager: true,
}) as Record<string, PostFile>;

export default function Post() {
  const { slug } = useParams<{ slug: string }>();

  const match = Object.entries(posts).find(([path]) =>
    path.endsWith(`${slug}.md`)
  );

  if (!match) return <NotFoundPage />;
  const { attributes: meta, ReactComponent: Content } = match[1];

  return (
    <article className="prose prose-zinc dark:prose-invert mx-auto px-4 py-10">
      <a href="/blog" className="no-underline hover:underline">
        ← Back
      </a>

      {meta.cover && (
        <img
          src={meta.cover}
          alt={meta.title}
          className="w-full h-60 object-cover rounded-lg my-6"
        />
      )}

      <h1>{meta.title}</h1>
      <p className="text-sm text-zinc-500 mb-8">
        {new Date(meta.date).toLocaleDateString("de-DE")}
      </p>

      <Content />
    </article>
  );
}