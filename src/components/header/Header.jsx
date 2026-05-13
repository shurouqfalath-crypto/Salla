import React, { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo-square.png";
import Dropdownlang from "./dropDown/Dropdownlang";
import UserButton from "../../buttons/UserButton";
import CartButton from "../../buttons/CartButton";

import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="w-full bg-white shadow-sm py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">

        <Link to="/home" className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[70px] h-[70px] bg-gray-50 p-2 rounded-full border-4 border-teal-200"
          />
        </Link>

        <div className="text-center">
          <h1 className="text-zinc-950 text-lg font-semibold">
            The Beautiful Experience Store
          </h1>
          <p className="text-gray-400 text-sm">
            Your Store for All Your Beautiful Experiences and Ideas
          </p>
        </div>

        <div className="flex items-center gap-4">

          {user && (
            <Link
  to="/dashboard/userspage"
  className="px-4 py-2  border border-teal-200 text-teal-700 bg-teal-50 hover:bg-teal-100 hover:shadow-sm transition-all duration-200 text-sm font-medium"
>
  Dashboard
</Link>
          )}

          <Dropdownlang />
          <UserButton />
          <CartButton />

          {user ? (
            <button
              onClick={logout}
              className="text-rose-900 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-gray-700 hover:text-black">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}