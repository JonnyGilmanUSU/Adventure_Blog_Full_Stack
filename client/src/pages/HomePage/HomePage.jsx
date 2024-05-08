import React from 'react'
import styles from './home.module.css';
import IntroPhoto from '../../assets/images/Intro.png'
import HardDayHarveyPhoto from '../../assets/images/HardDayHarvey.png';
import IntroPhoto2 from '../../assets/images/Intro2.png';

function HomePage() {
  return (
    <div className={styles.homePage}>
          <div className={styles.hero}>
        <img src={HardDayHarveyPhoto} alt='Hero' />
        <div className={styles.heroText}>
            Home
        </div>
    </div>
      <div className={styles.container}>
        <div>
          <h2>Welcome to <br /> Sadie and Jonny's Blog</h2>
          <img src={IntroPhoto} alt="" />
          <h3 style={{textAlign: "center", borderTop: "solid 1px gray", borderBottom: "solid 1px gray",padding: "1rem 0"}}>Hello There!</h3>
          <p>Welcome to our adventure journal! Since we met in 2019, we've been inseparable companions on countless outdoor escapades. This year, as we celebrate our marriage, we're thrilled to continue this journey together, exploring the rugged beauty of Utah and beyond. From the thrilling descents of canyoneering, the serene paths of our hikes, to the challenging ascents in rock climbing, each adventure brings us closer and fuels our passion for the great outdoors.</p>
          <p>Our website serves as both inspiration and a guide for fellow adventurers. Each blog post is packed with essential details for outdoor activities—directions, preparation tips, and gear information—to help you confidently plan your own excursions. You can expect detailed directions, preperation tips, and gear information for each adventure.</p>
          <h3 style={{textAlign: "center", borderTop: "solid 1px gray", borderBottom: "solid 1px gray",padding: "1rem 0"}}>We're also excited to soon offer learning materials for canyoneering, helping both new and seasoned adventurers enhance their skills and safety knowledge.</h3>
          <p> Join us as we chronicle our adventures, sharing the experiences that shape our lives together. Whether it’s the vast wilderness of Utah or the unexpected delights of other locales, every expedition promises new stories, and we can’t wait to see where the trails take us next.</p>
          <img src={IntroPhoto2} alt="" />
        </div>
        <div className={styles.stayInTouchContainer}>
          <h3>Lets Stay in Touch</h3>
          <p>Stay up to date with us through our newsletter!</p>
          <input type="text" placeholder='Enter your email' />
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage