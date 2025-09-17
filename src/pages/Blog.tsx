import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Gallery from "@/components/Gallery";

interface Meta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
}

const images =[
  { src: "/images/3ds.webp", alt: "Nintendo 3DS", id: 1 },
  { src: "/images/esp32.webp", alt: "ESP 32", id: 2 },
  { src: "/images/setup.webp", alt: "Setup", id: 4 },
  { src: "/images/ocarinaoftime.webp", alt: "Ocarina of Time", id: 6 },
  { src: "/images/hellsparadise.webp", alt: "Hells paradise", id: 7 }
]

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
      <title>߸ blog</title>
      <main className="container mx-auto py-12">
          <h1 className="text-3xl font-semibold mb-4">
            Blog Posts
          </h1>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {posts.map((post) => (
              <Card className="bg-secondary border border-border p-0" key={post.slug}>
                <CardHeader className="p-0">
                  <a
                    href={`/blog/${post.slug}`}
                    className="block rounded-t-xl overflow-hidden"
                  >
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="h-48 w-full object-cover object-center"
                      style={{ marginTop: 0, paddingTop: 0 }}
                    />
                  </a>
                </CardHeader>
                <CardContent className="pb-4 px-6">
                  <CardTitle className="text-lg font-semibold hover:underline md:text-xl mb-2">
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </CardTitle>
                  <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-foreground font-medium hover:underline text-sm"
                  >
                    Read more
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Some images</h2>
          <Gallery images={images} />
        </section>
        
      </main>
    </>
  );
}
