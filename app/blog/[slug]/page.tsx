// app/blog/[slug]/page.tsx
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { MDXContent } from '@/components/mdx-content'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  if (!post) throw new Error(`Post not found for slug: ${slug}`)
  return { title: post.title }
}

const PostLayout = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  if (!post) throw new Error(`Post not found for slug: ${slug}`)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="text-xs text-muted-foreground/60">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <div className="prose dark:prose-invert prose-neutral max-w-none [&>*]:mb-3 [&>*:last-child]:mb-0">
        <MDXContent code={post.body.code} />
      </div>
    </article>
  )
}

export default PostLayout
