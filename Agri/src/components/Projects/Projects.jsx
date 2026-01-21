import React from "react";
import { Link } from "react-router-dom";

import backgroundImage from "../../assets/backgroundImgService.png";
import Project2 from "../../assets/Project2.jpg";
import Project3 from "../../assets/Project3.jpg";
import Project4 from "../../assets/Project4.jpg";
import Project5 from "../../assets/Project5.jpg";
import Project6 from "../../assets/Project6.png";
import Project7 from "../../assets/Project7.jpg";

function Projects() {
  const projects = [
    { id: "easy-harvesting", title: "Easy Harvesting", image: Project3 },
    { id: "agriculture-farming", title: "Agriculture Farming", image: Project7 },
    { id: "ecological-farming", title: "Ecological Farming", image: Project4 },
    { id: "organic-solutions", title: "Organic Solutions", image: Project2 },
    { id: "fresh-products", title: "Fresh Products", image: Project5 },
    { id: "healthy-food", title: "Healthy Food", image: Project6 },
  ];

  return (
    <div>

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
            HOME / PROJECT
          </p>
          <h2 className="text-white text-[28px] sm:text-[36px] md:text-[48px] font-extrabold leading-[36px] md:leading-[58px]">
            PROJECT
          </h2>
        </div>
      </div>

      {/* ================= PROJECT CARDS ================= */}
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 py-20 pb-32">

        {projects.map((item) => (
          <Link
            key={item.id}
            to={`/projects/${item.id}`}
            className="relative w-full h-[320px] sm:h-[360px] lg:h-[380px] rounded-xl overflow-hidden group"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Title */}
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white">
              <h3 className="font-manrope font-bold text-[22px] sm:text-[26px] lg:text-[30px] h-[72px] leading-[32px] lg:leading-[36px] tracking-normal">
                {item.title.split(" ")[0]} <br />
                {item.title.split(" ").slice(1).join(" ")}
              </h3>
            </div>
          </Link>
        ))}

      </div>

    </div>
  );
}

export default Projects;
