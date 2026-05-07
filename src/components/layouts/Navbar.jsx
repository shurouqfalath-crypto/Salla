import React from "react";
import { useNavigate, Link } from "react-router-dom";
import profile from "../../images/user-profile-account-person.svg";
import { LogOut, Bell } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user-token");
    navigate("/login");
  };

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-50">
      
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
          Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Welcome back 👋
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <button className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-slate-200 transition-all duration-300 flex items-center justify-center text-slate-600">
          <Bell size={18} />
        </button>

        {/* Profile */}
        <Link
          to="/login"
          className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 transition-all duration-300 px-3 py-2 rounded-2xl"
        >
          <img
            src={profile}
            alt="User"
            className="w-10 h-10 rounded-full object-cover border border-slate-200"
          />

          <div className="hidden md:flex flex-col">
            <span className="text-sm font-semibold text-slate-700">
              Admin
            </span>

            <span className="text-xs text-slate-400">
              administrator
            </span>
          </div>
        </Link>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white px-4 py-2.5 rounded-2xl font-medium transition-all duration-300 shadow-sm"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}