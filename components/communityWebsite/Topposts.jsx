


import React from "react"
import Link from 'next/link';


const TopPosts = ({ posts }) => {
  return (
    <div className="bg-white flex flex-col items-stretch mt-10 px-6 py-6 rounded-2xl max-md:px-3">
      {/* Top Posts */}
      <div className="text-neutral-800 text-2xl font-bold tracking-wider whitespace-nowrap">
        Top Posts
      </div>
      {posts.slice(0,3).map((post) => (
        <div key={post._id} className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider mt-5">
          <Link href="#">
            <span className="text-neutral-800">{post.title}</span>
            <br />
            <br />
            <span className="text-neutral-800 text-opacity-60">
              {post.categories.map((category) => category.title).join(', ')} - {new Date(post.publishedAt).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
          </Link>
        </div>
      ))}
      {/* Add your styling and additional content as needed */}
    </div>
  );
};

export default TopPosts;
