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
  const { title, image, author, publishedAt, cta } = metadata

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
          {cta && (
            <div className='mt-4 mb-6'>
              <a
                href={cta.url}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              >
                {cta.label}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='ml-2 h-4 w-4'
                >
                  <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                  <polyline points='15 3 21 3 21 9'></polyline>
                  <line x1='10' y1='14' x2='21' y2='3'></line>
                </svg>
              </a>
            </div>
          )}
        </header>

        <main className='prose mt-16 dark:prose-invert' data-oid='3l51:rm'>
          <MDXContent source={content} data-oid='6471r1t' />
        </main>
      </div>
    </section>
  )
}
