import React from 'react'
import Grape from "../../assets/Grape.png"
import Grain from "../../assets/Grain.png"
import Farm from "../../assets/Farm.png"

function About4() {
  const farmers = [
    {
      id: 1,
      name: "Kevin Smith",
      role: "Farmer",
      image: Farm,
    },
    {
      id: 2,
      name: "Jessica Brown",
      role: "Farmer",
      image: Grape,
    },
    {
      id: 3,
      name: "Ray Martin",
      role: "Farmer",
      image: Grain,
    },
  ];

  return (
    <section className="pt-16 pb-40 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h4 className="mb-2 text-[24px] leading-[36px] text-center text-[#EEC044] font-['Covered_By_Your_Grace'] font-normal">
          Team Members
        </h4>
    
        <h2 className="mb-12 text-[48px] leading-[57.6px] text-center font-['Manrope'] font-extrabold text-gray-800">
          Meet Our Farmers
        </h2>

        {/* Farmers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {farmers.map((farmer) => (
            <div key={farmer.id} className="relative group overflow-hidden rounded-sm shadow-lg">
              {/* Main Image */}
              <img 
                src={farmer.image} 
                alt={farmer.name} 
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Info Box - Fixed positioning and alignment */}
              <div className="absolute bottom-0 right-0 w-3/4 mb-6 flex items-center justify-end">
                {/* Share Icon - Fixed <path> tag */}
                <div className="bg-[#4CAF50] p-3 rounded-lg shadow-md z-10 -mr-4 group-hover:bg-[#3d8b40] transition-colors cursor-pointer flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" 
                    />
                  </svg>
                </div>

                {/* White Background Text Area */}
                <div className="bg-white py-4 pl-8 pr-4 rounded-l-md shadow-lg w-full text-center">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {farmer.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                    {farmer.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About4;