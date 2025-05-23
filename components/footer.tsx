'use client'

import { JSX, SVGProps } from 'react'

const navigation = [
  // {
  //   name: 'Facebook',
  //   href: '#',
  //   icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //     <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
  //       <path
  //         fillRule='evenodd'
  //         d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
  //         clipRule='evenodd'
  //       />
  //     </svg>
  //   )
  // },
  // {
  //   name: 'Instagram',
  //   href: '#',
  //   icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //     <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
  //       <path
  //         fillRule='evenodd'
  //         d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
  //         clipRule='evenodd'
  //       />
  //     </svg>
  //   )
  // },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/iuliiavorobiova/',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 448 512' {...props}>
        <path
          fill='currentColor'
          d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
        ></path>
      </svg>
    )
  }
]

import { useState } from 'react';

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = 'iuliia.vorobiova@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      setCopied(false);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center rounded-full px-4 py-2 text-sm font-medium shadow-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-primary
        ${copied
          ? 'bg-green-100 text-green-900 border-green-200 dark:bg-green-800 dark:text-white dark:border-green-700'
          : 'bg-zinc-50 text-primary border-zinc-200 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:border-zinc-700 hover:dark:bg-zinc-800'}
      `}
      type='button'
      aria-label='Copy email'
    >
      <span className="relative mr-2 inline-block h-5 w-5 align-middle">
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-5 w-5'
          aria-hidden='true'
        >
          <rect x='6' y='9' width='13' height='11' rx='2' stroke='currentColor' strokeWidth='1.5' />
          <rect x='3' y='4' width='13' height='11' rx='2' stroke='currentColor' strokeWidth='1.5' />
        </svg>
        {copied && (
          <span className="absolute -bottom-1 -left-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 border-2 border-white dark:border-zinc-900">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6.5L5 8.5L9 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </span>
      {copied ? 'Copied!' : 'Copy email'}
    </button>
  );
}

export default function Footer() {
  return (
    <footer className='py-8'>
      <div className='container max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center gap-4 md:order-2 items-center'>
            <CopyEmailButton />
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer noopener'
                className='text-muted-foreground hover:text-foreground flex items-center justify-center'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon aria-hidden='true' className='h-5 w-5' />
              </a>
            ))}
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-muted-foreground'>&copy; {new Date().getFullYear()} Julia Vorobiova. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
