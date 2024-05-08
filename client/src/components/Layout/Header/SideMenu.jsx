import React, { useState } from 'react'
import styles from './header.module.css';
import Chevron from '../../../assets/icons/Chevron.svg';
import navItems from '../../../util/navItems';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthContext';

function SideMenu({ isOpen, onClose }) {
    const { isLoggedIn, logout, isAdmin } = useAuth();
    const [activeSubMenu, setActiveSubMenu] = useState({});

    const toggleSubMenu = (title) => {
        // If clicked on the same submenu, close it, otherwise open the new one
        setActiveSubMenu(activeSubMenu === title ? null : title);
    };


    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        onClose();
    };

    const handleItemClick = (action) => {
        if (action) {
            action();
        }
        onClose(); // Close the side menu whenever any item is clicked
    };

    const modifiedNavItems = [...navItems];

    // Conditionally add Login or Logout
    if (isLoggedIn) {
        modifiedNavItems.push({
            title: 'Logout',
            path: '/logout',
            action: handleLogout
        });

        // Add create blog post only user is an admin
        if (isAdmin) {
            modifiedNavItems.push({
                title: 'Create Blog Post',
                path: '/createBlogPost'
            });
        }
    } else {
        modifiedNavItems.push({
            title: 'Login',
            path: '/login'
        });
        modifiedNavItems.push({
            title: 'Signup',
            path: '/signup'    
        })
    };

  return (
    <div className={isOpen ? `${styles.sideMenu} ${styles.open}` : styles.sideMenu}>
        {modifiedNavItems.map((item, index) => (
            <div className={`${styles.sideMenuItem} ${item.subItems ? '' : styles.noSubItems}`} key={item.title}>
                <div className={`${styles.menuItemHeader} ${activeSubMenu === item.title ? styles.active : ''}`} onClick={() => toggleSubMenu(item.title)}>
                    {item.action ? (
                            <a href={item.path} onClick={(e) => handleItemClick(() => item.action(e))}>{item.title}</a>  // Use a link but override with action
                        ) : (
                            <Link to={item.path} onClick={() => handleItemClick()}>{item.title}</Link>
                        )}
                    {item.subItems && 
                    <div className={`${styles.chevronContainer} ${activeSubMenu === item.title ? styles.active : ''}`}>
                        <img src={Chevron} alt="Chevron Down" />
                    </div>
                    }
  
                </div>
                {activeSubMenu === item.title && item.subItems &&  (
                    <div className={styles.subMenu}>
                        {item.subItems.map(subItem => (
                            <Link className={styles.subItem} key={subItem.name} to={subItem.path} onClick={() => handleItemClick()}>{subItem.name}</Link>
                        ))}
                    </div>
                )}
            </div>
        ))}
    </div>
  )
}

export default SideMenu;