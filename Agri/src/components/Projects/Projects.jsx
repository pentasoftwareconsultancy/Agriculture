import React from "react";
import { Link } from "react-router-dom";
import Project1 from "../../assets/Project1.png";

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

      {/* HERO */}
      <div className="w-full h-[326px]">
        <img src={Project1} className="w-full h-full object-cover" />
      </div>

      {/* CARDS */}
      <div className="w-[1170px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-30 pb-40">
  {projects.map((item) => (
    <Link
      key={item.id}
      to={`/projects/${item.id}`}
      className="relative h-[380px] w-[370px] rounded-xl overflow-hidden group"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute bottom-10 left-8 text-white">
        <h3 className="text-[26px] font-extrabold leading-[32px]">
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
