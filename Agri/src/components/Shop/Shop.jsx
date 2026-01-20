import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServiceHero from "../Services/ServiceHero";

// Background
import backgroundImage from "../../assets/backgroundImgService.png";

// Images
import apple from "../../assets/hero3_apple.jpg";
import brinjal from "../../assets/hero3_brinjal.jpg";
import cauliflower from "../../assets/hero3_cauliflower.jpg";
import garlic from "../../assets/garlic.png";
import grapes from "../../assets/grapes.jpg";
import lettuce from "../../assets/lettuce.png";
import onion from "../../assets/onions.png";
import ginger from "../../assets/hero3_ginger.jpg";
import redGrapes from "../../assets/red_grapes.png";
import carrot from "../../assets/carrot.png";
import banana from "../../assets/banana.jpg";
import potato from "../../assets/potato.jpg";

function Shop() {
  const PRODUCTS_PER_PAGE = 6;

  /* ---------------- PRODUCTS ---------------- */
  const allProducts = [
    { id: "apple", name: "Apple", price: "₹50.00", priceValue: 50, img: apple },
    {
      id: "brinjal",
      name: "Brinjal",
      price: "₹20.00",
      priceValue: 20,
      img: brinjal,
    },
    {
      id: "cauliflower",
      name: "Cauliflower",
      price: "₹30.00",
      priceValue: 30,
      img: cauliflower,
    },
    {
      id: "garlic",
      name: "Garlic",
      price: "₹25.00",
      priceValue: 25,
      img: garlic,
    },
    {
      id: "grapes",
      name: "Grapes",
      price: "₹100.00",
      priceValue: 100,
      img: grapes,
    },
    {
      id: "lettuce",
      name: "Lettuce",
      price: "₹30.00",
      priceValue: 30,
      img: lettuce,
    },
    { id: "onion", name: "Onion", price: "₹20.00", priceValue: 20, img: onion },
    {
      id: "ginger",
      name: "Ginger",
      price: "₹30.00",
      priceValue: 30,
      img: ginger,
    },
    {
      id: "red-grapes",
      name: "Red Grapes",
      price: "₹100.00",
      priceValue: 100,
      img: redGrapes,
    },
    {
      id: "potato",
      name: "Potato",
      price: "₹25.00",
      priceValue: 25,
      img: potato,
    },
    {
      id: "carrot",
      name: "Carrot",
      price: "₹50.00",
      priceValue: 50,
      img: carrot,
    },
    {
      id: "banana",
      name: "Banana",
      price: "₹20.00",
      priceValue: 20,
      img: banana,
    },
  ];

  /* ---------------- STATES ---------------- */
  const MIN_PRICE = 20;
  const MAX_PRICE = 100;

  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  /* ---------------- FILTER LOGIC ---------------- */
  const priceFiltered = allProducts.filter(
    (p) => p.priceValue >= minPrice && p.priceValue <= maxPrice,
  );

  const searchedProducts = priceFiltered.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  /* ---------------- PAGINATION ---------------- */
  const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
  const products = searchedProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );
  const totalPages = Math.ceil(searchedProducts.length / PRODUCTS_PER_PAGE);

  return (
    <div className="w-full">
      <ServiceHero
        title="Our Shop"
        breadcrumb="Home / Shop"
        bgImage={backgroundImage}
      />

      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-10">
          {/* SIDEBAR */}
          <aside className="w-full lg:w-[260px] space-y-6">
            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
              className="w-full px-4 py-3 bg-yellow-400/90 rounded-md text-sm outline-none"
            />
            {/* PRICE FILTER */}
            <div className="border rounded-lg p-4 bg-white">
              <h4 className="font-semibold mb-4">Price</h4>

              <div className="relative h-6">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 rounded -translate-y-1/2" />

                <div
                  className="absolute top-1/2 h-1 bg-yellow-400 rounded -translate-y-1/2"
                  style={{
                    left: `${((minPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
                    width: `${((maxPrice - minPrice) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
                  }}
                />

                <input
                  type="range"
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  value={minPrice}
                  onChange={(e) =>
                    setMinPrice(Math.min(+e.target.value, maxPrice - 1))
                  }
                  className="absolute w-full h-6 appearance-none bg-transparent pointer-events-none
                  [&::-webkit-slider-thumb]:pointer-events-auto
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:h-4
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-white
                  [&::-webkit-slider-thumb]:border-2
                  [&::-webkit-slider-thumb]:border-yellow-400"
                />

                <input
                  type="range"
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  value={maxPrice}
                  onChange={(e) =>
                    setMaxPrice(Math.max(+e.target.value, minPrice + 1))
                  }
                  className="absolute w-full h-6 appearance-none bg-transparent pointer-events-none
                  [&::-webkit-slider-thumb]:pointer-events-auto
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:h-4
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-white
                  [&::-webkit-slider-thumb]:border-2
                  [&::-webkit-slider-thumb]:border-yellow-400"
                />
              </div>

              <div className="flex justify-between items-center mt-6 text-sm">
                <span>
                  ₹{minPrice} – ₹{maxPrice}
                </span>
                <button
                  onClick={() => setPage(1)}
                  className="bg-green-500 text-white px-4 py-1 rounded"
                >
                  Apply
                </button>
              </div>
            </div>
            {/* CATEGORIES */}
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3">Categories</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Agriculture",
                  "Farming",
                  "Fresh Vegetables",
                  "Harvest",
                  "Organic Food",
                ].map((cat) => (
                  <li
                    key={cat}
                    className="flex justify-between items-center cursor-pointer hover:text-green-600"
                  >
                    <span>{cat}</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* PRODUCTS */}
          <main className="flex-1">
            <p className="mb-6 text-sm text-gray-500">
              Showing {searchedProducts.length === 0 ? 0 : startIndex + 1}–
              {Math.min(
                startIndex + PRODUCTS_PER_PAGE,
                searchedProducts.length,
              )}{" "}
              of {searchedProducts.length} results
            </p>

            {searchedProducts.length === 0 && (
              <p className="text-center text-gray-500 py-20">
                No products found.
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#faf7ef] rounded-xl p-4 text-center"
                >
                  <Link to={`/shop/${item.id}`}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-[180px] object-contain mb-4 hover:scale-105 transition"
                    />
                  </Link>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-green-600 text-sm">{item.price}</p>
                  <div className="text-yellow-400 text-xs mt-1">★★★★★</div>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-8 h-8 rounded ${
                    page === i + 1 ? "bg-green-500 text-white" : "border"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default Shop;
