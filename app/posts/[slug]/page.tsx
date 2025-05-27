import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { getPosts, getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'
import NewsletterForm from '@/components/newsletter-form'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pb-24 pt-32' data-oid='w9y9glx'>
      <div className='container max-w-3xl' data-oid='-z9clya'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
          data-oid='lwnntmu'
        >
          <ArrowLeftIcon className='h-5 w-5' data-oid='7f38jq9' />
          <span data-oid='n68q4rt'>Back to posts</span>
        </Link>

        {image && (
          <div
            className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'
            data-oid='l48ydy4'
          >
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
              data-oid='x5u-vjk'
            />
          </div>
        )}

        <header data-oid='.pd4fl5'>
          <h1 className='title' data-oid='n_ygl5q'>
            {title}
          </h1>
          <p className='mt-3 text-xs text-muted-foreground' data-oid='2l.rf4i'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert' data-oid='9z4fs1j'>
          <MDXContent source={content} data-oid='ctld94u' />
        </main>

        <footer className='mt-16' data-oid='lrmci70'>
          <NewsletterForm data-oid='er9w5r5' />
        </footer>
      </div>
    </section>
  )
}
