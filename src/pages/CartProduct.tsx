import React from "react";
import { useAppDispatch } from "../redux/hooks";
import img1 from "../assets/imgs/ip1.jpg";
import { removeProduct } from "../redux/Slice/CartSlices";

interface PropTypes {
  id: number;
  img: string;
  title: string;
  price: number;
  quatity: number;
}

const CartProduct: React.FC<PropTypes> = ({
  id,
  title,
  price,
  quatity,
}) => {
  const dispatch = useAppDispatch();
  const newPrice = Math.ceil(price * 0.9);
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src={img1} alt="img" className="h-[80px]" />
        <div className="space-y-2">
          <h2 className="font-medium">{title}</h2>
          <p className="text-gray-600 text-sm">
            {quatity}*{newPrice}
          </p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
        onClick={() => dispatch(removeProduct(id))}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
  );
};

export default CartProduct;
