import React from "react";
import { mainFooterLinks } from "../../constant";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";
import { Link } from "@mui/material";
import { logo_on_white } from "../../public/images";

const Footer = () => {
  const getFullYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
  };
  return (
    <footer className="bg-primary pt-[2.25rem] md:pt-[6.62rem]">
      <div className="flex flex-col items-center">
        <h1 className="w-[21.25rem] md:w-[36.4375rem] text-white font-[700] text-[1.5rem] md:text-[2.25rem] leading-[2rem] md:leading-[3.125rem] text-center">
          Explore the Future of Accessibility
        </h1>
        <div className="flex flex-col lg:flex-row gap-[0.75rem] mt-[1.75rem] mb-[3.75rem]">
          <a
            href="#product"
            className="px-8 py-[1.12rem] lg:w-max lg:h-max flex items-center justify-center bg-primary text-white rounded-[0.5rem] border-2 border-white font-[700]"
          >
            Explore Our Products
          </a>
          <a
            href="#contact"
            className="lg:w-max lg:h-max px-8 py-[1.12rem] flex items-center justify-center bg-white text-primary rounded-[0.5rem] font-[700]"
          >
            Partner With Us
          </a>
        </div>
      </div>
      <section className="pl-[1.09rem] pr-[.78rem] ">
        <div className="flex flex-wrap gap-[5rem] lg:gap-[10.56rem]  md:justify-center pb-8 border-b-2 border-b-white">
          {mainFooterLinks.map((section, index) => (
            <div key={index}>
              <h1 className="font-[700] uppercase text-[.875rem] text-white mb-[0.69rem]">
                {section.title}
              </h1>
              <ul className="flex flex-col gap-[.75rem]">
                {section.links.map((link, key) => {
                  if (typeof link === "object" && "title" in link) {
                    // For title links
                    return (
                      <li key={key}>
                        <a
                          href={link.href}
                          className=" text-white opacity-[.79] text-[.75rem] hover:opacity-10"
                        >
                          {link.title}
                        </a>
                      </li>
                    );
                  } else {
                    // For non-title links
                    return (
                      <li key={key}>
                        <p className="text-white opacity-[.79] text-[.75rem]">
                          {link}
                        </p>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          ))}
        </div>
        {/* socials */}
        <div className="mt-[1.38rem] flex flex-col md:flex-row md:items-center md:justify-around gap-[1.06rem]">
          <Link href="/" className="">
            <Image
              src={logo_on_white}
              width={150}
              height={150}
              className="relative"
              alt="logo"
            />
          </Link>
          <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between md:w-[50%] pb-4">
            <div className="flex gap-[.5rem] py-[1.06rem]">
              <div className="flex items-center justify-center border-2 rounded-[50%] w-[1.5rem] h-[1.5rem]">
                <Link href="https://www.facebook.com/assistivteq">
                  <FaFacebookF
                    target="_blank"
                    className="w-[.75rem] h-[.75rem] text-white"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center border-2 rounded-[50%] w-[1.5rem] h-[1.5rem]">
                <Link
                  href="https://www.instagram.com/assistivteq_community/?igsh=MXNodDA1dHhveWlheQ%3D%3D"
                  target="_blank"
                >
                  <FaInstagram className="w-[.75rem] h-[.75rem] text-white" />
                </Link>
              </div>
              <div className="flex items-center justify-center border-2 rounded-[50%] w-[1.5rem] h-[1.5rem]">
                <Link
                  href="https://twitter.com/assistivteq?t=AmxgQnA1ra78I9T_ShmSbw&s=09"
                  target="_blank"
                >
                  <FaXTwitter className="w-[.75rem] h-[.75rem] text-white" />
                </Link>
              </div>
              <div className="flex items-center justify-center border-2 rounded-[50%] w-[1.5rem] h-[1.5rem]">
                <Link
                  href="https://www.linkedin.com/company/assistivteq/"
                  target="_blank"
                >
                  <FaLinkedinIn className="w-[.75rem] h-[.75rem] text-white" />
                </Link>
              </div>
            </div>
            <div>
              <p className="text-[.625rem] leading-[1.875rem] text-white">
                © {getFullYear()} AssistivTeq Media. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
