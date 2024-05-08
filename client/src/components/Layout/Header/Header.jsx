import React, { useEffect, useState, useRef } from 'react';
import styles from './header.module.css';
import HeroImage from '../../../assets/images/MobileHeroImage.png';
import MainHeader from './MainHeader';
import NavBar from './NavBar';
import SideMenu from './SideMenu';
import SearchMenu from './SearchMenu';

function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const sideMenuRef = useRef(); // Rederence to the sidemenu for checking clicks outside 

    const handleMenuClick = () => {
        setNavOpen(!navOpen);
        setSearchOpen(false);
    };

    const handleSearchClick = () => {
        setSearchOpen(!searchOpen);
        setNavOpen(false);
    };

    const closeMenus = () => {
        setNavOpen(false);
        setSearchOpen(false);
    }

    useEffect(() => {
        // Function to detect click outside the sideMenu
        const handleClickOutside = (event) => {
            if (navOpen && sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
                closeMenus();
            }
        };
        
        // Add event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove event listner
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [navOpen]);    

  return (
    <div>
        <MainHeader />
        <NavBar onMenuClick={handleMenuClick} onSearchClick={handleSearchClick} />
        <div ref={sideMenuRef}>
            <SideMenu isOpen={navOpen}  onClose={closeMenus} />
        </div>
        <SearchMenu isOpen={searchOpen} onClose={closeMenus}/>
    </div>
  )
}

export default Header;