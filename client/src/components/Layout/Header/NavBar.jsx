import React from 'react';
import styles from './header.module.css';
import SearchIcon from '../../../assets/icons/Search.svg';

function NavBar({ onMenuClick, onSearchClick }) {
  return (
    <nav className={styles.navbar}>
      <div onClick={onMenuClick} style={{ visibility: 'hidden' }}>Menu</div> 
        <div onClick={onMenuClick}><span>Menu</span></div>
        <div className={styles.search_icon} onClick={onSearchClick}>
            <img src={SearchIcon} alt="search icon" />
        </div>
    </nav>
  )
}

export default NavBar;