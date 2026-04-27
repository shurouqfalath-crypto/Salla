import React, { useContext, useState } from "react";
import img from "../../images/photo-home.jpg";
import ProductsHome from "../pages/productsPage/ProductsHome";
import { DataProducts } from "../pages/productsPage/DataProducts";
import Filterinput from "./inputFilter/Filterinput";
import Dropdown from "../header/dropDown/Dropdown";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
import TotalProducts from "../../total/TotalProducts";

export default function Home() {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("all");

  const { data, isLoading, error } = useQuery({
    queryKey: ["products-data"],
    queryFn: async () => await api.get(`/products`).then((res) => res.data),
  });

  const productData = data?.products;

  const categories = [
    ...new Set(productData?.map((product) => product.category))
  ];

  const filteredProducts = productData
    ?.filter((product) =>
      product.title.toLowerCase().includes(filter.toLowerCase())
    )
    ?.filter((product) =>
      category === "all" ? true : product.category === category
    );

  console.log(data);

  if (isLoading) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center">
        <span>isloading....</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center">
        <span>{error?.message}</span>
      </div>
    );
  }

  return (
    <div className=" sm:p-5 bg-white mt-1 rounded-lg">
      <img src={img} alt="Home" className=" rounded-lg mb-6" />

      <div>
        <TotalProducts />

        <div className="flex items-center justify-between gap-2 ">
          <div className="flex-1">
            <Filterinput value={filter} onChange={setFilter} />
          </div>

          <Dropdown
            categories={categories }
            onChange={setCategory}
          />
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-stretch">
          {filteredProducts?.map((product) => (
            <ProductsHome key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}