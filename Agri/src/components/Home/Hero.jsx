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
      className="relative h-[90vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${homeMain})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* text */}
          <div className="max-w-xl text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-yellow-400 font-pacifico">
                Agriculture
              </span>
              <br />
              & Organic
              <br />
              Market
            </h1>

            <button className="mt-4 px-8 py-3 bg-green-500 hover:bg-green-600 rounded-full text-white text-lg transition">
              Shop Now
            </button>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-4">
            <img src={circle2} className="w-20 h-15" />
            <img src={circle1} className="w-16 h-12 mr-8" />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 left-0 right-0 z-20 px-4">
        <div className="bg-white max-w-4xl h-3xl mx-auto rounded-xl shadow-xl px-10 py-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            
            <div className="flex items-center gap-4">
              <img src={icon} className="w-12 h-12" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Return Policy
                </h4>
                <p className="text-sm text-gray-500">
                  Money Back Guarantee
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={icon1} className="w-12 h-12" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Free Shipping
                </h4>
                <p className="text-sm text-gray-500">
                  On Orders Over $45.00
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={icon2} className="w-12 h-12" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Store Locator
                </h4>
                <p className="text-sm text-gray-500">
                  Find Your Nearest Store
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
