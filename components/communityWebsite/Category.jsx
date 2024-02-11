import React from "react"
import Link from 'next/link';

const Categories = ({ categories }) => {
  return (
    <div className="justify-end items-stretch bg-white flex flex-col mt-10 pt-6 pb-8 px-8 rounded-2xl max-md:px-5">
      {/* category */}
      <div className="text-neutral-800 text-2xl font-bold tracking-wider whitespace-nowrap">
        <h2>Category</h2>
      </div>
      {categories.map((category, index) => (
        <div key={index} className={`text-neutral-800 text-[.85rem] tracking-wider whitespace-nowrap mt-${index === 0 ? '6' : '3'}`}>
          <Link href="#">{category}</Link>
        </div>
      ))}
      {categories.map((_, index) => (
        <div key={`divider_${index}`} className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-3" />
      ))}
    </div>
  );
};

export default Categories;
