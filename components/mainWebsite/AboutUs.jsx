"use client";

import React from "react";
import Image from "next/image";
import { groupofpeople, icon3 } from "../../public/images";
import { IoAppsOutline } from "react-icons/io5";
import { TbBuildingCommunity, TbDisabled2 } from "react-icons/tb";
import { MdOutlineJoinInner } from "react-icons/md";
import { motion } from "framer-motion";

const AboutUs = () => {
  const ProductCard = ({ icon, heading, text }) => {
    return (
      <div className="w-full  flex flex-col gap-4 lg:gap-6 bg-white rounded-2xl hover:border-b-2 hover:border-primary p-4 lg:p-6 shadow-lg transition-all duration-300">
        <div className="p-2 lg:p-3 w-12 h-12 lg:w-16 lg:h-16 bg-[#E0E0E0] rounded-lg flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg lg:text-2xl font-bold tracking-wider text-heading">
            {heading}
          </h2>
          <p className="text-heading text-sm lg:text-base tracking-wide opacity-60 leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section
      id="about"
      className="container lg:w-11/12 mx-auto px-4 py-8 lg:py-16"
    >
      {/* Who we are section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
        <Image
          src={groupofpeople}
          alt="people with disabilities"
          priority
          quality={100}
          className="hidden lg:block lg:w-5/12 rounded-2xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [-40, 0], opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full lg:w-7/12"
        >
          <Image
            src={icon3}
            alt="icon"
            className="lg:hidden w-8 h-8 md:w-16 md:h-16 mb-4"
          />
          <h1 className="text-2xl md:text-4xl font-bold text-heading mb-4">
            Who are we?
          </h1>
          <h3 className="text-xl md:text-2xl font-medium text-heading mb-6">
            Empowering Lives Through Innovative Assistive Technologies
          </h3>
          <Image
            src={groupofpeople}
            alt="people with disabilities"
            className="block lg:hidden w-full rounded-2xl mb-6"
          />
          <article className="text-sm md:text-base text-heading opacity-80 leading-relaxed mb-8">
            We are dedicated to revolutionizing the way individuals with diverse
            abilities experience the world. We believe in the transformative
            power of technology to break down barriers, foster independence, and
            create a more inclusive society.
            <br />
            <br />
            We design, develop, and deliver cutting-edge assistive technology
            software solutions that enhance the lives of individuals with
            disabilities, promoting independence, accessibility, and
            inclusivity.
          </article>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all duration-300 font-bold text-center"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* What we can do for you */}
      <div className="mt-16 lg:mt-24 flex flex-col lg:flex-row gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [-40, 0], opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full lg:w-5/12"
        >
          <Image
            src={icon3}
            alt="icon"
            className="w-8 h-8 md:w-16 md:h-16 mb-4"
          />
          <h1 className="text-2xl md:text-4xl font-bold text-heading mb-4">
            What we can do for you
          </h1>
          <h3 className="text-xl md:text-2xl font-medium text-heading mb-6">
            Discover Innovations for Greater Independence
          </h3>
          <article className="text-sm md:text-base text-heading opacity-80 leading-relaxed mb-8">
            With a passion for innovation and a commitment to excellence, we
            strive to redefine accessibility. Our range of products is
            meticulously designed to address unique needs, ensuring that
            everyone has the tools to lead a more independent, fulfilling life.
          </article>
          <button className="hidden lg:inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all duration-300 font-bold">
            Explore All
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-40, 0], opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full lg:w-7/12"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <ProductCard
              icon={
                <IoAppsOutline className="text-primary w-8 h-8 lg:w-10 lg:h-10" />
              }
              heading="Assistive Tech"
              text="Personalized assistive technologies designed to meet your specific needs."
            />
            <ProductCard
              icon={
                <TbBuildingCommunity className="text-primary w-8 h-8 lg:w-10 lg:h-10" />
              }
              heading="Community"
              text="Join a community that advocates for inclusivity and provides support."
            />
            <ProductCard
              icon={
                <TbDisabled2 className="text-primary w-8 h-8 lg:w-10 lg:h-10" />
              }
              heading="Empowerment"
              text="Our commitment is to empower you to lead a more independent and fulfilling life"
            />
            <ProductCard
              icon={
                <MdOutlineJoinInner className="text-primary w-8 h-8 lg:w-10 lg:h-10" />
              }
              heading="Partnership"
              text="Collaborate with us to advance assistive technology and create a more inclusive world."
            />
          </div>
          <button className="lg:hidden w-full px-8 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all duration-300 font-bold">
            Explore All
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
