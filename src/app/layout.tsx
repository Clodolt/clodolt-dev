import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DotsBackground from './dotScene'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from 'next/link'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clodolt.dev!',
  description: 'Clodolt\'s Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <DotsBackground />
      <nav className="absolute top-0 left-0 p-4 bg-red text-white z-50">
      <Link href="https://github.com/Clodolt" target='_blank' >
        <FontAwesomeIcon icon={faGithub} color="white" size="2x" />
      </Link>
      <Link href="https://www.linkedin.com/in/tim-chen-1912b31a4/" target='_blank' className="m-4">
        <FontAwesomeIcon icon={faLinkedin} color="white" size="2x" />
      </Link>
      </nav>
        {children}
        </body>
    </html>
  )
}
