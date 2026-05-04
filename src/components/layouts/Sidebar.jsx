import React from 'react'
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[260px] h-screen p-6 bg-[#0B132B] text-gray-300 flex flex-col gap-4 shadow-xl z-20">
      <h2 className="text-2xl font-bold mb-6 text-white tracking-wider">⚙️Admin<span className="text-red-800">.</span></h2>

      <ul className="space-y-2 mt-4">
        <li className='hover:bg-blue-600/10 hover:text-blue-300 text-gray-400 font-medium transition-all duration-300 rounded-lg'>
          <Link to="/dashboard/userspage" className="block p-3 w-full rounded-lg">👤 Users</Link>
        </li>
        <li className='hover:bg-blue-600/10 hover:text-blue-300 text-gray-400 font-medium transition-all duration-300 rounded-lg'>
          <Link to="/dashboard/productspage" className="block p-3 w-full rounded-lg">📦 Products
          </Link>
        </li>
      </ul>
    </div>
  );
}