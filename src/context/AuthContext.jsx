import { auth, db } from "../firebase";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";



const AuthContext = createContext();


// ===================Hooks=============

export const useAuth = () => {
    return useContext(AuthContext);
}





export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userloggedIn, setUserLoggedIn] = useState(false);
    const [role, setRole] = useState("");

    const initializeUser = async (AuthUser) => {
        if (AuthUser) {
            setCurrentUser(AuthUser);

            const DocRef = doc(db, "users", AuthUser.uid);
            const DocData = await getDoc(DocRef);

            if (DocData.exists()) {
                setRole(DocData.data().role);
            }

            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
            setRole("");
        }

        

        setLoading(false);
    };


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, initializeUser);

        return unsubscribe;

    }, []);





    const value = {
        currentUser,
        userloggedIn,
        loading,
        role,
    };



    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );


}
