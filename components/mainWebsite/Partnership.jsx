import Image from 'next/image'
import React from 'react'
import { partners } from '@/public/images'
const Partnership = () => {
  return (
    <section className='flex flex-col md:flex-row justify-evenly'>
      <div className='w-[]'>
          <h1 className="text-heading text-lg md:text-[2rem] tracking-wider font-bold mb-[.75rem]">
            The Partnership And Expertise That Fuel Our Growth
            </h1>
          <p className="text-heading text-[1rem] md:text-[1.5rem] tracking-wider font-normail mb-[.75rem]">
          Collaborating for Impact: Building a Future of Inclusivity Together
            </p>
      </div>
      <div>
        <Image 
          src={partners}
          alt='partner brands'
          className='relative w-auto h-auto'
        />
      </div>
    </section>
  )
}

export default Partnership