import React from 'react'
import Nav from './components/Nav'
import Login from './components/Login'
import Home from './components/Home'
import { useContext } from 'react';
import { AuthContex } from './components/Context';

const App = () => {

  const { isLoggedin } = useContext(AuthContex);
  console.log(isLoggedin)

  return (
    <>      
      {
        isLoggedin ? (
          <> <Nav /> <Home /> </> )
        : <Login />
      }
    </>
  )
}

export default App