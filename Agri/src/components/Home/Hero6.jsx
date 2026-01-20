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
    <section className="bg-white py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <p className="text-yellow-400 font-pacifico text-base sm:text-lg md:text-xl">
            From the Blog
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            News & Articles
          </h2>
        </div>

        {/* Farmer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 w-[1100px] h-[400px] ml-20 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-2 mb-8 md:mb-10 lg:mb-12">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center mx-auto w-full h-[400px] max-w-md">
            <img
              src={farmer3}
              alt="Ram Shelke"
              className="w-full h-60 md:h-60 lg:h-70 object-cover"
            />
            <div className="py-4 px-4 relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-500 w-9 h-9 rounded-full flex items-center justify-center text-white">
                ↗
              </div>
              <h4 className="font-semibold text-gray-900 mt-5 text-sm sm:text-base md:text-lg">
                Ram Shelke
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Farmer
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center mx-auto w-full max-w-md">
            <img
              src={farmer5}
              alt="Aruna Bhise"
              className="w-full h-56 md:h-60 lg:h-70 object-cover"
            />
            <div className="py-4 px-4 relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-500 w-9 h-9 rounded-full flex items-center justify-center text-white">
                ↗
              </div>
              <h4 className="font-semibold text-gray-900 mt-5 text-sm sm:text-base md:text-lg">
                Aruna Bhise
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Farmer
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center mx-auto w-full max-w-md sm:col-span-2 lg:col-span-1">
            <img
              src={farmer4}
              alt="Milind More"
              className="w-full h-56 md:h-60 lg:h-70 object-cover"
            />
            <div className="py-4 px-4 relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-500 w-9 h-9 rounded-full flex items-center justify-center text-white">
                ↗
              </div>
              <h4 className="font-semibold text-gray-900 mt-5 text-sm sm:text-base md:text-lg">
                Milind More
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Farmer
              </p>
            </div>
          </div>

        </div>

        {/* Farm Images Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {[farm1, farm2, farm3, farm4, farm5].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Farm ${index + 1}`}
              className="w-full h-28 sm:h-36 md:h-44 lg:h-66 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero6
