"use client";

import React, { useState } from "react";

import { FiPhone } from "react-icons/fi";
import Form from "@/components/communityWebsite/Form";

const Contact = () => {
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
    <section id="contact" className="justify-center px-4 my-[2.5rem] ">
      <div className="px-[1.1rem] py-[1.72rem] flex flex-col md:flex-row md:justify-around md:items-center gap-3 bg-[#FFFADE] rounded-[.75rem] lg:mx-[10.7rem]">
        <div className="flex gap-3 flex-col  items-start mt-3">
          <h3 className="text-[1rem] md:text-[1.5rem] font-[600] tracking-[0.04rem] md:tracking-[0.06rem] w-[19.243rem] md:w-auto">
            Have More Inquiry? Contact Us Today
          </h3>
          <div className="flex gap-3 mt-3">
            <FiPhone className="" />
            <div className="flex flex-col md:flex-row gap-1">
              <p className="text-heading text-[1rem] tracking-[0.04rem]">
                +2349037176588
              </p>
              <p className="text-heading text-[1rem] tracking-[0.04rem]">
                +2349049802906
              </p>
            </div>
          </div>
        </div>
        <a
          onClick={handleOpen}
          className=" shadow-card bg-primary w-[7.6875rem] md:w-[9.6875rem] h-[2.25rem] md:h-[3.5rem] flex items-center justify-center text-white font-[700] rounded-[0.5rem]"
        >
          Contact Us
        </a>
      </div>
      {openModal && (
        <div className="absolute right-[50%]">
          <Form handleClose={handleClose} open={open} />
        </div>
      )}
    </section>
  );
};
export default Contact;
