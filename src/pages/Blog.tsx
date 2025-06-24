import { Link } from "react-router-dom";
import CardLink from "../components/CardLink";

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
}

const postFiles = import.meta.glob("../blog/*.md", { eager: true }) as Record<
  string,
  { attributes: Omit<PostMeta, "slug"> }
>;

const posts: PostMeta[] = Object.entries(postFiles)
  .map(([path, mod]) => ({
    slug: path.split("/").pop()!.replace(".md", ""),
    ...(mod.attributes as Omit<PostMeta, "slug">),
  }))
  .sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

export default function Blog() {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="block">
            <CardLink
              title={post.title}
              body={post.excerpt}
              imgSrc={post.cover}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}