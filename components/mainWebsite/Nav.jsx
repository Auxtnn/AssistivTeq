"use client";
import React, { useState, useEffect } from "react";
import { mainNavLinks } from "@/constant";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import Image from "next/image";
import { logo_on_white } from "@/public/images";
import Link from "next/link";
const Nav = () => {
  const [toggle, setIsToggle] = useState(false);

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
    <nav className="bg-white sticky top-0 z-20 px-[1.16rem] pt-[.7rem] md:pt-[1.5rem] md:pl-[7rem] justify-between items-center flex md:pr-[5.7rem] border-b-2 pb-4">
      {/* logo */}
      <Link href="/" className="">
        <Image
          src={logo_on_white}
          width={150}
          height={150}
          className="relative"
          alt="logo"
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
              {mainNavLinks.map((items) => {
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
            </ul>
          </div>
        )}
      </div>

      {/* Big screen Nav */}
      <div className="hidden lg:flex">
        <div className="items-center justify-center">
          <ul className="flex  gap-[2.5rem] items-center  ">
            {mainNavLinks.map((items) => {
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
