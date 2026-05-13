import React from "react";

export default function Dropdownlang({ value, onChange }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="
          appearance-none
          px-4 py-2 pr-8
          border border-gray-200
          bg-white
          text-gray-700 text-sm
          shadow-sm
          hover:border-teal-200
          focus:outline-none focus:ring-2 focus:ring-teal-100
          transition-all duration-200
          cursor-pointer
        "
      >
        <option value="en">🌐 English</option>
        <option value="ar">🇸🇦 عربي</option>
      </select>

      {/* Arrow Icon */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
        ▼
      </div>
    </div>
  );
}