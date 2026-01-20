import React from "react";
import { useNavigate } from "react-router-dom";

import Hero2_1 from "../../assets/Hero2_1.png";
import Hero2_2 from "../../assets/Hero2_2.png";
import Hero2_4 from "../../assets/Hero2_4.jpg";

function Hero2() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div
          className="
  flex 
  flex-col 
  md:flex-row 
  justify-center 
  gap-6
  mb-[-80px] 
  md:mb-[-200px]
"
        >
          {/* Card 1 */}
          <div className="relative w-full sm:w-[360px] md:w-[420px] mx-auto md:mx-0">
            <img
              src={Hero2_1}
              className="w-full h-[220px] object-cover rounded-2xl"
              alt="Organic Food"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <button className="self-start bg-white text-black px-5 py-2 rounded-lg text-sm font-medium">
                Order Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full sm:w-[360px] md:w-[420px] mx-auto md:mx-0">
            <img
              src={Hero2_2}
              className="w-full h-[220px] object-cover rounded-2xl"
              alt="Healthy Products"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <button className="self-start bg-white text-black px-5 py-2 rounded-lg text-sm font-medium">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Banner */}
      <div className="relative mt-32">
        <div
          className="
          relative 
          w-full 
          md:w-[1550px] 
          mx-auto
          h-[320px] 
          md:h-[420px] 
          lg:h-[520px] 
          overflow-hidden
        "
        >
          <img
            src={Hero2_4}
            className="w-full h-full object-cover"
            alt="Fresh Vegetables"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Be Healthy & Eat Only Fresh
              <br />
              Organic Vegetables
            </h2>

            <button
              onClick={() => navigate("/shop")}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-sm sm:text-base font-medium transition"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
