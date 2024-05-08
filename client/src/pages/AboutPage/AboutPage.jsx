import React from 'react';
import styles from './about.module.css';
import BlogPostsHeader from '../../assets/icons/BlogPostsHeader.svg'
import HardDayHarveyPhoto from '../../assets/images/HardDayHarvey.png';
import TheatreOfShadowsPhoto from '../../assets/images/TheatreOfShadows.png';

function AboutPage() {
  return (
    <>
    <div className={styles.hero}>
        <img src={HardDayHarveyPhoto} alt='Hero' />
        <div className={styles.heroText}>
            About
        </div>
    </div>
    <div className={`${styles.blogPost} ${styles.container}`}>
        <div>
            <h2>About Us</h2>
            <p>
                Welcome to our blog, a shared journal of our adventures, both grand and intimate, across the diverse landscapes that call to us. We are Sadie and Jonny, a couple united by our love for the great outdoors and each other. Our journey began where many great stories do—at college, where we found not just love but a mutual passion for adventure.
                Our very first date was nothing short of an epic adventure—a multi-pitch climb at the City of Rocks in Idaho, tackling the route known as Theatre of Shadows. For Sadie, it was only her second time climbing, but she ascended with the grace and courage of a seasoned climber. That day, high above the ground and under the vast Idaho sky, we not only found trust in each other's ropes but also kindled a deep connection that has grown with every climb, hike, and trek since.
            </p>
            <img src={TheatreOfShadowsPhoto} alt="theatre of shadows" />
            <figcaption>Theatre Of Shadows on First Date</figcaption>
            <p>
                Since then, we’ve woven a tapestry of adventures across the American landscape, especially drawn to the rugged beauty of Southern Utah. Our backpacking trips through this region have allowed us to explore remote corners of wilderness, experience the serene solitude that nature offers, and wake up to sunrises that paint the rocks with colors no artist could dream of.
                The Wasatch Mountains have seen us trace their contours and peaks, scaling walls that challenge our limits and reward us with views that steal our breaths. Many nights have been joyously spent camping out under the stars, our conversations and laughter mingling with the crackle of the campfire. Our Roofnest has been our cozy retreat on these excursions, a perch from which we’ve watched the world transform from dusk to dawn.
                What truly fulfills us, however, is not just undertaking these adventures but sharing them. 
            </p>
            <p>
                We revel in introducing friends and newcomers to the outdoor activities that have enriched our lives. There’s a unique joy in teaching someone how to set up their first climb or how to pack for their initial multi-day hike. Seeing the excitement light up their faces as they discover new landscapes and new strengths within themselves reminds us of our own first times and the thrill that comes with stepping just a little out of our comfort zones.
                Our philosophy is simple: keep the adventures fun and manageable. We believe that you don’t need to venture too far from your comfort zone to experience the magic of the outdoors. It's about enjoying the journey, learning continuously, and growing—not just as adventurers but as individuals and as a couple.
                Join us as we continue to explore, learn, and share. Whether it’s scaling another peak, conquering a new trail, or sitting quietly by a stream—each experience is a story, and we can’t wait to tell it. Here on our blog, we invite you to be part of our ongoing adventure, to learn with us, and perhaps to find your own path in the great wide somewhere.
                Welcome to our adventure.
            </p>
            <h3>Welcome to our story.</h3>
        </div>

    </div>
    </>
  )
}

export default AboutPage;