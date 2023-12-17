"use client";

import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";

const CTApartner = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const [buttonText, setButtonText] = useState("Send Message");

  // success or failure messages
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  function TransitionsModal() {
    const [open, setOpen] = useState(false);

    //   Form validation

    //   button text on form submission
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleValidation = () => {
      let tempErrors = {};
      let isValid = true;

      if (fullname.length <= 0) {
        tempErrors["fullname"] = true;
        isValid = false;
      } else {
        tempErrors["fullname"] = false; // Reset the error state if it's now valid
      }

      if (email.length <= 0) {
        tempErrors["email"] = true;
        isValid = false;
      } else {
        tempErrors["email"] = false;
      }

      if (message.length <= 0) {
        tempErrors["message"] = true;
        isValid = false;
      } else {
        tempErrors["message"] = false;
      }

      setErrors({ ...tempErrors });
      return isValid;
    };

    //   Handling form submit

    const handleSubmit = async (e) => {
      e.preventDefault();

      let isValidForm = handleValidation();

      if (isValidForm) {
        setButtonText("Sending");
        await fetch("/api/mail", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            fullname: fullname,
            message: message,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => {
            console.log(response);
            if (response.ok) {
              setEmail("");
              setFullname("");
              setMessage("");
            } else {
              // Error occurred while sending email
              throw new Error("Error sending email");
            }
          })
          .catch((error) => {
            console.log(error);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
            setButtonText("Send Message");
            return;
          });

        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Send Message");
      }
      console.log(fullname, email, message);
    };
    return (
      <div>
        <button
          onClick={handleOpen}
          className="w-max h-max py-3 px-8 bg-primary text-white hover:bg-white hover:text-primary hover:border-2 font-bold rounded-xl"
        >
          Contact Us
        </button>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h1 className="mb-4 text-primary">We'd Love to hear from you </h1>
              <form
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col gap-3"
              >
                <input
                  placeholder="Full Name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="border-2 border-primary rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]"
                />
                {errors.fullname && (
                  <p className="text-red-500 text-sm ">
                    Please enter your name.
                  </p>
                )}
                <input
                  value={email}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 border-primary rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    Please enter a valid email.
                  </p>
                )}
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter Message"
                  className="border-2 border-primary rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    Please enter your message.
                  </p>
                )}
                {showSuccessMessage && (
                  <p className="text-green-500 text-sm">
                    Message sent successfully!
                  </p>
                )}
                {showFailureMessage && (
                  <p className="text-red-500 text-sm">
                    Failed to send message. Please try again.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={buttonText === "Sending..."} // Disable button when sending
                  className="w-max h-max py-3 px-8 bg-primary text-white font-bold rounded-[.75rem]"
                >
                  {buttonText}
                </button>
              </form>
            </Box>
          </Modal>
        </div>
      </div>
    );
  }

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

  return (
    <section
      id="contact"
      className="mt-[2.5rem] md:mt-[8.17rem] w-full bg-[#E0E0E0] py-12 md:py-[3.38rem] flex flex-col items-center justify-center gap-[1.75rem] md:gap-[2.5rem]"
    >
      <h1 className="md:w-[30rem] w-[18rem] text-heading text-lg md:text-[2rem] text-center tracking-wider md:leading-[2.5rem] font-bold  lg:w-[36.8125rem]">
        Have An Assistive Product? Partner With Us{" "}
      </h1>
      {TransitionsModal()}
    </section>
  );
};

export default CTApartner;
