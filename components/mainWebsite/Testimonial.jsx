import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  const TestimonialCard = ({image, text, name, disability}) => {
    return (
      <div className='flex flex-col gap-[1.62rem] md:flex-row px-[0.62rem] py-[0.81rem] lg:py-[1.81rem] lg:px-[1.54rem] max-w-max'>
        <div className='w-[8.9rem] h-[7.2rem]'>
          <Image 
            source={image}
            fill
            className='w-auto h-auto'
          />
        </div>
        <div>
          <p className=' opacity-80 w-[8.7rem] text-heading text-xs tracking-[0.035rem]'>
            {text}
          </p>
          <p className='opacity-80 text-heading text-[1rem] tracking-[0.04rem] font-medium'>
            {name}
          </p>
          <p className=' opacity-80 w-[8.7rem] text-heading text-[1rem] tracking-[0.035rem]'>
            {disability}
          </p>

        </div>
      </div>
    )
  }
  return (
    <section>
      <div>

      </div>
      <div>

      </div>
    </section>
  )
}

export default Testimonial