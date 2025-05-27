import Link from 'next/link'

import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className='flex flex-col gap-8' data-oid='n4x4wrn'>
      {posts.map(post => (
        <li key={post.slug} data-oid='8v3-tut'>
          <Link
            href={`/posts/${post.slug}`}
            className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row'
            data-oid='wvjqm_n'
          >
            <div className='max-w-lg' data-oid='ag30tlx'>
              <p className='text-lg font-semibold' data-oid='ddgz2dx'>
                {post.title}
              </p>
              <p
                className='mt-1 line-clamp-2 text-sm font-light text-muted-foreground'
                data-oid='to:v9_9'
              >
                {post.summary}
              </p>
            </div>

            {post.publishedAt && (
              <p className='mt-1 text-sm font-light' data-oid='.xolg92'>
                {formatDate(post.publishedAt)}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
