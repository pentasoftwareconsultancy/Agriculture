import React from "react";
import Hero4img from "../../assets/Hero4img.png";
import farmIcon1 from "../../assets/farmIcon1.png"
import farmIcon2 from "../../assets/farmIcon2.png"
function Hero4() {
  return (
    <div>
      <div className="flex ml-30 mr-30 mb-15 p-20">
        <div className="">
          <img className="w-[600px] h-[500px]" src={Hero4img} />
        </div>
        <div className="ml-8">
          <p className="text-yellow-400 font-pacifico text-[24px]">
            Quality Products
          </p>
          <h2 className="text-5xl font-semibold text-gray-900 text-[48px]">
            Only Organic Food
          </h2>
          <p className="w-[526px] h-[90px] top-[116px] mt-8 mb-8 text-gray-500 text-[18px] leading-[30px] font-manrope">We provide naturally grown farm products that are safe, fresh,<br></br> and rich in nutrition. Every item is carefully cultivated and handled to maintain quality and purity.</p>
        <div>
          <div className="flex  w-[545px] h-[100px] top-[249px]">
            <img src={farmIcon1} className="w-[64px] h-[64px] mr-2" />
            <div className="ml-2">
              <h4 className="font-semibold text-[22px] leading-[30px]">Professional Farmers</h4>
              <p className="text-gray-500 font-manrope text-[16px] leading-[30px]">Expert farmers ensuring quality crops.</p>
            </div>
            </div>
            <div className="flex w-[545px] h-[110px] top-[300px]">
              <img src={farmIcon2} className="w-[64px] h-[64px] mr-2" />
            <div className="ml-2">
              <h4 className="font-semibold text-[20px] leading-[30px]">Solution for Farming</h4>
              <p className="text-gray-500 font-manrope">Smart solutions for better farming.</p>
            </div>
          </div>
          </div>
          <button className="bg-green-600 text-white text-[14px] leading-[30px] font-bold font-manrope rounded-[10px] h-[50px] w-[200px]">Start Shopping Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero4;
