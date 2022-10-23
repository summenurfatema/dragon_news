import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()

const auth = getAuth(app)
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    // google sign in
    const googleSignIn = (googleProvider) => {
        return signInWithPopup(auth, googleProvider)
    }
    // unsubscribe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });

        return () => {
            unsubscribe()
        }

    }
        , [])
    const authInfo = { user, googleSignIn }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;