import Image from "next/image";
import React from "react";
import { partners } from "@/public/images";
import AnimatedSection from "./Animation";


const Partnership = () => {
  return (
    <AnimatedSection>
      <section className="flex flex-col lg:flex-row justify-evenly items-center px-[1.25rem] md:px-0 lg:mt-[2rem]">
        <div className="md:px-12 lg:px-0">
          <h1 className="text-heading text-lg md:text-[2rem] tracking-wider md:leading-[2.5rem] font-bold mb-[.75rem] lg:w-[36.8125rem]">
            The Partnership And Expertise That Fuel Our Growth
          </h1>
          <p className="text-heading text-[1rem] md:text-[1.5rem] tracking-wider font-normail mb-[.75rem] lg:w-[33.78088rem]">
            Collaborating for Impact: Building a Future of Inclusivity Together
          </p>
        </div>
        <div className="mt-8 lg:mt-0">
          <Image
            src={partners}
            alt="partner brands"
            className="relative w-auto lg:w-[25.9rem] h-auto"
          />
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Partnership;
