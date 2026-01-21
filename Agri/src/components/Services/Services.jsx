import React from "react";
import { Link } from "react-router-dom";

import backgroundImage from "../../assets/backgroundImgService.png";
import service01 from "../../assets/service-01.png";
import service02 from "../../assets/service-02.png";
import service03 from "../../assets/service-03.png";
import service04 from "../../assets/service-04.png";

import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";

import serviceIcon1 from "../../assets/serviceIcon1.png";
import serviceIcon2 from "../../assets/serviceIcon2.png";
import serviceIcon3 from "../../assets/serviceIcon3.png";

import icon1 from "../../assets/div.master-icon1.png";
import icon2 from "../../assets/div.master-icon2.png";
import icon3 from "../../assets/div.master-icon3.png";
import icon4 from "../../assets/div.master-icon4.png";

import farmerImg from "../../assets/farmerImg.png";
import frameImage from "../../assets/FrameS.png";
import videoSrc from "../../assets/vidS.mp4";

import ServiceHero from "./ServiceHero";

function Services() {
  const cards = [
    { img: service01, icon: icon1, title: "Agriculture", sub: "Products" },
    { img: service02, icon: icon2, title: "Organic", sub: "Products" },
    { img: service03, icon: icon3, title: "Fresh", sub: "Vegetables" },
    { img: service04, icon: icon4, title: "Dairy", sub: "Products" },
  ];

  const videoBottomCards = [
    { title: "Quality Standards", img: service1 },
    { title: "Organic Farming", img: service2 },
    { title: "Agriculture Products", img: service3 },
  ];

  return (
    <div className="w-full">
      {/* HERO */}
      <ServiceHero
        title="Services"
        breadcrumb="Home / Services"
        bgImage={backgroundImage}
      />

      {/* SERVICES CARDS */}
      <div className="flex justify-center bg-white py-12 sm:py-16 lg:py-24 px-4">
        <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((item, index) => (
            <div key={index} className="relative mx-auto w-full max-w-[270px]">
              <div className="overflow-hidden rounded-t-[20px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[260px] sm:h-[280px] object-cover"
                />
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 top-[215px] sm:top-[235px] z-20">
                <img src={item.icon} alt="" className="scale-110 -translate-y-5" />
              </div>

              <div className="bg-white rounded-b-[20px] shadow-xl text-center px-6 pt-14 pb-6 -mt-[45px] relative z-10">
                <h3 className="font-semibold text-[17px] leading-snug mb-4">
                  {item.title} <br /> {item.sub}
                </h3>
                <Link to={`/services/${item.title.toLowerCase()}`}>
                  <button className="bg-[#0ac94d] hover:bg-[#09b944] text-white text-sm px-6 py-2 rounded-full transition-colors">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FRAME IMAGE */}
      <div className="relative z-30 w-full bg-[#faf7ef] flex justify-center overflow-hidden">
        <img
          src={frameImage}
          alt="Frame"
          className="w-full max-w-[1905px] h-[80px] sm:h-[120px] md:h-[160px] object-cover"
        />
      </div>

      {/* VIDEO SECTION */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative z-10 max-w-[1200px] mx-auto h-full flex items-center px-6">
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Agriculture <br />
              Matters to the <br />
              Future of <br />
              Development
            </h2>
          </div>
        </div>
      </div>

      {/* OVERLAY CARDS SECTION (Fixed Responsiveness) */}
      <div className="relative z-20 px-4 -mt-20 sm:-mt-32 lg:-mt-14">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoBottomCards.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
              >
                <div className="py-4 text-center font-bold text-gray-800 border-b border-gray-100">
                  {item.title}
                </div>
                <div className="h-[200px] sm:h-[220px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT WE DO SECTION */}
      <div className="w-full bg-white py-16 sm:py-24 lg:py-32 px-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8">
          <div className="relative flex justify-center">
            <div className="absolute -left-4 -bottom-4 sm:-left-10 sm:-bottom-10 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] bg-[#f5f3ea] rounded-full -z-10"></div>
            <img
              src={farmerImg}
              alt="Farmer"
              className="w-full max-w-[320px] sm:max-w-[400px] rounded-xl shadow-lg object-cover"
            />
          </div>

          <div className="lg:pl-10">
            <span className="text-[#f4b400] font-serif italic text-lg">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-gray-900 leading-tight">
              Healthy Food for <br className="hidden sm:block" /> Good Growth
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              We focus on delivering fresh, natural, and nutritious agricultural
              products that support healthier living and sustainable growth.
            </p>
            <p className="text-gray-500 mb-10">
              From responsible farming to modern agricultural solutions, we
              ensure quality, safety, and environmental care at every stage.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-8">
              <img src={serviceIcon1} alt="Harvesting" className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
              <img src={serviceIcon2} alt="Maintenance" className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
              <img src={serviceIcon3} alt="Fencing" className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* GREEN BANNER */}
      <div className="w-full bg-[#4caf50] py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <span className="text-yellow-300 font-serif italic text-lg">
              Agriculture Market Leaders
            </span>
            <h3 className="text-white text-2xl sm:text-3xl font-bold mt-2">
              We’re popular in agriculture market globally
            </h3>
          </div>
          <button className="bg-[#f4b400] hover:bg-white hover:text-[#f4b400] text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 whitespace-nowrap shadow-lg">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;