'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export default function Header() {

    const pathname = usePathname()

    return (
        <div className='flex justify-between items-center p-10 absolute top-0 left-0 w-full z-10 text-white'>
            <Link className={pathname === '/home'? 'text-purple-500' : ''} href='/home'><span className='text-3xl font-bold'>Home</span></Link>
            <div className='flex gap-4 text-xl'>
                <Link className={pathname === '/performance'? 'text-purple-500' : ''} href='/performance'><span>Performance</span></Link>
                <Link className={pathname === '/reliability'? 'text-purple-500' : ''} href='/reliability'><span>Reliability</span></Link>
                <Link className={pathname === '/scale'? 'text-purple-500' : ''} href='/scale'><span>Scale</span></Link>
            </div>
        </div>
    )
}
