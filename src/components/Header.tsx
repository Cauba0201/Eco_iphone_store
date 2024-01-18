import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import { useAppSelector } from "../redux/hooks";
import {
  HiOutlineSearch,
  HiOutlineUserCircle,
  HiShoppingCart,
} from "react-icons/hi";

const Header = ({ setOpenCart }: any) => {
  const count = useAppSelector((store) => store.cart.length);
  return (
    <div className=" bg-white top-0 sticky">
      <div>
        <div className="flex justify-between items-center">
          <div>
            <Link to={"/"} className="gap-1 items-center">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="flex text-black gap-5 md:gap-8 items-center py-2 px-4 shadown-md shadow-gray-300">
            <Link to={"/iphone"}>Iphone </Link>
            <Link to={"/imac"}>Mac </Link>
            <Link to={"/ipad"}>Ipad </Link>
            <Link to={"/app_watch"}>Iwatch </Link>
            <Link to={"/accessory"}>Accessory</Link>
          </div>
          <div className="flex mt-2 gap-3 text-3xl relative cursor-pointer">
            <Link to={"/search"} className="flex items-center gap-1">
              <HiOutlineSearch />
            </Link>
            <Link to={"/login"}>
              <HiOutlineUserCircle />
            </Link>
            <HiShoppingCart onClick={() => setOpenCart(true)} />
            {count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
