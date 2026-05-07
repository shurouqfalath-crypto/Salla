import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Users, Package2, LayoutDashboard } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    {
      name: "Users",
      path: "/dashboard/userspage",
      icon: <Users size={18} />,
    },
    {
      name: "Products",
      path: "/dashboard/productspage",
      icon: <Package2 size={18} />,
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-950 border-r border-slate-800 text-slate-300 px-5 py-6 flex flex-col">
      
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10">
        <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
          <LayoutDashboard size={22} />
        </div>

        <h1 className="text-2xl font-bold tracking-wide text-white">
          Admin
          <span className="text-cyan-400">.</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {links.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group
              
              ${
                isActive
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "hover:bg-slate-900 text-slate-400 hover:text-white"
              }`}
            >
              <span
                className={`transition-all duration-300
                ${
                  isActive
                    ? "text-white"
                    : "text-slate-500 group-hover:text-cyan-400"
                }`}
              >
                {link.icon}
              </span>

              <span className="font-medium tracking-wide">
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}