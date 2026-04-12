import React from 'react'
import { Link } from 'react-router-dom'
export default function FormRegis() {
  return (
    <div className="bg-gray-50  flex justify-center items-center min-h-screen">
      <div className="p-8 max-w-xl w-full bg-white  rounded-lg">

        <h2 className='text-xl font-semibold text-center'>Register</h2>
  
        <p className='text-gray-500 text-center mt-1'>
          Create your account to continue shopping
        </p>
  
        <form className='flex flex-col gap-5 mt-2'>

          <div>
            <label dir='rtl' className='block mb-2'>Username</label>
            <input
              type="text"
              placeholder='Username'
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          </div>
  
          <div>
            <label dir='rtl' className='block mb-2'>Email</label>
            <input
              type="email"
              placeholder='example@email.com'
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
  
          <div>
            <label dir='rtl' className='block mb-2'>Password</label>
            <input
              type="password"
              placeholder='********'
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          </div>

          <div>
            <label dir='rtl' className='block mb-2'>Password confirmation</label>
            <input
              type="password"
              placeholder='********'
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          </div>
  
          <div className='flex gap-2'>
            <button
              type='submit'
              className='w-full p-2 rounded-md bg-teal-900 text-white'
            >
              Register
            </button>
         
            <Link to="/login" className='underline p-2 text-teal-800'> 
              Already have an account?
            </Link>
   
          </div>
  
        </form>
      </div>
    </div>
  )
}
