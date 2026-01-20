import React from "react";
import { Link } from "react-router-dom";

import backgroundImage from "../../assets/backgroundImgService.png";
import service01 from "../../assets/service-01.png";
import service02 from "../../assets/service-02.png";
import service03 from "../../assets/service-03.png";
import service04 from "../../assets/service-04.png";

import icon1 from "../../assets/div.master-icon1.png";
import icon2 from "../../assets/div.master-icon2.png";
import icon3 from "../../assets/div.master-icon3.png";
import icon4 from "../../assets/div.master-icon4.png";

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
            <div key={index} className="relative mx-auto w-[270px]">

              {/* IMAGE */}
              <div className="overflow-hidden rounded-t-[20px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[260px] sm:h-[280px] object-cover"
                />
              </div>

              {/* ICON */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[215px] sm:top-[235px] z-20">
                <img
                  src={item.icon}
                  alt=""
                  className="scale-110 -translate-y-5"
                />
              </div>

              {/* CARD */}
              <div className="bg-white rounded-b-[20px] shadow-xl text-center px-6 pt-14 pb-6 -mt-[45px] relative z-10">
                <h3 className="font-semibold text-[17px] leading-snug mb-4">
                  {item.title} <br /> {item.sub}
                </h3>

                <Link to={`/services/${item.title.toLowerCase()}`}>
                  <button className="bg-[#0ac94d] hover:bg-[#09b944] text-white text-sm px-6 py-2 rounded-full">
                    Read More
                  </button>
                </Link>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* FRAME IMAGE */}
      <div className="w-full bg-[#faf7ef] flex justify-center overflow-hidden">
        <img
          src={frameImage}
          alt="Frame"
          className="w-full max-w-[1905px] h-[120px] sm:h-[160px] md:h-[190px] object-cover"
        />
      </div>

      {/* VIDEO SECTION */}
      <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 max-w-[1200px] mx-auto h-full flex items-center px-4 sm:px-6">
          <div className="text-white max-w-[520px]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Agriculture <br />
              Matters to the <br />
              Future of <br />
              Development
            </h2>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Services;
