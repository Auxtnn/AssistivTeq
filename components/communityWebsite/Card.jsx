"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, text, logo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      // initial={{ opacity: 0 }}
      whileInView={{ y: [50, 0] }}
      transition={{ duration: 0.85, ease: "easeIn" }}
      className="w-full h-[19.3] md:w-[22rem] md:h-[24.125rem] py-[1.47rem] md:py-[1.44rem] px-[.63rem] md:px-[1.34rem] border rounded-[1.875rem] shadow-card items-center md:items-start flex flex-col"
    >
      <div className="w-[4.35rem] h-[4.35rem] bg-primary rounded-[50%] items-center justify-center flex">
        <Image src={logo} alt="logo" className="relative" />
      </div>
      <h1 className="text-[1.125rem] md:text-[1.5rem] font-[600] text-[#252128] mt-[1.38rem] md:mt-[1.18rem] mb-[.75rem] tracking-[0.06rem]">
        {title}
      </h1>
      <p className="text-heading text-center md:text-left text-[.875rem] md:text-[1rem] tracking-[0.04rem]">
        {text}
      </p>
    </motion.div>
  );
};

export default Card;
