import React, { useState } from 'react';
import img from "../../images/photo-home.jpg";
import ProductsHome from '../pages/productsPage/ProductsHome';
import { DataProducts } from '../pages/productsPage/DataProducts';
import Filterinput from './inputFilter/Filterinput';
import Dropdown from '../header/dropDown/Dropdown';

export default function Home() {

  // const [filter, setFilter] = useState('');
  // const FilterName = DataProducts.filter(product =>
  //   product.title.toLowerCase().includes(filter.toLowerCase())
  // );
  const [category, setCategory] = useState('all');

  const filteredProducts =
    category === 'all'
      ? DataProducts
      : DataProducts.filter(product => product.category === category);

  return (
    <div className=" sm:p-5 bg-white mt-1 rounded-lg">

      <img 
        src={img} 
        alt="Home" 
        className=" rounded-lg mb-6" 
      />

      <div className="flex items-center justify-between gap-2 ">
        <div className="flex-1">
          <Filterinput 
          // value={filter} onChange={setFilter}
          
          
          />
        </div>


        <Dropdown onChange={setCategory} />
      </div>

      <div className="grid grid-cols-4 gap-1">
        {filteredProducts.map((product, index) => (
          <ProductsHome key={index} product={product} />
             
        ))}
      </div>

    </div>
  );
}
