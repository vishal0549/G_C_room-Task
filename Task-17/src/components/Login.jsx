import React from 'react';

let style = {
    width: "300px",
    boxShadow: "0 0 10px black",
    padding: "30px",
    margin: "50px auto",
    textAlign: "center"
};

const Login = () => {
  return (
    <div style={ style }>
        <h3 style={ { marginBottom: "10px" }}>Login Form</h3>
        <div>
            <input type="text" placeholder='User Name' />
        </div>
        <br />
        <div>
            <input type="text" placeholder='Password' />
        </div>
        <br />
        <div>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Login