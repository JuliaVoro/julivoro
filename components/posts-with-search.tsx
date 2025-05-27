'use client'

import { useState } from 'react'
import { PostMetadata } from '@/lib/posts'

import Posts from '@/components/posts'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
  const [query, setQuery] = useState('')
  const filtered = posts.filter(post =>
    post.title?.toLowerCase().includes(query.toLowerCase())
  )

  const isFiltered = query.length > 0
  function resetFilter() {
    setQuery('')
  }

  return (
    <div data-oid='rftqpbg'>
      <div className='mb-12 flex items-center gap-3' data-oid='awvbvoe'>
        <Input
          type='text'
          placeholder='Search posts...'
          className='h-9 w-full sm:w-1/2'
          value={query}
          onChange={e => setQuery(e.target.value)}
          data-oid='p0ccliq'
        />

        {isFiltered && (
          <Button
            size='sm'
            variant='secondary'
            onClick={resetFilter}
            className='h-8 px-2 lg:px-3'
            data-oid='zu17iy.'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' data-oid='t2tnc8a' />
          </Button>
        )}
      </div>

      <Posts posts={filtered} data-oid='e6mhqe4' />
    </div>
  )
}
