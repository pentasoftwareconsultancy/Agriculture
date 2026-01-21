import React from "react";
import backgroundImage from "../../assets/backgroundImgService.png";

function About() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[326px]">
        <img
          src={backgroundImage}
          className="w-full h-full object-cover"
          alt="background"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 font-manrope">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-white/80 mb-2">
            HOME / ABOUT
          </p>
          <h2 className="text-white text-[48px] font-semibold">
            ABOUT
          </h2>
        </div>
      </div>

    </div>
  );
}

export default About;
