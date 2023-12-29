import type { Metadata } from 'next'
import React from 'react'

import { Inter } from 'next/font/google'
import { cn } from '@/utils/classes'
import './globals.css'
import { AppProviders } from '@/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Shows current weather conditions for desired location.'
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <body
      className={cn(inter.className, 'min-h-[100vh] bg-gradient-radial from-white to-cyan-200 py-3')}>
      <AppProviders>
        {children}
      </AppProviders>
    </body>
    </html>
  )
}
