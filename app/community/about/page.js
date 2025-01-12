import React from "react";
import About_us from "../../../components/communityWebsite/About";
import Nav from "../../../components/communityWebsite/Nav";
import Footer from "../../../components/communityWebsite/Footer";
import WhyWeStandOut from "../../../components/communityWebsite/WhyWeStandOut";
import Goal from "../../../components/communityWebsite/Goal";
import MissionVision from "../../../components/communityWebsite/MissionVision";
import Gallery from "../../../components/communityWebsite/Gallery";
import Contact from "../../../components/communityWebsite/Contact";

function AboutComm() {
  return (
    <>
      <Nav />
      <main>
        <About_us />
        <WhyWeStandOut />
        <Goal />
        <MissionVision />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default AboutComm;
