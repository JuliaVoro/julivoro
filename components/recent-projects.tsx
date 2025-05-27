import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'

export default async function RecentProjects() {
  const projects = await getProjects(3)

  return (
    <section className='pb-24' data-oid='vmqmmc5'>
      <div data-oid='v8qa4__'>
        <h2 className='title mb-12' data-oid='78auq_s'>
          Talks
        </h2>
        <Projects projects={projects} data-oid='oblwaas' />

        {projects.length > 2 && (
          <Link
            href='/projects'
            className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
            data-oid='bk5:veo'
          >
            <span data-oid='68.dyv1'>All projects</span>
          </Link>
        )}
      </div>
    </section>
  )
}
