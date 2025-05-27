import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.map(project => ({ slug: project.slug }))

  return slugs
}

export default async function Project({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pb-24 pt-32' data-oid='.r7j3cd'>
      <div className='container max-w-3xl' data-oid='h5a9h-1'>
        <Link
          href='/'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
          data-oid='hugvvir'
        >
          <ArrowLeftIcon className='h-5 w-5' data-oid='0tpi9.6' />
          <span data-oid='6gaa.-7'>Back</span>
        </Link>

        {image && (
          <div
            className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'
            data-oid='0_ti2fx'
          >
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
              data-oid='gqh1uw6'
            />
          </div>
        )}

        <header data-oid='f47.soj'>
          <h1 className='title' data-oid='6.2hcig'>
            {title}
          </h1>
          <p className='mt-3 text-xs text-muted-foreground' data-oid='3q3388c'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert' data-oid='3l51:rm'>
          <MDXContent source={content} data-oid='6471r1t' />
        </main>
      </div>
    </section>
  )
}
