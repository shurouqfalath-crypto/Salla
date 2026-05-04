import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function DashboardLayout() {
  return (
    <div className="flex h-screen  bg-red-50">
      <Sidebar/>
      <div className="flex-1 flex flex-col">
        <Navbar/>
        <div className="flex-1 w-full flex justify-center items-start overflow-y-auto">
          <div className="w-full max-w-[90%] md:max-w-[80%] p-6 mt-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
