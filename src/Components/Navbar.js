/* import React from 'react'
import  '../Styles/Navbar.scss'
function Navbar() {
  return (
    <div>
    <div className='navbar'>
    <a href='/home'>Home</a>
    <a href='/about'>About</a>
    <a href='profile'>Profile</a>
    <a href='/contact'>Contact</a>
    </div>
    </div>
  )
}

export default Navbar */

import React, { useState } from 'react'
import  '../Components/Navbar.scss'
import '../Styles/Navbar.scss'
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    };
    return (
        <div className='header'>
            <div className='header_content'>
                <span className='logo'> Code Focus </span>
            </div>
            <div className='navmenu'>
                <div>
                    <nav className={menuOpen ?'nav--open nav' : 'nav'}>
                    {/* '`${nav} ${menuOpen ? `nav--open`] : {}}`' */}
                        <a className='nav_item' href={"/"}>
                            Page One
                        </a>
                        <a className='nav_item' href={"/"}>
                            Page Two
                        </a>
                        <a className='nav_item' href={"/"}>
                            Page Three
                        </a>
                        <div className='nav_button_container'>
                            <Button />
                        </div>
                    </nav>
                </div>
            </div>
            <div className='navmenu'>
                <div className='header_button_container'>
                    <Button />
                </div>
                <button className='header_toggler' onClick={menuToggler}>
                    {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
                </button>
            </div>
        </div>
    )
}

const Button = () => {
    return <button className='button'>Click me</button>;
}

export default Navbar