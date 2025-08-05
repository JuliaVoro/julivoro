'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  return (
    <header
      className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'
      data-oid='al1e7nf'
    >
      <nav
        className='container flex max-w-3xl items-center justify-between'
        data-oid='zb_2-5_'
      >
        <div data-oid='9nj5_pp'>
          <Link
            href='/'
            className='font-serif text-2xl font-bold'
            data-oid='iqp1ecp'
          >
            JV
          </Link>
        </div>

        <div className='flex items-center gap-6 justify-end'>
          <div data-oid='portfolio-link'>
            <a
              href='https://www.figma.com/slides/HvORSn5ujeOScardCpDglB/Portfolio?node-id=1-96&t=xYpXIH4zaAdhbRyV-1'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
            >
              Portfolio
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-3.5 w-3.5'
              >
                <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                <polyline points='15 3 21 3 21 9'></polyline>
                <line x1='10' y1='14' x2='21' y2='3'></line>
              </svg>
            </a>
          </div>
          
          <div data-oid='ifkyn6y'>
            <ThemeToggle data-oid='1b.s46q' />
          </div>
        </div>
      </nav>
    </header>
  )
}
