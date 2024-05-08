import React  from 'react';
import { Link } from 'react-router-dom';
import styles from '../../pages/AdventuresPage/adventures.module.css';
import HardDayHarveyPhoto from '../../assets/images/HardDayHarvey.png';
import BlogPostsHeader from '../../assets/icons/BlogPostsHeader.svg';




function BlogPost({ post }) {
  return (
    <div className={`${styles.blogPost} ${styles.container}`}>
        <img src={post.imageURL} alt="hard day harvey canyon" />
        <h3>{post.title}</h3>
        <p>{post.summary}..</p>
        <p className={styles.blogPostDate}>{new Date(post.postDate).toLocaleDateString()}</p>
        <Link to={`/blog/${post._id}`}><button className={styles.readMoreButton}>Read More</button></Link>
        <div className={styles.postBreak}></div>
    </div>
  )
}

export default BlogPost;