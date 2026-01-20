import React from 'react'
import onions from "../../assets/onions.png"
import carrot from "../../assets/carrot.png"
import tomato from "../../assets/tomato.png"
import red_grapes from "../../assets/red_grapes.png"
import garlic from "../../assets/garlic.png"
import lettuce from "../../assets/lettuce.png"

function LatestProducts() {
  const products = [
    { id: 1, name: "Onions", price: "₹30.00", img: onions },
    { id: 2, name: "Carrot", price: "₹50.00", img: carrot },
    { id: 3, name: "Tomato", price: "₹50.00", img: tomato },
    { id: 4, name: "Red Grapes", price: "₹100.00", img: red_grapes },
    { id: 5, name: "Garlic", price: "₹60.00", img: garlic },
    { id: 6, name: "Lettuce", price: "₹30.00", img: lettuce },
  ]

  return (
    <section className="mt-15 py-8 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-8 md:mb-12">
          <p className="
            font-pacifico 
            text-base 
            sm:text-lg 
            md:text-2xl
            text-yellow-500 
            md:text-yellow-400
          ">
            Recently Added
          </p>
          <h2 className="text-2xl md:text-5xl font-semibold text-gray-900">
            Latest Products
          </h2>
        </div>

        <div className="
          grid 
          grid-cols-2 
          md:grid-cols-3
          gap-3
          md:gap-8
          w-full
          md:w-[1200px]
          mx-auto
        ">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#f7f5ee] rounded-[10px] md:rounded-2xl p-2 md:p-6 text-center hover:shadow-xl transition"
            >
              <div className="mb-3 md:mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-24 md:h-48 object-contain mx-auto transition hover:scale-105"
                />
              </div>

              <h3 className="font-semibold text-gray-900 text-sm md:text-lg mb-1">
                {product.name}
              </h3>
              <p className="text-green-600 text-sm md:text-base mb-2">
                {product.price}
              </p>
              <div className="text-yellow-400 text-sm">
                ★★★★★
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default LatestProducts
