import React from "react";
import ProductsHome from "./ProductsHome";
import { DataProducts } from "./DataProducts";
import ProductCardLoading from "./ProductCardLoading";
import Products from "../Adminproducts/Products";

export default function Productsgrid({ Products, isLoading}) {

 

  const skeletonItems = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-stretch">
      {isLoading &&
        skeletonItems.map((_, i) => (
          <ProductCardLoading key={i} />
        ))}

    {Products?.map((dd) => (
          <ProductsHome key={dd.id} product={dd} />
        ))}

    </div>
  );
}