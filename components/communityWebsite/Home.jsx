"use client";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import {
  headerImage,
  gift,
  eye,
  leaf,
  inclusive,
  education,
  skill,
  training,
  people,
  john,
  vector,
} from "../../public/images";
import Card from "./Card";
import Form from "./Form";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const provideCards = ({ image, title }) => {
    return (
      <div className="w-full h-auto min-h-[24.375rem] overflow-hidden shadow-card rounded-[0.5rem] rounded-t-[0.8rem]">
        <div className="relative h-0 pb-[77%]"> {/* Aspect ratio container */}
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="p-4"
        >
          <h1 className="font-semibold text-heading text-lg md:text-xl mb-4 leading-normal">
            {title}
          </h1>
          <Link
            className="text-primary text-base tracking-wide hover:underline"
            href="/community/supports"
          >
            Read More
          </Link>
        </motion.div>
      </div>
    );
  };

  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpenModal(!openModal);
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
    setOpenModal(!openModal);
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Image 
        src={vector} 
        alt="vector" 
        className="absolute top-0 left-0 w-full md:w-auto" 
      />
      
      {/* Header Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 pt-10 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading text-center lg:text-left"
            >
              Building Bridges, Breaking Barriers
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-lg text-heading opacity-80 text-center lg:text-left max-w-2xl"
            >
              A tech community that celebrates diversity and champions equality.
              Together, we're breaking down barriers and creating a world where
              every person's abilities shine.
            </motion.p>

            <button
              onClick={handleOpen}
              className="text-white bg-primary rounded-2xl px-8 py-4 font-bold transform hover:scale-105 transition-transform"
            >
              Join Us
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-2xl mx-auto lg:mx-0"
          >
            <Image
              src={headerImage}
              alt="header image"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-heading mb-4">
              AssistivTeq Community
            </h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-base text-heading opacity-80 text-center lg:text-left"
          >
            We are the beacon of inclusive support in tech providing valuable
            resources, training, and a warm community to accommodate
            diversity, champion equality, and work tirelessly to create a more
            inclusive world where every person's unique abilities are
            recognized and celebrated.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card
            logo={eye}
            title="Our Vision"
            text="To be the driving force behind a diverse, inclusive, and accessible community that nurtures talents, embraces diversity and equip individuals with disability with the skills and resources needed to lead fulfillng lives and achieve their aspirations."
          />
          <Card
            logo={leaf}
            title="Our Mission"
            text="To create an inclusive and empowering community for individuals living with disability fostering personal growths, skills developments and meaningfull connections in both technology and various other fields."
          />
          <Card
            logo={gift}
            title="Our Value"
            text="Empowering disability, fostering inclusion and providing a warm environment to break barriers and create a world where every person's abilities shine."
          />
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="bg-[#66328E0D] py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl font-bold text-heading text-center lg:text-left mb-6 lg:mb-0"
            >
              The Support AssistivTeq Community Provides
            </motion.h2>
            
            <Link
              href="/community/supports"
              className="hidden lg:flex text-white bg-primary rounded-2xl px-8 py-4 font-bold shadow-card hover:opacity-90 transition-opacity"
            >
              View More
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {provideCards({
              title: "Inclusive Community",
              image: inclusive,
            })}
            {provideCards({
              title: "Training and Empowerment",
              image: training,
            })}
            {provideCards({
              title: "Education and Awareness",
              image: education,
            })}
            {provideCards({
              title: "Skill Acquisition Programs",
              image: skill,
            })}
          </div>

          <Link
            href="/community/supports"
            className="lg:hidden text-white bg-primary rounded-2xl px-8 py-4 font-bold shadow-card mt-8 block w-fit mx-auto"
          >
            View More
          </Link>
        </div>
      </section>

      {/* Technology Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85 }}
              className="text-2xl md:text-4xl font-bold text-heading mb-8 text-center lg:text-left"
            >
              How we leverage tech to create an inclusive world
            </motion.h2>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 mb-8"
            >
              {[
                "Support the development and adoption of assistive technologies.",
                "Embrace the concept of universal design, which aims to create products and environments that are usable by people with the widest range of abilities.",
                "Leverage our community to connect individuals with disabilities to encourage networking.",
                "Collaborate with organizations, non-profits, and government agencies to share knowledge and resources for driving positive change."
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-4 text-base text-[#252128]">
                  <GoDotFill className="text-primary flex-shrink-0 mt-1" />
                  {text}
                </li>
              ))}
            </motion.ul>

            <button
              onClick={handleOpen}
              className="text-white bg-primary rounded-2xl px-8 py-4 font-bold shadow-card hover:opacity-90 transition-opacity"
            >
              Join Us
            </button>
          </div>

          <div className="order-1 lg:order-2">
            <Image
              src={people}
              alt="people"
              className="w-full max-w-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <Form handleClose={handleClose} open={open} />
        </div>
      )}
    </main>
  );
}