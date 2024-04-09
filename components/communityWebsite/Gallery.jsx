import React from "react";
import GalleryComponent from "./GalleryComponent";

const Gallery = () => {
  return (
    <section className="mt-[5.3rem]  lg:px-[7.1rem]" id="gallery">
      <h1 className="text-[1.5rem] text-center font-[700] tracking-[0.06rem] text-heading md:text-[2rem] md:tracking-[0.08rem] mb-[2.5rem]">
        Gallery
      </h1>
      <GalleryComponent />
    </section>
  );
};

export default Gallery;
