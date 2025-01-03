import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://wutangnamegenerator.pro'),
  title: 'Free Wu Tang Name Generator | Create Your Unique Wu-Tang Clan Name',
  description: '🔥 Free Wu Tang Name Generator: Create your unique Wu-Tang Clan style name instantly! Inspired by RZA, GZA, Method Man & legendary members. Generate authentic hip-hop names now!',
  keywords: ['wu tang name generator', 'wu-tang clan names', 'rap name generator', 'hip hop name creator', 'wu tang clan', 'wu-tang name maker', 'rap alias generator', 'free name generator'],
  authors: [{ name: 'Wu Tang Name Generator' }],
  creator: 'Wu Tang Name Generator',
  publisher: 'Wu Tang Name Generator',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Wu Tang Name Generator',
    title: 'Free Wu Tang Name Generator - Create Authentic Wu-Tang Style Names',
    description: '✨ Generate unique Wu-Tang Clan style names instantly! Our free wu tang name generator creates authentic hip-hop names inspired by legendary Wu-Tang members. Perfect for fans, rappers, or anyone looking for a cool alias!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Wu Tang Name Generator - Create Your Wu-Tang Clan Style Name',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Wu Tang Name Generator - Get Your Wu-Tang Style Name',
    description: '✨ Create your unique Wu-Tang Clan style name with our free wu tang name generator! Inspired by legendary members like RZA, GZA & Method Man. Generate now!',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: '7mDEZmv48BopWb7DXy2L56EF5u1ZrXkojc5DcmyiNec',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
