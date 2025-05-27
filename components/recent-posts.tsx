import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function RecentPosts() {
  const posts = await getPosts(3) // Show only 3 most recent posts

  return (
    <section className='pb-16'>
      <div>
        <div className='mb-12 flex items-center justify-between'>
          <h2 className='title'>Recent thoughts</h2>
          <Link
            href='/posts'
            className='text-sm font-medium text-muted-foreground underline-offset-4 hover:underline'
          >
            View all
          </Link>
        </div>
        <Posts posts={posts} />
        <Link
          href='/posts'
          className='mt-8 inline-block text-sm font-medium text-muted-foreground underline-offset-4 hover:underline'
        >
          View all thoughts
        </Link>
      </div>
    </section>
  )
}
