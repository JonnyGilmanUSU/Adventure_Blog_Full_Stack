import React from 'react';
import styles from './header.module.css';
import YoutubeIcon from '../../../assets/icons/Youtube.svg';
import FacebookIcon from '../../../assets/icons/Facebook.svg';
import InstagramIcon from '../../../assets/icons/Instagram.svg';


function MainHeader() {
  return (
    <header>
        <h1>S&J Adventures</h1>
        {/* <div className={styles.socialContainer}>
          <img src={YoutubeIcon} alt="Youtube Icon"/>
          <img src={InstagramIcon} alt="Instagram Icon"/>
          <img src={FacebookIcon} alt="Facebook Icon"/>
        </div> */}
    </header>
  )
}

export default MainHeader;