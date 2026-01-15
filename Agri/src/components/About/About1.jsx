import React from 'react'

import Marketsmall from "../../assets/marketsmall.png"
import Marketlarge from "../../assets/marketlarge.png"

function About1() {
  return (
    <div>
   
    {/* <div className="">
        <img src={Marketsmall} alt="Market_small"  />
        <img src={Marketlarge} alt="Market_large" />
    </div>

    <div className="">

        <p className=" 
                       text-[#EEC044]
                         font-['Covered_By_Your_Grace']
                          font-normal
                         text-[24px]
                       tracking-[0]
                       opacity-100
                         ">Get to Know Us</p>

       


    </div> */}
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left Image Section */}
          <div className="relative">
            {/* Background Image */}
            <img
              src={Marketlarge}
              alt="Farm background"
              className="rounded-xl w-full h-[420px] object-cover"
            />

            {/* Overlay Image */}
            <img
              src={Marketsmall}
              alt="Farmer"
              className="absolute bottom-[-60px] left-[-40px] w-[280px] h-[280px] object-cover rounded-xl shadow-lg border-8 border-white"
            />
          </div>

          {/* Right Content Section */}
          <div>
            <p className="text-[#EEC044]
                         font-['Covered_By_Your_Grace']
                          font-normal
                         text-[24px]
                       tracking-[0]
                       opacity-100">
              Get to Know Us
            </p>

            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
              The Best Agriculture <br /> Market
            </h2>



            {/* font-family: Manrope;
font-weight: 800;
font-style: ExtraBold;
font-size: 48px;
leading-trim: NONE;
line-height: 57.6px;
letter-spacing: 0%;
vertical-align: middle; */}


            <p className="text-green-600 font-medium mb-4">
              There are many variations of passa of lorem available, but the
              majority have suffered alteration.
            </p>

            <p className="text-gray-500 mb-6 leading-relaxed">
              There are many variations of passages of lorem ipsum available but
              the majority have suffered alteration in some form by injected
              humor or random word which don’t look even.
            </p>

            {/* List */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-lime-600 text-lg">✔</span>
                Suspe ndisse suscipit sagittis leo
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-lime-600 text-lg">✔</span>
                Entum vestibulum dignissim posuere
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-lime-600 text-lg">✔</span>
                Lorem ipsum on the tend to repeat
              </li>
            </ul>

            {/* Button */}
            <button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 rounded-md font-medium transition">
              Discover More
            </button>
          </div>

        </div>
      </div>
    </section>

     

      
    </div>
  )
}

export default About1
