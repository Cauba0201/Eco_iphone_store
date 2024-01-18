import React from "react";

interface propsTypes {
  icon: React.ReactNode;
  desc: string;
  title: string;
}

const FreatureCart = ({ icon, desc, title }: propsTypes) => {
  return (
    <div className="flex items-center gap-2 bg-gray-300 px-4 py-6">
      {icon}
      <div>
        <h2 className="font-medium text-xl">{title}</h2>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default FreatureCart;
