import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className="col-span-7 place-self-center text-center sm:text-left ">
          <h1 className=' mb-4 text-5xl sm: texlg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-amber-400'>CodebytheSoul</span>
          </h1>
          <p className='text-white text-lg mb-6 lg:text-xl'>Self-taught full-stack web developer, focusing on the visual elements, structural design, system implementation, data management, and other logical aspects of a website.
          </p>
          <div>
            <button className='px-1 py-1 mb-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-pink-500 to-amber-400'><span className='block bg-transparent hover:bg-slate-800 rounded-full px-5 py-2 text-white'>Contact Me</span></button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-violet-700 via-pink-500 to-amber-400'><span className='block bg-transparent hover:bg-slate-800 rounded-full px-5 py-2 text-white'>My CV</span></button>
          </div>
        </div>


        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image src='/images/pic5.jpg' 
            alt='image'
            className='opacity-70 rounded-lg absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' 
            width={300} 
            height={500}
          />
          </div>
        </div>
      </div>
    </section>

  )
}

export default Main