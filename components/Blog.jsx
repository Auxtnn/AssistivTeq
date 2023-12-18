"use client"

import React, {useState, useEffect} from "react" 
// import { IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaHeart, FaShare } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Newsletter from "./Newsletter";
import BlogPostCard from './BlogPost';
import { getPosts } from '../sanity/lib/client';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const sanityPosts = await getPosts();
        console.log('Fetched posts:', sanityPosts); // Check the fetched posts in the console
        setPosts(sanityPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
  
    fetchPosts();
  }, []);

  console.log('Posts state:', posts);

    return (

<section className="pt-10 bg-gray-50 sm:pt-16 lg:pt-14">

    <div className="bg-zinc-100 flex flex-col">
      
      <div className="justify-center items-center bg-white self-stretch flex w-full flex-col px-16 py-9 max-md:max-w-full max-md:px-5">
        <div className="items-stretch flex w-full max-w-[1200px] justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-neutral-800 text-2xl font-bold tracking-wider whitespace-nowrap">
            Blog
          </div>
          <div className="text-neutral-800 text-opacity-40 text-base font-semibold tracking-wider self-center whitespace-nowrap my-auto">
            HOME / BLOG 
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1199px] mt-10 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[25%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-5">
              <div className="items-center bg-white px-2 flex justify-between rounded-2xl border focus:border-primary focus-visible:shadow-none">
              <input 
            placeholder='Search'
            className=' my-auto shadow-one bg-white text-base gap-5 px-7 py-3.5 max-md:px-5 outline-none text-heading text-[1rem] rounded-[0.5rem] '
          />
          <IoIosSearch className="text-3xl text-primary" />
               
              </div>
             
              <div className="justify-end items-stretch bg-white flex flex-col mt-10 pt-6 pb-8 px-8 rounded-2xl max-md:px-5">
                <div className="text-neutral-800 text-2xl font-bold tracking-wider whitespace-nowrap">
                <Link href="">
              Category
              </Link> 
                </div>
                <div className="text-neutral-800 text-[.85rem] tracking-wider whitespace-nowrap mt-6">
                 
              <Link href="">
                  Technology
              </Link>
                </div>
                <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-3" />
                <div className="text-neutral-800 text-[.85rem] tracking-wider whitespace-nowrap mt-3">
                  
                  <Link href="">
                  Events & Community News
              </Link>
                </div>
                <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-3" />
                <div className="text-neutral-800 text-[.85rem] tracking-wider whitespace-nowrap mt-3">
                
                  <Link href="">
                  Personal Stories
              </Link>
                </div>
                <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-3" />
                <div className="text-neutral-800 text-[.85rem] tracking-wider whitespace-nowrap mt-3">
                <Link href="">
                Health & Wellness
              </Link>
                </div>
                <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-3" />
                <div className="text-neutral-800 text-[.85rem] tracking-wider whitespace-nowrap mt-3">
                <Link href="">
                Education & Employment
              </Link>
                </div>
                <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-3" />
                <div className="text-neutral-800 text-[.85rem] tracking-wider whitespace-nowrap mt-3">
                <Link href="">
                Creativity & Support
              </Link>
                </div>
              </div>
              <div className="bg-white flex flex-col items-stretch mt-10 px-6 py-6 rounded-2xl max-md:px-3">
                <div className="text-neutral-800 text-2xl font-bold tracking-wider whitespace-nowrap">
                  Recent Posts
                </div>
                <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider mt-5">
                {posts.map((post) => (
            <div key={post.slug.current}>
              <Link href="">
                <span className="text-neutral-800">
                  {post.title}
                  <br />
                  <br />
                </span>
              </Link>
              <span className="text-neutral-800 text-opacity-60">
                {post.category} - {post.author.name}
              </span>
            </div>
          ))}
              </div>{" "}
               
               
               
               
              </div>{" "}

              <div className="bg-white flex flex-col items-stretch mt-10 px-6 py-6 rounded-2xl max-md:px-3">
                <div className="text-neutral-800 text-2xl font-bold tracking-wider whitespace-nowrap">
                  Top Posts
                </div>
                <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider mt-5">
                  <Link href="">
                  <span className="text-neutral-800">
                    The Impact of Hearing Aids on Everyday Life: A User's
                    Perspective
                    <br />
                    <br />
                  </span>
                  <span className="text-neutral-800 text-opacity-60">
                    HEARING IMPAIRED - DEC 3, 2023
                  </span>
                  </Link>
                </div>{" "}

                <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-4" />{" "}
                <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider mt-6">
                <Link href="">
                  <span className="text-neutral-800">
                    The Latest Innovations in Mobility Assistants: A
                    Comprehensive Guide
                    <br />
                    <br />
                  </span>
                  <span className="text-neutral-800 text-opacity-60">
                    HEARING IMPAIRED - DEC 3, 2023
                  </span>
                  </Link>
                </div>{" "}

                <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-3.5" />{" "}
                <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider mt-6">
                  
                <Link href="">
                  <span className="text-neutral-800">
                    The Role of Robotics in Assisting Daily Tasks for
                    Individuals with Disabilities
                    <br />
                    <br />
                  </span>
                  <span className="text-neutral-800 text-opacity-60">
                    HEARING IMPAIRED - DEC 3, 2023
                  </span>
                  </Link>
                </div>{" "}
                
               
              </div>{" "}
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-5">
              <div className="max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                {posts.map((post) => (
                <div key={post._id} className="flex flex-col items-stretch w-5/12 max-md:w-full max-md:ml-0">
                <BlogPostCard post={post} />
                </div>
            ))}

               

                </div>
              </div>
              <div className="mt-5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-5/12 max-md:w-full max-md:ml-0">
               
                  </div>{" "}

                  

                </div>
              </div>
              <div className="mt-5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-5/12 max-md:w-full max-md:ml-0">
                   
                  </div>{" "}
                  
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center flex gap-4 my-10 max-md:justify-center">
        <div className="text-white text-xl font-medium tracking-wider justify-center items-center bg-purple-900 p-3 rounded-lg">
          1
        </div>
        <div className="text-primary text-xl font-medium tracking-wider justify-center items-center bg-white p-3 rounded-lg">
          2
        </div>
        <div className="text-primary text-xl font-medium track3ing-wider justify-center items-center bg-white p-3 rounded-lg">
          3
        </div>
        <div className="text-primary text-xl font-medium tracking-wider justify-center items-center bg-white text-center p-3 rounded-lg">
          4
        </div>
        <div className="text-purple-900 text-xl font-medium tracking-wider justify-center items-center bg-white p-3 rounded-lg">
          5
        </div>
      </div>
     
     
    </div>
    <Newsletter />
</section>
    )
}

export default Blog;