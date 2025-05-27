import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function RecentPosts() {
  const posts = await getPosts(5)

  return (
    <section className='pb-24' data-oid='5wxtsw5'>
      <div data-oid='9lma572'>
        <h2 className='title mb-12' data-oid='z2oap44'>
          Recent thoughts
        </h2>
        <Posts posts={posts} data-oid='7f.vi-f' />

        <Link
          href='/posts'
          className='mt-8 inline-block text-sm underline underline-offset-4 transition-colors hover:text-foreground'
          data-oid='9:jo_at'
        >
          View all thoughts
        </Link>
      </div>
    </section>
  )
}
