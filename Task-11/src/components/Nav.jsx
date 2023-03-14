import React from 'react'

const Nav = () => {
  return (
    <div className='nav-container'>
        <div className="left-nav-container">
            <div className='nav-logo'>Hootsuite<sup>*</sup></div>            
        </div>
        <div className="middle-nav-container">
            <div>Platform</div>
            <div>Plans</div>
            <div>Enterprise</div>
            <div>Resources</div>
            <div>Education</div>
        </div>
        <div className="right-nav-container">
            <div className="right-nav-container-btn">Contact Us</div>
            <div className="right-nav-container-btn">Log In</div>
            <div className='active'>Sign Up</div>
        </div>
    </div>
  )
}

export default Nav
