import{useEffect} from 'react';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Header from "@/app/components/Header";
import UserProfileCard from "@/app/components/UserProfileCard";
import firebaseConfig from "@/app/components/firebaseConfig";

export default function UserProfile (){
    const[isLoggedIn, setIsLoggedIn] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(()=> {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        console.log(auth);
        // check if log in and set user info if logged in
        setIsLoggedIn(true)
        setUser({});
    },[])

    if(!isLoggedIn) return null;

    return(
        <>
       <Header />
        <main>
            <h1>User Profile</h1>
            <UserProfileCard />
        </main>
        </>
    );
}