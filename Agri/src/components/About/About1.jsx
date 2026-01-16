import React from "react";
import Marketsmall from "../../assets/marketsmall.png";
import Marketlarge from "../../assets/marketlarge.png";

function About1() {
  return (
    <section className="bg-white pt-20">
      {/* CENTER + SCALE CONTAINER */}
      <div className="flex justify-center">
        <div
          className="
            relative
            w-[1300px]
            h-[603.19px]
            opacity-100
            scale-[0.75]
            origin-top
          "
        >
          <div className="grid grid-cols-2 gap-10 items-center h-full px-6">
            
            {/* LEFT IMAGE SECTION */}
            <div className="relative">
              {/* Large Image */}
              <img
                src={Marketlarge}
                alt="Farm background"
                className="w-[450px] h-[601px] rounded-[10px] object-cover relative left-[15px]"
              />

              {/* Small Overlay Image */}
              <img
                   src={Marketsmall} alt="Farmer"
                  className=" absolute w-[290px] h-[321px]  rounded-[10px] object-cover  top-[280px] left-[-105px]
                  shadow-lg z-10 border-[4px] border-white"/>

            </div>

            {/* RIGHT CONTENT SECTION */}
            <div>
              <p
                className="
                  text-[#EEC044]
                  font-['Covered_By_Your_Grace']
                  font-normal
                  text-[24px]
                  mb-2
                "
              >
                Get to Know Us
              </p>

              <h2 className="font-manrope font-extrabold text-[48px] leading-[57.6px] text-gray-900 mb-6">
                The Best Agriculture <br /> Market
              </h2>

              <p className="font-manrope font-bold text-[20px] leading-[30px] text-[#4BAF47] mb-4">
                There are many variations of passa of lorem available, but the
                majority have suffered alteration.
              </p>

              <p className="font-manrope font-medium text-[16px] leading-[30px] text-[#878680] mb-6">
                There are many variations of passages of lorem ipsum available
                but the majority have suffered alteration in some form by
                injected humor or random word which don’t look even.
              </p>

              {/* LIST */}
              <ul className="space-y-3 mb-8">
                <li className="font-manrope font-bold text-[18px] leading-[36px] text-[#1F1E17] flex items-center gap-3">
                  <span className="text-lime-600 text-lg">✔</span>
                  Suspe ndisse suscipit sagittis leo
                </li>
                <li className="font-manrope font-bold text-[18px] leading-[36px] text-[#1F1E17] flex items-center gap-3">
                  <span className="text-lime-600 text-lg">✔</span>
                  Entum vestibulum dignissim posuere
                </li>
                <li className="font-manrope font-bold text-[18px] leading-[36px] text-[#1F1E17] flex items-center gap-3">
                  <span className="text-lime-600 text-lg">✔</span>
                  Lorem ipsum on the tend to repeat
                </li>
              </ul>

              {/* BUTTON */}
              <button
                className="
                  font-manrope
                  font-bold
                  text-[14px]
                  leading-[30px]
                  text-white
                  bg-[#4BAF47]
                  hover:bg-[#43a43f]
                  w-[196.31px]
                  h-[60px]
                  rounded-[10px]
                  transition
                "
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About1;
