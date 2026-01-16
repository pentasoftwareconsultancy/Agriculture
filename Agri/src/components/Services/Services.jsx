import React from "react";

// Background & service images
import backgroundImage from "../../assets/backgroundImage.png";
import service01 from "../../assets/service-01.png";
import service02 from "../../assets/service-02.png";
import service03 from "../../assets/service-03.png";
import service04 from "../../assets/service-04.png";

// Icons
import icon1 from "../../assets/div.master-icon1.png";
import icon2 from "../../assets/div.master-icon2.png";
import icon3 from "../../assets/div.master-icon3.png";
import icon4 from "../../assets/div.master-icon4.png";

import frameImage from "../../assets/FrameS.png";
import videoSrc from "../../assets/vidS.mp4";



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
      <div
        className="relative h-[320px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* SERVICES */}
      <div className="flex justify-center py-24 bg-white">
        <div className="flex gap-10 w-[1200px]">

          {cards.map((item, index) => (
            <div key={index} className="w-[270px] relative">

              {/* IMAGE */}
              <div className="overflow-hidden rounded-t-[20px]">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-[280px] object-cover"
                />
              </div>

              {/* ICON */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[235px] z-20">
                <div className="w flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-full h-full object-cover scale-110 -translate-y-5"
                  />
                </div>
              </div>

              {/* WHITE CARD */}
              <div className="bg-white rounded-b-[20px] shadow-xl text-center px-6 pt-14 pb-6 -mt-[45px] relative z-10">

                <h3 className="font-semibold text-[17px] leading-snug mb-4">
                  {item.title} <br /> {item.sub}
                </h3>

                <button className="bg-[#0ac94d] hover:bg-[#09b944] text-white text-sm px-6 py-2 rounded-full">
                  Read More
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>
      {/* ===== FRAME SECTION ===== */}
      <div className="w-full bg-[#faf7ef] flex justify-center">
        <img
          src={frameImage}
          alt="Frame"
          style={{
            width: "1905px",
            height: "190px",
            opacity: 1,
          }}
        />
      </div>


      {/* ===== AGRICULTURE VIDEO SECTION ===== */}
      <div className="relative w-full h-[520px] overflow-hidden">

        {/* VIDEO */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* TEXT CONTENT */}
        <div className="relative z-10 max-w-[1200px] mx-auto h-full flex items-center px-6">
          <div className="text-white max-w-[520px]">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
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
