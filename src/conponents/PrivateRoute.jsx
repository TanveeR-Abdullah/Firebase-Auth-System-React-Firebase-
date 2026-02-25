import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";



const PrivateRoute = ({ children }) => {

    const { userloggedIn   } = useAuth();

    return userloggedIn  ? children : <Navigate to="/" replace />


}

export default PrivateRoute;