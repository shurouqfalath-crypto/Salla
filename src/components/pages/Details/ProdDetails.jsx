import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
// import { DataProducts } from "../productsPage/DataProducts";
import MinusButton from "./MinusButton";
import PlusButton from "./PulsButton";
import { CartContext } from "../../../context/CartContext";
import { api } from "../../../api/api";
import { useQuery } from "@tanstack/react-query";

export default function ProdDetails() {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const { addToCart } = useContext(CartContext);

  const { data, isLoading, error } = useQuery({
    queryKey: ["singleProduct", id],
    queryFn: async () =>
      await api.get(`/products/${id}`).then((res) => res.data),
    enabled: !!id,
  });
  const SinglPR = data;
  if (isLoading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product!</p>;




  const increaseQty = () => setQty((prev) => prev + 1);
  const decreaseQty = () => setQty(qty > 1 ? qty - 1 : 1);

  const handleAddToCart = () => {
    addToCart(SinglPR, qty);
  };

  return (
    <div className="">
      <div className="p-5 bg-white rounded-lg grid sm:grid-cols-3 gap-5">
        <img
          src={SinglPR?.thumbnail}
          alt={SinglPR?.title}
          className="  aspect-[4/6] object-cover "
        />

        <div className="flex flex-col gap-2 col-span-2">
          <div className="flex flex-col mb-8 ">
            <h1 className="text-xl text-center text-black">{SinglPR?.title}</h1>
            <p dir="rtl" className="text-gray-500">
              {SinglPR?.description}
            </p>
          </div>

          <p className="text-xl font-medium ">SAR {SinglPR?.price}</p>

          <h1 className="text-sm text-black">{SinglPR?.desc}</h1>

          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center p-2 border border-gray-200 rounded-lg">
              <MinusButton onClick={decreaseQty} />

              <span className="w-[70px] text-center bg-gray-50 rounded-md">
                {qty}
              </span>

              <PlusButton onClick={increaseQty} />
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full h-[42px] bg-teal-700 text-white  rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
