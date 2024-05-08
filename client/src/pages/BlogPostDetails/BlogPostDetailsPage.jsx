import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './blogpostdetails.module.css';

function BlogPostDetails({ data }) {
  const [blogPost, setBlogPost] = useState(null);
  const { id } = useParams();  // Extract the blog post ID from the URL

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getBlogPostDetails/${id}`);
        setBlogPost(response.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (!blogPost) return <div>Loading...</div>;

  return (
    <>
      <div className={styles.hero}>
          <img src={blogPost.imageURL} alt={`${blogPost.imageURL} Scene`} />
          <div className={styles.heroText}>
              {blogPost.title}
          </div>
      </div>
      <div className={styles.container}>
        <h1>{blogPost.title}</h1>
        <p>{blogPost.content}</p>
        <img src={blogPost.imageURL} alt={blogPost.title} />
      </div>
    </>
  );
}

export default BlogPostDetails;
