import banner2 from "../assets/banner2.jpg";

const Banner2 = () => {
  return (
    <div className="container mt-32 w-full">
      <div className="flex items-center justify-center w-full">
        <img src={banner2} alt="banner2" className="w-100" />
        <div className="h-[200px] md:h-[260px] bg-cover bg-center w-full rounded-xl p-8 md:p-16">
          <p className="text-black text-xl font-medium">SmartPhone Pro 2024</p>
          <a
            href="#"
            className="mt-6 bg-sky-600 text-black w-[120px] h-[40px] flex items-center justify-center rounded-md hover:bg-sky-500 transition-all duration-200 font-medium"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
