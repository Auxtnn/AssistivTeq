"use client";

import Image from "next/image";
import React from "react";
import { icon3 } from "../../public/images";
import {
  MdAssistWalker,
  MdHearing,
  MdOutlineSportsGolf,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { IoEyeOutline, IoAppsOutline } from "react-icons/io5";
import { SiGoogleassistant } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { motion } from "framer-motion";

const Products = () => {
  const ProductCard = ({ icon, heading, text }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-20, 0], opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-4 lg:gap-6 p-6 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
      >
        <div className="p-3 w-14 h-14 lg:w-16 lg:h-16 bg-[#E0E0E0] rounded-lg flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg lg:text-xl font-bold tracking-wide text-heading">
            {heading}
          </h2>
          <p className="text-heading text-sm lg:text-base tracking-wide opacity-60 leading-relaxed">
            {text}
          </p>
        </div>
      </motion.div>
    );
  };

  const products = [
    {
      icon: <MdAssistWalker className="text-primary w-8 h-8 lg:w-10 lg:h-10" />,
      heading: "Mobility Assistant",
      text: "Move Freely, live independently: Discover Our Mobility Solutions for you",
    },
    {
      icon: <IoEyeOutline className="text-primary w-8 h-8 lg:w-10 lg:h-10" />,
      heading: "Vision Devices",
      text: "See the World Anew: Empowering Lives with Our Vision Devices",
    },
    {
      icon: <MdHearing className="text-primary w-8 h-8 lg:w-10 lg:h-10" />,
      heading: "Hearing Aids",
      text: "Sounds of Inclusion: Enhancing Hearing with Our Cutting-Edge Aids",
    },
    {
      icon: (
        <SiGoogleassistant className="text-primary w-8 h-8 lg:w-10 lg:h-10" />
      ),
      heading: "Speech Devices",
      text: "Express Yourself with Confidence: Unlock Potential Through Speech Devices",
    },
    {
      icon: <GiBrain className="text-primary w-8 h-8 lg:w-10 lg:h-10" />,
      heading: "Cognitive Support",
      text: "Mindful Assistance: Nurturing Cognitive Well-being with Our Supportive Solutions",
    },
    {
      icon: <IoAppsOutline className="text-primary w-8 h-8 lg:w-10 lg:h-10" />,
      heading: "Assistive Apps",
      text: "Seamless Living, One App at a Time: Explore Our Assistive Applications",
    },
    {
      icon: (
        <MdOutlineSportsGolf className="text-primary w-8 h-8 lg:w-10 lg:h-10" />
      ),
      heading: "Adaptive Sports",
      text: "Play Without Limits: Embrace the Thrill of Adaptive Sports with Our Equipment",
    },
    {
      icon: (
        <MdOutlineDashboardCustomize className="text-primary w-8 h-8 lg:w-10 lg:h-10" />
      ),
      heading: "Customized Aid",
      text: "Tailored for You: Unleashing Possibilities with Our Custom Assistive Solutions",
    },
  ];

  return (
    <section
      id="product"
      className="container mx-auto lg:w-11/12 px-4 py-12 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-8 lg:gap-16"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
          <div className="w-16 md:w-24 flex-shrink-0">
            <Image src={icon3} alt="icon" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-heading">
              Our Products
            </h1>
            <p className="text-lg md:text-2xl font-medium tracking-wide text-heading max-w-2xl">
              Discover a Range of Assistive Technologies Tailored for you.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              heading={product.heading}
              text={product.text}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Products;
