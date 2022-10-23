import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()

const auth = getAuth(app)
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)


    // google sign in
    const googleSignIn = (googleProvider) => {
        return signInWithPopup(auth, googleProvider)
    }

    // email sign up

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // EMAIL SIGN IN

    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logOut = () => {
        return signOut(auth)
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
    const authInfo = { user, createUser, signIn, googleSignIn, logOut }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;