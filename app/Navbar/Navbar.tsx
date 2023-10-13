import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'

const navLinks = [{
    title:"Projects",
    path:"#project"
},
{title:"About Me",
path: "#aboutme"},
{title: "Contact me",
path:"#contactme"
}]

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-slate-200 bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
            <Link href={"/"} className=' text 2xl md:text-5xl text-white font-semibold'>
                LOGO
            </Link>
            <div className="menu hidden md:block md:w-auto" id='navbar'>
                <ul className='flex p-4md:p-0 md:flex-row md:space-x-8mt-0'>
                    {navLinks.map((link, index)=>(
                        <li key={index}>
                            <NavLinks href={link.path} title={link.title}/>

                        </li>
                    ))}
                </ul> 
            </div>
        </div>
    </nav>
  )
}

export default Navbar