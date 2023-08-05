import React from 'react';
import Advertisement from '../../components/advertisement/Advertisement';
import './Home.css'
import Filters from '../../components/filters/Filters';
import AllHeadphones from '../../components/allHeadphones/AllGames';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='advertise-section'>
        <Advertisement/>
      </div>
      <div className='mid-section'>
        <Filters/>
      </div>
      <div className='headphones-section'>
        <AllHeadphones/>
      </div>
    </div>
  )
}

export default Home;