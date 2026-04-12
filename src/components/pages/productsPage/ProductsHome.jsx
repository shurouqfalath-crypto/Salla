import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../buttons/Button";

export default function ProductsHome({ product }) {
  return (
    <div className="h-full p-4 gap-4 flex flex-col items-center justify-between rounded-lg border-2 border-gray-50">

      <Link to={`/product/${product.id}`} className="block w-full">
        <img
          src={product.image}
          alt={product.title}
          className="w-full aspect-[4/3] object-cover rounded-lg"
        />
      </Link>

      <div className="w-full flex flex-col items-center text-center gap-2">
        <Link to={`/product/${product.id}`} className="block w-full">
          <h2 className="text-base font-semibold">{product.title}</h2>
        </Link>

        <p className="text-gray-500 text-sm">
          The latest and best version to date
        </p>

        <span className="text-gray-500 text-sm underline">
          {product.category}
        </span>
      </div>

      <div className="w-full flex justify-center">
        <span className="text-gray-500 font-medium">
          SAR {product.price}
        </span>
      </div>

      <div className="w-full">
        <Button product={product}>Add to Cart</Button>
      </div>

    </div>
  );
}
