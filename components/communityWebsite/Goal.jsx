import React from "react";
import { GoDotFill } from "react-icons/go";
import { wheelChair } from "../../public/images";
import Image from "next/image";

const Goal = () => {
  return (
    <>
      <div className="hidden lg:flex absolute right-0 ml-[24rem] left-[29rem] mt-[10rem]">
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
      <div className="flex flex-col lg:flex-row items-center md:px-[7.6rem] md:gap-[6.44rem] pb-[2.5rem] md:mt-20">
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
      </div>
    </>
  );
};

export default Goal;
