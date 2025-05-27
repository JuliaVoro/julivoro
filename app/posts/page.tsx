import { getPosts } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <section className='pb-24 pt-40' data-oid='w_s.p44'>
      <div className='container max-w-3xl' data-oid=':ly3cbx'>
        <h1 className='title mb-12' data-oid='dekj:hm'>
          Thoughts
        </h1>

        <PostsWithSearch posts={posts} data-oid='q.kfrb:' />
      </div>
    </section>
  )
}
