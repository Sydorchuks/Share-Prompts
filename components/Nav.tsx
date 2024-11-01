"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image src="/assets/images/logo.svg" alt='logo' width={30} height={30} className='object-contain'/>
        <p className='logo_text'> Share Prompts</p>
      </Link>

      {/** Mobile Navigation */}
    </nav>
  )
}

export default Nav