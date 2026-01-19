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
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${homeMain})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-white text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-yellow-400 font-pacifico">Agriculture</span>
              <br />
              & Organic
              <br />
              Market
            </h1>

            <button className="px-8 py-3 bg-green-500 hover:bg-green-600 rounded-2xl text-white text-base md:text-lg transition">
              Shop Now
            </button>
          </div>

          <div className="hidden lg:flex flex-col gap-4 relative">
            <img src={circle2} className="w-20 h-20 xl:w-24 xl:h-24" />
            <img src={circle1} className="w-16 h-16 xl:w-20 xl:h-20 ml-8" />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-16 left-0 right-0 z-20 px-4">
        <div className="bg-white max-w-5xl mx-auto rounded-xl shadow-xl p-4 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            <div className="flex items-center justify-center sm:justify-start">
              <img src={icon} className="w-10 h-10 md:w-12 md:h-12 mr-3 flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">Return Policy</h4>
                <p className="text-xs md:text-sm text-gray-500">Money Back Guarantee</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start">
              <img src={icon1} className="w-10 h-10 md:w-12 md:h-12 mr-3 flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">Free Shipping</h4>
                <p className="text-xs md:text-sm text-gray-500">On Orders Over $45.00</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start">
              <img src={icon2} className="w-10 h-10 md:w-12 md:h-12 mr-3 flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">Store Locator</h4>
                <p className="text-xs md:text-sm text-gray-500">Find Your Nearest Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
