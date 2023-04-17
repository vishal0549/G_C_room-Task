import { useContext } from 'react';
import { AuthContex } from './Context';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {

  const { setIsLoggedIn, userNameForProfile } = useContext(AuthContex);
  const navigate = useNavigate();

  const loginProfile = {
    marginLeft: "20px",
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    backgroundColor: "yellow",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "700",
  }

  return (
    <div className='nav'>
      
        <div id="title">
            <h2>React Context</h2>
        </div>

        <div id="menu">

            <Link to="/">Home</Link>
            <Link to="/tech">Technologies</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">ContactUs</Link>

            <button 
              style={{padding: "8px 20px"}}
              onClick={ () => {
                setIsLoggedIn(false);
                navigate("/");
              }}                
            >
              Logout
            </button>

            <span style={ loginProfile } title={ userNameForProfile }>
              { userNameForProfile.charAt(0) }
            </span>

        </div>
    </div>
  )
}

export default Nav