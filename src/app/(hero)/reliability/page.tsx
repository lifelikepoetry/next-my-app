import React from 'react'
import Hero from '@/components/Hero'
import img1 from '../../../../public/3.jpg'
import { Metadata } from 'next'

// 静态元数据
export const metadata: Metadata = {
  title: 'Reliability page',
}

export default function Reliability() {
  return (
    <Hero img={img1} content='Reliability page'/>
  )
}
