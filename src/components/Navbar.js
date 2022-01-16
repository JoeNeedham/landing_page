import React, { useState } from 'react'
import '../stylesheets/Navbar.css'
import {FiMenu, FiX} from 'react-icons/fi'

// const navbarLinks = [{ url: '/home', title: 'Home' }]
const Navbar = ({ navbarLinks }) => {
    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
    };
    return (
        <nav className='navbar'>
            <span className='navbar__logo'>Travel</span>
            {menuClicked ? (
                <FiX size={25} className='navbar__menu' onClick={toggleMenuClick} />
            ) : (
                <FiMenu size={25} className='navbar__menu' onClick={toggleMenuClick} />
            )}
            <ul className={menuClicked ? "navbar__list navbar__list--active" : "navbar__list"}>
                {navbarLinks.map((item) => {
                    return (
                        <li className='navbar__item' key={item.tile}>
                            <a className='navbar__link' href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar
