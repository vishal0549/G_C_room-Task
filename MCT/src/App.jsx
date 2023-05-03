import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './Route/Login';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import ReadBlog from './Route/ReadBlog';
import Home from './Route/Home';
import CreateBlog from './Route/CreateBlog';

const App = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <div className="container-fluid">
      {
        isLoggedIn ? <Nav /> : null
      }

      <Routes>
        
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />}
        />
        
        <Route path="/CreateBlog" element={isLoggedIn ? <CreateBlog /> : <Navigate to="/" replace />} />
        <Route path="/ReadBlog" element={isLoggedIn ? <ReadBlog /> : <Navigate to="/" replace />} />
            
      </Routes>
      {
        isLoggedIn ? <Footer /> : null
      }
      
    </div>
  );
};

export default App;
