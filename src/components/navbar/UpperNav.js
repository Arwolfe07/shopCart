import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';



const UpperNav = () => {

    return (
        <div className='upper-nav'>
            <div className='contact'>
                <FontAwesomeIcon className='phone-icon' icon={faPhone} />
                <span>+001234567890</span>
            </div>
            <div className='discount'>
                <span>Get 50% Off on Selected Items </span>
                <span> | </span>
                <span> Shop Now </span>
            </div>
            <div className='lan-loc'>
                <select className='language'>
                    <option value="en">Eng</option>
                    <option value="hn">Hin</option>
                </select>
                <select className='location'>
                    <option value="loc">Location</option>
                    <option value="In">India</option>
                    <option value="Us">USA</option>
                    <option value="Uk">UK</option>
                    <option value="Ar">Argentina</option>
                </select>
            </div>
        </div>
    )
}

export default UpperNav;