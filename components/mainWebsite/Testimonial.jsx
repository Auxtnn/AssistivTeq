"use client";
import { icon3 } from "../../public/images";
import Image from "next/image";
import React, { useState } from "react";
import { image_john, john } from "../../public/images";
import AnimatedSection from "./Animation";

const Testimonial = () => {
  // Testimonials
  const testimonials = [
    {
      image: image_john,
      text: "The assistive apps provided by Assistivteq have made my daily life so much easier. They're intuitive, user-friendly, and have become essential tools for seamless living",
      name: "John Doe",
      disability: "Vision impaired",
    },
    {
      image: image_john,
      text: "The assistive apps provided by Assistivteq have made my daily life so much easier. They're intuitive, user-friendly, and have become essential tools for seamless living",
      name: "Jane Smith",
      disability: "Hearing impaired",
    },
    {
      image: image_john,
      text: "The assistive apps provided by Assistivteq have made my daily life so much easier. They're intuitive, user-friendly, and have become essential tools for seamless living",
      name: "Jane Smith",
      disability: "Hearing impaired",
    },
    {
      image: image_john,
      text: "The assistive apps provided by Assistivteq have made my daily life so much easier. They're intuitive, user-friendly, and have become essential tools for seamless living",
      name: "Jane Smith",
      disability: "Hearing impaired",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  // change testimonial dot
  const changePage = (index) => {
    setCurrentPage(index);
  };

  // Testimonial cars
  const TestimonialCard = ({ image, text, name, disability }) => {
    return (
      <div className="flex flex-col gap-[1.62rem] md:flex-row px-[0.62rem] py-[0.81rem] lg:py-[1.81rem] lg:px-[1.54rem] max-w-max border-2 border-grey">
        <div className="relative w-[8.9rem] h-[7.2rem] lg:w-[12.625rem] lg:h-[14.125rem]">
          <Image
            src={image}
            fill
            sizes="w-auto h-auto"
            alt="Testimonial image"
            className="relative w-auto h-auto"
          />
        </div>
        <div className="flex flex-col justify-between">
          <p className=" opacity-80 w-[8.7rem] lg:w-[19.54rem] text-heading text-xs tracking-[0.035rem]">
            {text}
          </p>
          <span className="opacity-80 text-heading text-[1rem] tracking-[0.04rem] font-medium">
            {name}
            <p className=" opacity-80 text-heading text-[1rem] tracking-[0.035rem]">
              {disability}
            </p>
          </span>
        </div>
      </div>
    );
  };

  // Testimonial dots
  const renderDots = () => {
    return testimonials.map((_, index) => (
      <span
        key={index}
        className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
          currentPage === index
            ? "bg-primary w-[1.85rem] h-[0.625rem]"
            : "bg-gray-300"
        }`}
        onClick={() => changePage(index)}
      ></span>
    ));
  };

  // Render testimonial cards
  const renderTestimonials = () => {
    const startIndex = currentPage * 2;
    const endIndex = startIndex + 2;

    return testimonials
      .slice(startIndex, endIndex)
      .map((testimonial, index) => (
        <div
          key={index}
          className="mt-[2.5rem] md:mt-[3.75rem] flex items-center justify-around"
        >
          <TestimonialCard {...testimonial} />
        </div>
      ));
  };

  return (
    <AnimatedSection>
      <section className="mt-[2.5rem] md:mt-[5rem]">
        <div className="">
          <div className="">
            <Image
              src={icon3}
              alt="icon"
              className="relative lg:absolute lg:left-0 lg:-mt-[4rem] w-[1.5rem]  lg:ml-0 h-[1.5rem] md:w-[5.56rem] md:h-[5.56rem]"
            />
          </div>
          <h1 className="text-heading text-lg md:text-[2rem] tracking-wider font-bold mb-[.75rem] ml-4  lg:ml-20">
            What Our Customers Say
          </h1>
        </div>
        {/* Testimonial Section */}
        <div className="flex items-center justify-around">
          {renderTestimonials()}
        </div>
        <div className="flex justify-center my-12 ">{renderDots()}</div>
      </section>
    </AnimatedSection>
  );
};

export default Testimonial;
