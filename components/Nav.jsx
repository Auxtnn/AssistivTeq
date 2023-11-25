"use client";
import React, { useState } from "react";
import { navLinks } from "@/constant";
import Form from "./Form";
import { HiMenuAlt1, HiX } from "react-icons/hi";

const Nav = () => {
  const [toggle, setIsToggle] = useState(false);

  const [openModal, setOpenModal] = useState(false)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpenModal(!openModal)
    setOpen(!open)
  };
  const handleClose = () => {
    setOpen(!open)
    setOpenModal(!openModal)
  };

  return (
    <nav className="px-[1.16rem] pt-[.7rem] md:pt-[1.5rem] md:pl-[7rem] justify-between items-center flex md:pr-[5.7rem] border-b-2 pb-4">
      {/* logo */}
      <div className="text-primary font-[700] text-[1rem] md:text-[2rem]">
        LOGO
      </div>
      {/* navlinks */}

      {/* Mobile Nav */}
      <div className="lg:hidden">
        <HiMenuAlt1
          onClick={() => setIsToggle(!toggle)}
          className=" w-[2rem] h-[2rem] text-primary"
        />
        {toggle && (
          <div className="h-[100vh] bg-primary absolute top-0 w-[80vw] right-0 z-10">
            <HiX
              className="absolute right-0 text-white mr-[12px] top-[12px] w-[2rem] h-[2rem]"
              onClick={() => setIsToggle(!toggle)}
            />
            <ul className="flex flex-col gap-[2.5rem] mt-[3rem] pl-[2rem]">
              {navLinks.map((link, key) => {
                return (
                  <li key={key + link} className="flex flex-col gap-[3rem]">
                    <a href={link} key={`${key} + 1`} className="text-white uppercase">
                      {link}
                    </a>
                  </li>
                );
              })}
              <a href="" className="text-white uppercase">
                {" "}
                Form
              </a>
              <a href="" className="text-white uppercase">
                Join us
              </a>
            </ul>
          </div>
        )}
      </div>

      {/* Big screen Nav */}
      <div className="hidden lg:flex">
        <div className="items-center justify-center">
          <ul className="flex  gap-[2.5rem] items-center  ">
            {navLinks.map((link, key) => {
              return (
                <li
                  key={key + link}
                  className="flex flex-col gap-[3rem] flex-wrap"
                >
                  <a
                    href={link}
                    key={`${key} + 1`}
                    className="text-heading text-[1rem] font-[600] tracking-[0.08rem] uppercase"
                  >
                    {link}
                  </a>
                </li>
              );
            })}
            <a
              href=""
              className="text-heading text-[1rem] font-[600] tracking-[0.08rem] uppercase"
            >
              {" "}
              Form
            </a>
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
        <Form 
          handleClose={handleClose}
          open={open}
        />
      )}
      
    </nav>
  );
};

export default Nav;
