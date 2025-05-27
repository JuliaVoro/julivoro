import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='pb-24 pt-40' data-oid='vzu:sa2'>
      <div className='container max-w-3xl' data-oid='u_dd.yz'>
        <h1 className='title mb-12' data-oid='k1i_:_i'>
          Talks
        </h1>

        <Projects projects={projects} data-oid='dbu.jrl' />
      </div>
    </section>
  )
}
