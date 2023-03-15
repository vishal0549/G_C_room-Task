import React from 'react';
import HomeTop from './HomeTop';
import HomeMiddle from './HomeMiddle';
import HomeBottom from './HomeBottom';

const Home = () => {
  return (
    <div className='home-container'>

        <HomeTop />
        
        <HomeMiddle />

        <HomeBottom />
        
    </div>
  )
}

export default Home