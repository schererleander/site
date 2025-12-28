import { PostCard } from "components/post-card"
import { format, parseISO, compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post, idx) => (
					<PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}
