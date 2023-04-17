import { useContext } from "react";
import { AuthContex } from "../components/Context";
import { Navigate } from "react-router-dom";

const Protect = ({ children }) => {

    const { isLoggedIn } = useContext(AuthContex);
    if(isLoggedIn) {
        return children
    } else {
        return <Navigate to="/" /> ;
    }
}

export default Protect;