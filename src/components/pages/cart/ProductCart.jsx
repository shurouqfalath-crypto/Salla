import React, { useState } from "react";
import CartItem from "./CarItem";
import Toastmessage from "../../../message/Toastmessage";

export default function ProductCart({ cartItems, updateQuantity, removeFromCart }) {
  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const handleRemove = (id) => {
    removeFromCart(id);
    showToast("Item removed from cart");
  };

  const handleUpdateQty = (id, amount) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;

    const newQty = item.quantity + amount;
    updateQuantity(id, newQty);

    showToast(amount > 0 ? "Item quantity increased" : "Item quantity decreased");
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">

      {toast && <Toastmessage message={toast} />}

      <ul className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQty={handleUpdateQty}
            onRemove={handleRemove}
          />
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Total</h2>
          <p className="text-lg font-bold">SAR {total.toFixed(2)}</p>
        </div>
<a href="/login" >

        <button className="w-full bg-teal-900 text-white py-3 rounded-md">
          Proceed to Payment
        </button>
        </a>
      </div>

    </div>
  );
}
