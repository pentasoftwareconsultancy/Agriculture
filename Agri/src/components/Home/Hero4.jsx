import React from "react";
import Hero4img from "../../assets/Hero4img.png";
import farmIcon1 from "../../assets/farmIcon1.png"
import farmIcon2 from "../../assets/farmIcon2.png"
function Hero4() {
  return (
    <div>
      <div className="flex m-40 p-30">
        <div className="">
          <img className="w-[900px] h-[400px]" src={Hero4img} />
        </div>
        <div className="ml-5">
          <p className="text-yellow-400 font-pacifico text-xl">
            Quality Products
          </p>
          <h2 className="text-4xl font-semibold text-gray-900">
            Only Organic Food
          </h2>
          <p>We provide naturally grown farm products that are safe, fresh, and rich in nutrition. Every item is carefully cultivated and handled to maintain quality and purity.</p>
        <div>
          <div className="flex mt-5">
            <img src={farmIcon1} className="w-10 h-10" />
            <div className="ml-2">
              <h4 className="font-semibold">Natural Elements</h4>
              <p>Farm Fresh</p>
            </div>
            </div>
            <div className="flex">
              <img src={farmIcon2} className="w-10 h-10" />
            <div className="ml-2">
              <h4 className="font-semibold">Best Quality</h4>
              <p>Organic Farming</p>
            </div>
          </div>
          </div>
          <button className="bg-green-600 rounded-[10px] h-10 w-40">Start Shopping Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero4;
