import React, { useState } from "react";
import img from "../../images/photo-home.jpg";
import ProductsHome from "../pages/productsModule/ProductsHome";
import Filterinput from "./inputFilter/Filterinput";
import Dropdown from "../header/dropDown/Dropdown";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/api";
import TotalProducts from "../../total/TotalProducts";
import Productsgrid from "../pages/productsModule/Productsgrid";

export default function Home() {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");

  const {
    data: productData,
    isLoading,
    error,
    // isFetching,
  } = useQuery({
    queryKey: ["products-data", category, filter],
    queryFn: async () => {
      const response = await api.get(
        filter
          ? `/products/search?q=${filter}`
          : category
            ? `/products/category/${category}`
            : "/products",
      );
      return response.data;
    },
  });

  const { data: categoriesList } = useQuery({
    queryKey: ["category-list"],
    queryFn: async () =>
      await api.get("/products/category-list").then((res) => res.data),
  });

  const handleSearchChange = (val) => {
    setFilter(val);
    setCategory("");
  };

  const handleCategoryChange = (val) => {
    setCategory(val);
    setFilter("");
  };

  // if (isLoading) {
  //   return (
  //     <div className=" w-full h-125 flex items-center justify-center">
  //       Loading products...
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <div className="w-full h-125 flex items-center justify-center">
        Error loading products...
        {error?.message}
      </div>
    );
  }

  return (
    <div className="sm:p-5 bg-white mt-1 rounded-lg">
      <img src={img} alt="Home" className="rounded-lg mb-6" />

      <TotalProducts total={productData?.products?.length} />

      <div className="flex items-center justify-between gap-2 mb-6">
        <div className="flex-1">
          <Filterinput value={filter} onChange={handleSearchChange} />
        </div>

        <Dropdown
          categories={categoriesList}
          value={category}
          onChange={handleCategoryChange}
        />
      </div>
      {/* <div className="relative">
        {isFetching && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center z-10">
            <Loader text="Updating..." />
          </div>
        )} */}

      <div>
        <Productsgrid Products={productData?.products} isLoading={isLoading} />
      </div>
      {/* </div> */}
    </div>
  );
}
