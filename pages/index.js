import Link from 'next/link'
import React from 'react'

function index() {
  const buttons = [
    {
      title: 'Characters',
      link: '/characters'
    },
    {
      title: 'Episodes',
      link: '/episodes'
    },
    {
      title: 'Locations',
      link: '/locations'
    }
  ]
  return (
    <main className='font-inter pt-20'>
      <h1 className='text-4xl text-gray-700 text-center font-extrabold lg:text-8xl'>Rick and Morty.</h1>
      <div className='flex justify-evenly items-center pt-60 text-xs lg:text-sm'>
        {buttons.map((button, index) => (
          <Link href={button.link} key={index}>
              <div className='text-black border px-5 py-1 rounded-md cursor-pointer'>{button.title}</div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default index