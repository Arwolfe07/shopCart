import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import './Filters.css';

const Filters = () => {
    return (
        <div className='filter-container'>
            <div className='left'>
                <select>
                    <option value="all">Game Type</option>
                    <option value="Bluetooth">MVP</option>
                    <option value="Band">PVP</option>
                    <option value="Classic">Classic Gen</option>
                    <option value="Wired">RPG</option>
                    <option value="Over">Platform</option>
                </select>
                <select>
                    <option value="#">Price</option>
                    <option value="#">Free to Play</option>
                    <option value="#">500 - 1100</option>
                    <option value="#">1100 - 2000</option>
                    <option value="#">2000 and above</option>
                </select>
                <select>
                    <option value="#">Review</option>
                    <option value="#">1-3 star</option>
                    <option value="#">3-4 star</option>
                    <option value="#">4-5 star</option>
                </select>
                <select>
                    <option value="#">Genere</option>
                    <option value="Red">New</option>
                    <option value="Black">Latest</option>
                    <option value="White">Old</option>
                    <option value="Blue">Golden Era</option>
                </select>
                <select>
                    <option>Game Mode</option>
                    <option>Action</option>
                    <option>Role Playing</option>
                    <option>Stealth</option>
                    <option>Fun to play</option>
                    <option>Game Mode</option>
                </select>
                <select>
                    <option>Offer</option>
                    <option>upto 25% Off</option>
                    <option>Flat 20% off</option>

                </select>
                <button>
                    All Filters
                    <FontAwesomeIcon icon={faFilter} />
                </button>
            </div>
            <div className='right'>
                <select>
                    <option>Sort By</option>
                    <option>Shooting</option>
                    <option>Racing</option>
                    <option>Stealth</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;