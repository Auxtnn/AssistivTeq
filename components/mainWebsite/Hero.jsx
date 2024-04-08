import React from "react";
import { CiMobile4 } from "react-icons/ci";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { IoMdHeadset } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import Image from "next/image";
import { onWheelChair } from "@/public/images";
import AnimatedSection from "./Animation";
import Link from "next/link";
const Hero = () => {
  const productLine = ({ icon, text }) => {
    return (
      <div className="flex items-center gap-[0.5rem] text-white opacity-[0.5] px-[1.25rem] border-r-slate-100 border-r-2">
        {icon}
        <p className="font-[500] leading-[2rem] text-[1rem]">{text}</p>
      </div>
    );
  };
  return (
    <AnimatedSection>
      <section className="">
        <div className="overflow-hidden px-4 py-4 bg-primary w-full">
          <div className="flex animate-marquee text-center whitespace-nowrap">
            {productLine({
              text: "Mobility",
              icon: <CiMobile4 />,
            })}
            {productLine({
              text: "Communication Devices",
              icon: <CiMobile4 />,
            })}
            {productLine({
              text: "Hearing Impairment",
              icon: <IoMdHeadset />,
            })}
            {productLine({
              text: "Vision Impairment",
              icon: <FaCamera />,
            })}
            {productLine({
              text: "Cognitive Support",
              icon: <IoMdHeadset />,
            })}
            {productLine({
              text: "Assistive Apps and Software",
              icon: <AiOutlineAppstoreAdd />,
            })}
          </div>
        </div>
        <section className="bg-[#E0E0E0] lg:px-12 pt-7 md:pt-0">
          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-evenly">
            <div className="flex flex-col gap-4 items-center md:items-start  justify-center md:px-12 md:py-12 lg:py-0 lg:px-0">
              <h1 className="text-[2rem] lg:text-[3rem] font-[700] capitalize text-center md:text-left tracking-[0.04rem] md:tracking-[0.06rem] w-[20.8125rem] lg:w-[30.328rem] text-heading">
                Assistive Technologies Redefined for You
              </h1>
              <p className="text-heading font-[1rem] md:font-[1.125rem] text-center md:text-left tracking-[0.04rem] md:tracking-[0.0225rem] w-[20.8125rem] lg:w-[30.328rem]">
                Tech for empowerment: building inclusive futures. Your journey
                to independence starts here
              </p>
              <div className="flex gap-[0.75rem] md:gap-[1.12rem] mt-[2.5rem]">
                <Link
                  href="#contact"
                  className="text-white hover:bg-white hover:text-primary hover:border-2 bg-primary rounded-[1rem] px-[1rem] md:px-[2rem] py-[1.13rem] md:mt-0 font-[700]"
                >
                  Contact Us
                </Link>
                <Link
                  href="#about"
                  className="text-primary hover:bg-primary hover:text-white bg-white rounded-[1rem] border-primary border-2 px-[1rem] md:px-[2rem] py-[1.13rem] md:mt-0 font-[700]"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="mt-12 md:mt-0 ">
              <Image
                src={onWheelChair}
                alt="Image wheelchair"
                className=""
                priority
                quality={100}
              />
            </div>
          </div>
        </section>
      </section>
    </AnimatedSection>
  );
};

export default Hero;
