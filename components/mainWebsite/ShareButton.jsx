"use client";

import React from "react";

import toast from "react-hot-toast";


const ShareButtons = ({
  postUrl,

}) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="flex gap-4 mt-6 flex-col md:flex-row ">
      <h3 className="text-lg font-bold">Share this post:</h3>
     

      <button
        onClick={handleCopyLink}
        className="text-lg text-gray-600 hover:underline"
      >
        Copy Link
      </button>
    </div>
  );
};

export default ShareButtons;