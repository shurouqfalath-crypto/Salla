import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../buttons/Button";
import { CartContext } from "../../../context/CartContext";
import Toastmessage from "../../../message/Toastmessage";

export default function ProductsHome({ product }) {
  const { addToCart } = useContext(CartContext);
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setMsg("please wait ,Adding product to cart...");
    setShow(true);

    setTimeout(() => {
      addToCart(product);
      setMsg("Successfully added to cart ");

      setTimeout(() => setShow(false), 1500);
    }, 1000);
  };

  return (
    <div className="p-4 gap-4 flex flex-col items-center justify-between rounded-lg border-2 border-gray-50">
      <Link to={`/product/${product.id}`} className="block w-full">
        <img
          src={product.thumbnail}
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
        <span className="text-gray-500 font-medium">SAR {product.price}</span>
      </div>

      <div className="w-full">
        <button
          disabled={show}
          onClick={() => handleClick(product)}
          className={`w-full bg-teal-900 text-white py-2 rounded-md ${show ? "cursor-not-allowed bg-teal-900/40" : ""}`}
        >
          {show ? "loding..." : "Add to cart"}
        </button>

        {show && <Toastmessage message={msg} />}
      </div>
    </div>
  );
}
