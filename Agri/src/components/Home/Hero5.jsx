import React from 'react'
import Hero5bg from '../../assets/Hero5bg.png'
import hero5apple from '../../assets/hero5apple.jpg'
import hero5wheat from '../../assets/hero5wheat.jpg'
import farmer1 from '../../assets/farmer1.jpg'
import farmer2 from '../../assets/farmer2.jpg'
function Hero5() {
  return (
    <section className="bg-[#fbfaf5]">
      {/* Stats Section */}
      <div className="bg-[#1c1b17] py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center text-gray-300">
            <div className="py-2">
              <p className="text-xs sm:text-sm md:text-lg font-medium">Agriculture Products</p>
            </div>
            <div className="py-2">
              <p className="text-xs sm:text-sm md:text-lg font-medium">Projects Completed</p>
            </div>
            <div className="py-2">
              <p className="text-xs sm:text-sm md:text-lg font-medium">Satisfied Clients</p>
            </div>
            <div className="py-2">
              <p className="text-xs sm:text-sm md:text-lg font-medium">Experts Farmers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative py-8 md:py-16 lg:py-24">
        <img className='w-full h-full object-cover absolute inset-0' src={Hero5bg} alt="Background"/>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <p className="text-yellow-400 font-pacifico text-base sm:text-lg md:text-2xl mb-2">
              Our Testimonials
            </p>
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
              What They Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 max-w-4xl mx-auto">
            <div className="relative">
              <div className="flex items-center justify-center">
                <img
                  src={farmer1}
                  alt="Farmer"
                  className="w-12 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24 absolute -left-6 sm:-left-8 md:-left-10 object-cover rounded-xl border-2 border-amber-100 shadow-lg z-10"
                />
                <img
                  src={hero5apple}
                  alt="Apples"
                  className="w-full max-w-xs sm:max-w-sm h-32 sm:h-40 md:h-48 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center">
                <img
                  src={farmer2}
                  alt="Farmer"
                  className="w-12 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24 absolute -left-6 sm:-left-8 md:-left-10 object-cover rounded-xl border-2 border-amber-100 shadow-lg z-10"
                />
                <img
                  src={hero5wheat}
                  alt="Wheat"
                  className="w-full max-w-xs sm:max-w-sm h-32 sm:h-40 md:h-48 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero5;