"use client";
import { BuiltInProviderType } from 'next-auth/providers/index';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { signOut, getProviders, signIn, LiteralUnion, ClientSafeProvider, useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import React, { MouseEventHandler, useEffect, useState } from 'react'



const Nav = () => {
    const {data:session} = useSession();


  const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }
    fetchProviders();
  },[])


  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      
      <Link href="/" className='flex gap-2 flex-center'>
        <Image src="/assets/images/logo.svg" alt='logo' width={30} height={30} className='object-contain'/>
        <p className='logo_text'> Share Prompts</p>
      </Link>

      {/** Desktop Navigation */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt" className='black_btn'>
              Create Post
            </Link>

            <button type='button' onClick={signOut as MouseEventHandler<HTMLButtonElement>} className='outline_btn'>
              Sign Out
            </button>

            <Link href="/profile">

            <Image src="/assets/images/logo.svg" width={37} 
            height={37} className='rounded-full' alt='profile image'/>

            </Link>
          </div>
        ) : (<>
        {providers && Object.values(providers).map((provider) =>(
          <button type='button' key={provider.name} onClick={()=>signIn(provider.id)} className='black_btn'>
            Sign In
          </button>
        ))}
        </>) }
      </div>

      {/** Mobile Navigation */}

      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image src="/assets/images/logo.svg" width={37} 
            height={37} className='rounded-full' alt='profile image' onClick={()=> setToggleDropdown((prev)=>!prev)}/>

            {toggleDropdown && (
              <div className='dropdown'>
                <Link href="/profile" className='dropdown_link' onClick={() => setToggleDropdown(false)}>
                  My profile
                </Link>

                <Link href="/create-prompt" className='dropdown_link' onClick={() => setToggleDropdown(false)}>
                  Create Prompt
                </Link>

                <button type='button' onClick={()=>{
                  setToggleDropdown(false);
                  signOut();
                }} className='mt-5 w-full black_btn'>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
          {providers && Object.values(providers).map((provider) =>(
          <button type='button' key={provider.name} onClick={()=>signIn(provider.id)} className='black_btn'>
            Sign In
          </button>
        ))}
          </>
        )}
      </div>


    </nav>
  )
}

export default Nav