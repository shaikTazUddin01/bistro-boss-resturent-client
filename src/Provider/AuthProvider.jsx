import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../FireBase/FireBase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // log out user

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);
            console.log("user:", currentUser)
            setLoading(false)

        })
        return () => {
            return unSubscribe()
        }
    }, [auth])

    const authInfo = {
        loading,
        createUser,
        login,
        logout,
        auth,
        googleLogin,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;