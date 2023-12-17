"use client";

import * as React from "react";
import PropTypes from "prop-types";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/base/Button";
import { useState } from "react";

const CTApartner = () => {
  function TransitionsModal() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [message, setMessage] = useState("");
    //   Form validation
    const [errors, setErrors] = useState({});

    //   button text on form submission
    const [buttonText, setButtonText] = useState("Send Message");

    // success or failure messages
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

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
        <TriggerButton
          onClick={handleOpen}
          className="bg-primary text-white hover:bg-white hover:text-primary hover:border-2 font-bold"
        >
          Contact Us
        </TriggerButton>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: StyledBackdrop }}
        >
          <Fade in={open}>
            <ModalContent sx={style}>
              <h1 className="mb-4 text-primary text-center font-700 text-xl md:text-[2rem]">
                Reach out to us
              </h1>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
                <input
                  type="text"
                  name="fullname"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  placeholder="Enter Your Name"
                  className={`border-2 border-primary rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem] ${
                    errors.fullname ? "border-red-500" : ""
                  } py-3 text-base shadow-one outline-none focus:border-deep-red focus-visible:shadow-none`}
                />
                {errors.fullname && (
                  <p className="text-red-500 text-sm ">
                    Please enter your name.
                  </p>
                )}

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter Your Email"
                  className={`border-2 border-primary rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem] ${
                    errors.email ? "border-red-500" : ""
                  } py-3 text-base shadow-one outline-none focus:border-deep-red focus-visible:shadow-none`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    Please enter a valid email.
                  </p>
                )}

                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Write Your Message"
                  className={`border-2 border-primary rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]  ${
                    errors.message ? "border-red-500" : ""
                  } py-3 text-base shadow-one outline-none focus:border-deep-red focus-visible:shadow-none`}
                ></textarea>
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
                  className="mt-2 h-12 px-8 bg-primary text-white hover:text-white hover:bg-deep-red hover:border-deep-red border font-bold rounded-md focus:outline-none"
                  disabled={buttonText === "Sending..."} // Disable button when sending
                >
                  {buttonText}
                </button>
              </form>
            </ModalContent>
          </Fade>
        </Modal>
      </div>
    );
  }

  const Backdrop = React.forwardRef((props, ref) => {
    const { open, ...other } = props;
    return (
      <Fade in={open}>
        <div ref={ref} {...other} />
      </Fade>
    );
  });

  Backdrop.propTypes = {
    open: PropTypes.bool,
  };

  const blue = {
    200: "#99CCFF",
    300: "#66B2FF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    700: "#0066CC",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const Modal = styled(BaseModal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
  `;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "2px solid #66328E",
    boxShadow: 24,
  };

  const ModalContent = styled("div")(
    ({ theme }) => css`
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      text-align: start;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: hidden;
      background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border-radius: 8px;
      border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
      box-shadow: 0 4px 12px
        ${theme.palette.mode === "dark"
          ? "rgb(0 0 0 / 0.5)"
          : "rgb(0 0 0 / 0.2)"};
      padding: 24px;
      color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

      & .modal-title {
        margin: 0;
        line-height: 1.5rem;
        margin-bottom: 8px;
      }

      & .modal-description {
        margin: 0;
        line-height: 1.5rem;
        font-weight: 400;
        color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
        margin-bottom: 4px;
      }
    `
  );

  const TriggerButton = styled(Button)(
    ({ theme }) => css`
      font-family: "IBM Plex Sans", sans-serif;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.5;
      padding: 8px 16px;
      border-radius: 8px;
      transition: all 150ms ease;
      cursor: pointer;
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
      color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

      &:hover {
        background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
        border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
      }

      &:active {
        background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
      }

      &:focus-visible {
        box-shadow: 0 0 0 4px
          ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
        outline: none;
      }
    `
  );
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
