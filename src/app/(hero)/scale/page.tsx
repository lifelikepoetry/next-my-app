import React from 'react'
import Hero from '@/components/Hero'
import img1 from '../../../../public/4.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale page',
  icons: '/4.jpg',
}

export default function Scale() {
  return (
    <Hero img={img1} content='Scale page'/>
  )
}
