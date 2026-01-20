import React from "react";
import backgroundImage from "../../assets/backgroundImgService.png";

function ProjectHero({ breadcrumb, title }) {
  return (
    <div
      className="relative w-full h-[260px] sm:h-[300px] md:h-[326px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <p className="text-sm tracking-widest uppercase mb-2">
          {breadcrumb}
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
}

export default ProjectHero;
