'use client'
import React, { useState } from 'react'
import { navLinks } from '@/constant'
import { HiMenuAlt1, HiX } from 'react-icons/hi'

const Nav = () => {
  const [toggle, setIsToggle] = useState(false)

  return (
    <nav className='px-[1.16rem] pt-[.7rem] md:pt-[1.5rem] md:pl-[7rem] justify-between items-center flex md:pr-[5.7rem]'>
      {/* logo */}
      <div className='text-primary font-[700] text-[1rem] md:text-[2rem]'>
        LOGO
      </div>
      {/* navlinks */}

      {/* Mobile Nav */}
      <div className='md:hidden'>
        <HiMenuAlt1 
          onClick={() => setIsToggle(!toggle)}
          
        />
        {toggle && (
          <div className='h-[100vh] bg-primary absolute top-0 w-[80vw] right-0 z-10'>
            <HiX 
              className='absolute right-0 text-white mr-[12px] top-[12px]'
              onClick={() => setIsToggle(!toggle)}
            />
            <ul 
              className='flex flex-col gap-[2.5rem] mt-[3rem] pl-[2rem]'
            >
              {navLinks.map((link, key) => {
                return (
                  <li 
                    key={key + link} 
                    className='flex flex-col gap-[3rem]'
                  >
                    <a 
                      href="" key={`${key} + 1`}
                      className='text-white '
                    >
                      {link}
                    </a>
                  </li>
                )
              })} 
              <a href="" className='text-white'> Form</a>
              <a href='' className='text-white'>Join us</a>   
            </ul>
            
          </div>
        )}
      </div>

      {/* Big screen Nav */}
      <div className='hidden md:flex'>
        <div className='items-center justify-center'>
          <ul 
            className='flex  gap-[2.5rem]'
          >
            {navLinks.map((link, key) => {
              return (
                <li 
                  key={key + link} 
                  className='flex flex-col gap-[3rem]'
                >
                  <a 
                    href="" key={`${key} + 1`}
                    className='text-heading text-[1rem] font-[600] tracking-wider'
                  >
                    {link}
                  </a>
                </li>
              )
            })} 
            <a href="" className='text-heading'> Form</a>
            <a href='' className='text-white bg-primary rounded-[1rem] px-[2rem] py-[1.13rem]'>Join Us</a>   
          </ul>
          
        </div>
      </div>
    </nav>
  )
}

export default Nav