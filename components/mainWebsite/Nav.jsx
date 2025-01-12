"use client";
import React, { useState, useEffect } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const mainNavLinks = [
  { href: "/", key: "home", title: "Home" },
  { href: "/#about", key: "about", title: "About Us" },
  { href: "/#product", key: "products", title: "Products" },
  { href: "/blog", key: "blog", title: "Insights" },
  { href: "/community", key: "community", title: "Community" },
];

const Nav = () => {
  const [toggle, setIsToggle] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const closeMobileMenu = () => {
    setIsToggle(false);
  };

  // Handle navigation for anchor links
  const handleNavigation = (href) => {
    closeMobileMenu();
    
    // Check if it's an anchor link and we're not on the home page
    if (href.includes("#") && pathname !== "/") {
      // Navigate to home page first, then scroll to anchor
      router.push("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.querySelector(href.split("/").pop());
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Regular navigation
      router.push(href);
    }
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
    <motion.nav
      className="bg-white sticky top-0 z-20 px-[1.16rem] pt-[.7rem] md:pt-[1.5rem] md:pl-[7rem] justify-between items-center flex md:pr-[5.7rem] border-b-2 pb-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
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

      {/* Mobile Nav */}
      <div className="lg:hidden">
        <HiMenuAlt1
          onClick={() => setIsToggle(!toggle)}
          className="w-[2rem] h-[2rem] text-primary"
        />
        {toggle && (
          <div className="mobile-menu h-[100vh] bg-primary absolute top-0 w-[80vw] right-0 z-10">
            <HiX
              className="absolute right-0 text-white mr-[12px] top-[12px] w-[2rem] h-[2rem]"
              onClick={() => setIsToggle(!toggle)}
            />
            <ul className="flex flex-col gap-[2.5rem] mt-[3rem] pl-[2rem]">
              {mainNavLinks.map((items) => (
                <li key={items.key} className="flex flex-col gap-[3rem]">
                  <button
                    onClick={() => handleNavigation(items.href)}
                    className="text-white uppercase text-left"
                  >
                    {items.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Big screen Nav */}
      <div className="hidden lg:flex">
        <div className="items-center justify-center">
          <ul className="flex gap-[2.5rem] items-center">
            {mainNavLinks.map((items) => (
              <li key={items.key} className="flex flex-col gap-[3rem] flex-wrap">
                <button
                  onClick={() => handleNavigation(items.href)}
                  className="text-heading text-[1rem] font-[600] tracking-[0.08rem] uppercase"
                >
                  {items.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;