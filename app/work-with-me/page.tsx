import Link from 'next/link'
import {
  RocketIcon,
  MagicWandIcon,
  ClipboardIcon,
  PersonIcon
} from '@radix-ui/react-icons'

const offers = [
  {
    title: 'Service Design for Small Businesses',
    description:
      'Practical ways for cafes, salons, and shops to use service design and digital tools to improve customer experience and operations. Includes workflow audits, digital tool recommendations, and customer journey mapping.',
    href: '/projects/service-design-small-business',
    icon: (
      <RocketIcon
        className='h-7 w-7 text-primary'
        aria-hidden='true'
        data-oid='cqp5f5:'
      />
    ),
    cta: 'Learn more'
  },
  {
    title: 'Integrating AI into the UX & UI Process',
    description:
      'How startups can leverage AI to accelerate design, improve user experience, and streamline UI/UX workflows. Get hands-on with the latest AI tools and best practices.',
    href: '/projects/next-mdx-portfolio',
    icon: (
      <MagicWandIcon
        className='h-7 w-7 text-primary'
        aria-hidden='true'
        data-oid='99fsrrm'
      />
    ),
    cta: 'Learn more'
  },
  {
    title: 'Business Idea Validation Workshop',
    description:
      'Test and refine your business concept with expert guidance, user research, and actionable feedback. Includes rapid prototyping and market fit analysis.',
    href: '#',
    icon: (
      <ClipboardIcon
        className='h-7 w-7 text-primary'
        aria-hidden='true'
        data-oid='ft7asd2'
      />
    ),
    cta: 'Book now'
  },
  {
    title: 'Individual Mentoring Session',
    description:
      'Get personalized advice and support on service design, product strategy, or career growth. Tailored to your unique needs and goals.',
    href: '#',
    icon: (
      <PersonIcon
        className='h-7 w-7 text-primary'
        aria-hidden='true'
        data-oid='0vzkc_:'
      />
    ),
    cta: 'Book now'
  }
]

export default function WorkWithMe() {
  return (
    <section className='pb-24 pt-40' data-oid='4qv7t.1'>
      <div className='container max-w-3xl' data-oid='impephb'>
        <h1 className='title mb-12' data-oid='zk07z4b'>
          Work With Me
        </h1>
        <p className='mb-4 text-lg text-muted-foreground' data-oid='jozr1ps'>
          Practical, creative, and hands-on support for your business, team, or
          startup.
        </p>
        <p className='mb-10 text-base text-muted-foreground' data-oid='1rimb52'>
          Explore ways we can collaborate, based on my expertise in service
          design, AI, and business innovation. Choose an offer that fits your
          needs or{' '}
          <Link href='/contact' className='underline' data-oid='2k8l7va'>
            contact me
          </Link>{' '}
          for something custom.
        </p>
        <ul className='grid gap-8 sm:grid-cols-2' data-oid='2agb-92'>
          {offers.map(offer => (
            <li
              key={offer.title}
              className='group flex flex-col h-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 p-6 shadow-sm hover:bg-white hover:dark:bg-zinc-900 hover:shadow-lg transition-all'
              data-oid='0g5w-pc'
            >
              <div className='flex items-center gap-3 mb-4' data-oid='bt7yc39'>
                {offer.icon}
                <h2
                  className='font-serif text-lg font-bold group-hover:underline transition-all mb-0'
                  data-oid='bz7c0:m'
                >
                  {offer.title}
                </h2>
              </div>
              <p
                className='mb-6 text-sm text-muted-foreground whitespace-pre-line flex-1'
                data-oid='x.21de9'
              >
                {offer.description}
              </p>
              <Link
                href={offer.href}
                className='inline-block mt-auto rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary'
                aria-label={offer.cta + ' about ' + offer.title}
                data-oid='7scms8y'
              >
                {offer.cta}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
