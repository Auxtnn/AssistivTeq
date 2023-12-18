"use client";
import React from "react";
import {
  serviceHero,
  inclusive,
  training,
  education,
  skill,
  mobileHeader,
} from "@/public/images";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/communityWebsite/Footer";

const service = () => {
  return (
    <main>
      <Image
        src={serviceHero}
        priority
        alt="hero image"
        className="hidden md:flex relative w-[100%]"
      />
      <Image src={mobileHeader} className="relative flex md:hidden w-[100%]" />
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center mt-[2.5rem] lg:mt-[5rem]">
        <h3 className="text-primary text-[1rem] font-[500] text-center tracking-[0.02rem]">
          What We Do For You & With You
        </h3>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="hidden lg:flex text-[1.5rem] md:text-[2.25rem] font-[700] tracking-[0.06rem] tex-center text-heading"
        >
          Community Services
        </motion.h1>
      </div>
      {/* Inclusive Community */}
      <section className="flex flex-col lg:gap-[5.7rem] lg:flex-row items-center lg:justify-between lg:mr-[7rem] lg:mt-[5rem]">
        <Image
          src={inclusive}
          alt="inclusive community"
          className="relative w-[39rem] h-[23.75rem] hidden lg:flex"
        />
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={[{ y: [-50, 0] }, { opacity: 1 }]}
            transition={{ duration: 0.85, ease: "easeIn" }}
            className="font-[700] tracking-[0.09rem] text-[1.5rem] md:text-[2.25rem] text-heading text-center lg:text-left"
          >
            Inclusive Community
          </motion.h1>
          <Image
            src={inclusive}
            alt="inclusive community"
            className="lg:hidden relative w-[20.43rem] h-[14.93rem] py-[2.5rem]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-center lg:text-left text-[1rem] tracking-[0.04rem] w-[21.375rem] md:w-[37.3rem] mt-4"
          >
            Fostering an inclusive community requires clear vision, committed
            leadership, and ongoing efforts. We leverage tech to create a
            community which provides education on diversity, creation of
            inclusive policies, diverse representation in leadership, physical
            and digital accessibility, open communication, and celebration of
            diversity. Inclusivity is not a static goal but an ongoing
            commitment to creating a space where every individual feels valued
            and respected.
          </motion.div>
          <a className="shadow-card rounded-[1rem] border-2 border-primary w-[9.875rem] flex h-[3.5rem] items-center justify-center text-primary font-[700] mt-[2.5rem]">
            Get Started
          </a>
        </div>
      </section>
      {/* Training and Empowerment */}
      <section className="flex flex-col lg:flex-row-reverse lg:gap-[5.7rem]  items-center lg:justify-between lg:ml-[7rem] lg:mt-[5rem] mt-[2.5rem]">
        <Image
          src={training}
          alt="inclusive community"
          className="relative w-[39rem] h-[23.75rem] hidden lg:flex"
        />
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={[{ y: [-50, 0] }, { opacity: 1 }]}
            transition={{ duration: 0.85, ease: "easeIn" }}
            className="font-[700] tracking-[0.09rem] text-[1.5rem] md:text-[2.25rem] text-heading text-center lg:text-left w-[15.04688rem] md:w-auto"
          >
            Training and Empowerment
          </motion.h1>
          <Image
            src={training}
            alt="inclusive community"
            className="lg:hidden relative w-[20.43rem] h-[14.93rem] py-[2.5rem]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-center lg:text-left text-[1rem] tracking-[0.04rem] w-[21.375rem] md:w-[37.3rem] mt-4"
          >
            In our journey toward an inclusive community, emphasis on training
            and empowerment stands as a cornerstone. Through purposeful training
            initiatives, we provide our community members with the knowledge and
            skills essential for fostering diversity appreciation. These
            sessions create a supportive environment, encouraging individuals to
            not only understand the significance of inclusivity but also to
            actively contribute to its realization. Together, through education
            and empowerment, we're not just building a community — we're
            cultivating a culture of understanding, respect, and active
            participation for all.
          </motion.div>
          <a className="shadow-card rounded-[1rem] border-2 border-primary w-[9.875rem] flex h-[3.5rem] items-center justify-center text-primary font-[700] mt-[2.5rem]">
            Get Started
          </a>
        </div>
      </section>
      {/* Education and Awareness  */}
      <section className="flex flex-col lg:gap-[5.7rem] lg:flex-row items-center lg:justify-between lg:mr-[7rem] mt-[2.5rem] lg:mt-[5rem]">
        <Image
          src={education}
          alt="inclusive community"
          className="relative w-[39rem] h-[23.75rem] hidden lg:flex"
        />
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={[{ y: [-50, 0] }, { opacity: 1 }]}
            transition={{ duration: 0.85, ease: "easeIn" }}
            className="font-[700] tracking-[0.09rem] text-[1.5rem] md:text-[2.25rem] text-heading text-center lg:text-left w-[15.04688rem] md:w-auto"
          >
            Education and Awareness
          </motion.h1>
          <Image
            src={education}
            alt="inclusive community"
            className="lg:hidden relative w-[20.43rem] h-[14.93rem] py-[2.5rem]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-center lg:text-left text-[1rem] tracking-[0.04rem] w-[21.375rem] md:w-[37.3rem] mt-4"
          >
            Promoting education and awareness is key to building an inclusive
            community. We conduct workshops, share resources, and use various
            communication channels to highlight the importance of diversity and
            inclusion. We also encourage open dialogue and collaboration with
            experts to enrich understanding and foster a culture of inclusivity.
          </motion.div>
          <a className="shadow-card rounded-[1rem] border-2 border-primary w-[9.875rem] flex h-[3.5rem] items-center justify-center text-primary font-[700] mt-[2.5rem]">
            Get Started
          </a>
        </div>
      </section>
      {/*  Skill Acquisition Programs  */}
      <section className="flex flex-col lg:flex-row-reverse lg:gap-[5.7rem]  items-center lg:justify-between lg:ml-[7rem] lg:mt-[5rem] mt-[2.5rem]">
        <Image
          src={skill}
          alt="inclusive community"
          className="relative w-[39rem] h-[23.75rem] hidden lg:flex"
        />
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={[{ y: [-50, 0] }, { opacity: 1 }]}
            transition={{ duration: 0.85, ease: "easeIn" }}
            className="font-[700] tracking-[0.09rem] text-[1.5rem] md:text-[2.25rem] text-heading text-center lg:text-left w-[15.04688rem] md:w-auto"
          >
            Skill Acquisition Programs
          </motion.h1>
          <Image
            src={skill}
            alt="inclusive community"
            className="lg:hidden relative w-[20.43rem] h-[14.93rem] py-[2.5rem]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-center lg:text-left text-[1rem] tracking-[0.04rem] w-[21.375rem] md:w-[37.3rem] mt-4"
          >
            Skill acquisition programs stand at the heart of our commitment to
            inclusivity, providing a dynamic platform for individual growth and
            community empowerment. Through thoughtfully tailored workshops and
            courses, we strive to cater to a diverse spectrum of skills and
            interests, ensuring that every member of our community has equal
            access to opportunities for development. Mentorship and peer support
            further enhance our skill acquisition initiatives. By facilitating
            connections between individuals with different skill levels, we
            create a collaborative and supportive community. This not only
            enhances the learning experience but also empowers each member to
            contribute their unique talents to the collective growth of our
            inclusive community.
          </motion.div>
          <a className="shadow-card rounded-[1rem] border-2 border-primary w-[9.875rem] flex h-[3.5rem] items-center justify-center text-primary font-[700] my-[2.5rem]">
            Get Started
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default service;
