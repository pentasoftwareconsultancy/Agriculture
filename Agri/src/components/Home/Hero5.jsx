import React from 'react'
import Hero5bg from '../../assets/Hero5bg.png'
import hero5apple from '../../assets/hero5apple.jpg'
import hero5wheat from '../../assets/hero5wheat.jpg'
import farmer1 from '../../assets/farmer1.jpg'
import farmer2 from '../../assets/farmer2.jpg'
function Hero5() {
  return (
    <section className="bg-[#fbfaf5]">

      <div className="bg-[#1c1b17] h-[184px] py-12">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between text-center text-gray-300 px-8 py-8">
          
          <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
            <p className="text-[18px] leading-[30px] font-manrope font-medium">Agriculture Products</p>
          </div>

          <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
            <p className="text-[18px] leading-[30px] font-manrope font-medium">Projects Completed</p>
          </div>

          <div className="w-1/2 md:w-1/4">
            <p className="text-[18px] leading-[30px] font-manrope font-medium">Satisfied Clients</p>
          </div>

          <div className="w-1/2 md:w-1/4">
            <p className="text-[18px] leading-[30px] font-manrope font-medium">Experts Farmers</p>
          </div>

        </div>
      </div>

      <div className="relative py-24">
        <img className='w-full h-full object-cover absolute inset-0' src={Hero5bg}/>
        
        <div className="relative z-10 text-center mb-16">
          <p className="text-yellow-400 font-pacifico leading-[36px] text-[24px]">
            Our Testimonials
          </p>
          <h2 className="text-[48px] font-extrabold leading-[57px] text-gray-900">
            What They Say
          </h2>
        </div>

        <div className="relative z-10 ml-60 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-30 px-6">

          <div className="relative flex items-center gap-6">
            <img
              src={farmer1}
              alt="User"
              className="w-35 h-50 absolute left-[-100px] object-cover rounded-2xl border-1 border-amber-100  shadow-lg"
            />

            {/* <span className="absolute left-12 top-1/2 -translate-y-1/2 w-5 h-5 bg-green-500 rounded-full border-4 border-white"></span> */}

            <img
              src={hero5apple}
              alt="Apples"
              className="w-100 h-70 object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="relative flex items-center gap-6">
            <img
              src={farmer2}
              alt="User"
              className="w-35 h-50 absolute left-[-100px] object-cover z-10 rounded-2xl border-1 border-amber-100 shadow-lg"
            />

            {/* <span className="absolute left-12 top-1/2 -translate-y-1/2 w-5 h-5 bg-green-500 rounded-full border-4 border-white"></span> */}

            <div className="relative">
              <img
                src={hero5wheat}
                alt="Wheat"
                className=" w-100 h-70 object-cover rounded-xl shadow-lg"
              />
              {/* <p className="absolute bottom-4 right-4 text-white font-semibold">
                Sarah Albert
              </p> */}
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero5;
