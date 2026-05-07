import React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../../api/api";

export default function Products() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await api.get("products");
      return res.data;
    },
  });

  if (isLoading)
    return <p className="p-8 text-gray-500 font-medium">Loading...</p>;
  if (error)
    return (
      <p className="p-8 text-red-500 font-medium">Error loading products</p>
    );

  return (
    <div className="w-full px-4 md:px-6 mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className=" mt-6 text-2xl font-bold text-green-900"> All Products </h2>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  items-stretch">
        {data.products.map((product) => (
          <div
            key={product.id}
            className="p-6 w-auto  bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md flex justify-between items-center flex-col gap-2"
          >
            <div>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
            </div>
            <span className="font-semibold text-gray-800 ">
              {product.title}
            </span>
            <span className="font-bold text-emerald-600 bg-emerald-50 px-4 rounded text-sm">
              ${product.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
