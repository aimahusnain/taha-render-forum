import Navbar from '@/src/components/Navbar'
import { cn } from '@/src/lib/utils'
import { Inter } from 'next/font/google'
import Providers from '@/src/components/Providers'
import { Toaster } from '@/src/components/ui/Toaster'

import '@/src/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Render Forum',
  description: 'A Reddit clone built with Next.js and TypeScript and Tailwind css.',
}

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={cn(
        'bg-white text-slate-900 antialiased light',
        inter.className
      )}>
      <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {authModal}
{/* Add all the things in the Navbar */}
          <div className='max-w-7xl h-full'>
            {children}
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
