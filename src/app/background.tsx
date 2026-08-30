'use client'
import dynamic from 'next/dynamic'

// three.js is only needed for the background - keep it out of the initial bundle.
const DotsBackground = dynamic(() => import('./dotScene'), { ssr: false })

export default function Background() {
  return <DotsBackground />
}
