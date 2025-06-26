import { useParams, Navigate } from "react-router-dom";
import type { FC } from "react";

interface Meta {
  title: string;
  date: string;
  cover?: string;
}

interface Post {
  attributes: Meta;
  ReactComponent: FC;
}

const posts = import.meta.glob<Post>("../blog/*.md", { eager: true });

const formDate = new Intl.DateTimeFormat("de-DE", { dateStyle: "medium" });

export default function Post() {
  const { slug } = useParams();
  
  const post = posts[`../blog/${slug}.md`];

  if (!post) return <Navigate to="/404" replace />;

  const { attributes: meta, ReactComponent: Content } = post;

  return (
    <article>
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
      <p className="text-sm text-zinc-500 mb-8">{formDate.format(new Date(meta.date))}</p>
      <Content />
    </article>
  );
}
