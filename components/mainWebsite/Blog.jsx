"use client"

import React, { useState } from "react";
import { FiClock, FiInbox, FiSearch } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import SearchInput from "./Search";

const BlogMainPage = ({
  posts,
  loadMorePosts,
  loading,
  hasMorePosts,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  // Filter posts based on search value (title and category)
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    post.categories.some(category => 
      category.title.toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  const truncateText = (text, charLimit = 200) => {
    if (!text) return "";
    const normalizedText = text.replace(/\s+/g, ' ').trim();
    if (normalizedText.length <= charLimit) return normalizedText;
    const truncated = normalizedText.substr(0, charLimit);
    const lastSpace = truncated.lastIndexOf(' ');
    return truncated.substr(0, lastSpace) + "...";
  };

  const getBlockText = (body) => {
    if (!body || !Array.isArray(body)) return "";
    return body
      .map(block => {
        if (block.children && Array.isArray(block.children)) {
          return block.children
            .map(child => child.text || '')
            .join(' ');
        }
        return block.text || '';
      })
      .join(' ');
  };

  if (loading) {
    return (
      <div className="text-center flex justify-center h-screen items-center">
        Loading Posts...
      </div>
    );
  }

  return (
    <section
      className={`max-w-screen-xl bg-white ${posts.length > 0 ? "md:py-20 py-10" : "flex items-center justify-center min-h-96"}`}
    >
      {posts.length > 0 ? (
        <div className="mx-auto lg:w-11/12 px-4">
          <div className="flex justify-center mb-4 mx-auto">
            <h1 className="text-2xl lg:text-3xl max-md:max-w-full font-bold text-gray-800">
              Explore our Blog and recent Updates
            </h1>
          </div>
          
          {/* Search Section - Only shown when posts exist */}
          <div className="mx-auto mb-10 shadow-one bg-white rounded-md w-full">
            <div className="flex items-center">
              <div className="w-full">
                <SearchInput
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search by title or category..."
                />
              </div>
            </div>
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && searchValue && (
            <div className="flex flex-col items-center justify-center text-gray-800 text-center space-y-4 py-20">
              <FiSearch className="text-6xl text-gray-500" />
              <p className="text-lg font-medium">No posts found matching "{searchValue}"</p>
              <button 
                onClick={() => setSearchValue("")}
                className="text-primary hover:underline"
              >
                Clear search
              </button>
            </div>
          )}

          {/* Posts Grid */}
          {filteredPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
              {filteredPosts.map((post) => (
                <div
                  key={post._id}
                  className="rounded overflow-hidden shadow-lg flex flex-col h-full"
                >
                  <div className="relative h-48 w-full">
                    <Link href={`/blog/${post.currentSlug}`}>
                      <Image
                        className="w-full h-full object-cover"
                        src={post.image}
                        alt="blog-image"
                        width={300}
                        height={300}
                        priority
                      />
                      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                    </Link>
                  </div>

                  <div className="px-4 py-4 flex-grow flex flex-col">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.categories.map((category, index) => (
                        <span
                          key={index}
                          className="text-white hover:border hover:border-primary px-2 py-1 hover:bg-transparent hover:text-primary text-base bg-primary rounded-full inline-block"
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.currentSlug}`}
                      className="font-medium text-primary text-lg hover:text-primary transition duration-500 ease-in-out inline-block mb-2"
                    >
                      {post.title}
                    </Link>
                    <div className="text-gray-800 text-sm flex-grow">
                      {truncateText(getBlockText(post.body))}
                    </div>
                  </div>

                  <div className="px-4 py-3 flex flex-row items-center justify-between bg-gray-100">
                    <span className="py-1 text-base font-regular text-gray-900 mr-1 flex flex-row items-center">
                      <FiClock className="h-5 mr-1" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </span>
                    <Link href={`/blog/${post.currentSlug}`}>
                      <span className="py-1 text-base font-regular text-gray-800 hover:text-primary mr-1 flex flex-row items-center">
                        Read more
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {hasMorePosts && filteredPosts.length > 0 && (
            <div className="flex justify-center mt-10">
              <button
                onClick={loadMorePosts}
                disabled={loading}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark disabled:bg-gray-400"
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center h-96 justify-center text-gray-800 text-center space-y-4">
          <FiInbox className="text-6xl text-gray-500" />
          <p className="text-lg font-medium">No available posts yet</p>
        </div>
      )}
    </section>
  );
};

export default BlogMainPage;

