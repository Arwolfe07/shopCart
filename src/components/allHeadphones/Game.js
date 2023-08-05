import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Headphone = ({ data }) => {
    return (
        <div className='headphone-card' id={data.appId}>
            <img src={data.imgUrl} alt='pic' />
            <div className='details'>
                <div className='topsec'>
                    <p>{data.title}</p>
                    <p><span>$</span>8<span>.00</span></p>
                </div>
                <p className='demo'>{data.reviewSummary}</p>
                <p className='rating'>
                    <span className='stars'>

                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className='noOfRating'>
                    ({data.released})
                    </span>
                </p>

            </div>
            <Link className='add-cart' to={`/${data.appId}`}>Proceed to Buy</Link>
        </div>
    )
}

export default Headphone;