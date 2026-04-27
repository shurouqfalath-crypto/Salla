import React from "react";
import ProductsHome from "./ProductsHome";
import { DataProducts } from "../productsPage/DataProducts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Productsgrid() {

  return (
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  items-stretch">
        {DataProducts.map((dd) => (
          <ProductsHome key={dd.id} product={dd} />
        ))}
      </div>
  );
}
