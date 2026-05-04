import React, { useState } from "react";
import img from "../../images/photo-home.jpg";
import ProductsHome from "../pages/productsModule/ProductsHome";
import Filterinput from "./inputFilter/Filterinput";
import Dropdown from "../header/dropDown/Dropdown";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/api";
import TotalProducts from "../../total/TotalProducts";

export default function Home() {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");

  const {data: productData,isLoading, error,} = useQuery({
    queryKey: ["products-data", category, filter],
    queryFn: async () => {
      const response = await api.get(
        filter
          ? `/products/search?q=${filter}`
          : category
            ? `/products/category/${category}`
            : "/products", // إذا مافي  بحث ولا تحديدقسم اعرض كل المنتجات
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

  if (isLoading) {
    return (
      <div className="w-full h-125 flex items-center justify-center">
        <span>isloading....</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-125 flex items-center justify-center">
        <span>{error?.message}</span>
      </div>
    );
  }

  return (
    <div className=" sm:p-5 bg-white mt-1 rounded-lg">
      <img src={img} alt="Home" className=" rounded-lg mb-6" />
      <div>
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

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-stretch">
          {productData?.products?.map((product) => (
            <ProductsHome key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
