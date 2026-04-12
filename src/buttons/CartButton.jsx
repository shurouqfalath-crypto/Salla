import React from 'react'
import bag from '../images/shopping-bag-5.svg';
import CartBadge from '../components/pages/cart/CartBadge';

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartButton() {
    const { cartItems } = useContext(CartContext);
      const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className='flex items-center gap-4'>
      <a href='/cart'>
        <div className='relative'>

          <button className='w-10 h-10 rounded-full flex items-center justify-center bg-teal-200'>
            <img src={bag} alt="Cart" className='w-6 h-6 object-contain' />
          </button>

          <CartBadge count={count} />

        </div>
      </a>
    </div>
  );
}
