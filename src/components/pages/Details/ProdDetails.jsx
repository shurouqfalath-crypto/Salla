import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import MinusButton from "./MinusButton";
import PlusButton from "./PulsButton";
import { CartContext } from "../../../context/CartContext";
import { api } from "../../../api/api";
import { useQuery } from "@tanstack/react-query";

export default function ProdDetails() {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const { addToCart } = useContext(CartContext);
  const [loadingCart, setLoadingCart] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["singleProduct", id],
    queryFn: async () =>
      await api.get(`/products/${id}`).then((res) => res.data),
    enabled: !!id,
  });

  const SinglPR = data;

  if (isLoading) {
    return (
      <div className=" w-full h-125 flex items-center justify-center">
        Loading product..
      </div>
    );
  }

  if (error) {
    return (
      <div className=" w-full h-125 flex items-center justify-center">
        Error loading product..
      </div>
    );
  }

  const increaseQty = () => setQty((prev) => prev + 1);
  const decreaseQty = () => setQty(qty > 1 ? qty - 1 : 1);

  const handleAddToCart = async () => {
    setLoadingCart(true);

    await new Promise((r) => setTimeout(r, 300));

    addToCart(SinglPR, qty);

    setTimeout(() => setLoadingCart(false), 1000);
  };

  return (
    <div className="">
      <div className="p-5 bg-white rounded-lg grid sm:grid-cols-3 gap-5">
        <img
          src={SinglPR?.thumbnail}
          alt={SinglPR?.title}
          className="aspect-[4/6] object-cover"
        />

        <div className="flex flex-col gap-2 col-span-2">
          <div className="flex flex-col mb-8">
            <h1 className="text-xl text-center text-black">{SinglPR?.title}</h1>
            <p dir="rtl" className="text-gray-500">
              {SinglPR?.description}
            </p>
          </div>

          <p className="text-xl font-medium">SAR {SinglPR?.price}</p>

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
              disabled={loadingCart}
              className="w-full h-[42px] bg-teal-700 text-white rounded-md flex items-center justify-center gap-2"
            >
              {loadingCart ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent  rounded-full animate-spin"></span>
                  Adding...
                </>
              ) : (
                "Add to Cart"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
//<button onClick={handleAddToCart} disabled={loadingCart} 
// className="w-full h-[42px] bg-teal-700 text-white rounded-md flex items-center justify-center" >
//  Add to Cart {/* {loadingCart ? 
// ( <DotLottieReact src="https://lottie.host/9748cf75-6053-4e72-9873-1cf25a9099c5/v1rS37WZ7X.lottie" loop autoplay style={{ width: 40, height: 40 }} /> ) : ( "Add to Cart" )} */} </button>
