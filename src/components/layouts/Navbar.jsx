import React from 'react'
import { useNavigate } from "react-router-dom";
import profile from '../../images/user-profile-account-person.svg';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user-token");
    navigate("/login");
  };

  return (
    <div className=" h-[80px] flex justify-between items-center px-8  bg-white shadow-sm border border-gray-100">
    
      <span className="font-bold text-xl text-gray-800">Dashboard</span>

      <div className="flex items-center gap-6">
  <Link to="/login" className="flex items-center">
         <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200">
               <img src={profile} alt="User" className="w-6 h-6 object-contain" />
             </button>
  
        </Link>

        {/* <span className="bg-gray-100 p-2 rounded-full text-lg">👤</span> */}
       
        <button
          onClick={handleLogout}
          className="bg-red-50 text-red-600 font-medium px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white "
        >
          Logout
        </button>
      </div>

    </div>
  );
}


