import React from "react";
import { useNavigate } from "react-router-dom";

import Hero4img from "../../assets/Hero4img.png";
import farmIcon1 from "../../assets/farmIcon1.png";
import farmIcon2 from "../../assets/farmIcon2.png";

function Hero4() {
    const navigate = useNavigate();
  
  return (
    <section className="py-8 mb-10 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              className="
                w-full 
                h-[220px] 
                sm:h-[260px] 
                md:h-[380px] 
                lg:h-[480px] 
                object-cover
              "
              src={Hero4img}
              alt="Organic Food"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left max-w-xl mx-auto lg:mx-0">

            <p className="
              font-pacifico 
              text-base 
              sm:text-lg 
              md:text-xl 
              lg:text-2xl 
              text-yellow-500 
              md:text-yellow-400 
              mb-2
            ">
              Quality Products
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 md:mb-6">
              Only Organic Food
            </h2>

            <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
              We provide naturally grown farm products that are safe, fresh, and
              rich in nutrition. Every item is carefully cultivated and handled
              to maintain quality and purity.
            </p>

            {/* Feature list */}
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">

              <div className="flex items-start sm:items-center justify-center lg:justify-start">
                <img
                  src={farmIcon1}
                  alt="Farmers"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mr-3 md:mr-4 flex-shrink-0"
                />
                <div className="text-center lg:text-left">
                  <h4 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-1">
                    Professional Farmers
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    Expert farmers ensuring quality crops.
                  </p>
                </div>
              </div>

              <div className="flex items-start sm:items-center justify-center lg:justify-start">
                <img
                  src={farmIcon2}
                  alt="Farming Solutions"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mr-3 md:mr-4 flex-shrink-0"
                />
                <div className="text-center lg:text-left">
                  <h4 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-1">
                    Solution for Farming
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    Smart solutions for better farming.
                  </p>
                </div>
              </div>

            </div>

            <button onClick={()=>navigate("/shop")} className="bg-green-600 hover:bg-green-700 text-white text-sm md:text-base font-bold rounded-xl px-6 py-3 md:px-8 md:py-4 transition-colors">
              Start Shopping Now
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero4;
