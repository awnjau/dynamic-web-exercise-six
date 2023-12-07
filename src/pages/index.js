import {useEffect, useState } from 'react';
import {useRouter} from "next/router";
import UserProfileCard from '@/app/components/UserProfileCard';


export default function userProfile({ isLoggedIn, userInformation}){ 
   const router=useRouter();

    useEffect(() => {
      if (!isLoggedIn) router.push("/login")
},[isLoggedIn]);
console.log(userInformation)

return(
    <main>
    <h1>User Profile</h1>
    <UserProfileCard user={userInformation} />
    </main>  
);

}