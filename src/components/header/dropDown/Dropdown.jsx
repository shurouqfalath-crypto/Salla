import React from 'react';

export default function Dropdown({ onChange }) {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className='bg-white border rounded-md text-md px-2 py-1'
    >
      <option value="all">All products</option>
      <option value="electronics">electronics</option>
      <option value="jewelery">jewelery</option>
      <option value="men's clothing">men's clothing</option>
      <option value="women's clothing">women's clothing</option>
    </select>
  )
}