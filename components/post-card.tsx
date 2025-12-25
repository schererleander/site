import { type Post } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import Link from "next/link"

export function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <Link href={post.url} className="no-underline">
        <h2 className="mb-1.5 mt-3 text-xl font-bold text-foreground">
          {post.title}
        </h2>
      </Link>
      <div className="flex gap-1.5 font-medium text-muted-foreground/60">
        <time dateTime={post.date} title={format(parseISO(post.date), 'yyyy/MM/dd')}>
          {format(parseISO(post.date), 'do MMM yyyy')}
        </time>
      </div>
    </div>
  )
}
