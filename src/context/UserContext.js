import React, { createContext } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()

const auth = getAuth(app)
const UserContext = ({ children }) => {
    const user = { name: 'asl' }

    // google sign in
    const googleSignIn = (googleProvider) => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = { user, googleSignIn }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;