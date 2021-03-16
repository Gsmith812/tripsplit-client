import React, { useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import SideBarMenu from '../SideBarMenu/SideBarMenu';

const NavBar = (props) => {
    
    const [open, setOpen] = useState(false);

    const handleMenuClicked = () => {
        setOpen(!open);
    }

    return (
        <section className='NavBar'>
            <div className='logo'>
                <NavLink className='logo-link' to='/'>
                    <h1>TripSplit</h1>
                </NavLink>
            </div>
            <div className='menu'>
                <HamburgerMenu 
                    strokeWidth={3}
                    borderRadius={4}
                    menuClicked={handleMenuClicked}
                    isOpen={open}
                />
                {open && <SideBarMenu history={props.history} />}
            </div>
        </section>
    )
}

export default NavBar;