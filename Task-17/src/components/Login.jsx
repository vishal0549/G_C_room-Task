import { useState, useContext } from 'react';
import { AuthContex } from './Context';

let style = {
    width: "300px",
    boxShadow: "0 0 10px black",
    padding: "30px",
    margin: "50px auto",
    textAlign: "center"
};

const Login = () => {

    const { setIsLoggedIn, setUserNameForProfile } = useContext(AuthContex);

    const [ user, setUser ] = useState({
        name: "",
        pass: "",
    })

    setUserNameForProfile(user.name);

    const handleAuthentication = () => {
        
        if(
            user.name === "Admin" && user.pass === "admin@123" ||
            user.name === "Login" && user.pass === "login@123" ||
            user.name === "Classes" && user.pass === "class@123"
        ) {
            alert("Login Successfull");
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false);
            alert("Invalid User id or Password !!!");
            setUser({
                name: "",
                pass: "",
            });
        }   

    }

  return (
    <div className='login-page'>
        <div style={ style }>
            <h3 style={ { marginBottom: "10px" }}>Login Form</h3>
            <div>
                <input type="text" placeholder='User Name' onChange={ (e) => { 
                    setUser({
                        ...user,
                        name : e.target.value
                    }) }}
                    value={ user.name }
                />
            </div>
            <br />
            <div>
                <input type="password" placeholder='Password' onChange={ (e) => {
                    setUser( {
                        ...user,
                        pass : e.target.value
                    }) }}
                    value={ user.pass }
                />
            </div>
            <br />
            <div>

                <button
                    style={{ padding: "8px 20px", marginBottom: "10px"}}
                    onClick={ 
                        handleAuthentication 
                    }
                >
                    Login
                </button>

            </div>        
        </div>
        <div className='login-note'>

            <p style={{ marginBottom: "10px"}}>
                Note: Try to login with below id & password because User id & password is hardCoded not <s>dynamic!</s>
            </p>
            <ul style={{ listStyle: "none"}}>

                <li style={{marginBottom: "8px"}}><u>User Id</u> --- <u>Password</u></li>
                <li>Admin --- admin@123</li>
                <li>Login --- login@123</li>
                <li>Classes --- class@123</li>

            </ul>
        </div>
    </div>
  )
}

export default Login