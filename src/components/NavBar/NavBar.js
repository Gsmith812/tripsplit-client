import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <section className='NavBar'>
            <div className='logo'>
                <NavLink className='logo-link' to='/'>
                    <h1>TripSplit</h1>
                </NavLink>
            </div>
            
        </section>
    )
}

export default NavBar;