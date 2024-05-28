import React from 'react'
import { auth } from './Firebaseconfig'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
export const SingIn = () => {

    const navigate = useNavigate();
//sing UP
    async function submiSingUptHandler(e){
        e.preventDefault()
        const email = e.target[0].value;
       const password = e.target[1].value;
        console.log(email , password)
        try{
            const singIn =await createUserWithEmailAndPassword(auth , email , password);
            alert("You are Varify  now Login !");
            console.log("singIn" , singIn);
        }
        catch(err){
            alert(err);
        }
    }

//Sing IN
   async function singInHandler(e){
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;
       try{
        const singIn = await signInWithEmailAndPassword (auth , email , password);
        navigate("/home")
        console.log(singIn)
       }
       catch(err){
        alert(err);
       }
    }
  return (
    <>
     <div className='flex justify-around items-center h-screen bg-green-300'>
                 {/* Sing Up */}
       <div className="w-[500px] h-[300px] bg-gray-400 border-8 border-black flex justify-center items-center">
            <form onSubmit={(e)=>{
                submiSingUptHandler(e);
            }}>
                <input type='email' name = "email" placeholder='Enter Email' className='border-4 border-gray-600 pl-8 pr-8 pt-4 pb-4 m-2'/><br/>
                <input type='password' name='password' placeholder='6 character'  className='border-4 border-gray-600 pl-8 pr-8 pt-4 pb-4 m-2'/><br/>
                <button type='submit' className='bg-white font-bold  align-center border-4 border-green-600 pl-8 pr-8 pt-2 pb-2 m-2'>SingUp</button>
            </form>
        </div>

        {/* Sing In */}

        <div className="w-[500px] h-[300px] bg-gray-400 border-8 border-black flex justify-center items-center">
            <form onSubmit={(e)=>{
                singInHandler(e);
            }}>
                <input type='email' name = "email" placeholder='Enter Email' className='border-4 border-gray-600 pl-8 pr-8 pt-4 pb-4 m-2'/><br/>
                <input type='password' name='password' placeholder='6 character' className='border-4 border-gray-600 pl-8 pr-8 pt-4 pb-4 m-2'/><br/>
                <button type='submit' className='bg-white font-bold  align-center border-4 border-green-600 pl-8 pr-8 pt-2 pb-2 m-2'>SingIn</button>
            </form>
        </div>

     </div>
    
    </>
  )
}
