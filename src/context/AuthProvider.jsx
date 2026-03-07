import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/irebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState();
    const [loading, setLoding] = useState(false);
    // registation handel
    const handelemailAndPassword = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //    login handel
    const handelLogin = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // handelginOut
    const handelSginOut = () => {
        setLoding(true)
        return signOut(auth)
    }
    // login with google
    const signInWithGoogle = () => {
        setLoding(true)
        return signInWithPopup(auth, provider)
    }
    //  update profile pic 
    const updateUserProfile = (name, photo , number) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
            phoneNumber:number,
        })
    }

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
            console.log('CurrentUser-->', currentUser?.email)
            setUser(currentUser)
            setLoding(false)
        });

        return () => {
            return unsubscribe()
        }
    }, [])
    const userInfo = {
        user,
        loading,
        setUser,
        setLoding,
        handelemailAndPassword,
        handelLogin,
        handelSginOut,
        signInWithGoogle,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;