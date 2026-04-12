import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Button({ children, product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <button
      onClick={() => addToCart(product)}
      className="w-full bg-teal-900 text-white py-2 rounded-md"
    >
      {children}
    </button>
  );
}
