import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-container d-flex justify-content-between align-items-center px-5'>
        <div className='nav-left'><h1>Blog App</h1></div>
        <div className="nav-right d-flex">
            <div>
                <NavLink to="/" style={({ isActive }) => ({ 
                        textDecoration: isActive ? 'underline' : 'none',
                        color: 'white',
                        fontWeight: '900'
                    })}>
                            Home
                </NavLink>
            </div>
            <div>
                <NavLink to="/CreateBlog" style={({ isActive }) => ({ 
                            textDecoration: isActive ? 'underline' : 'none',
                            color: 'white',
                            fontWeight: '900'  
                        })}>
                            Create Blog
                </NavLink>
            </div>
            <div>
                <NavLink to="/ReadBlog" style={
                    ({ isActive }) => ({ 
                        textDecoration: isActive ? 'underline' : 'none',
                        color: 'white',
                        fontWeight: '900'                           
                    })}>
                            Read Blog
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Nav