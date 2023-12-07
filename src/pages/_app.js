import { useCallback, useEffect, useState } from "react"; 
import { initializeApp } from "firebase/app"; 
import { createUserWithEmailAndPassword,
    getAuth, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
 } from "firebase/auth"; 
import Header from "@/app/components/Header"; 
import firebaseConfig from "../app/components/firebaseConfig";

export default function MyApp( { Component, pageProps }) {
    const [appIntialized, setAppIntialized] = useState(false); 
    const [isLoading, setIsLoading] = useState(true); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInformation, setUserInformation] = useState(null); 
    const [error, setError] =  useState(null);

    const createUser = useCallback((e) => { 
        e.preventDefault();

        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                const user = userCredential.user;
                setIsLoggedIn(true);
                setUserInformation(user);
                setError(null);
  
        })
        .catch((error)=>{
            const errorCode =  error.Code;
            const errorMessage = error.Message;
            console.warn({errorCode,errorMessage});
  
        })
    }, [setError, setIsLoggedIn, setUserInformation]); 

    const loginUser = useCallback((e) => {
        e.preventDefault();

        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                const user = userCredential.user;
                setIsLoggedIn(true);
                setUserInformation(user);
                setError(null);
  
        })
        .catch((error)=>{
            const errorCode =  error.Code;
            const errorMessage = error.Message;
            console.warn({errorCode,errorMessage});
  
        })
    }, [setError, setIsLoggedIn, setUserInformation] ); 

    const logoutUser = useCallback(() => {
        const auth = getAuth();
        signOut(auth)
        .then(()=>{
            setUserInformation(null);
            setIsLoggedIn(false);
        })
        .catch((error)=>{
            const errorCode = error.errorCode;
            const errorMessage = error.error.Message;
            console.warn({error, errorCode,errorMessage});
        })
    }, [signOut, setIsLoggedIn, setUserInformation] ); 

    useEffect(() => {
        initializeApp(firebaseConfig); 
        setAppIntialized(true); 
    }, []); 

    useEffect(() => {
        if (appIntialized) {
            const auth = getAuth(); 
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUserInformation(user); 
                    setIsLoggedIn(true); 
                } else {
                    setUserInformation(null); 
                    setIsLoggedIn(false); 
                }
                setIsLoading(false); 
            }); 
        }

    }, [appIntialized]); 

    if (isLoading) return null; 


    return (
        <>
            <Header isLoggedIn={isLoggedIn} logoutUser={logoutUser}/>
            <Component 
            {...pageProps}
            createUser={createUser}
           // logoutUser={logoutUser}
            loginUser={loginUser}
            isLoggedIn={isLoggedIn}
            userInformation={userInformation}
    
        />
        <p>{error}</p>
        </>
    ); 
}