import Entry from "../components/Entry";

interface Meta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
}

const postFiles = import.meta.glob("../blog/*.md", { eager: true }) as Record<
  string,
  { attributes: Omit<Meta, "slug"> }
>;

const posts: Meta[] = Object.entries(postFiles)
  .map(([path, mod]) => ({
    slug: path.split("/").pop()!.replace(".md", ""),
    ...(mod.attributes as Omit<Meta, "slug">),
  }))
  .sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

export default function Blog() {
  return (
    <>
      <title>߸ projects</title>
      <h1>Blog</h1>
      <div className="grid grid-cols-2 gap-4 [grid-auto-rows:1fr]">
 
      {posts.map((post) => (
          <Entry
            title={post.title}
            excerpt={post.excerpt}
            cover={post.cover}
            href={`/blog/${post.slug}`}
            date={post.date}
          />
      ))}
              </div>

    </>
  );
}
