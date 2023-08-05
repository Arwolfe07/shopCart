import React from 'react'
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';
import './Navbar.css';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <div className='nav-container'>
            {location.pathname === '/' &&
                <div className='upper'>
                    <UpperNav />
                </div>
            }

            <div className='lower'>
                <LowerNav />
            </div>
        </div>
    )
}

export default Navbar;