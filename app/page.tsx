import Intro from '@/components/intro'
import NewsletterForm from '@/components/newsletter-form'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import Collaborate from '@/components/collaborate'

export default function Home() {
  return (
    <section className='pb-24 pt-40' data-oid='6ldbsw:'>
      <div className='container max-w-3xl' data-oid='1z9of6o'>
        <Intro data-oid='3tnfq13' />

        <RecentPosts data-oid='w0948u7' />
        <RecentProjects data-oid='5i6l0n4' />

        <NewsletterForm data-oid='7ll6666' />
      </div>
    </section>
  )
}
