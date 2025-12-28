import { type Post } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import Link from "next/link"

export function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <Link
        href={post.url}
        className="group no-underline inline-block"
      >
        <h2 className="text-xl font-bold relative before:content-['#'] before:absolute before:-left-5 before:font-normal before:text-muted-foreground before:opacity-0 before:transition group-hover:before:opacity-100">
          {post.title}
        </h2>
      </Link>
      <div className="text-muted-foreground/60">
        <time dateTime={post.date} title={format(parseISO(post.date), 'yyyy/MM/dd')}>
          {format(parseISO(post.date), 'do MMM yyyy')}
        </time>
      </div>
    </div>
  )
}
