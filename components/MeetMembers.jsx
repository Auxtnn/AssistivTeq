'use client'
import { useState } from 'react';
import Image from 'next/image';
import { john, Group } from '@/public/images';
import { MdArrowBackIos } from "react-icons/md";
import { GrNext } from "react-icons/gr";

const MeetOurMembers = () => {
  const testimonies = [
    {
      name: 'Boluwatife Oladejo',
      role: 'Community Manager',
      imageSrc: john,
      quote:
        "Discovering this inclusive tech community has been a game-changer for me. As someone with a disability, I often felt isolated, but here, I've found a supportive network that embraces diversity and empowers us through technology. Thanks to this community, I've learned, grown, and connected with like-minded individuals, making me feel part of something bigger than myself. I'm grateful to be a part of the Adaptive Tech Hub."
    },
    {
      name: 'Austin Ikechuchkwu',
      role: 'Community Manager',
      imageSrc: john,
      quote:
        "Discovering this inclusive tech community has been a game-changer for me. As someone with a disability, I often felt isolated, but here, I've found a supportive network that embraces diversity and empowers us through technology. Thanks to this community, I've learned, grown, and connected with like-minded individuals, making me feel part of something bigger than myself. I'm grateful to be a part of the Adaptive Tech Hub."
    },
    {
      name: 'Kosisochuckwu',
      role: 'Community Manager',
      imageSrc: john,
      quote:
        "Discovering this inclusive tech community has been a game-changer for me. As someone with a disability, I often felt isolated, but here, I've found a supportive network that embraces diversity and empowers us through technology. Thanks to this community, I've learned, grown, and connected with like-minded individuals, making me feel part of something bigger than myself. I'm grateful to be a part of the Adaptive Tech Hub."
    },
    // Add more testimonies here...
  ];

  const [activeTestimony, setActiveTestimony] = useState(0);

  const handleNextTestimony = () => {
    setActiveTestimony((prevIndex) => (prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevTestimony = () => {
    setActiveTestimony((prevIndex) => (prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1));
  };

  return (
    <section className='bg-primary py-[2.2rem] md:py-[2.81rem] flex flex-col justify-center items-center mt-[3.1rem]'>
      {/* corner design */}
      <div className='hidden lg:flex absolute right-0 mb-[35.5rem]'>
        <Image 
          src={Group}
          alt='design'
          className='relative'
        />
      </div>
      <h1 className='text-center text-[1.25rem] md:text-[2rem] font-[700] tracking-wide md:tracking-wider text-white mb-8'>
        Meet Our Members
      </h1>
      <div className='flex flex-col items-center justify-center'>
        <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] mb-4">
          <Image 
            src={testimonies[activeTestimony].imageSrc}
            alt={testimonies[activeTestimony].name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className='text-[1.125rem] md:text-[1.5rem] font-[600] tracking-wide text-white mt-4'>
          {testimonies[activeTestimony].name}
        </h1>
        <h3 className='text-[1rem] font-[400] tracking-wide text-white text-center'>
          {testimonies[activeTestimony].role}
        </h3>
      </div>
      <p className='text-white font-normal text-[0.875rem] md:text-[1rem] text-center max-w-[20.7085rem] md:max-w-[33.36881rem] mt-4'>
        {testimonies[activeTestimony].quote}
      </p>
      <div className="flex justify-center items-center mt-4">
        <button 
          onClick={handlePrevTestimony}
          className="mr-4 focus:outline-none "
        >
          {/* Previous arrow icon */}
          <MdArrowBackIos className='text-white w-[1.5rem] h-[1.5rem]'/>
        </button>
        <div className="flex">
          {testimonies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimony(index)}
              className={`w-3 h-3 mx-2 rounded-full ${
                activeTestimony === index ? 'bg-purple-600' : 'bg-white'
              }`}
            ></button>
          ))}
        </div>
        <button 
          onClick={handleNextTestimony}
          className="ml-4 focus:outline-none"
        >
          {/* Next arrow icon */}
          <GrNext className='text-white w-[1.5rem] h-[1.5rem]'/>
        </button>
      </div>
    </section>
  );
};

export default MeetOurMembers;
