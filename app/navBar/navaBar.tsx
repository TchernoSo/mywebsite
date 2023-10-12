import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className="col-span-7 place-self-center">
          <h1 className=' mb-4 text-5xl lg:text-6xl font-extrabold'>CodebytheSoul
          </h1>
          <p className='text-white text-lg mb-6 lg:text-xl'>This is my text sodnskfn akbdnjksfb
          </p>
          <div>
            <button className='px-6 py-3 rounded-full mr-4 bg-violet-500 hover:bg-indigo-400'>Hire Me</button>
            <button className='px-6 py-3 rounded-full mr-4 bg-violet-500 hover:bg-indigo-400'>Download my CV</button>
          </div>
        </div>


        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image src='/images/pic5.jpg' 
            alt='image'
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' 
            width={300} 
            height={500}
          />
          </div>
        </div>
      </div>
    </section>

  )
}

export default Navbar