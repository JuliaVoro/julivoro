'use client'

import { JSX, SVGProps } from 'react'
import Link from 'next/link'

const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/iuliiavorobiova/',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        fill='currentColor'
        viewBox='0 0 448 512'
        {...props}
        data-oid='7lkl31_'
      >
        <path
          fill='currentColor'
          d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
          data-oid='l0ln1xb'
        ></path>
      </svg>
    )
  },
  {
    name: 'Privacy Policy',
    href: '/privacy',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    )
  }
]

import { useState } from 'react'

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)
  const email = 'contact@juliavorobiova.com'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      setCopied(false)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center rounded-full px-4 py-2 text-sm font-medium shadow-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-primary
        ${
          copied
            ? 'bg-green-100 text-green-900 border-green-200 dark:bg-green-800 dark:text-white dark:border-green-700'
            : 'bg-zinc-50 text-primary border-zinc-200 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:border-zinc-700 hover:dark:bg-zinc-800'
        }
      `}
      type='button'
      aria-label='Copy email'
      data-oid='w-_3_cc'
    >
      <span
        className='relative mr-2 inline-block h-5 w-5 align-middle'
        data-oid='.:wr9ow'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-5 w-5'
          aria-hidden='true'
          data-oid=':89yexe'
        >
          <rect
            x='6'
            y='9'
            width='13'
            height='11'
            rx='2'
            stroke='currentColor'
            strokeWidth='1.5'
            data-oid='w3qp_rd'
          />
          <rect
            x='3'
            y='4'
            width='13'
            height='11'
            rx='2'
            stroke='currentColor'
            strokeWidth='1.5'
            data-oid='t.i32d4'
          />
        </svg>
        {copied && (
          <span
            className='absolute -bottom-1 -left-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 border-2 border-white dark:border-zinc-900'
            data-oid='mdf3325'
          >
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-oid='.osc2-y'
            >
              <path
                d='M3 6.5L5 8.5L9 4.5'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                data-oid='_wzf.7j'
              />
            </svg>
          </span>
        )}
      </span>
      {copied ? 'Copied!' : 'Copy email'}
    </button>
  )
}

export default function Footer() {
  return (
    <footer className='py-8' data-oid='9cilw2w'>
      <div className='container max-w-3xl' data-oid='u1m9wx:'>
        <div
          className='md:flex md:items-center md:justify-between'
          data-oid='1-1ucw3'
        >
          <div
            className='flex justify-center gap-4 md:order-2 items-center'
            data-oid='o8o8kzd'
          >
            <CopyEmailButton data-oid='6ac53x1' />
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer noopener'
                className='text-muted-foreground hover:text-foreground flex items-center justify-center'
                data-oid='-4j3vn-'
              >
                <span className='sr-only' data-oid='cu.mv.f'>
                  {item.name}
                </span>
                <item.icon
                  aria-hidden='true'
                  className='h-5 w-5'
                  data-oid='06xf67e'
                />
              </a>
            ))}
          </div>
          <div className='mt-8 md:order-1 md:mt-0' data-oid='z9nrxbm'>
            <p
              className='text-center text-xs leading-5 text-muted-foreground'
              data-oid='ep.od3r'
            >
              &copy; {new Date().getFullYear()} Julia Vorobiova. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
