import { Outlet } from "react-router";
import Header from "./components/Header";
import { useState } from "react";
import Cart from "./pages/Cart";


const Layout = () => {
  const [openCart, setOpenCart] = useState(false)
  return (
    <div className="p-4 flex flex-col min-h-screen  ">
      <Header setOpenCart={setOpenCart}/>
      {openCart && <Cart setOpenCart={setOpenCart}/>}
      <Outlet />
    </div>
  );
};

export default Layout;
