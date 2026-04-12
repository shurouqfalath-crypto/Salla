import React from 'react'
import ProductsHome from './ProductsHome'
import { DataProducts } from '../productsPage/DataProducts'
export default function Productsgrid() {
    return (
        <div className='w-full grid grid-cols-4 gap-5 justify-center items-center'>
           {
           DataProducts.map((dd ,i ) => (
                <ProductsHome key={i} product={dd} />
            ))}
        </div>
    )
}
