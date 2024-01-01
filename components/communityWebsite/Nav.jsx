"use client";
import React, { useState, useEffect } from "react";
import { navLinks } from "@/constant";
import Form from "./Form";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "next/link";
import { logo_on_white } from "@/public/images";
import Image from "next/image";

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
    <nav className=" sticky top-0 z-20 bg-white px-[1.16rem] pt-[.7rem] md:pt-[1.5rem] md:pl-[7rem] justify-between items-center flex md:pr-[5.7rem] border-b-2 pb-4">
      {/* logo */}
      <Link href="/" className="">
        <Image
          src={logo_on_white}
          width={150}
          height={150}
          className="relative "
        />
      </Link>
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
              {navLinks.map((items) => {
                return (
                  <li key={items.key} className="flex flex-col gap-[3rem]">
                    <a
                      href={items.href}
                      key={`${items.key} + 1`}
                      className="text-white uppercase"
                    >
                      {items.title}
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
            {navLinks.map((items) => {
              return (
                <li
                  key={items.key}
                  className="flex flex-col gap-[3rem] flex-wrap"
                >
                  <a
                    href={items.href}
                    key={`${items.key} + 1`}
                    className="text-heading text-[1rem] font-[600] tracking-[0.08rem] uppercase"
                  >
                    {items.title}
                  </a>
                </li>
              );
            })}

            <button className="text-heading text-[1rem] font-[600] tracking-[0.08rem] uppercase">
              Form
            </button>

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
