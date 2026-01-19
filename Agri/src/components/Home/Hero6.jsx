import React from 'react'
import farmer3 from "../../assets/farmer3.jpg"
import farmer4 from "../../assets/farmer4.jpg" 
import farmer5 from "../../assets/farmer5.jpg"
import farm1 from '../../assets/farm1.jpg'
import farm2 from '../../assets/farm2.jpg'
import farm3 from '../../assets/farm3.jpg'
import farm4 from '../../assets/farm4.jpg'
import farm5 from '../../assets/farm5.jpg'
function Hero6() {
  return (
    <section className="bg-white py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <p className="text-yellow-400 font-pacifico text-base sm:text-lg md:text-xl">
            From the Blog
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            News & Articles
          </h2>
        </div>

        {/* Farmer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12 lg:mb-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center mx-auto w-full max-w-sm">
            <img
              src={farmer3}
              alt="Ram Shelke"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
            />
            <div className="py-4 px-4 relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-500 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-sm sm:text-base">
                ↗
              </div>
              <h4 className="font-semibold text-gray-900 mt-4 text-sm sm:text-base md:text-lg">
                Ram Shelke
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Farmer
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center mx-auto w-full max-w-sm">
            <img
              src={farmer5}
              alt="Aruna Bhise"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
            />
            <div className="py-4 px-4 relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-500 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-sm sm:text-base">
                ↗
              </div>
              <h4 className="font-semibold text-gray-900 mt-4 text-sm sm:text-base md:text-lg">
                Aruna Bhise
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Farmer
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center mx-auto w-full max-w-sm sm:col-span-2 lg:col-span-1">
            <img
              src={farmer4}
              alt="Milind More"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
            />
            <div className="py-4 px-4 relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-500 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-sm sm:text-base">
                ↗
              </div>
              <h4 className="font-semibold text-gray-900 mt-4 text-sm sm:text-base md:text-lg">
                Milind More
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Farmer
              </p>
            </div>
          </div>
        </div>

        {/* Farm Images Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          <img
            src={farm1}
            alt="Farm 1"
            className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src={farm2}
            alt="Farm 2"
            className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src={farm3}
            alt="Farm 3"
            className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src={farm4}
            alt="Farm 4"
            className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src={farm5}
            alt="Farm 5"
            className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 col-span-2 sm:col-span-1"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero6;