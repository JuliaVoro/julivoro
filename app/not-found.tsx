import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export default function NotFound() {
  return (
    <section className='pb-24 pt-40' data-oid='irfn8dq'>
      <div
        className='min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'
        data-oid='84:toc9'
      >
        <div className='mx-auto max-w-max' data-oid='8ecqzmq'>
          <main className='sm:flex' data-oid='6632w5d'>
            <p
              className='text-4xl font-bold tracking-tight text-muted-foreground sm:text-5xl'
              data-oid='05tm2uc'
            >
              404
            </p>
            <div className='sm:ml-6' data-oid='wm7pn8g'>
              <div
                className='sm:border-l sm:border-gray-200 sm:pl-6'
                data-oid='ydt.dcy'
              >
                <h1
                  className='text-3xl font-bold tracking-tight sm:text-5xl'
                  data-oid='zoby_18'
                >
                  Page not found
                </h1>
                <p
                  className='mt-1 text-base text-muted-foreground'
                  data-oid='g-:p_lh'
                >
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div
                className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'
                data-oid='hxd-7o2'
              >
                <Link
                  href='/'
                  className='inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground'
                  data-oid='.8nhq:4'
                >
                  <ArrowLeftIcon className='h-5 w-5' data-oid='z34hc0z' />
                  <span data-oid='m8s3vd1'>Go back home</span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
