'use client'
import { useState } from 'react';
import Image from 'next/image';


const GalleryComponent = () => {
  const [activeSet, setActiveSet] = useState(1);

  const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
  ];

  const sets = [];
  for (let i = 0; i < images.length; i += 4) {
    sets.push(images.slice(i, i + 4));
  }

  const handleSetActiveSet = (setNumber) => {
    setActiveSet(setNumber);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="relative">
        <div className="flex flex-wrap -mx-2">
          {sets[activeSet - 1].map((image, index) => (
            <div
              key={index}
              className="w-full md:w-1/4 px-2 mb-4 md:mb-0"
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-auto"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {sets.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSetActiveSet(index + 1)}
              className={`w-3 h-3 mx-2 rounded-full mt-4 ${
                activeSet === index + 1 ? 'bg-purple-600 w-[1.75rem]' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
