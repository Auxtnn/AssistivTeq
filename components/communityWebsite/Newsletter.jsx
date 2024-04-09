import React from "react";
import Link from "next/link";

const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className=" flex flex-col items-center justify-center pb-[2.47rem] py-[2.53rem] md:py-[5rem]"
    >
      <h1 className="text-heading text-[1.5rem] md:text-[2.25rem]  font-[700] tracking-wide text-center max-w-[11.625rem] md:max-w-[18.625rem]">
        Sign Up For Our Newsletter
      </h1>
      <div className="flex items-center gap-4 mt-[1.25rem] md:mt-[3.44rem]">
        <input
          placeholder="Enter your email"
          className="border shadow-one outline-none focus:border-primary focus-visible:shadow-none px-[1.88rem] py-[0.63rem] w-[22rem] md:w-[45.1875rem] h-[2.25rem] md:h-[3.5rem] bg-gray-200 text-heading text-[1rem] rounded-[0.5rem] "
        />
        <Link
          href="#"
          className="hidden lg:flex text-white bg-primary rounded-[0.5rem] py-[1.13rem] px-[2rem] font-[700] shadow-card h-[3.5rem] "
        >
          Subscribe
        </Link>
      </div>
      {/* mobile btn */}
      <Link
        href="#"
        className="lg:hidden text-white bg-primary rounded-[0.5rem] flex items-center justify-center mt-[1rem] font-[700] shadow-card w-[9.875rem] h-[2.25rem]"
      >
        Subscribe
      </Link>
    </section>
  );
};

export default Newsletter;
