import React, { useContext, useState, useEffect } from 'react';

import { auth } from '../../../Firebase';
// import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    console.log('ch=', children);
    const [curentUser, setCurentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }
    function logout() {
        return auth.signOut();
    }
    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged((user) => {
            setLoading(false);
            setCurentUser(user);
        });
        return unsubscriber;
    }, []);

    const value = {
        curentUser,
        login,
        logout,
        signUp,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, useAuth };
