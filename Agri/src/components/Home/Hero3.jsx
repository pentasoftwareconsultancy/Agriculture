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
    <div className="py-8 md:py-16 mb-10">
      <div className="container mx-auto px-4">

        <div className="text-center mb-8 md:mb-14">
          <p className="
            font-pacifico
            text-base 
            sm:text-lg 
            md:text-2xl
            text-yellow-500 
            md:text-yellow-400
          ">
            Special Offers
          </p>

          <h2 className="text-2xl md:text-5xl font-semibold text-gray-900">
            Today's Hot Deal
          </h2>
        </div>

        <div className="
          grid 
          grid-cols-2 
          md:grid-cols-4 
          max-w-6xl 
          mx-auto 
          gap-4 
          md:gap-6 
          lg:gap-10
        ">
          {items.map((product) => (
            <div
              key={product.id}
              className="group text-center"
            >
              <div className="mb-2 md:mb-4 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="
                    w-full 
                    h-36 
                    sm:h-40 
                    md:h-48 
                    lg:h-64 
                    object-cover 
                    border 
                    border-gray-300 
                    transition 
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              <h3 className="font-semibold text-gray-900 text-sm md:text-base lg:text-lg">
                {product.name}
              </h3>

              <p className="text-green-600 text-xs md:text-sm lg:text-base mt-1">
                {product.price}
              </p>

              <div className="flex justify-center gap-0.5 md:gap-1 mt-1 md:mt-2 text-yellow-400 text-xs md:text-sm">
                ★ ★ ★ ★ ★
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Hero3;
