import React from 'react'
import Hero from '@/components/Hero'
import img1 from '../../../../public/2.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Performance page',
}

export default function Performance() {
  return (
    <Hero img={img1} content='Performance page'/>
  )
}
