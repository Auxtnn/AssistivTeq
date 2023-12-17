import Image from "next/image";
import React from "react";
import { icon3 } from "@/public/images";
import {
  MdAssistWalker,
  MdHearing,
  MdOutlineSportsGolf,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { IoEyeOutline, IoAppsOutline } from "react-icons/io5";
import { SiGoogleassistant } from "react-icons/si";
import { GiBrain } from "react-icons/gi";

const Products = () => {
  // Product card component
  const productCard = ({ icon, heading, text, mt }) => {
    return (
      <div className={`flex flex-col gap-4 lg:gap-[1.88rem] md:mt-${mt}`}>
        <div className="p-[0.69rem] w-[3.125rem] h-[3.125rem] lg:w-[4.375rem] lg:h-[4.375rem] bg-[#E0E0E0] rounded-[0.25rem] flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg lg:text-2xl font-bold tracking-wider text-heading">
            {heading}
          </h1>
          <p className="text-heading capitalize text-sm lg:text-[1rem] tracking-[0.035rem] lg:-tracking-wider w-[17rem] lg:w-[17rem] opacity-60 leading-[1.5rem]">
            {text}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section
      id="product"
      className="flex flex-col md:flex-row pt-[2.5rem] md:pt-[5rem]"
    >
      <div className="md:ml-[2.06rem] ">
        <Image
          src={icon3}
          alt="icon"
          className="relative w-[1.5rem] h-[1.5rem] md:w-[12.56rem] md:h-[5.56rem]"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-[0.75rem] pl-[2rem] md:pl-0 md:ml-[.1rem] md:mt-[3rem]">
          <h1 className="text-[1.25rem] md:text-[2rem] font-bold tracking-wider md:tracking-[0.08rem] text-heading">
            Our Products
          </h1>
          <p className="font-medium text-[1rem] lg:text-[1.5rem] w-[17.726rem] lg:w-[34.92rem] tracking-wider text-heading capitalize">
            Discover a Range of Assistive Technologies Tailored for you.
          </p>
        </div>

        {/* Product cards */}
        <div className="mt-[2.75rem] md:-ml-[3rem] md:mt-[3.7rem] flex flex-col md:flex-row md:flex-wrap px-8 md:px-0 gap-[1.75rem] lg:gap-[3.25rem] justify-center">
          {productCard({
            // mt: '3rem',
            icon: (
              <MdAssistWalker className="text-primary w-[3.06rem] h-[3.06rem]" />
            ),
            heading: "Mobility Assistant",
            text: "Move Freely, live independently: Discover Our Mobility Solutions for you",
          })}
          {productCard({
            icon: (
              <IoEyeOutline className="text-primary w-[3.06rem] h-[3.06rem]" />
            ),
            heading: "Vision Devices",
            text: "See the World Anew: Empowering Lives with Our Vision Devices",
          })}
          {productCard({
            icon: (
              <MdHearing className="text-primary w-[3.06rem] h-[3.06rem]" />
            ),
            heading: "Hearing Aids",
            text: "Sounds of Inclusion: Enhancing Hearing with Our Cutting-Edge Aids",
          })}
          {productCard({
            icon: (
              <SiGoogleassistant className="text-primary w-[3.06rem] h-[3.06rem]" />
            ),
            heading: "Speech Devices",
            text: "Express Yourself with Confidence: Unlock Potential Through Speech Devices",
          })}
          {productCard({
            icon: <GiBrain className="text-primary w-[3.06rem] h-[3.06rem] " />,
            heading: "Cognitive Support",
            text: "Mindful Assistance: Nurturing Cognitive Well-being with Our Supportive Solutions",
          })}
          {productCard({
            icon: (
              <IoAppsOutline className="text-primary w-[3.06rem] h-[3.06rem]" />
            ),
            heading: "Assistive Apps",
            text: "Seamless Living, One App at a Time: Explore Our Assistive Applications",
          })}
          {productCard({
            icon: (
              <MdOutlineSportsGolf className="text-primary w-[3.06rem] h-[3.06rem]" />
            ),
            heading: "Adaptive Sports",
            text: "Play Without Limits: Embrace the Thrill of Adaptive Sports with Our Equipment",
          })}
          {productCard({
            icon: (
              <MdOutlineDashboardCustomize className="text-primary w-[3.06rem] h-[3.06rem]" />
            ),
            heading: "Customized Aid",
            text: "Tailored for You: Unleashing Possibilities with Our Custom Assistive Solutions",
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
