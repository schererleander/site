import Card from "../components/Card";

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
      
      {posts.map((post) => (
        <a key={post.slug} href={`/blog/${post.slug}`} className="block py-1">
          <Card
            title={post.title}
            body={post.excerpt}
            imgSrc={post.cover}
          />
        </a>
      ))}
    </>
  );
}
