import Feed from '@components/Feed'
import React from 'react'


const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover and share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>AI powered prompts</span>
      </h1>
      <p className='desc text-center'>
        Share Prompts - is a service type website, 
        created for storing AI and other prompts
      </p>

      <Feed />
    </section>
  )
}

export default Home