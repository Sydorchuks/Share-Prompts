"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import { SessionProvider } from 'next-auth/react' 

export interface providerPrompts{
  children:any;
  session:any;
}

const Provider:FC<providerPrompts> = ({children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider