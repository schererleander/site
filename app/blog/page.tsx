
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post._id} className="group relative flex flex-col items-start">
            <h2 className="text-xl font-semibold tracking-tight">
              <Link href={post.url} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <time dateTime={post.date} className="text-sm text-muted-foreground mb-2">
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
          </article>
        ))}
      </div>
    </div>
  )
}

function compareDesc(a: Date, b: Date) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}
