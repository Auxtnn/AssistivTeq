"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #66328E",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

export default function Form({ open, handleClose }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [disabilityType, setDisabilityType] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successfulMessage, setSuccessfulMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(!isSubmitting);
      await fetch("/api/join-community", {
        method: "POST",
        body: JSON.stringify({
          email,
          fullname,
          number,
          disabilityType,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            setIsSubmitting(false);
            setSuccessfulMessage(
              "Message sent successfully! Kindly await our response shortly."
            );
            setEmail("");
            setFullname("");
            setMessage("");
            setDisabilityType("");
            setNumber("");
          } else {
            // Error occurred while sending email
            setIsSubmitting(false);
            throw new Error("Error sending email");
          }
        })
        .catch((error) => {
          setIsSubmitting(false);
          console.log(error);
          return;
        });
    } catch (error) {}
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="mb-4 text-primary">
            Please Fill the form to be added to the community
          </h1>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              placeholder="Full Name*"
              required
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="border-2 border-primary rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]"
            />
            <input
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address*"
              className="border-2 border-primary rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]"
            />
            <input
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Whatsapp/Phone Number*"
              className="border-2 border-primary rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]"
            />
            <input
              placeholder="Disability Type"
              value={disabilityType}
              onChange={(e) => setDisabilityType(e.target.value)}
              className="border-2 border-primary rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message (optional)"
              className="border-2 border-primary rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]"
            />
            <button
              type="submit"
              className=" shadow-card bg-primary w-[7.6875rem] md:w-[9.6875rem] h-[2.25rem] md:h-[3.5rem] flex items-center justify-center text-white font-[700] rounded-[0.5rem]"
            >
              {isSubmitting ? "Submitting" : "Submit"}
            </button>
            {successfulMessage && (
              <p className="text-lg text-green-600 text-center">
                {successfulMessage}
              </p>
            )}
          </form>
        </Box>
      </Modal>
    </div>
  );
}
