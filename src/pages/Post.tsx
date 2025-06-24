import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import CodeSnippet from "../components/CodeSnippet";
import LinkWithIcon from "../components/LinkWithIcon";
import NotFoundPage from "./404Page";

interface PostMeta {
  title: string;
  date: string;
  cover?: string;
}

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [meta, setMeta] = useState<PostMeta | null>(null);
  const [content, setContent] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    import(`../blog/${slug}.md?raw`)
      .then((m) => {
        const { data, content } = matter(m.default);
        setMeta(data as PostMeta);
        setContent(content);
      })
      .catch(() => setNotFound(true));
  }, [slug]);

  if (!meta) return null;
  if (notFound) return <NotFoundPage />;

  return (
    <article className="prose prose-zinc dark:prose-invert mx-auto px-4 py-10">
      <Link to="/blog" className="no-underline">
        ← Zurück zum Blog
      </Link>

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
      
      <article className="markdown-body">
        <ReactMarkdown
          components={{
            code({ children }) {
              const text = String(children).replace(/\n$/, "");
              return <CodeSnippet code={text} initialLines={5} />;
            },

            a({ href = "", children, ...props }) {
              return (
                <LinkWithIcon href={href} {...props}>
                {children}
              </LinkWithIcon>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </article>
  );
}