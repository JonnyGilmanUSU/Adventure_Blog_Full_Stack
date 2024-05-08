import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './adventures.module.css';
import BlogPostsHeader from '../../assets/icons/BlogPostsHeader.svg';
import HardDayHarveyPhoto from '../../assets/images/HardDayHarvey.png';
import BlogPost from '../../components/BlogPost/BlogPost';

function AdventuresPage() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getBlogPosts');
        console.log(response.data);
        setBlogPosts(response.data.blogPosts);
        console.log(blogPosts)
      } catch (error) {
        console.error('Error fetching blog posts: ', error);
      }
    }

    fetchBlogPosts();
  }, []);

  return (
    <>
      <div className={styles.hero}>
          <img src={HardDayHarveyPhoto} alt='Hero' />
          <div className={styles.heroText}>
              Adventures
          </div>
     </div>
    <div className={styles.container}>
      <div>
          <h2>Adventures<br /> With Sadie and Jonny</h2>
          <p>Dive into our collection of adventure stories, arranged in chronological order to showcase our journey through the great outdoors. Each post is packed with insights and practical information, allowing you to experience our adventures and plan your own.</p>
          <p>Explore our blog to gain inspiration, gather information, and prepare for your own adventures. Scroll down to read about our latest exploits and learn how to make these adventures your own.</p>
        </div>
      <img className={styles.blogPostsHeader} src={BlogPostsHeader} alt="" />
    </div>
    {blogPosts && blogPosts.map((post, index) => (
      <BlogPost key={index} post={post} />
    ))}
    </>
  )
}

export default AdventuresPage;