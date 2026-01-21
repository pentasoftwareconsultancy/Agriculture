import React from "react";
import backgroundImage from "../../assets/backgroundImgService.png";

function ProjectHero({ breadcrumb, title }) {
  return (
    <div
      className="relative w-full h-[220px] sm:h-[260px] md:h-[326px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 font-manrope">
        <p className="text-xs sm:text-sm tracking-widest uppercase mb-2 text-white/80">
          {breadcrumb}
        </p>

        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold uppercase leading-tight">
          {title}
        </h1>
      </div>
    </div>
  );
}

export default ProjectHero;
