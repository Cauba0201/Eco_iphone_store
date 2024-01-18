import { Toaster } from "react-hot-toast";
import Product from "../Data";
import banner from "../assets/bg.jpg";
import Banner2 from "./Banner2";
import Service from "./Service";

const HomePage = () => {
  return (
    <div>
      <div className="container ">
        <div className="flex items-center sm:grid-cols-2 lg:grid-cols-4 ">
          <img src={banner} alt="banner" className="w-100" />
        </div>
        <div>
          <Service />
          <Product />
          <Banner2/>
          <Toaster position="bottom-center" reverseOrder={false}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
