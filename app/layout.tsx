import React from "react"
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Zero1 | Built For The Next Digital Frontier',
  description: 'From Qatar\'s industrial roots to the future of AI-driven enterprise. Scale your operations with an integrated ecosystem of distribution, ERP expertise, and custom software engineering.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
