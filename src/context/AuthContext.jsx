import { auth , app } from "../firebase";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getdoc , doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const AuthContext = createContext();


// ===================Hookk=============

export const useAuth = () => {
    return useContext(AuthContext);
}





export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userloggedIn, setUserLoggedIn] = useState(false);

    const initializeUser = async (AuthUser) => {


    };


    useEffect(()=>{
        onAuthStateChanged(auth , initializeUser );
    },[] );





    const value = {
        currentUser,
        userloggedIn,
        loading,
    };



    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );


}