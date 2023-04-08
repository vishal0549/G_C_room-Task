import { createContext, useState } from "react";

export const AuthContex = createContext();

const CustomProvider = ({ children }) => {

    const [ isLoggedin, setIsLoggedIn ] = useState(false);

    const [ userNameForProfile, setUserNameForProfile ] = useState("");

    return (
        <AuthContex.Provider value={ { isLoggedin, setIsLoggedIn, userNameForProfile, setUserNameForProfile } }>
            { children }
        </AuthContex.Provider>
    )
}

export default CustomProvider;