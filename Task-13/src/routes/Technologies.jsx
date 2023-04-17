import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Technologies = () => {
  return (
    <div className='tech-container'>
        <div className='left-sub-container'>

          <Link to="html">HTML</Link>
          <Link to="css">CSS</Link>
          <Link to="js">JS</Link>
          <Link to="react">REACT</Link>

        </div>

        <div className='right-sub-container'>
          <Outlet />
        </div>
    </div>
  )
}

export default Technologies