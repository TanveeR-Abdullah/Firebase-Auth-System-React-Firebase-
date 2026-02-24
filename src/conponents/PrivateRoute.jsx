import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";



const PrivateRoute = ({ children }) => {

    const { userloggedIn, role } = useAuth();

    return userloggedIn  ? children : <Navigate to="/" />


}

export default PrivateRoute;