import React from "react";
import logo from "../../images/logo-square.png";
import Dropdownlang from "./dropDown/Dropdownlang";
import UserButton from "../../buttons/UserButton";
import CartButton from "../../buttons/CartButton";

export default function Header() {
  return (
    <div className="w-full bg-white shadow-sm py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <a href="/home" className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[70px] h-[70px] bg-gray-50 p-2 rounded-full border-4 border-teal-200 " />
        </a>

        <div className="text-center">
          <h1 className="text-zinc-950 text-lg font-semibold">
            The Beautiful Experience Store
          </h1>
          <p className="text-gray-400 text-sm">
            Your Store for All Your Beautiful Experiences and Ideas
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Dropdownlang />
          <UserButton />
          <CartButton />
        </div>
      </div>
    </div>
  );
}