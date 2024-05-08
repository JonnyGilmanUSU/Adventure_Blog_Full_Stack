import React, { useState } from 'react';
import axios from 'axios';
import styles from './createblogpost.module.css'

function BlogPostForm() {
    const [title, setTitle] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const blogPostData = {
            title,
            imageURL,
            summary,
            content,
            category
        };

        // try {
        //     await axios.post('http://localhost:3001/blogPosts', blogPostData);
        //     alert('Blog post created successfully!');
        //     // Reset form or handle success
        // } catch (error) {
        //     console.error('Failed to create blog post:', error);
        //     alert('Failed to create blog post.');
        // }
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <h2>Create Blog Post</h2>
                <div className={styles.inputGroup}>
                    <label>Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} required maxLength={50} />
                </div>
                <div className={styles.inputGroup}>
                    <label>Image URL</label>
                    <input type="text" value={imageURL} onChange={e => setImageURL(e.target.value)} required />
                </div>
                <div className={styles.inputGroup}>
                    <label>Summary</label>
                    <input type="text" value={summary} onChange={e => setSummary(e.target.value)} required maxLength={100} />
                </div>
                <div className={styles.inputGroup}>
                    <label>Content</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} required />
                </div>
                <div className={styles.inputGroup}>
                    <label>Category</label>
                    <input type="text" value={category} onChange={e => setCategory(e.target.value)} required />
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default BlogPostForm;
