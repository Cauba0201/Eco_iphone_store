import FreatureCart from "./FreatureCart";
import {
  HiOutlineTruck,
  HiCash,
  HiOutlineTag,
  HiOutlinePhone,
} from "react-icons/hi";

const Service = () => {
  const data = [
    {
      icon: <HiOutlineTruck />,
      title: "Free Delivery",
      desc: "Order from all items",
    },
    {
      icon: <HiCash />,
      title: "Return & Refund",
      desc: "Money and guarantee",
    },
    {
      icon: <HiOutlineTag />,
      title: "Member Discount",
      desc: "On order over 99.00$",
    },
    {
      icon: <HiOutlinePhone />,
      title: "Support 24/7",
      desc: "Contact us 24 hours a day",
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {data.map((item) => (
        <FreatureCart
          key={item.title}
          icon={item.icon}
          desc={item.desc}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Service;
