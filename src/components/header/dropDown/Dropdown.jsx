import React from "react";

export default function Dropdown({ categories, value, onChange }) {
  return (
    
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border border-gray-400 rounded-md"
    >
      <option value="all">All</option>

      {categories?.map((cat, i) => (
        <option key={i} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}



