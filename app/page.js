import Image from 'next/image'
import { headerImage, gift, eye, leaf } from '@/public/images'
import Card from '@/components/Card'


export default function Home() {
  return (
    <main className="">
      <section className='mt-[2.5rem] md:mt-[1.5rem] flex md:justify-between lg:px-[7rem]'>
        <div className='flex flex-col items-center justify-center md:items-start  px-[1.19rem] md:gap-[2rem]'>
          <h1 className='max-w-[18rem] md:max-w-[29rem] leading-[2.7rem] md:leading-[3rem] text-[2rem] md:text-[3rem] font-[700] text-center md:text-left text-heading'>
            Building Bridges, Breaking Barriers
          </h1>
          <p className='w-[21rem] md:w-[30rem] md:text-left text-heading opacity-80 text-[1.125rem] tracking-wide text-center mt-[2.5rem] md:mt-0 md:leading-[2rem]'>
            A tech community that celebrates diversity and champions equality. Together, 
            we're breaking down barriers and creating a world where every person's abilities shine.
          </p>
          <Image 
            src={headerImage}
            alt='header image'
            className='relative w-[19rem] h-[17rem] mb-[2.7rem] md:hidden'
          />
          <a href='' className='text-white bg-primary rounded-[1rem] px-[2rem] py-[1.13rem] md:mt-0'>
            Join Us
          </a>   
        </div>
        <div className='hidden md:flex'>
          <Image 
            src={headerImage}
            alt='header image'
            className='relative w-[40rem] h-[33rem]'
          />
        </div>
      </section>
      <section className='mt-[2.7rem] md:px-[7rem] flex flex-col items-center md:items-start'>
        <div className='flex flex-col md:flex-row items-center md:gap-[15rem]'>
          <div className='text-center md:text-left max-w-[21rem] md:max-w-[24.5rem] mb-4'>
            <h1 className='text-heading text-[1.5rem] md:text-[2.25rem] font-[700] tracking-wide'>
              Adaptive Tech Hub Community
            </h1>
          </div>
          <div className='max-w-[20rem] md:max-w-[34rem] text-center md:text-left text-heading opacity-80 tracking-wider'>
            <p className='text-[1rem]'>
              We are the beacon of inclusive support in tech providing valuable resources, training, and a warm community to accommodate diversity, champion equality, and work tirelessly to create a more inclusive world where every person's unique abilities are recognized and celebrated.
            </p>
          </div>
        </div>
        <div className='mt-[2.5rem] md:mt-[6.5rem] flex flex-col md:flex-row gap-[1.25rem] md:gap-[3.38rem] md:flex-wrap md:flex-grow pb-7'>
          <Card 
            logo={eye}
            title='Our Vision'
            text='To be the driving force behind a diverse, incusive, and accessiible community that nurtures talents, embraces diversities and equips individuals with disaiiities with the skills and resources needed to lead fulfillng lives and achieve their aspirations.'
          />
          <Card 
            logo={leaf}
            title='Our Mission'
            text='To create an inclusive and empowering community for individuals living with disabiilitiess fostering personal growths, skills developments and meaningfull connections in both technology and various other fields.'
          />
          <Card 
            logo={gift}
            title='Our Value'
            text='Empowering disability, fostering inclusion and providing a warm environment to break barriers and create a world where every person’s abilities shine.'
          />
        </div>
      </section>
      {/* what we provide section */}
      <section>
        
      </section>
    </main>
  )
}
