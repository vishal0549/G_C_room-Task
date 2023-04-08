import { createContext, useState } from "react";

export const AuthContex = createContext();

const CustomProvider = ({ children }) => {

    const [ isLoggedin, setIsLoggedIn ] = useState(false);

    return (
        <AuthContex.Provider value={ { isLoggedin, setIsLoggedIn } }>
            { children }
        </AuthContex.Provider>
    )
}

export default CustomProvider;