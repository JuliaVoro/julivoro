import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
// Temporarily hiding chat widget
// import ChatWidget from '@/components/ChatWidget'

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
    default: 'Julia Vorobiova | Service Designer',
    template: '%s | Julia Vorobiova'
  },
  description:
    'Turning early-stage ideas into real solutions that are grounded in user needs, built to scale, and aligned with business goals.',
  metadataBase: new URL('https://juliavorobiova.com'),
  
  // Icons configuration
  icons: {
    icon: [
      // SVG version (modern browsers)
      { url: '/images/favicon.svg', type: 'image/svg+xml' },
      // Standard favicon
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      // PNG versions for different resolutions
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      // Apple touch icons
      { url: '/images/apple-touch-icon.png' },
      { url: '/images/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/images/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      // Safari pinned tab
      {
        rel: 'mask-icon',
        url: '/images/safari-pinned-tab.svg',
        color: '#000000',
      },
    ],
  },
  
  // Web app manifest
  manifest: '/site.webmanifest',
  
  // Additional metadata
  applicationName: 'Julia Vorobiova',
  authors: [{ name: 'Julia Vorobiova', url: 'https://juliavorobiova.com' }],
  creator: 'Julia Vorobiova',
  publisher: 'Julia Vorobiova',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileImage': '/images/mstile-144x144.png',
    'theme-color': '#ffffff',
  },
  
  // Open Graph configuration
  openGraph: {
    title: 'Julia Vorobiova | Service Designer',
    description:
      'Turning early-stage ideas into real solutions that are grounded in user needs, built to scale, and aligned with business goals.',
    url: 'https://juliavorobiova.com',
    siteName: 'Julia Vorobiova',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/preview.png',
        width: 1200,
        height: 630,
        alt: 'Julia Vorobiova - Service Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julia Vorobiova | Service Designer',
    description: 'Turning early-stage ideas into real solutions that are grounded in user needs, built to scale, and aligned with business goals.',
    images: ['/images/preview.png'],
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
        suppressHydrationWarning
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
          {/* Temporarily hiding chat widget
          <ChatWidget data-oid='h9m7kwt' />
          */}
        </Providers>
      </body>
    </html>
  )
}
