import Image from 'next/image'
import { GoDotFill } from "react-icons/go";
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
import Footer from '@/components/Footer'


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
        <div className='pl-[3.47rem] pb-[1.94rem]'>
          <h1 className='w-[10.09rem] font-[600] text-heading text-[1.125rem] tracking-[0.06rem] mt-[2.13rem] mb-[1.31rem] leading-normal'>
            {title}
          </h1>
          <a 
            className='text-primary text-[1rem] tracking-wide'
            href='/'
          >
            Read More
          </a>
        </div>
      </div>
    )
  }


  return (
    <main className="">
      <Image
        src={vector} 
        className='absolute top-0 left-0'
      />
      <section className='mt-[2.5rem] lg:mt-[1.5rem] flex lg:justify-between lg:px-[7rem]'>
        <div className='flex flex-col  lg:items-start items-center justify-center md:gap-[1.5rem] w-screen'>
          <h1 className=' lg:w-[29rem] md:w-[20rem] tracking-[.06rem] text-[2rem] lg:text-[3rem] font-[700] text-center lg:text-left text-heading'>
            Building Bridges, Breaking Barriers
          </h1>
          <p className='w-[21rem] md:w-[30rem] lg:text-left text-heading opacity-80 text-[1.125rem] tracking-[0.0225rem] text-center mt-[2.5rem] md:mt-0 md:leading-[2rem]'>
            A tech community that celebrates diversity and champions equality. Together, 
            we're breaking down barriers and creating a world where every person's abilities shine.
          </p>
          <Image 
            src={headerImage}
            alt='header image'
            className='relative w-[19rem] md:w-[35rem] h-[17rem] md:h-[27rem] mb-[2.7rem] lg:hidden'
          />
          <a href='' className='text-white bg-primary rounded-[1rem] px-[2rem] py-[1.13rem] md:mt-0 font-[700]'>
            Join Us
          </a>   
        </div>
        <div className='hidden lg:flex'>
          <Image 
            src={headerImage}
            alt='header image'
            className='relative w-[50rem] h-[27rem]'
          />
        </div>
      </section>
      <section className='mt-[2.7rem] lg:mt-[6.23rem] lg:px-[7rem] flex flex-col items-center lg:items-start'>
        <div className='flex flex-col lg:flex-row items-center lg:gap-[15rem]'>
          <div className='text-center md:text-left max-w-[21rem] lg:max-w-[24.5rem] mb-4'>
            <h1 className='text-heading text-[1.5rem] md:text-[2.25rem] font-[700] tracking-[0.09rem]'>
              Adaptive Tech Hub Community
            </h1>
          </div>
          <div className='max-w-[20rem] md:max-w-[34rem] text-center lg:text-left text-heading opacity-80 tracking-wider'>
            <p className='text-[1rem] tracking-[0.04rem]'>
              We are the beacon of inclusive support in tech providing valuable resources, training, and a warm community to accommodate diversity, champion equality, and work tirelessly to create a more inclusive world where every person's unique abilities are recognized and celebrated.
            </p>
          </div>
        </div>
        <div className='mt-[2.5rem] md:mt-[6.5rem] flex flex-col lg:flex-row gap-[1.25rem] md:gap-[3.38rem] md:flex-wrap md:flex-grow pb-7'>
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
        <div className='absolute left-0 lg:-mt-[35.9rem] -mt-[113rem] md:-mt-[118rem]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="72" viewBox="0 0 51 72" fill="none">
            <circle cx="9.50527" cy="30.0052" r="41.4874" transform="rotate(-14.2544 9.50527 30.0052)" fill="#66328E"/>
          </svg>
        </div> 
        <div className='flex lg:gap-[35rem] mt-[2.73rem] lg:mt-[5.48rem] items-center'>
          <h1 className='w-[16.54rem] text-[1.25rem] lg:w-[27.41213rem] md:text-[2rem] font-[700] tracking-[0.08rem] text-center lg:text-left text-heading '> 
            The Support Adaptive Tech Hub Provides
          </h1>
          <a href='' className='hidden lg:flex text-white bg-primary rounded-[1rem] px-[2rem] py-[1.13rem] md:mt-0 font-[700] shadow-card h-[3.5rem]'>
            View More
          </a>
        </div>
        <article className='mt-[2.5rem] lg:mt-[5rem] flex flex-col gap-[1.5rem] lg:flex-row md:flex-wrap'>
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
        <a href='' className='lg:hidden text-white bg-primary rounded-[1rem] px-[2rem] py-[1.13rem] mt-[2.5rem] font-[700] shadow-card'>
          View More
        </a>
      </section>
      <section className='flex flex-col md:flex-row-reverse items-center md:items-center md:justify-between pt-[2.5rem] md:px-[12.56rem]'>
        <div>
          <Image 
            src={people}
            alt='people'
            className='relative w-[18.89rem] md:w-[31.43rem]'
          />
        </div>
        <article className='mt-[2.5rem]'>
          <h1 className='w-[21.093rem] md:w-[30.5rem] font-[700] text-heading text-[1.25rem] md:text-[2rem] tracking-[0.08rem] text-center md:text-left'>
            How we leverage tech to create an inclusive world
          </h1>
          <ul className=" mt-[1.125rem] flex flex-col gap-[.63rem] items-center md:items-start justify-center pb-[3rem] px-4 lg:w-[26.762rem]">
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
          </ul>
          <a href='' className=' text-white bg-primary rounded-[1rem] px-[2rem] py-[1.13rem] mt-[3rem] font-[700] shadow-card h-[2.25rem] ml-4 '>
            Join Us
          </a>
        </article>
      </section>
      {/* meet our memebers */}
      <section className='bg-primary py-[2.2rem] md:py-[2.81rem] flex flex-col justify-center items-center mt-[3.1rem]'>
        <h1 className='text-center text-[1.25rem] md:text-[2rem] font-[700] tracking-wide md:tracking-wider text-white mb-8'>
          Meet Our Members
        </h1>
        <div className='flex flex-col items-center justify-center'>
          <Image 
            src={john}
            alt='john doe'
          />
          <h1 className='text-[1.125rem] md:text-[1.5rem] font-[600] tracking-wide text-white mt-4'>
            John Doe
          </h1>
          <h3 className='text-[1rem] font-[400] tracking-wide text-white text-center'>
            Community Manager
          </h3>
        </div>
        <p className='text-white font-normal text-[0.875rem] md:text-[1rem] text-center max-w-[20.7085rem] md:max-w-[33.36881rem] mt-4'>
          "Discovering this inclusive tech community has been a game-changer for me. As someone with a disability, 
          I often felt isolated, but here, I've found a supportive network that embraces diversity and empowers us through technology. 
          Thanks to this community, I've learned, grown, and connected with like-minded individuals, making me feel part of something bigger than myself. 
          I'm grateful to be a part of the Adaptive Tech Hub."
        </p>
      </section>
      <section className=' flex flex-col items-center justify-center pb-[2.47rem] py-[2.53rem] md:py-[5rem]'>
        <h1 className='text-heading text-[1.5rem] md:text-[2.25rem]  font-[700] tracking-wide text-center max-w-[11.625rem] md:max-w-[18.625rem]'>
          Sign Up For Our Newsletter
        </h1>
        <div className='flex items-center gap-4 mt-[1.25rem] md:mt-[3.44rem]'>
          <input 
            placeholder='Enter your email'
            className='px-[1.88rem] py-[0.63rem] w-[22rem] md:w-[45.1875rem] h-[2.25rem] md:h-[3.5rem] bg-gray-200 text-heading text-[1rem] rounded-[0.5rem] '
          />
          <a href='' className='hidden lg:flex text-white bg-primary rounded-[0.5rem] py-[1.13rem] px-[2rem] font-[700] shadow-card h-[3.5rem] '>
            Subscribe
          </a>
        </div>
        {/* mobile btn */}
        <a href='' className='lg:hidden text-white bg-primary rounded-[0.5rem] flex items-center justify-center mt-[1rem] font-[700] shadow-card w-[9.875rem] h-[2.25rem]'>
          Subscribe
        </a>
      </section>
      {/* footer */}
      <Footer />
    </main>
  )
}
