import React from "react";
import Hero3_apple from '../../assets/hero3_apple.jpg'
import Hero3_cauliflower from '../../assets/hero3_cauliflower.jpg'
import Hero3_brinjal from '../../assets/hero3_brinjal.jpg'
import Hero3_pear from '../../assets/hero3_pear.jpg'
function Hero3() {
     const items = [
        { id: 1, name: "Apple", price: "₹80.00", img: Hero3_apple },
        { id: 2, name: "Cauliflower", price: "₹30.00", img: Hero3_cauliflower },
        { id: 3, name: "Brinjal", price: "₹50.00", img: Hero3_brinjal },
        { id: 4, name: "Pear", price: "₹70.00", img: Hero3_pear },
        
      ]
    
  return (
    <div className="mb-20">
      <div className="text-center mb-14">
        <p className="text-yellow-400 font-pacifico text-2xl">Special Offers</p>
        <h2 className="text-5xl font-semibold text-gray-900">
          Today's Hot Deal
        </h2>
      </div>
<div className="w-full mx-auto flex gap-10 px-20">
        {items.map((product) => (
          <div
            key={product.id}
            className="group text-center flex-1"
          >
            <div className="">
              <img
                src={product.img}
                alt={product.name}
                className="w-80% h-80% object-cover rounded-2xl border border-gray-300 group-hover:scale-105 transition"
              />
            </div>
            <h3 className="font-semibold text-gray-900 mt-4">
              {product.name}
            </h3>

            <p className="text-green-600 text-sm mt-1">
              {product.price}
            </p>

            <div className="flex justify-center gap-1 mt-2 text-yellow-400 text-sm">
              ★ ★ ★ ★ ★
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero3;
