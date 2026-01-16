import React from "react";
import homeMain from "../../assets/homeMain.png";
import icon from "../../assets/icon.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import circle1 from "../../assets/circle1.png";
import circle2 from "../../assets/circle2.png";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${homeMain})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="flex relative z-10 ml-80 text-white">
        <div>
          <h1 className="text-6xl font-bold leading-tight">
            <span className="text-yellow-400 font-pacifico ">Agriculture</span>
            <br />
            & Organic
            <br />
            Market
          </h1>

          <button className="mt-8 px-10 py-3 bg-green-500 hover:bg-green-600 rounded-2xl text-white text-lg transition">
            Shop Now
          </button>
        </div>
      </div>

      <div className="absolute right-40 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-4">
        <img src={circle2} className="" />
      </div>
      <div className="absolute right-45 top-100 ">
        <img src={circle1} className="" />
      </div>

      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-white w-250 rounded-xl shadow-xl px-12 py-8 flex gap-16 ">
          <div className="flex">
            <img src={icon} className="w-15 h-15 m-0" />
            <div className="p-2">
              <h4 className="font-semibold text-gray-800">Return Policy</h4>
              <p className="text-sm text-gray-500">Money Back Guarantee</p>
            </div>
          </div>

          <div className="flex">
            <img src={icon1} className="w-15 h-15 m-0" />
            <div className="p-2">
              <h4 className="font-semibold text-gray-800">Free Shipping</h4>
              <p className="text-sm text-gray-500">On Orders Over $45.00</p>
            </div>
          </div>

          <div className="flex">
            <img src={icon2} className="w-15 h-15 m-0" />
            <div className="p-2">
              <h4 className="font-semibold text-gray-800">Store Locator</h4>
              <p className="text-sm text-gray-500">Find Your Nearest Store</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
