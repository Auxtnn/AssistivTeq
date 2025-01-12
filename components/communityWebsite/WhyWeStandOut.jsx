import React from "react";
import { group17 } from "../../public/images";
import Image from "next/image";

const WhyWeStandOut = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center md:px-[7.6rem] md:gap-[6.44rem] pb-[2.5rem] md:mt-[5.17rem]">
      <div className="hidden md:flex">
        <Image src={group17} className="relative" alt="hero image" />
      </div>
      <article className="flex flex-col items-center md:items-start w-[100%] md:w-auto">
        <h3 className="text-primary font-[500] tracking-[0.02rem] text-[1rem] md:text-[1.5rem] text-center md:text-left mb-[12px]">
          Why We Stand Out
        </h3>
        <h1 className="text-center text-[1.5rem] font-[700] tracking-[0.06rem] mb-4 md:text-[2.25rem] md:text-left text-heading w-[17.13419rem] md:w-[31.47838rem]">
          Turning disabilities into abilities
        </h1>
        <div className=" md:hidden flex px-4 md:px-0 py-4">
          <Image src={group17} className="relative" alt="hero image" />
        </div>
        <p className="text-center text-[1rem] tracking-[0.04rem] mb-[2.5rem] w-[19.125rem] md:w-[34.32rem] md:text-[1rem] md:text-left text-[#252128CC]">
          At AssistivTeq Community, innovation is at the heart of everything we
          do. our cutting-edge solutions not only provide tech skills and
          empowerment but also champions inclusive community. We solve today's
          challenges but anticipate tomorrow's needs. Join a community of
          forward-thinkers for unparalleled security, seamless integration, and
          a tech future that's one step ahead.
        </p>
        {/* <div className="flex justify-around w-[90%]">
          <div className="px-[0.97rem] md:px-[1.09rem] py-[0.81rem] md:py-[0.75rem]  bg-[#FFFADE] rounded-[0.5rem]">
            <h1 className="text-[1.25rem] md:text-[2rem] font-[600] tracking-[0.05rem] text-primary">
              30+
            </h1>
            <h1 className="text-[.75rem] md:text-[1rem] font-[600] tracking-[0.03rem] text-primary">
              States
            </h1>
          </div>
          <div className="px-[0.97rem] md:px-[1.09rem] py-[0.81rem] md:py-[0.75rem]  bg-[#FFFADE] rounded-[0.5rem]">
            <h1 className="text-[1.25rem] md:text-[2rem] font-[600] tracking-[0.05rem] text-primary">
              10+
            </h1>
            <h1 className="text-[.75rem] md:text-[1rem] font-[600] tracking-[0.03rem] text-primary">
              Professionals
            </h1>
          </div>
          <div className="px-[0.97rem] md:px-[1.09rem] py-[0.81rem] md:py-[0.75rem]  bg-[#FFFADE] rounded-[0.5rem]">
            <h1 className="text-[1.25rem] md:text-[2rem] font-[600] tracking-[0.05rem] text-primary">
              50+
            </h1>
            <h1 className="text-[.75rem] md:text-[1rem] font-[600] tracking-[0.03rem] text-primary">
              Ongoing Projects
            </h1>
          </div>
        </div> */}
      </article>
    </section>
  );
};

export default WhyWeStandOut;
