"use client";
import React, { useState, useEffect } from "react";
import { navLinks } from "../../constant";
import Form from "./Form";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Nav = () => {
  const [toggle, setIsToggle] = useState(false);



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
  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const closeMobileMenu = () => {
    setIsToggle(false);
  };

  // Close the menu if clicked outside the menu
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (toggle && !e.target.closest(".mobile-menu")) {
        closeMobileMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [toggle]);

  return (
    <nav className=" sticky top-0 z-20 h-full bg-white px-[1.16rem] pt-[.7rem] md:pt-[1.5rem] md:pl-[7rem] justify-between items-center flex md:pr-[5.7rem] border-b-2 pb-4">
      {/* logo */}
      <Link href="/" className="">
      <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Image
            alt="logo"
            src="/images/logo2.png"
            width={160}
            height={100}
            sizes="100vw"
            className="w-[9rem] h-auto"
            unoptimized
          />
        </motion.div>
      </Link>
      {/* navlinks */}

      {/* Mobile Nav */}
      <div className="lg:hidden">
        <HiMenuAlt1
          onClick={() => setIsToggle(!toggle)}
          className=" w-[2rem] h-[2rem] text-primary"
        />
        {toggle && (
          <div className="mobile-menu h-[100vh] bg-primary absolute top-0 w-[80vw] right-0 z-10">
            <HiX
              className="absolute right-0 text-white mr-[12px] top-[12px] w-[2rem] h-[2rem]"
              onClick={() => setIsToggle(!toggle)}
            />
            <ul className="flex flex-col gap-[2.5rem] mt-[3rem] px-[2rem]">
              {navLinks.map((items) => {
                return (
                  <li key={items.key} className="flex flex-col gap-[3rem]">
                    <Link
                      href={items.href}
                      key={`${items.key} + 1`}
                      className="text-white uppercase"
                    >
                      {items.title}
                    </Link>
                    
                  </li>
                );
              })}
            
           
            <button
              onClick={handleOpen}
              className="text-primary bg-white rounded-[1rem] px-[2rem] py-[.75rem] h-[3rem] uppercase"
            >
              Join Us
            </button>
            </ul>
          </div>
        )}
      </div>

      {/* Big screen Nav */}
      <div className="hidden lg:flex">
        <div className="items-center justify-center">
          <ul className="flex  gap-[2.5rem] items-center  ">
            {navLinks.map((items) => {
              return (
                <li
                  key={items.key}
                  className="flex flex-col gap-[3rem] flex-wrap"
                >
                  <Link
                    href={items.href}
                    key={`${items.key} + 1`}
                    className="text-heading text-[1rem] font-[600] tracking-[0.08rem] uppercase"
                  >
                    {items.title}
                  </Link>
                </li>
              );
            })}

          

            <button
              onClick={handleOpen}
              className="text-white bg-primary rounded-[1rem] px-[2rem] py-[.75rem] h-[3rem] uppercase"
            >
              Join Us
            </button>
          </ul>
        </div>
      </div>
      {openModal && (
        <div className="absolute right-[50%]">
          <Form handleClose={handleClose} open={open} />
        </div>
      )}
    </nav>
  );
};

export default Nav;
