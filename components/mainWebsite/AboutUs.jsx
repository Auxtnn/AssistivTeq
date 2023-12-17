import React from "react";
import Image from "next/image";
import { groupofpeople, icon3 } from "@/public/images";
import {  IoAppsOutline } from "react-icons/io5";
import { TbBuildingCommunity, TbDisabled2 } from "react-icons/tb";
import { MdOutlineJoinInner } from "react-icons/md";

const AboutUs = () => {
  const productCard = ({ icon, heading, text, mt }) => {
    return (
      <div className={`w-[10.09rem] md:w-auto flex flex-col gap-4 lg:gap-[1.88rem] mt-${mt} md:mt-0 lg:mt-${mt} shadow-pCard bg-white rounded-2xl hover:border-b-2- hover:border-primary px-4 py-[1.91rem] `}>
        <div className="p-[0.69rem] w-[2.187rem] h-[2.187rem] lg:w-[3.125rem] lg:h-[3.125rem] bg-[#E0E0E0] rounded-[0.25rem] flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg lg:text-2xl font-bold tracking-wider text-heading">
            {heading}
          </h1>
          <p className="text-heading capitalize text-sm lg:text-[1rem] tracking-[0.035rem] lg:-tracking-wider w-[8.8rem] lg:w-[12.4rem] opacity-60 leading-[1.5rem]">
            {text}
          </p>
        </div>
      </div>
    );
  };
  return (
    <section id="about">
      {/* Who we are section */}
      <section className="flex justify-center  md:justify-evenly mt-[2.5rem] md:mt-[5rem] md:px-[4rem] md:gap-12 lg:gap-0 lg:px-0">
        <Image
          src={groupofpeople}
          alt="people with disabilities"
          priority
          quality={100}
          className="hidden lg:flex md:w-7/12 lg:w-[40%]"
        />
        <div className="px-4 md:px-0">
          <div className="">
            <Image
              src={icon3}
              alt="icon"
              className=" lg:hidden relative w-[1.5rem] -ml-4 md:-ml-[4.2rem]  h-[1.5rem] md:w-[5.56rem] md:h-[5.56rem]"
            />
          </div>
          <h1 className="text-heading text-lg md:text-[2rem] tracking-wider font-bold mb-[.75rem] ">
            Who are we?
          </h1>
          <h3 className="text-heading text-[1rem] md:text-2xl tracking-wider font-medium capitalize md:w-9/12 lg:w-[32.04rem] md:mb-4">
            Empowering Lives Through Innovative Assistive Technologies
          </h3>
          <Image
            src={groupofpeople}
            alt="people with disabilities"
            className="flex lg:hidden my-[1.75rem] w-full  "
          />
          <article className="text-heading opacity-80 text-xs md:text-[1rem] tracking-wider leading-[1.3rem] md:leading-[1.7rem] font-medium capitalize px-2 md:px-0  lg:w-[31.68rem] mb-[2.5rem]">
            We are dedicated to revolutionizing the way individuals with diverse
            abilities experience the world. We believe in the transformative
            power of technology to break down barriers, foster independence, and
            create a more inclusive society. Our mission is to develop and
            provide cutting-edge assistive technologies that go beyond
            limitations, unlocking new possibilities for every individual.
            <br></br> <br></br>We design, develop, and deliver cutting-edge
            assistive technology software solutions that enhance the lives of
            individuals with disabilities, promoting independence,
            accessibility, and inclusivity.
          </article>
          <a href='#contact' className="text-white hover:bg-white hover:text-primary hover:border-2 bg-primary w-full lg:w-[9.68rem] lg:h-[3.5rem] h-[2.25rem]  rounded-[1rem] flex items-center justify-center md:mt-0 font-[700]">
            Contact Us
          </a>
        </div>
      </section>
      {/* What we can do for you */}
      <section className="flex flex-col lg:flex-row mt-[2.5rem] lg:mt-20 lg:justify-evenly">
        <div className="px-4 lg:w-6/12 lg:ml-[5rem]">
          <div className="">
            <Image
              alt="icon"
              src={icon3}
              className="relative lg:absolute lg:left-0 lg:-mt-[4rem] w-[1.5rem] -ml-4 lg:ml-0 h-[1.5rem] md:w-[5.56rem] md:h-[5.56rem]"
            />
          </div>
          <h1 className="text-heading text-lg md:text-[2rem] tracking-wider font-bold mb-[.75rem] ">
            What we can do for you
          </h1>
          <h3 className="text-heading text-[1rem] md:text-2xl tracking-wider font-medium capitalize md:w-9/12 lg:w-[32.04rem] mb-[1.75rem] md:mb-4">
            Discover Innovations for Greater Independence{" "}
          </h3>
          <article className="text-heading opacity-80 text-xs md:text-[1rem] tracking-wider leading-[1.3rem] md:leading-[1.7rem] font-medium capitalize   lg:w-[31.68rem] mb-[2.5rem]">
            With a passion for innovation and a commitment to excellence, we
            strive to redefine accessibility. Our range of products is
            meticulously designed to address unique needs, ensuring that
            everyone has the tools to lead a more independent, fulfilling life.
            We are not just a technology company; we are advocates for change,
            champions of inclusivity, and partners in the journey towards a
            world where abilities define success, not limitations
          </article>
          <button className="hidden lg:flex text-white hover:bg-white hover:text-primary hover:border-2 bg-primary w-full lg:w-[9.68rem] lg:h-[3.5rem] h-[2.25rem]  rounded-[1rem] items-center justify-center md:mt-0 font-[700]">
            Explore All
          </button>
        </div>
        <div className='lg:w-6/12 flex flex-wrap lg:gap-[1.62rem] justify-evenly'>
          {productCard({
            icon: <IoAppsOutline className="text-primary w-[3.06rem] h-[3.06rem]"/>,
            heading: 'Assistive Tech',
            text: 'Personalized assistive technologies designed to meet your specific needs.'
          })}
          {productCard({
            icon: <TbBuildingCommunity className="text-primary w-[3.06rem] h-[3.06rem]"/>,
            heading: 'Community',
            text: 'Join a community that advocates for inclusivity and provides support.'
          })}
          {productCard({
            mt: '[1.25rem]',
            icon: <TbDisabled2 className="text-primary w-[3.06rem] h-[3.06rem]"/>,
            heading: 'Empowerment',
            text: 'Our commitment is to empower you to lead a more independent and fulfilling life'
          })}
          {productCard({
            mt: '[1.25rem]',
            icon: <MdOutlineJoinInner className="text-primary w-[3.06rem] h-[3.06rem]"/>,
            heading: 'Partnership',
            text: 'Collaborate with us to advance assistive technology and create a more inclusive world.'
          })}
          <button className=" mx-12 mt-4 md:mt-8 flex lg:hidden text-white hover:bg-white hover:text-primary hover:border-2 bg-primary w-full lg:w-[9.68rem] lg:h-[3.5rem] h-[2.25rem]  rounded-[1rem] items-center justify-center font-[700]">
            Explore All
          </button>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
