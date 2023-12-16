'use client'
import Image from 'next/image'
import { GoDotFill } from "react-icons/go";
import { motion } from 'framer-motion';

import { 
  headerImage, 
  gift, 
  eye, 
  leaf, 
  inclusive, 
  education, 
  skill, 
  training, 
  people,
  john,
  vector
} from '@/public/images'

import Card from '@/components/Card'
import MeetOurMembers from '@/components/MeetMembers';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer'
import Form from '@/components/Form';
import { useState } from 'react';

export default function Home() {

  const provideCards = ({ image, title }) => {
    return(
      <div className='w-[18.3125rem] h-[24.375rem] md:w-[17.7rem] overflow-hidden shadow-card rounded-[0.5rem] rounded-t-[0.8rem]'>
        <div className='h-[14.125rem] '>
          <Image 
            src={image}
            alt='images'
            className='relative w-[100%]'
          />
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}       
          className='pl-[3.47rem] pb-[1.94rem]'
        >
          <h1 className='w-[10.09rem] font-[600] text-heading text-[1.125rem] tracking-[0.06rem] mt-[2.13rem] mb-[1.31rem] leading-normal'>
            {title}
          </h1>
          <a 
            className='text-primary text-[1rem] tracking-wide'
            href='/supports'
          >
            Read More
          </a>
        </motion.div>
      </div>
    )
  }

  const [openModal, setOpenModal] = useState(false)

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpenModal(!openModal)
    setOpen(!open)
  };
  const handleClose = () => {
    setOpen(!open)
    setOpenModal(!openModal)
  };

  return (
    <main className="">
      <Image
        src={vector} 
        className='absolute top-0 left-0'
      />
      <section id='header' className='mt-[2.5rem] lg:mt-[1.5rem] flex lg:justify-between lg:px-[7rem]'>
        <div className='flex flex-col  lg:items-start items-center justify-center md:gap-[1.5rem] w-screen'>
          <motion.div 
            initial={{opacity: 0}}
            whileInView={[{ y: [50, 0]}, {opacity: 1}]}
            transition={{ duration: 0.85, ease: 'easeIn' }}       
            className=' lg:w-[29rem] md:w-[20rem] tracking-[.06rem] text-[2rem] lg:text-[3rem] font-[700] text-center lg:text-left text-heading'
          >
            Building Bridges, Breaking Barriers
          </motion.div>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.8, ease: 'easeInOut' }}       
            className='w-[21rem] md:w-[30rem] lg:text-left text-heading opacity-80 text-[1.125rem] tracking-[0.0225rem] text-center mt-[2.5rem] md:mt-0 md:leading-[2rem]'
          >
            A tech community that celebrates diversity and champions equality. Together, 
            we're breaking down barriers and creating a world where every person's abilities shine.
          </motion.div>
          <Image 
            src={headerImage}
            alt='header image'
            className='relative w-[19rem] md:w-[35rem] h-[17rem] md:h-[27rem] mb-[2.7rem] lg:hidden'
          />
          <button onClick={handleOpen} className='text-white bg-primary rounded-[1rem] px-[2rem] py-[1.13rem] md:mt-0 font-[700]'>
            Join Us
          </button>   
        </div>
        {openModal && (
          <div className="absolute right-[50%]">
            <Form 
              handleClose={handleClose}
              open={open}
            />
          </div>
        )}
        {/* Large screen header image */}
        <motion.div 
          whileInView={{x: [100, 0]}}
          className='hidden lg:flex'
          transition={{ duration: 0.8, ease: 'easeInOut' }}       
        >
          <Image 
            src={headerImage}
            alt='header image'
            className='relative w-[50rem] h-[27rem]'
          />
        </motion.div>
      </section>
      <section className='mt-[2.7rem] lg:mt-[6.23rem] lg:px-[7rem] flex flex-col items-center '>
        <div className='flex flex-col lg:flex-row items-center lg:gap-[15rem]'>
          <div className='text-center md:text-left max-w-[21rem] lg:max-w-[24.5rem] mb-4'>
            <h1 className='text-heading text-[1.5rem] md:text-[2.25rem] font-[700] tracking-[0.09rem]'>
              AssistivTeq Community
            </h1>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut'}}
            className='max-w-[20rem] md:max-w-[34rem] text-center lg:text-left text-heading opacity-80 tracking-wider'
          >
            <p className='text-[1rem] tracking-[0.04rem]'>
              We are the beacon of inclusive support in tech providing valuable resources, training, and a warm community to accommodate diversity, champion equality, and work tirelessly to create a more inclusive world where every person's unique abilities are recognized and celebrated.
            </p>
          </motion.div>
        </div>
        <div className='mt-[2.5rem] md:mt-[6.5rem] flex flex-col lg:flex-row gap-[1.25rem] md:gap-[3.38rem] md:flex-wrap md:justify-center md:flex-shrink pb-7'>
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
      <section className='flex flex-col  justify-center items-center bg-[#66328E0D]  pb-[2.25rem] lg:pb-[4.39rem]'>
        {/* rectangle */}
        {/* <div className='absolute left-0 lg:-mt-[36.2rem] -mt-[113rem] md:-mt-[118rem]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="72" viewBox="0 0 51 72" fill="none">
            <circle cx="9.50527" cy="30.0052" r="41.4874" transform="rotate(-14.2544 9.50527 30.0052)" fill="#66328E"/>
          </svg>
        </div>  */}
        <div className='flex lg:gap-[30rem] mt-[2.73rem] lg:mt-[5.48rem] items-center'>
          <motion.div 
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}       
            className='w-[16.54rem] text-[1.25rem] lg:w-[27.41213rem] md:text-[2rem] font-[700] tracking-[0.08rem] text-center lg:text-left text-heading '
          > 
            The Support AssistivTeq Community Provides
          </motion.div>
          <a href='/supports' className='hidden lg:flex text-white bg-primary rounded-[1rem] w-[7.35rem] h-[3.5rem] items-center justify-center md:mt-0 font-[700] shadow-card '>
            View More
          </a>
        </div>
        <article className='mt-[2.5rem] lg:mt-[5rem] flex flex-col gap-[1.5rem] lg:flex-row md:flex-wrap md:justify-center'>
          {provideCards({
            title: 'Inclusive Community',
            image: inclusive
          }
          )}
          {provideCards({
            title: 'Training and Empowerment',
            image: training
          }
          )}
          {provideCards({
            title: 'Education and Awareness',
            image: education
          }
          )}
          {provideCards({
            title: 'Skill Acquisition Programs',
            image: skill
          }
          )}
        </article>
        <a href='/supports' className='lg:hidden text-white bg-primary rounded-[1rem] px-[2rem] py-[1.13rem] mt-[2.5rem] font-[700] shadow-card'>
          View More
        </a>
      </section>
      <section className='flex flex-col md:flex-row-reverse items-center md:items-center md:justify-between pt-[2.5rem] md:px-[12.56rem]'>
        <div className='w-[50%]'>
          <Image 
            src={people}
            alt='people'
            className='relative w-[18.89rem] md:w-[31.43rem]'
          />
        </div>
        <article className='mt-[2.5rem]'>
          <motion.div 
            initial={{opacity: 0}}
            whileInView={[{ y: [-40, 0]}, {opacity: 1}]}
            transition={{ duration: 0.85, ease: 'easeInOut' }}  
            className='w-[21.093rem] md:w-[30.5rem] font-[700] text-heading text-[1.25rem] md:text-[2rem] tracking-[0.08rem] text-center md:text-left'
          >
            How we leverage tech to create an inclusive world
          </motion.div>
          <motion.ul 
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }} 
            className=" mt-[1.125rem] flex flex-col gap-[.63rem] items-center md:items-start justify-center pb-[3rem] px-4 lg:w-[26.762rem]"
          >
            <li className="flex gap-4 text-[#252128] tracking-[0.04rem] leading-normal text-[1rem] ">
              <GoDotFill className='text-primary w-[2.2rem] h-[1.5rem]'/> 
              Support the development and adoption of assistive technologies.
            </li>
            <li className="flex gap-4 text-[#252128] tracking-[0.04rem] leading-normal text-[1rem] ">
              <GoDotFill className='text-primary w-[5rem] h-[1.5rem]'/>  
              Embrace the concept of universal design, which aims to create products and environments that are usable by people with the widest range of abilities.            
            </li>
            <li className="flex gap-4 text-[#252128] tracking-[0.04rem] leading-normal text-[1rem] ">
              <GoDotFill className='text-primary w-[3rem] h-[1.5rem]'/>  
              Leverage our community to connect individuals with disabilities to encourage networking.            
            </li>
            <li className="flex gap-4 text-[#252128] tracking-[0.04rem] leading-normal text-[1rem] ">
              <GoDotFill className='text-primary w-[5rem] h-[1.5rem]'/>  
              Collaborate with organizations, non-profits, and government agencies to share knowledge and resources for driving positive change.            
            </li>
          </motion.ul>
          <button onClick={handleOpen} className=' text-white bg-primary rounded-[1rem] px-[2rem] py-[1.13rem] mt-[3rem] font-[700] shadow-card  ml-4 '>
            Join Us
          </button>
        </article>
      </section>
      {/* meet our memebers */}
      <MeetOurMembers />
      {/* Newsletter */}
      <Newsletter/>
      {/* footer */}
      <Footer />
    </main>
  )
}
