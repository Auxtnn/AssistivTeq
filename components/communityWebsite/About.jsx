"use client";
import React from "react";
import Image from "next/image";
import { aboutHeader, aboutHero } from "@/public/images";
import Link from "next/link";

const About_us = () => {
  return (
    <div className="">
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
          <Link
            href="#contact"
            className=" shadow-card bg-primary w-[7.6875rem] md:w-[9.6875rem] h-[2.25rem] md:h-[3.5rem] flex items-center justify-center text-white font-[700] rounded-[0.5rem]"
          >
            Contact Us
          </Link>
        </article>
        <div className="hidden md:flex">
          <Image src={aboutHero} className="relative" alt="hero image" />
        </div>
      </section>
    </div>
  );
};

export default About_us;
