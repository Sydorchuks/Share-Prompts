import '@/styles/globals.css'
import Nav from '@components/Nav';

import React, { FC } from 'react'

export const metadata = {
    title:"Share Prompts",
    description: "Discover, share and create prompts !"
}

export interface RootLayoutPrompts{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children:any;
}

const RootLayout:FC<RootLayoutPrompts> = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
        </body>
    </html>
  )
}

export default RootLayout