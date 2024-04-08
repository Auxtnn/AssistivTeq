'use client'
import React, { useState } from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { FiPhone } from "react-icons/fi";

import GalleryComponent from "@/components/communityWebsite/GalleryComponent";
import { aboutHeader, aboutHero, group17, wheelChair } from "@/public/images";
import Footer from "@/components/communityWebsite/Footer";
import Form from "@/components/communityWebsite/Form";


const about_us = () => {

  const [openModal, setOpenModal] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpenModal(!openModal);
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
    setOpenModal(!openModal);
  };

  return (
    <main className="">
      <div className="mt-4 ">
        <Image src={aboutHeader} alt="about header" className="relative" />
      </div>
      <section id="header" className="flex gap-4 my-[2.5rem] md:px-[7.61rem]">
        <article className="flex flex-col items-center md:items-start w-[100%] md:w-auto">
          <h3 className="text-primary font-[500] tracking-[0.02rem] text-[1rem] md:text-[1.5rem] text-center md:text-left mb-[12px]">
            About AssistivTeq Community
          </h3>
          <h1 className=" text-center text-[1.5rem] font-[700] tracking-[0.06rem] mb-4 md:text-[2.25rem] md:text-left text-heading">
            An inclusive community
          </h1>
          <p className="text-center text-[1rem] tracking-[0.04rem] mb-[2.5rem] w-[18.096rem] md:w-[34.32rem] md:text-[1rem] md:text-left text-[#252128CC]">
            Incepted in 2023, our aim is to provide valuable resources,
            training, and a warm community to accomodate diversity, champion
            equality, and work tirelessly to create a more inclusive world where
            every person's unique abilities are recognized and celebrated.
          </p>
          <a href="#contact" className=" shadow-card bg-primary w-[7.6875rem] md:w-[9.6875rem] h-[2.25rem] md:h-[3.5rem] flex items-center justify-center text-white font-[700] rounded-[0.5rem]">
            Contact Us
          </a>
        </article>
        <div className="hidden md:flex">
          <Image src={aboutHero} className="relative" alt="hero image" />
        </div>
      </section>
      {/* why we stand out */}
      <section className="flex flex-col lg:flex-row items-center md:px-[7.6rem] md:gap-[6.44rem] pb-[2.5rem] md:mt-[5.17rem]">
        <div className="hidden md:flex">
          <Image src={group17} className="relative" alt="hero image" />
        </div>
        <article className="flex flex-col items-center md:items-start w-[100%] md:w-auto">
          <h3 className="text-primary font-[500] tracking-[0.02rem] text-[1rem] md:text-[1.5rem] text-center md:text-left mb-[12px]">
            Why We Stand Out
          </h3>
          <h1 className="text-center text-[1.5rem] font-[700] tracking-[0.06rem] mb-4 md:text-[2.25rem] md:text-left text-heading w-[17.13419rem] md:w-[31.47838rem]">
            Turning disabilities into abilities
          </h1>
          <div className=" md:hidden flex px-4 md:px-0 py-4">
            <Image src={group17} className="relative" alt="hero image" />
          </div>
          <p className="text-center text-[1rem] tracking-[0.04rem] mb-[2.5rem] w-[19.125rem] md:w-[34.32rem] md:text-[1rem] md:text-left text-[#252128CC]">
            At AssistivTeq Community, innovation is at the heart of everything
            we do. our cutting-edge solutions not only provide tech skills and
            empowerment but also champions inclusive community. We solve today's
            challenges but anticipate tomorrow's needs. Join a community of
            forward-thinkers for unparalleled security, seamless integration,
            and a tech future that's one step ahead.
          </p>
          <div className="flex justify-around w-[90%]">
            <div className="px-[0.97rem] md:px-[1.09rem] py-[0.81rem] md:py-[0.75rem]  bg-[#FFFADE] rounded-[0.5rem]">
              <h1 className="text-[1.25rem] md:text-[2rem] font-[600] tracking-[0.05rem] text-primary">
                30+
              </h1>
              <h1 className="text-[.75rem] md:text-[1rem] font-[600] tracking-[0.03rem] text-primary">
                States
              </h1>
            </div>
            <div className="px-[0.97rem] md:px-[1.09rem] py-[0.81rem] md:py-[0.75rem]  bg-[#FFFADE] rounded-[0.5rem]">
              <h1 className="text-[1.25rem] md:text-[2rem] font-[600] tracking-[0.05rem] text-primary">
                10+
              </h1>
              <h1 className="text-[.75rem] md:text-[1rem] font-[600] tracking-[0.03rem] text-primary">
                Professionals
              </h1>
            </div>
            <div className="px-[0.97rem] md:px-[1.09rem] py-[0.81rem] md:py-[0.75rem]  bg-[#FFFADE] rounded-[0.5rem]">
              <h1 className="text-[1.25rem] md:text-[2rem] font-[600] tracking-[0.05rem] text-primary">
                50+
              </h1>
              <h1 className="text-[.75rem] md:text-[1rem] font-[600] tracking-[0.03rem] text-primary">
                Ongoing Projects
              </h1>
            </div>
          </div>
        </article>
      </section>
      {/* image line design */}
      <div className="hidden lg:flex absolute right-0 ml-[32rem] left-[29rem] mt-[8rem]">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="352"
            height="258"
            viewBox="0 0 352 258"
            fill="none"
          >
            <path
              d="M345.05 257.92C342.498 257.92 340.585 254.372 340.585 250.824C342.125 176.91 342.177 99.6876 342.179 24.6337C342.179 20.2154 338.594 16.6343 334.176 16.6343C222.305 16.6335 115.966 16.5989 4.75967 15.1136C2.20829 15.1136 0.294678 12.0722 0.294678 8.01698C0.294678 3.96175 2.20829 0.920288 4.75967 0.920288C120.21 2.441 230.238 2.44101 346.644 2.44101C349.11 2.44101 351.109 4.44006 351.109 6.906V9.53763C351.109 89.1215 351.109 171.747 349.515 251.331C349.515 254.879 347.601 257.92 345.05 257.92Z"
              fill="#FEBFFF"
            />
          </svg>
        </div>
        <div className="relative  top-8 right-[24rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="352"
            height="258"
            viewBox="0 0 352 258"
            fill="none"
          >
            <path
              d="M345.05 257.92C342.498 257.92 340.585 254.372 340.585 250.824C342.125 176.91 342.177 99.6876 342.179 24.6337C342.179 20.2154 338.594 16.6343 334.176 16.6343C222.305 16.6335 115.966 16.5989 4.75967 15.1136C2.20829 15.1136 0.294678 12.0722 0.294678 8.01698C0.294678 3.96175 2.20829 0.920288 4.75967 0.920288C120.21 2.441 230.238 2.44101 346.644 2.44101C349.11 2.44101 351.109 4.44006 351.109 6.906V9.53763C351.109 89.1215 351.109 171.747 349.515 251.331C349.515 254.879 347.601 257.92 345.05 257.92Z"
              fill="#FEBFFF"
            />
          </svg>
        </div>
      </div>
      <section className="flex flex-col lg:flex-row items-center md:px-[7.6rem] md:gap-[6.44rem] pb-[2.5rem] md:mt-20">
        <article className="flex flex-col items-center md:items-start w-[100%] md:w-auto">
          <h3 className="text-primary font-[500] tracking-[0.02rem] text-[1rem] md:text-[1.5rem] text-center md:text-left mb-[12px]">
            AssistivTeq Community Goals
          </h3>
          <h1 className="text-center text-[1.5rem] font-[700] tracking-[0.06rem] mb-4 md:text-[2.25rem] md:text-left text-heading w-[21.78988rem] md:w-[31.47838rem]">
            What we hope to achieve with you
          </h1>
          <div className=" lg:hidden flex px-4 md:px-0 py-4">
            <Image src={wheelChair} className="relative" alt="hero image" />
          </div>
          <ul className=" mt-[1.125rem] flex flex-col gap-[.63rem] md:items-start pb-[3rem] px-[2rem] md:px-0">
            <li className="flex gap-4 text-[#252128] tracking-[0.04rem] leading-normal text-[1rem] max-w-[25.437rem]">
              <GoDotFill className="text-primary w-[2.2rem] h-[1.5rem]" />
              Support the development and adoption of assistive technologies.
            </li>
            <li className="flex gap-4 text-[#252128] tracking-[0.04rem] leading-normal text-[1rem] max-w-[25.437rem]">
              <GoDotFill className="text-primary w-[5rem] h-[1.5rem]" />
              Embrace the concept of universal design, which aims to create
              products and environments that are usable by people with the
              widest range of abilities.
            </li>
            <li className="flex gap-4 text-[#252128] tracking-[0.04rem] leading-normal text-[1rem] max-w-[25.437rem]">
              <GoDotFill className="text-primary w-[3rem] h-[1.5rem]" />
              Leverage our community to connect individuals with disabilities to
              encourage networking.
            </li>
            <li className="flex gap-4 text-[#252128] tracking-[0.04rem] leading-normal text-[1rem] max-w-[25.437rem]">
              <GoDotFill className="text-primary w-[5rem] h-[1.5rem]" />
              Collaborate with organizations, non-profits, and government
              agencies to share knowledge and resources for driving positive
              change.
            </li>
          </ul>
        </article>
        <div className="hidden lg:flex">
          <Image src={wheelChair} className="relative" alt="hero image" />
        </div>
      </section>
      {/* mission and vision */}
      <section className="flex flex-col lg:flex-row mx-5 md:mx-20 lg:mx-0 gap-[1.25rem] md:justify-center">
        <div className="py-[2.07rem] px-[1.4rem] bg-[#FFF6FF] flex flex-col gap-[.75rem] rounded-[.75rem]">
          <h1 className="text-[1.25rem] font-[600] tracking-[0.05rem]">
            Our Mission
          </h1>
          <p className="w-[19.46rem] md:w-[31rem] text-[1rem] tracking-[0.04rem] text-heading">
            To create an inclusive and empowering community for individuals
            living with disabiiitiess fostering personal growths, skill
            deveopments and meaningfull connections in both technoogy and
            various other fields.
          </p>
        </div>
        <div className="py-[2.07rem] px-[1.4rem] bg-[#FFF6FF] flex flex-col gap-[.75rem] rounded-[.75rem]">
          <h1 className="text-[1.25rem] font-[600] tracking-[0.05rem]">
            Our Vision
          </h1>
          <p className="w-[19.46rem] md:w-[31rem] text-[1rem] tracking-[0.04rem] text-heading">
            To be the driving force behind a diverse, inclusive, and accessiible
            community that nurtures talents, embraces diversities and equips
            individuals with disaiilities with the skills and resources needed
            to lead fulfillng lives and achieve their aspirations.
          </p>
        </div>
      </section>
      {/* Gallery */}
      <section className="mt-[5.3rem]  lg:px-[7.1rem]">
        <h1 className="text-[1.5rem] text-center font-[700] tracking-[0.06rem] text-heading md:text-[2rem] md:tracking-[0.08rem] mb-[2.5rem]">
          Gallery
        </h1>
        <GalleryComponent />
      </section>
      {/* contact us */}
      <section id="contact" className="justify-center px-4 my-[2.5rem] ">
        <div className="px-[1.1rem] py-[1.72rem] flex flex-col md:flex-row md:justify-around md:items-center gap-3 bg-[#FFFADE] rounded-[.75rem] lg:mx-[10.7rem]">
          <div className="flex gap-3 flex-col  items-start mt-3">
            <h3 className="text-[1rem] md:text-[1.5rem] font-[600] tracking-[0.04rem] md:tracking-[0.06rem] w-[19.243rem] md:w-auto">
              Have More Inquiry? Contact Us Today
            </h3>
            <div className="flex gap-3 mt-3">
              <FiPhone className="" />
              <div className="flex flex-col md:flex-row gap-1">
                <p className="text-heading text-[1rem] tracking-[0.04rem]">
                  +2349037176588
                </p>
                <p className="text-heading text-[1rem] tracking-[0.04rem]">
                  +2349049802906
                </p>
              </div>
            </div>
          </div>
          <a onClick={handleOpen} className=" shadow-card bg-primary w-[7.6875rem] md:w-[9.6875rem] h-[2.25rem] md:h-[3.5rem] flex items-center justify-center text-white font-[700] rounded-[0.5rem]">
            Contact Us
          </a>
        </div>
        {openModal && (
        <div className="absolute right-[50%]">
          <Form handleClose={handleClose} open={open} />
        </div>
      )}
      </section>
      {/* footer */}
      <Footer />
    </main>
  );
};

export default about_us;
