import React from 'react'
import Img from 'next/image'
import img1 from '../../../../public/1.jpg'
import Hero from '@/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home page',
}

export default function HomePage() {
    return (
        <Hero img={img1} content='Home page' />
    )
}
