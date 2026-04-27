// import React, { useContext } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import FormLogin from "../forms/FormLogin";
import FormRegis from "../forms/FormRegis";
import { AuthContext } from "../../context/AuthContext";
export default function HomeSalla() {
  

  return (
    <div>
      <Header />
      <div className="min-h-screen w-full flex justify-center items-center bg-gray-50">
        <div className="max-w-[80%] p-4 ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
