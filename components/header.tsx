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

        <ul
          className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'
          data-oid='04k7s0z'
        >
          <li data-oid='xq397kg'>
            <Link 
              href='/posts' 
              className={cn(
                'transition-colors hover:text-foreground',
                usePathname()?.startsWith('/posts') && 'text-foreground font-medium'
              )}
              data-oid='9hvg-mk'
            >
              Thoughts
            </Link>
          </li>

          <li data-oid='z_as0mf'>
            <Link 
              href='/work-with-me' 
              className={cn(
                'transition-colors hover:text-foreground',
                usePathname()?.startsWith('/work-with-me') && 'text-foreground font-medium'
              )}
              data-oid='e5.h3ws'
            >
              Work With Me
            </Link>
          </li>
        </ul>

        <div data-oid='ifkyn6y'>
          <ThemeToggle data-oid='1b.s46q' />
        </div>
      </nav>
    </header>
  )
}
