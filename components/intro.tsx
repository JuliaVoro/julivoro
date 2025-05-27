import Image from 'next/image'
import { LightningBoltIcon } from '@radix-ui/react-icons'
// import authorImage from '@/public/images/authors/hamed.png'

export default function Intro() {
  return (
    <section
      className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'
      data-oid='652tlh3'
    >
      <div className='mt-2 flex-1 md:mt-0' data-oid='5gkx3d1'>
        <div
          className='flex items-center gap-2 text-[13px] text-muted-foreground mb-1'
          data-oid='l1lje9i'
        >
          <LightningBoltIcon className='h-3.5 w-3.5' data-oid='fxz:cdj' />
          <span data-oid='-ers7gm'>
            Julia Vorobiova · Product Service Designer
          </span>
        </div>
        <h1 className='title no-underline mt-0' data-oid=':qou-s:'>
          Helping Ideas Survive Reality
        </h1>
        <p className='mt-3 font-light text-muted-foreground' data-oid='h2jez7f'>
          I design strategic, testable services and digital products—turning
          early-stage ideas into real solutions that are grounded in user needs,
          built to scale, and aligned with business goals. With a background in
          engineering and design, I work where clarity meets complexity.
        </p>
      </div>
      <div className='relative' data-oid='n0nwr2o'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src='/images/julia.png'
          alt='Julia Vorobiova'
          width={175}
          height={175}
          priority
          data-oid='u18jug.'
        />
      </div>
    </section>
  )
}
