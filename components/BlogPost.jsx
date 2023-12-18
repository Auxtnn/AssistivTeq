import React from "react";
import Image from "next/image";
import { FaHeart, FaShare } from "react-icons/fa";
import Link from "next/link";



const BlogPostCard = ( {post} ) => {
    return (
        <div className=" bg-white flex w-full flex-col mx-auto rounded-2xl">
                     
        <Image
          loading="lazy"
          unoptimized
          src={post.mainImage}
          width={300}
          height={200}
          className="aspect-[1.34] object-cover object-center w-full overflow-hidden self-stretch"
        />
       
        <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider px-5 whitespace-nowrap mt-5">
          {post.category} - {post.date}
        </div>
        <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider px-5 whitespace-nowrap mt-2.5">
          POSTED BY {post.author.name}
        </div>
        <div className="text-neutral-800 text-[1rem] px-5 font-medium tracking-wider w-[331px] mt-1.5">
        <Link href="">
            {post.title}
          </Link>
        </div>{" "}
    
        <div className="text-neutral-800 px-5 text-opacity-80 text-[.85rem] tracking-wider mt-2">
        {post.body}
        </div>{" "}
        <div className="flex w-full justify-between gap-24 my-6">
          <div className="justify-center items-stretch flex gap-5">
            <div className="items-stretch flex justify-between gap-2 pl-5">
            <FaHeart className="text-xl text-primary" />
               {" "}
              <div className=" text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider grow whitespace-nowrap">
                36
              </div>
            </div>{" "}
            <div className="items-stretch flex justify-between gap-2">
            <FaShare className="text-xl text-primary" />
           
              {" "}
              <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider grow whitespace-nowrap">
                36
              </div>
              
            </div>
            
          </div>{" "}
        
          <div className="text-purple-900 text-[.85rem] font-bold tracking-wider self-stretch grow whitespace-nowrap">
          <Link href='#'>
            Read More
            </Link>
          </div>
         
         
        </div>
      
      </div>
    )
}

export default BlogPostCard;