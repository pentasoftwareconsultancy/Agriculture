import React from "react";
import Hero2_1 from "../../assets/Hero2_1.png";
import Hero2_2 from "../../assets/Hero2_2.png";
import Hero2_4 from "../../assets/Hero2_4.jpg";

function Hero2() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 relative z-20">

        {/* Floating Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-[-200px]">
          
          {/* Card 1 */}
          <div className="relative w-full md:w-[420px]">
            <img
              src={Hero2_1}
              className="w-full h-[220px] object-cover rounded-2xl"
              alt="Organic Food"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              
              <button className="mt-35 self-start bg-white text-black px-5 py-2 rounded-lg text-sm font-medium">
                Order Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full md:w-[420px]">
            <img
              src={Hero2_2}
              className="w-full h-[220px] object-cover rounded-2xl"
              alt="Healthy Products"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
             
              <button className="mt-35 self-start bg-white text-black px-5 py-2 rounded-lg text-sm font-medium">
                Order Now
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Background Banner */}
      <div className="relative mt-32">
        <div className="relative w-[1550px] h-[420px] md:h-[520px] overflow-hidden">
          <img
            src={Hero2_4}
            className="w-full h-full object-cover"
            alt="Fresh Vegetables"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Be Healthy & Eat Only Fresh<br />
              Organic Vegetables
            </h2>

            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-base font-medium transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
