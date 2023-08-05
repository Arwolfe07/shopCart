import React from 'react'
import midImg from '../../assets/mid_im.png';
import './Advertisement.css';

const Advertisement = () => {
    const scrollHandler = () => {
        const element = document.getElementsByClassName('all-headphones-container')[0];

        if (element) {
            const yOffset = -50; // Offset from the top for better positioning
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    return (
        <div className='adv-container'>
            <div className='text-val'>
                <p>Grab Upto 50% Off On <br />Selected Games</p>
                <button onClick={scrollHandler}>Buy Now</button>
            </div>
            <div className='banner-img'>
                <img className='image' src={midImg} width="400px" />
            </div>
        </div>
    )
}

export default Advertisement;