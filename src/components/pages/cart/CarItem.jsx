import MinusButton from "../Details/MinusButton";
import PlusButton from "../Details/PulsButton";
import RemoveBtn from "./RemoveBtn";

export default function CartItem({ item, onUpdateQty, onRemove }) {
  return (
    <li className="flex items-center justify-between bg-gray-50 p-5 rounded-lg">

      <div className="flex items-center gap-6">
        <img
          src={item.image}
          alt={item.title}
          className=" h-15 object-cover rounded-md"
        />

        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-500 text-sm">SAR {item.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-7 ">
            <div className="flex items-center p-1 border border-gray-300 rounded-lg">
{/* هنا  */}
        <MinusButton onClick={() => onUpdateQty(item.id, -1)} />

        <span className="w-[40px]  bg-gray-100 text-center rounded-md">{item.quantity}</span>

        <PlusButton  onClick={() => onUpdateQty(item.id, +1)} />
        </div>

        <RemoveBtn onClick={() => onRemove(item.id)} />
      </div>

    </li>
  );
}
