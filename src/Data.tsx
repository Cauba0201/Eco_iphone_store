import img1 from "./assets/imgs/ip1.jpg";
import img2 from "./assets/imgs/ip2.jpg";
import img3 from "./assets/imgs/ip3.jpg";
import img4 from "./assets/imgs/ip4.jpg";
import img5 from "./assets/imgs/ip5.jpg";
import img6 from "./assets/imgs/ip6.jpg";
import img7 from "./assets/imgs/ip7.jpg";
import img8 from "./assets/imgs/ip8.jpg";
import img9 from "./assets/imgs/ip9.jpg";
import img10 from "./assets/imgs/ip10.jpg";
import ProductCart from "./pages/ProductCart";

export const products = [
  {
    id: 0,
    img: img1,
    title: "Iphone 1",
    category: "Mobile phone",
    price: "13.000.000 VND",
  },
  {
    id: 1,
    img: img2,
    title: "Iphone 2",
    category: "Mobile phone",
    price: "13.000.000 VND",
  },
  {
    id: 2,
    img: img3,
    title: "Iphone 3",
    category: "Mobile phone",
    price: "13.000.000 VND",
  },
  {
    id: 3,
    img: img4,
    title: "Iphone 4",
    category: "Mobile phone",
    price: "13.000.000 VND",
  },
  {
    id: 4,
    img: img5,
    title: "Iphone 5",
    category: "Mobile phone",
    price: "13.000.000 VND",
  },
  {
    id: 5,
    img: img6,
    title: "Iphone 6",
    category: "Mobile phone",
    price: "13.000.000 VND",
  },
  {
    id: 6,
    img: img7,
    title: "Iphone 7",
    category: "Mobile phone",
    price: "13.000.000 VND",
  },

  {
    id: 7,
    img: img8,
    title: "Iphone 8",
    category: "Mobile phone",
    price: "13.000.000 VND",
  },
  {
    id: 8,
    img: img9,
    title: "Iphone 9",
    category: "Mobile phone",
    price: "13.000.000 VND",
  },
  {
    id: 9,
    img: img10,
    title: "Iphone 10",
    category: "Mobile phone",
    price: "13.000.000 VND",
  },
];

const Product = () => {
  return (
    <div className=" mt-32 ">
      <div className="sm:flex justify-between items-center">
        <h1 className="text-4xl text-black font-medium">Product</h1>
        <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
          <div className="text-black">New</div>
          <div>Freature</div>
          <div>Top Seller</div>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {products.map((product) => (
          <ProductCart
            key={product.id}
            img={product.img}
            category={product.category}
            title={product.title}
            price={product.price} id={0} />
        ))}
      </div>
    </div>
  );
};

export default Product;
