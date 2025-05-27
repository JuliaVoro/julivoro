import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function RecentPosts() {
  const posts = await getPosts(5)

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent thoughts</h2>
        <Posts posts={posts} />

        <Link
          href='/posts'
          className='mt-8 inline-block text-sm underline underline-offset-4 transition-colors hover:text-foreground'
        >
          View all thoughts
        </Link>
      </div>
    </section>
  )
}
