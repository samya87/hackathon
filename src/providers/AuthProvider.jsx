import {createContext, useEffect, useState} from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =() =>{
        return signOut(auth);
    }

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                setUser(currentUser)    ;
                console.log("one user");
            }
            else {
                console.log("No user");
            }
        });
        return () =>{ unSubscribe()}
    },[]);

    const authInfo = {
        user, createUser, loginUser, logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.node
};
export default AuthProvider;