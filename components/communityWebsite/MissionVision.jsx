import React from "react";

const MissionVision = () => {
  return (
    <section className="flex flex-col lg:flex-row mx-5 md:mx-20 lg:mx-0 gap-[1.25rem] md:justify-center">
      <div className="py-[2.07rem] px-[1.4rem] bg-[#FFF6FF] flex flex-col gap-[.75rem] rounded-[.75rem]">
        <h1 className="text-[1.25rem] font-[600] tracking-[0.05rem]">
          Our Mission
        </h1>
        <p className="w-[19.46rem] md:w-[31rem] text-[1rem] tracking-[0.04rem] text-heading">
          To create an inclusive and empowering community for individuals living
          with disabiiitiess fostering personal growths, skill deveopments and
          meaningfull connections in both technoogy and various other fields.
        </p>
      </div>
      <div className="py-[2.07rem] px-[1.4rem] bg-[#FFF6FF] flex flex-col gap-[.75rem] rounded-[.75rem]">
        <h1 className="text-[1.25rem] font-[600] tracking-[0.05rem]">
          Our Vision
        </h1>
        <p className="w-[19.46rem] md:w-[31rem] text-[1rem] tracking-[0.04rem] text-heading">
          To be the driving force behind a diverse, inclusive, and accessiible
          community that nurtures talents, embraces diversities and equips
          individuals with disaiilities with the skills and resources needed to
          lead fulfillng lives and achieve their aspirations.
        </p>
      </div>
    </section>
  );
};

export default MissionVision;
