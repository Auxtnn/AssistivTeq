import React from "react";
import MeetOurMembers from "@/components/communityWebsite/MeetMembers";
import Newsletter from "@/components/communityWebsite/Newsletter";
import Footer from "@/components/communityWebsite/Footer";

import Nav from "@/components/communityWebsite/Nav";
import Home from "@/components/communityWebsite/Home";

export default function HomeComm() {
  return (
    <>
      <Nav />
      <Home />
      <MeetOurMembers />

      <Newsletter />

      <Footer />
    </>
  );
}
