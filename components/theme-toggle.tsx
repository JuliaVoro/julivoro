'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      size='sm'
      variant='ghost'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      data-oid='5zwzin2'
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-4 text-orange-300' data-oid='7kjazfm' />
      ) : (
        <MoonIcon className='size-4 text-sky-950' data-oid='8m7_edg' />
      )}

      <span className='sr-only' data-oid='46e8-4.'>
        Toggle theme
      </span>
    </Button>
  )
}
