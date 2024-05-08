import styles from './adventuretype.module.css';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BlogPostsHeader from '../../assets/icons/BlogPostsHeader.svg'
import BlogPost from '../../components/BlogPost/BlogPost';
import HeroImage from '../../assets/images/MobileHeroImage.png'

function AdventureTypePage() {
  const adventureData = {
    canyoneering: {
      adventurePageImageURL:"https://storage.googleapis.com/adventure_blog_photos/HardDayHarvey.png",
      pageTitle1: "Canyoneering",
      pageTitle2: "With Sadie and Jonny",
      adventureIntro1: "Welcome to our canyoneering journey! My wife and I are passionate about exploring Utah's stunning canyons, each adventure offering unique challenges and mesmerizing landscapes.",
      adventureIntro2: "This page features blog posts about our escapades, detailing the routes, technical gear, and the beauty of each canyon. Dive into each post to discover more about our thrilling experiences. Join us as we navigate the depths of Utah's hidden natural wonders, one canyon at a time.",
      whatToExpect: "From these blog posts you can expect details and information on each canyoneering adventure we have and how to recreate the experience for youself.",
    },
    climbing: {
      adventurePageImageURL:"https://storage.googleapis.com/adventure_blog_photos/cor_fdate.jpeg",
      pageTitle1: "Climbing",
      pageTitle2: "With Sadie and Jonny",
      adventureIntro1: "Welcome to our climbing page, where we share our experiences with traditional (trad) and sport climbing across various landscapes. While we may not be the strongest climbers out there, our technical proficiency ensures that we safely enjoy each ascent.",
      adventureIntro2: "For us, climbing is less about pushing limits and more about enjoying the journey. We thrive on adventure climbs that offer not just physical challenges but also the chance to immerse ourselves in the beauty of nature. It’s about the peaceful moments spent on vertical faces and the camaraderie found among fellow climbers.",
      adventureIntro3: "Climbing offers us a unique way to connect with the outdoors, providing a mix of adrenaline and tranquility. Whether hanging on a crag in the Wasatch Mountains or planning our next big wall, each climb is a chance to explore limits, enjoy nature, and disconnect from the daily grind. Join us as we lace up our climbing shoes and chalk up for adventures that lift us above the ordinary, into the extraordinary vistas that only climbers can reach.",
      whatToExpect: "From these blog posts you can expect details and information on each climbing adventure we have and how to recreate the experience for youself.",
    },
    backpacking: {
      adventurePageImageURL:"https://storage.googleapis.com/adventure_blog_photos/gulch_chris.JPG",
      pageTitle1: "Backpacking",
      pageTitle2: "With Sadie and Jonny",
      adventureIntro1: "Welcome to our dedicated space for sharing the tales of our backpacking journeys. While we are not the fastest hikers on the trail, our love for backpacking is rooted in the immersive experiences that each trek offers.",
      adventureIntro2: "Our backpacking adventures take us through some of the most stunning landscapes, from the vast expanses of Southern Utah to the rugged peaks of the Wasatch Range. Each trip is a new chapter in our adventure story, filled with the sights, sounds, and scents of the wild. Join us as we strap on our packs and set out on foot, eager to discover what’s just over the next ridge or around the next bend. Our trails are open to all who seek to explore, relax, and reconnect with the great outdoors.",
      adventureIntro3: "Backpacking for us is about discovery and connection. We relish the slower pace that allows us to absorb the beauty of our surroundings, understand the terrain, and connect with nature on a deeper level. Our trips are less about covering miles quickly and more about creating memorable experiences in the wild.",
      whatToExpect: "From these blog posts you can expect details and information on each backpacking trip we do and how to recreate the experience for youself.",
    },
    hiking: {
      adventurePageImageURL:"https://storage.googleapis.com/adventure_blog_photos/gulch_sadieandjonny.jpeg",
      pageTitle1: "Hiking",
      pageTitle2: "With Sadie and Jonny",
      adventureIntro1: "Step into our world of hiking where we share the routes we’ve traversed and the moments that have made each journey special. We may not be the fastest hikers, but our passion lies in the exploration and enjoyment of the trail.",
      adventureIntro2: "For us, hiking is an invitation to slow down and savor the world around us. It’s a time to appreciate the subtle changes in the landscape, the shifting patterns of light through the trees, and the quiet moments that fill the soul with peace. We focus on adventure hikes that offer not just physical exercise but also a chance to escape into nature’s embrace.",
      adventureIntro3: "Our hikes take us through some of the most breathtaking areas—from the expansive vistas of Utah’s national parks to the intimate paths winding through local forests. Each path offers new discoveries and a chance to create lasting memories. Join us as we lace up our boots and hit the trail, eager for the sights and experiences that await. Whether you’re seeking solitude, adventure, or a gentle stroll, our hiking stories are here to inspire and guide your next outdoor adventure.",
      whatToExpect: "From these blog posts you can expect details and information on each hike we do and how to recreate the experience for youself.",
    },
  } 


  const { type } = useParams();
  const [blogPosts, setBlogPosts] = useState([]);
  const data = adventureData[type];


  useEffect(() => {
    if (!data) {
      console.error('No data available for type:', type);
      return;
    }
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getBlogPosts', {
          headers: {
            'category': type
          }
        });
        setBlogPosts(response.data.blogPosts);
      } catch (error) {
        console.error('Error fetching blog posts: ', error);
      }
    }

    fetchBlogPosts();
  }, [type]);

  if (!data) {
    return <div>No data available for this type</div>;
  }
  return (
    <>
      <div className={styles.hero}>
          <img src={data.adventurePageImageURL} alt={`${data.pageTitle1} Scene`} />
          <div className={styles.heroText}>
              {data.pageTitle1}
          </div>
      </div>
      <div className={`${styles.blogPost} ${styles.container}`}>
          <div>
              <h2>{data.pageTitle1}<br />{data.pageTitle2}</h2>
              <p>{data.adventureIntro1}</p>
              <p>{data.adventureIntro2}</p>
              {data.adventureIntro3 && <p>{data.adventureIntro3}</p>}
              <h3>{data.whatToExpect}</h3>
          </div>
          <img className={styles.blogPostsHeader} src={BlogPostsHeader} alt="Blog Posts Header" />
      </div>
      {blogPosts && blogPosts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </>
  )
}

export default AdventureTypePage;






    
  

