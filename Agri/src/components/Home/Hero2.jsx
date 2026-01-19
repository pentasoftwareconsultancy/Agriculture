import React from 'react'
import Hero2_1 from '../../assets/Hero2_1.png'
import Hero2_2 from '../../assets/Hero2_2.png'
import Hero2_4 from '../../assets/Hero2_4.jpg'
function Hero2() {
  return (
    <div className='py-8 md:py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12'>
          <div className='relative'>
            <img className='w-full h-[200px] md:h-[250px] object-cover rounded-xl' src={Hero2_1} alt="Fresh Vegetables"/>
            <button className='absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-gray-100 transition'>
              Order Now
            </button>
          </div>
          <div className='relative'>
            <img className='w-full h-[200px] md:h-[250px] object-cover rounded-xl' src={Hero2_2} alt="Organic Fruits"/>
            <button className='absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-gray-100 transition'>
              Order Now
            </button>
          </div>
        </div>
        
        <div className='relative rounded-xl overflow-hidden'>
          <img className='w-full h-[300px] md:h-[500px] object-cover' src={Hero2_4} alt="Organic Farm"/>
          <div className='absolute inset-0 bg-black/40'></div>
          <div className='absolute inset-0 flex flex-col items-center justify-center px-4 text-center'>
            <h2 className='text-white font-bold text-xl md:text-4xl lg:text-5xl leading-tight mb-6 md:mb-8'>
              Be Healthy & Eat Only Fresh<br />Organic Vegetables
            </h2>
            <button className='bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 rounded-xl text-sm md:text-base font-medium transition'>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2