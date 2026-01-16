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
    <section className="py-50 bg-white">
      
      <div className="text-center mb-14">
        <p className="text-yellow-400 font-pacifico text-2xl">
          Recently Added
        </p>
        <h2 className="text-5xl font-semibold text-gray-900">
          Latest Products
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-[#f7f5ee] rounded-2xl p-8 text-center hover:shadow-xl transition"
          >
            <div className=" rounded-xl p-6">
              <img
                src={product.img}
                alt={product.name}
                className=" w-200 h-50 object-cover group-hover:scale-105 transition"
              />
            </div>
            <h3 className="font-semibold text-gray-900">
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

    </section>
  )
}

export default LatestProducts
