import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ChatWidget from '@/components/ChatWidget'

// Optimize font loading
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  preload: true
})

// Metadata configuration
export const metadata: Metadata = {
  title: {
    default: 'Julia Vorobiova | Service Design & Strategy',
    template: '%s | Julia Vorobiova'
  },
  description:
    'Service design strategist helping businesses create meaningful digital experiences',
  metadataBase: new URL('https://juliavorobiova.com'),
  openGraph: {
    title: 'Julia Vorobiova | Service Design & Strategy',
    description:
      'Service design strategist helping businesses create meaningful digital experiences',
    url: 'https://juliavorobiova.com',
    siteName: 'Julia Vorobiova',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Julia Vorobiova',
    card: 'summary_large_image'
  },
  verification: {
    // Add your verification tokens here
  }
}

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className='scroll-smooth'
      data-oid='47rlmgs'
    >
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
        data-oid='b8:xm08'
      >
        <Providers data-oid='ooksti9'>
          <Header data-oid='4lv:m2h' />
          <main className='grow' data-oid='7cu4bl1'>
            {children}
          </main>
          <Footer data-oid='3bwdm._' />
          <ChatWidget data-oid='h9m7kwt' />
        </Providers>
      </body>
    </html>
  )
}
