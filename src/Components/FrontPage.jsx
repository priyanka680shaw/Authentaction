import React from 'react'
import { Link } from 'react-router-dom'

export const FrontPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-blue-800'>
        <Link to = "singIn" >
            <button className='border-4 border-green-900 p-4 bg-green-200 hover:bg-white hover:text-green text-3xl font-bsolds'>Verifyed Yourself</button>
        </Link>
    </div>
  )
}
