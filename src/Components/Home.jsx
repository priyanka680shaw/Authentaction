import React from 'react'
import { auth } from './Firebaseconfig'
import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import bg from './homebg.jpg';
export const Home = () => {

    const navigate = useNavigate();
async function singOutHanddler(){
    try{
        const singOut = await signOut(auth);
    console.log(singOut);
    navigate("/")

    }
    catch(err){
        console.log(err)
    }
}

  return (
    <>
    
         <div className='flex justify-center items-center flex-col h-screen bg-no-repeat bg-cover' style={{backgroundImage : `url(${bg})`}}>
            <h1 className='text-3xl font-bold text-5xl p-4 text-green-800'>Home <span className='text-red-500'>Successfully You Entered into Home Page</span></h1>
            
            <button type='submit'  onClick={singOutHanddler} className='bg-white font-bold  align-center border-4 border-red-600 pl-8 pr-8 pt-2 pb-2 m-2'>SingOut</button>
        </div>
    </>
  )
}
