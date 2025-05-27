import Image from 'next/image'
import Link from 'next/link'

import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2' data-oid='2wa0rnr'>
      {projects.map(project => (
        <li key={project.slug} className='group relative' data-oid='kr5vhke'>
          <Link href={`/projects/${project.slug}`} data-oid='-hl3rds'>
            {project.image && (
              <div
                className='h-72 w-full overflow-hidden bg-muted sm:h-60'
                data-oid='dpjji9l'
              >
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  fill
                  className='rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-105'
                  data-oid='1fk:_:_'
                />
              </div>
            )}

            <div
              className='absolute inset-[1px] rounded-lg bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
              data-oid='j3ce0pd'
            />

            <div
              className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'
              data-oid='.732kfo'
            >
              <h2
                className='title line-clamp-1 text-xl no-underline text-white'
                data-oid='_m3ixb_'
              >
                {project.title}
              </h2>
              <p className='line-clamp-1 text-sm text-white' data-oid='9jc-lkj'>
                {project.summary}
              </p>
              <p className='text-xs font-light text-white' data-oid='q601mhd'>
                {formatDate(project.publishedAt ?? '')}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
