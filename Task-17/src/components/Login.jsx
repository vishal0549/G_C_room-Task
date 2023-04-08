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

    const { setIsLoggedIn } = useContext(AuthContex);

    const [ user, setUser ] = useState({
        name: "",
        pass: "",
    })

    const handleAuthentication = () => {
        
        if(
            user.name === "Admin" && user.pass === "admin@123" ||
            user.name === "Login" && user.pass === "login@123"
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
            <input type="text" placeholder='Password' onChange={ (e) => {
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
                style={{ padding: "8px 20px"}}
                onClick={ 
                    handleAuthentication 
                }
            >
                Login
            </button>

        </div>
    </div>
  )
}

export default Login