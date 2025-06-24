import { useMemo } from "react";
import matter from "gray-matter";
import { Link } from "react-router-dom";
import CardLink from "../components/CardLink";

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
}

export default function Blog() {
  const posts = useMemo<PostMeta[]>(() => {
    const files = import.meta.glob("../blog/*.md", {
      eager: true,
      query: "?raw",
      import: "default",
    }) as Record<string, string>;

    return Object.entries(files)
      .map(([path, raw]) => {
        const { data } = matter(raw);
        const slug = path.split("/").pop()!.replace(".md", "");
        return { slug, ...data } as PostMeta;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          /* 1) Link für internes Routing                              */
          /* 2) CardLink bekommt genau deine Prop-Namen                */
          <Link key={post.slug} to={`/blog/${post.slug}`} className="block">
            <CardLink
              title={post.title}
              body={post.excerpt}  // <—  body statt description
              imgSrc={post.cover}  // <—  imgSrc statt image
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
