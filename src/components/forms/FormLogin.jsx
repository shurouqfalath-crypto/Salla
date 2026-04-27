import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

export default function FormLogin() {
  const {  login } = useContext(AuthContext)
  const route = useNavigate()

  const [loginData, setLoginData] = React.useState({
    username: "emilys",
    password: "emilyspass",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(loginData)
    route('/home')
  };

  return (
    <div className="bg-gray-50 flex justify-center items-center min-h-screen">
      <div className="p-9 max-w-xl w-full bg-white rounded-lg">

        <h1 className='text-center'>Login</h1>

        <p className='text-gray-500 text-center mt-1'>
          Login to continue shopping
        </p>

        <form  onSubmit={handleSubmit}
        className='flex flex-col gap-5 mt-6'>

          <div>
            <label dir='rtl' className='block mt-6 text-md'>Email</label>
            <input
              type="text"
              name="username"
             value={loginData.username}
              onChange={handleChange}
              placeholder='username'
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label dir='rtl' className='block mt-2 text-md'>Password</label>
            <input
              type="password"
              placeholder='Password'
              value={loginData.password}
              onChange={handleChange}
              className='w-full p-3 border border-gray-300 rounded-md'
            />
          </div>
emilyspass
          <div className='flex gap-5'>
            <button
              type='submit'
              onSubmit={handleSubmit}
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
// fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
    
//     username: 'emilys',
//     password: 'emilyspass',
//     expiresInMins: 30, // optional, defaults to 60
//   }),
//   credentials: 'include' // Include cookies (e.g., accessToken) in the request
// })
// .then(res => res.json())
// .then(console.log);