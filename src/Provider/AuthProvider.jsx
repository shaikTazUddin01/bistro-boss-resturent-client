import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/FireBase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
// login user
const login=(email,password)=>{
    setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
}

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                console.log(currentUser)
                setLoading(false)
            }
        })
        return () => {
            return unSubscribe()
        }
    }, [auth])

    const authInfo = {
        user,
        loading,
        createUser,
        login
    }
    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    )
};

export default AuthProvider;