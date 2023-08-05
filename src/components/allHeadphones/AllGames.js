import React, { useEffect, useState } from 'react';
import './AllHeadphones.css';
import Headphone from './Game';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../actions/gamesActions';

const AllHeadphones = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.gamesReducer);
    // console.log(games);
    useEffect(() => {
        dispatch(getGames());
    },[])


    return (
        <div className='all-headphones-container'>
            <h1>Games For You!</h1>
            <div className='headphones'>
                {!games.data && <h1>Loading...</h1>}
                {games.data && games.data.map(data => (
                    <Headphone data={data} id={data.appId}/>
                ))}
            </div>
        </div>
    )
}

export default AllHeadphones;