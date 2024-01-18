import { useAppSelector } from "../redux/hooks";
import CartProduct from "./CartProduct";

const Cart = ({ setOpenCart }: any) => {
  const products = useAppSelector((store) => store.cart);
  const getTotal = () => {
    let total = 0;
    products.forEach(
      (item) => total + Math.ceil(item.price * 0.9) * item.quatity
    );
    return total;
  };
  return (
    <div className="fixed left-0 top-0 z-20 overflow-y-scroll bg-[#000007] w-full min-h-screen">
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-3 h-3 absolute right-0 top-0 m-6 text-2xl cursor-pointer"
          onClick={() => setOpenCart(false)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <h3 className="pt-6 text-xl font-medium to-gray-600 uppercase">
          Your Cart
        </h3>
        <div>
          {products?.map((item) => (
            <CartProduct
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              quatity={item.quatity}
            />
          ))}
        </div>
        <div className="flex justify-between items-center font-medium">
          <p>Total</p>
          <p>${getTotal()}.00</p>
        </div>
        <div>
          <button className="bg-sky-500 text-white text-center w-full rounded-full py-2 hover:bg-sky-600 my-4">
            View Cart
          </button>
          <button className="bg-sky-500 text-white text-center w-full rounded-full py-2 hover:bg-sky-600 my-4">
            Check Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
