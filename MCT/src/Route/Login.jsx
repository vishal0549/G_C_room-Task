import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/Action';
import { Routes, Route, Navigate } from 'react-router-dom';

const Login = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(loginUser(username, password));
  };

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }


  return (
    <div className="login-container container-fluid vh-100 d-flex align-items-center justify-content-center">
        <div className="card card-height rounded-4">
          <div className="row">
            <div className="col-6 d-flex flex-column justify-content-end pb-4 ps-5 col-left">
              <h1 className='login-detail-title position-absolute'>Welcome</h1>
              <p className=''>INTRODUCING BROKER OPERATING SYSTEM</p>
            </div>

            <div className="col-6">
              <div className="card-body h-100  d-flex flex-column align-items-center justify-content-center">
                <div className="text-center login-title my-5">
                  <h1>LOGIN</h1>
                </div>
                <form className='mb-4' onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="username" className='login-form-label'>Username</label>
                      <div className="d-flex align-items-center justify-content-center border-bottom pe-2 b-color">
                        <input type="text" id="username" className="form-control border-0 shadow-none" onChange={(e) => setUsername(e.target.value)} />
                        <i className="fa-solid fa-user icon"></i>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label htmlFor="password" className='login-form-label'>Password</label>
                      <div className="d-flex align-items-center justify-content-center border-bottom pe-2 b-color">
                        <input type="password" className="form-control border-0 shadow-none" onChange={(e) => setPassword(e.target.value)} />
                        <i className="fa-solid fa-magnifying-glass fa-rotate-90 icon"></i>
                      </div>
                    </div>                  

                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <button type="submit" className="btn rounded-5 w-75">Login</button>
                    </div>

                  </form>
                  <div className='card-bottom w-100 d-flex flex-column align-items-end justify-content-end'>
                    <a href='#'>Forget</a>
                    <a href='#'>Help</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
   
  )
}

export default Login