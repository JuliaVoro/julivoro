'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
      data-oid='sobj_27'
    >
      {children}
      <ToasterProvider data-oid=':2-5:pw' />
    </ThemeProvider>
  )
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme()

  return (
    <Toaster
      position='top-right'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      data-oid='zv_jxp3'
    />
  )
}
