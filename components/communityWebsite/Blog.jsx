"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Newsletter from "./Newsletter";
import { getData, urlFor } from "@/sanity/lib/query";

const pageSize = 6; // Number of blog posts per page

const Blog = () => {
  const [blogposts, setBlogposts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogposts, setFilteredBlogposts] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    fetchData();
  }, [currentPage, searchTerm]); // Fetch data when currentPage or searchTerm changes

  const fetchData = async () => {
    try {
      const data = await getData(currentPage, pageSize, searchTerm);
      setBlogposts(data); // Update blogposts with new data
      setTotalPages(Math.ceil(data.length / pageSize)); // Calculate total pages based on data length
      if (searchTerm) {
        const filtered = data.filter((blogpost) =>
          blogpost.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBlogposts(filtered);
        setSearched(true);
      } else {
        setFilteredBlogposts([]);
        setSearched(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="pt-10 bg-gray-50 sm:pt-16 lg:pt-14">
      <div className="mx-auto container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Welcome to AssistivTeq Community Blog
            </h1>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              Discover our latest articles and stay up to date with the newest
              assistive technologies, features, and trends.
            </p>
          </div>
        </div>
        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search blog posts..."
            className="px-4 py-2 rounded-md border border-primary focus:outline-primary focus:border-primary"
          />
        </div>

        <div className="space-y-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {searched ? (
              filteredBlogposts.length > 0 ? (
                filteredBlogposts.map((blogpost, index) => (
                  <div
                    key={index}
                    className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden"
                  >
                    {/* Render blog post content */}
                  </div>
                ))
              ) : (
                <p className="mx-auto">Nothing to show</p>
              )
            ) : blogposts.length > 0 ? (
              blogposts.map((blogpost, index) => (
                <div
                  key={index}
                  className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <Image
                    alt={blogpost.title}
                    className="aspect-[4/3] object-cover w-full"
                    height="263"
                    src={urlFor(blogpost.mainImage.asset).url()}
                    width="350"
                  />
                  <div className="flex-1 p-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold leading-tight text-zinc-900 dark:text-zinc-50 py-2">
                        {blogpost.title}
                      </h3>
                      <p className="break-all">
                        {`${blogpost.body[0].children[0].text.substring(
                          0,
                          100
                        )}...`}
                      </p>
                    </div>
                    <p className="max-w-none text-zinc-500 mt-4 mb-2 text-sm dark:text-zinc-400">
                      {blogpost.categories[0].title}
                    </p>
                    <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider whitespace-nowrap mt-5">
                      Published on:{" "}
                      {new Date(blogpost.publishedAt).toDateString()}
                    </div>
                    <div className="flex">
                      <Link
                        href={`/community/blog/${blogpost.slug.current}`}
                        className="inline-flex h-10 bg-primary text-white p-2 rounded-md mt-2 items-center justify-center text-sm font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="mx-auto">No posts to show</p>
            )}
          </div>
        </div>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1 || blogposts.length === 0}
          className={`mr-2 px-3 py-1 rounded ${
            currentPage === 1 || blogposts.length === 0
              ? "bg-gray-200 text-gray-600 cursor-not-allowed"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400"
          }`}
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages || blogposts.length === 0}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages || blogposts.length === 0
              ? "bg-gray-200 text-gray-600 cursor-not-allowed"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400"
          }`}
        >
          Next
        </button>
      </div>
      <Newsletter />
    </section>
  );
};

export default Blog;
