import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Head from 'next/head';

import { cn } from '@/lib/utils'
import config from '@/../config';

import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ChatWidget from '@/components/ChatWidget'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  display: 'swap',
  preload: false
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  preload: false
})

export const metadata: Metadata = {
  title: 'Julia Vorobiova - Product & Service Designer',
  description: 'Product & Service Designer with a focus on creating meaningful digital experiences',
  other: {
    'font-display': 'swap'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <base href={`${config.baseUrl}/`} />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
      </head>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
          <ChatWidget />
        </Providers>
      </body>
    </html>
  )
}
