import Image from 'next/image'
import { LightningBoltIcon } from '@radix-ui/react-icons'
// import authorImage from '@/public/images/authors/hamed.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <div className='flex items-center gap-2 text-[13px] text-muted-foreground mb-1'>
          <LightningBoltIcon className='h-3.5 w-3.5' />
          <span>Julia Vorobiova · Product Service Designer</span>
        </div>
        <h1 className='title no-underline mt-0'>Helping Ideas Survive Reality</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I design strategic, testable services and digital products—turning early-stage ideas into real solutions that are grounded in user needs, built to scale, and aligned with business goals. With a background in engineering and design, I work where clarity meets complexity.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src='/images/julia.png'
          alt='Julia Vorobiova'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
