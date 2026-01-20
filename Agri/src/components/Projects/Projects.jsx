import React, { useState } from "react";
import Project1 from "../../assets/Project1.png";
import Project2 from "../../assets/Project2.jpg";
import Project3 from "../../assets/Project3.jpg";
import Project4 from "../../assets/Project4.jpg";
import Project5 from "../../assets/Project5.jpg";
import Project6 from "../../assets/Project6.png";
import Project7 from "../../assets/Project7.jpg";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projectData = [
    { title: "Easy Harvesting" , image: Project3 },
    { title: "Agriculture Farming", image: Project7 },
    { title: "Ecological Farming", image: Project4 },
    { title: "Organic Solutions", image: Project2 },
    { title: "Fresh Products", image: Project5 },
    { title: "Healthy Food", image: Project6 },
  ];

  return (
    <div className="relative">

      {/* Top Banner */}
      <div className="w-full h-[326px] opacity-100">
        <img
          src={Project1}
          alt="Project Frame"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Cards Section */}
      <div className="w-[1170px] mx-auto px-6 py-22 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveProject(item)}
            className="relative h-[470px]  w-[370px]
            rounded-xl overflow-hidden cursor-pointer group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text */}
           <div className="absolute bottom-15  left-8 text-white">
            <h3 className="font-[Manrope] font-extrabold text-[30px] leading-[36px] tracking-[0] align-middle">
             {item.title.split(" ")[0]}
              <br />
             {item.title.split(" ").slice(1).join(" ")} </h3>
            </div>

          </div>
        ))}
      </div>

      {/* Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 relative">

            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-3 right-3 text-xl text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h2 className="text-2xl font-bold mb-2">
              {activeProject.title}
            </h2>

            <p className="text-gray-600">
              This section provides more details about {activeProject.title}.
            </p>

            
          </div>
        </div>
      )}

    </div>
  );
}

export default Projects;
