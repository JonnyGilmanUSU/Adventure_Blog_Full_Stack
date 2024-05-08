import React from 'react';
import styles from './footer.module.css'
import YoutubeWhite from '../../../assets/icons/YoutubeWhite.svg'
import InstagramWhite from '../../../assets/icons/InstagramWhite.svg'
import FacebookWhite from '../../../assets/icons/FacebookWhite.svg'




function Footer() {
  return (
    <footer>
      <h1>S&J Adventures</h1>
      <div className={styles.socialContainer}>
        <img src={YoutubeWhite} alt="Youtube Icon"/>
        <img src={InstagramWhite} alt="Instagram Icon"/>
        <img src={FacebookWhite} alt="Facebook Icon"/>
      </div>
      <p className={styles.copywrite}>© s+j Adventures, 2024. All rights reserved</p>
    </footer>
  )
}

export default Footer;