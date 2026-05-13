import React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../../api/api";
import { Pencil, Trash2 } from "lucide-react";
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
        <h2 className=" mt-6 text-2xl font-bold text-green-900">
          {" "}
          All Products{" "}
        </h2>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  items-stretch">
        {data?.products?.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3"
          >
            <div>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full aspect-[4/3] object-cover rounded-lg"
              />
            </div>
            <span className="font-semibold text-gray-800 ">
              {product.title}
            </span>
            <span className="text-sm text-gray-500 capitalize">
              {product.category}
            </span>
            <span className="font-bold text-emerald-600 bg-emerald-50 px-4 rounded text-sm">
              ${product.price}
            </span>
            <div className="flex items-center gap-2 mt-2">
              <button className="flex-1 border rounded-lg py-2 hover:bg-gray-100 transition">
                <Pencil size={18} className="mx-auto" />
              </button>

              <button className="flex-1 border rounded-lg py-2 text-red-500 hover:bg-red-50 transition">
                <Trash2 size={18} className="mx-auto" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
