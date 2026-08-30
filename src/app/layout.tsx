import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from 'next/link'
config.autoAddCss = false

import Background from './background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://clodolt.dev'),
  title: 'Tim Chen · Clodolt.dev',
  description:
    'Tim Chen (Clodolt) - full-stack developer and DevOps engineer at MaibornWolff. Java, Kotlin, TypeScript, React, Angular, Kubernetes and AI.',
  openGraph: {
    title: 'Tim Chen · Clodolt.dev',
    description: 'Full-stack developer and DevOps engineer. Portfolio, experience and personal projects.',
    url: 'https://clodolt.dev',
    siteName: 'Clodolt.dev',
    images: [{ url: '/portrait.jpeg', width: 512, height: 512, alt: 'Tim Chen' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary', creator: '@timdaltonchen' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Background />
      <nav className="absolute top-0 left-0 p-4 text-white z-50" aria-label="Social links">
      <Link href="https://github.com/Clodolt" target='_blank' rel="noopener noreferrer" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} color="white" size="2x" />
      </Link>
      <Link href="https://www.linkedin.com/in/tim-chen-1912b31a4/" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn" className="m-4">
        <FontAwesomeIcon icon={faLinkedin} color="white" size="2x" />
      </Link>
      </nav>
        {children}
        </body>
    </html>
  )
}
