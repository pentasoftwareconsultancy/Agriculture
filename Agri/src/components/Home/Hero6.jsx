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
    <section className="bg-white py-24">

      <div className="text-center mb-16">
        <p className="text-yellow-400 font-pacifico text-lg">
          From the Blog
        </p>
        <h2 className="text-4xl font-bold text-gray-900">
          News & Articles
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 px-6 mb-10">

        <div className="bg-white rounded-xl shadow-md overflow-hidden text-center w-80 h-90">
          <img
            src={farmer3}
            alt="Kevin Smith"
            className="w-full h-64 object-cover"
          />
          <div className="py-4 relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
              ↗
            </div>
            <h4 className="font-semibold text-gray-900 mt-4">
              Ram Shelke
            </h4>
            <p className="text-sm text-gray-500">
              Farmer
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden text-center w-80 h-90">
          <img
            src={farmer5}
            alt="Jessica Brown"
            className="w-full h-64 object-cover"
          />
          <div className="py-4 relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
              ↗
            </div>
            <h4 className="font-semibold text-gray-900 mt-4">
              Aruna Bhise
            </h4>
            <p className="text-sm text-gray-500">
              Farmer
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden text-center w-80 h-90">
          <img
            src={farmer4}
            alt="David Martin"
            className="w-full h-64 object-cover"
          />
          <div className="py-4 relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
              ↗
            </div>
            <h4 className="font-semibold text-gray-900 mt-4">
              Milind More
            </h4>
            <p className="text-sm text-gray-500">
              Farmer
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-15xl mx-auto flex flex-wrap justify-center gap-2 px-6">

        <img
          src={farm1}
          alt="Blog"
          className="w-70 h-90 object-cover rounded-xl"
        />
        <img
          src={farm2}
          alt="Blog"
          className="w-70 h-90 object-cover rounded-xl"
        />
        <img
          src={farm3}
          alt="Blog"
          className="w-70 h-90 object-cover rounded-xl"
        />
        <img
          src={farm4}
          alt="Blog"
          className="w-70 h-90 object-cover rounded-xl"
        />
        <img
          src={farm5}
          alt="Blog"
          className="w-70 h-90 object-cover rounded-xl"
        />

      </div>

    </section>
  )
}

export default Hero6;
