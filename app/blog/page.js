"use client";

// pages/blog.tsx
import React, { useState, useEffect } from "react";
import { getPosts } from "../../sanity/lib/query";
import BlogMainPage from "../../components/mainWebsite/Blog";
import Footer from '../../components/mainWebsite/Footer';
import Nav from '../../components/mainWebsite/Nav';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [lastPostId, setLastPostId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  const loadInitialPosts = async () => {
    setLoading(true);
    try {
      const initialPosts = await getPosts("post");
      console.log(initialPosts)
      if (initialPosts.length > 0) {
        setPosts(initialPosts);
        setLastPostId(initialPosts[initialPosts.length - 1]._id);
        setHasMorePosts(initialPosts.length >= 9); // Set to true if initial posts are equal or more than the limit
      } else {
        setHasMorePosts(false);
      }
    } catch (error) {
      console.error("Error loading initial posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitialPosts();
  }, []);

  const loadMorePosts = async () => {
    setLoading(true);
    try {
      const newPosts = await getPosts("post", lastPostId);
      if (newPosts.length > 0) {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setLastPostId(newPosts[newPosts.length - 1]._id);
        setHasMorePosts(newPosts.length >= 9); // Set to true if new posts are equal or more than the limit
      } else {
        setHasMorePosts(false);
      }
    } catch (error) {
      console.error("Error loading more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
        <Nav/>
  
    <main>

      <div className="">
        <BlogMainPage
          posts={posts}
          loadMorePosts={loadMorePosts}
          loading={loading}
          hasMorePosts={hasMorePosts}
        />
      </div>
    </main>
    <Footer/>
    </>
  );
};

export default Blog;