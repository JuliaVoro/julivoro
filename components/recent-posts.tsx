import Link from 'next/link'
import { getFeaturedPosts } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function RecentPosts() {
  const posts = await getFeaturedPosts() // Get featured posts including 'Beyond the MVP'

  return (
    <section className='pb-16'>
      <div>
        <div className='mb-12 flex items-center justify-between'>
          <h2 className='title'>Recent thoughts</h2>
          <Link href='/posts' className='underline'>
            View all
          </Link>
        </div>
        <Posts posts={posts} />
        <Link
          href='/posts'
          className='mt-8 inline-block underline'
        >
          View all thoughts
        </Link>
      </div>
    </section>
  )
}
