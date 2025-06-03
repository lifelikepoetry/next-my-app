import React from 'react'
import Img, { StaticImageData } from 'next/image'
import { Comforter } from 'next/font/google'

const comforter = Comforter({
  weight: '400',
  subsets: ['latin']
})

export default function Hero(props: {img: StaticImageData, content: string}) {
  return (
    <div className={`w-full h-full ${comforter.className}`}>
        <div className='w-full h-full bg-slate-950'>
            <Img src={props.img} alt='' className='' fill style={{objectFit: 'cover'}}/>
            <div className='w-full h-full bg-gradient-to-r from-slate-900 top-0 left-0 absolute'></div>
        </div>
        <div className='text-white text-8xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{props.content}</div>
    </div>
  )
}
