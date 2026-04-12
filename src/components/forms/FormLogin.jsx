import React from 'react'
import { Link } from 'react-router-dom'

export default function FormLogin() {
  return (
    <div className="bg-gray-50 flex justify-center items-center min-h-screen">
      <div className="p-9 max-w-xl w-full bg-white rounded-lg">

        <h1 className='text-center'>Login</h1>

        <p className='text-gray-500 text-center mt-1'>
          Login to continue shopping
        </p>

        <form className='flex flex-col gap-5 mt-6'>

          <div>
            <label dir='rtl' className='block mt-6 text-md'>Email</label>
            <input
              type="email"
              placeholder='Email'
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label dir='rtl' className='block mt-2 text-md'>Password</label>
            <input
              type="password"
              placeholder='Password'
              className='w-full p-3 border border-gray-300 rounded-md'
            />
          </div>

          <div className='flex gap-5'>
            <button
              type='submit'
              className="w-full p-2 rounded-md bg-teal-900 text-white"
            >
              Login
            </button>

            <Link to="/register" className='text-teal-800 underline'>
              Don't have an account?
            </Link>
          </div>

        </form>

      </div>
    </div>
  )
}
