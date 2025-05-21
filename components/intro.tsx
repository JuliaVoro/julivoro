import Image from 'next/image'
// import authorImage from '@/public/images/authors/hamed.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I am Julia Vorobiova.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I design services and digital products that are thoughtful, testable, and actually make sense — combining design, strategy, and engineering logic.
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
