import React from "react";
import ProductCart from "./ProductCart";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div dir="ltr" className=" flex flex-col bg-gray-100 p-4">
      <div className="bg-white rounded-lg p-4">
        <h1 className="text-2xl mb-1" dir="rtl">
          Cart
        </h1>

        <ProductCart
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
}
