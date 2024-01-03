// pages/blog.js

import React from 'react';

// Function to fetch data
export async function getStaticProps() {
  try {
    // Fetch some mock posts (replace this with actual API fetching logic)
    const posts = [
      { id: 1, title: 'First Post' },
      { id: 2, title: 'Second Post' },
      { id: 3, title: 'Third Post' },
    ];

    // Return the fetched posts as props
    return {
      props: {
        posts,
      },
      revalidate: 3600, // Optional: Specifies the number of seconds after which a page re-generation can occur
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [], // Return an empty array if there's an error
      },
    };
  }
}

// Component that receives posts as props
function Blog({ posts }) {
  return (
    <div>
      <h1>Blog</h1>
      {/* Render the posts */}
      {posts && posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>No posts to display</p>
      )}
    </div>
  );
}

export default Blog;
