import Image from "next/image";
import React from "react";
import { icon3 } from "@/public/images";
import { MdAssistWalker } from "react-icons/md";

const Products = () => {
  // Product card component
  const productCard = ({ icon, heading, text }) => {
    return (
      <div className="flex flex-col gap-4 lg:gap-[1.88rem]">
        <div className="p-[0.69rem] w-[3.125rem] h-[3.125rem] lg:w-[4.375rem] lg:h-[4.375rem] bg-[#E0E0E0] rounded-[0.25rem] flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg lg:text-2xl font-bold tracking-wider text-heading">
            {heading}
          </h1>
          <p className="text-heading capitalize text-sm lg:text-[1rem] tracking-[0.035rem] lg:-tracking-wider w-[21.62rem] lg:w-[17.83rem] opacity-60">
            {text}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="flex flex-col md:flex-row pt-[2.5rem] md:pt-[5rem]">
      <div className="md:ml-[2.06rem] ">
        <Image
          src={icon3}
          className="relative w-[1.5rem] h-[1.5rem] md:w-[4.56rem] md:h-[4.92rem]"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-[0.75rem] pl-[2rem] md:pl-0 md:ml-[.1rem] md:mt-[3rem]">
          <h1 className="text-[1.25rem] md:text-[2rem] font-bold tracking-wider md:tracking-[0.08rem] text-heading">
            Our Products
          </h1>
          <p className="font-medium text-[1rem] lg:text-[1.5rem] w-[21.726rem] lg:w-[34.92rem] tracking-wider text-heading capitalize">
            Discover a Range of Assistive Technologies Tailored for you.
          </p>
        </div>

        {/* Product cards */}
        <div className="mt-[2.75rem] md:mt-[3.7rem]">
          {productCard({
            icon: <MdAssistWalker className="text-primary w-[3.06rem] h-[3.06rem]"/>,
            heading: "Mobility Assistant",
            text: "Move Freely, live independently: Discover Our Mobility Solutions for you",
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
