import React from "react";

export default function TotalProducts({ total }) {
  return (
    <div className="p-3 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">Total Products</h2>
      <p className="text-2xl text-gray-500 mt-2">
        {total}
      </p>
    </div>
  );
}