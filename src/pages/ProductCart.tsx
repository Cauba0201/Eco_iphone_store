import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/Slice/CartSlices";
import toast from "react-hot-toast";
import { HiShoppingCart, HiStar, HiOutlineStar } from "react-icons/hi";

interface PropTypes {
  id: number;
  title: string;
  img: string;
  category: string;
  price: string;
}

const ProductCart = ({ id, img, category, title, price }: PropTypes) => {
  const dispatch = useAppDispatch();

  const addProducttoCart = () => {
    const payload = {
      id,
      img,
      title,
      price: parseFloat(price),
      quatity: 1,
    };
    dispatch(addToCart(payload));
    toast.success("Add to cart");
  };
  return (
    <div className="border border-gray-200">
      <div className="text-center border-b border-gray-200">
        <img src={img} alt={title} className="inline-block" />
      </div>
      <div className="px-8 py-4">
        <div className="flex items-center gap-x-8">
          <p className="text-gray-500 text-sm font-medium">{category}</p>
          <h2 className="font-medium">{title}</h2>
        </div>
        <div className="mt-3 flex items-center justify-between text-[#ffb21d] w-[85%]">
          <div className="flex items-center">
            <div className="flex">
              <HiStar />
              <HiStar />
              <HiStar />
              <HiStar />
              <HiOutlineStar />
              <p className="text-gray-600 text-sm ml-2">(3 Review)</p>
              <div>
                <h2 className="font-medium text-sky-600 text-xl">{price}</h2>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={addProducttoCart}
          className="flex bg-sky-500 w-full gap-x-3 justify-center rounded-2xl items-cente text-white px-4 py-2 cursor-pointer hover:bg-sky-600"
        >
          <HiShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
