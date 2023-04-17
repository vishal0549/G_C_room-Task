import Nav from './components/Nav'
import Login from './components/Login'
import Home from './components/Home'
import  { useContext } from 'react';
import { AuthContex } from './components/Context';
import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './routes/Products';
import Profile from './routes/Profile';
import Contact from './routes/Contact';
import ProductsDetails from './routes/ProductsDetails';
import PageNotFount from './routes/PageNotFount';
import Techonoligies from './routes/Technologies';
import Html from './routes/Html';
import Css from './routes/Css';
import Js from './routes/Js';
import { React as ReactComp } from './routes/React';
import Protect from './routes/Protect';

const App = () => {

  const { isLoggedin } = useContext(AuthContex);
  console.log(isLoggedin)

  return (
    <>      
      {
        isLoggedin ? <Nav /> : null
      }

      <Routes>
        <Route path="/" element={ isLoggedin ? <Home /> : <Login /> } />
        <Route path="/products" element={<Protect> <Products /> </Protect>} />
        <Route path="/profile" element={<Profile />} />

        <Route path='/tech' element={ <Protect> <Techonoligies /> </Protect> }>

          <Route path="" element={<Navigate to="html" />} />

          <Route path="html" element={ <Html /> } />
          <Route path="css" element={ <Css /> } />
          <Route path="js" element={ <Js /> } />
          <Route path="react" element={ <ReactComp /> } />

        </Route>

        <Route path="/contact" element={ isLoggedin ? <Contact /> : <Navigate to="/" /> } />
        <Route path="/productdetails/:id" element={ <ProductsDetails /> } />
        
        <Route path="*" element={ <PageNotFount /> } />
      </Routes>
      
    </>
  )
}

export default App