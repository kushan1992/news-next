import type { Metadata } from 'next'
import Image from 'next/image'
import { Noto_Serif, Roboto } from 'next/font/google'
import './globals.css'

const notoSerif = Noto_Serif({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-noto-serif',
})

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Finance news App',
  description: 'Latest news from the world of finance',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerif.variable} ${roboto.variable} antialiased`}>
        <div className="bg-black text-white font-noto-serif-400">
          <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
              <div className="flex justify-center mb-8">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={200}
                  height={40}
                  className="h-12 w-auto"
                />
              </div>

              <div className="mb-6">
                <span className="text-5xl lg:text-7xl font-normal leading-none">
                  LATEST NEWS
                  <br />
                  FROM THE WORLD
                  <br />
                  OF FINANCE
                </span>
              </div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
