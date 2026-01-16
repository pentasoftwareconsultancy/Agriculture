import React from 'react'
import Hero2_1 from '../../assets/Hero2_1.png'
import Hero2_2 from '../../assets/Hero2_2.png'
import Hero2_4 from '../../assets/Hero2_4.jpg'
function Hero2() {
  return (
    <div className='relative h-[800px]'>
        <div className='flex absolute gap-4 justify-center w-full z-20'>
            <div className='relative'>
              <img className='w-[500px] h-[250px] object-cover rounded-[10px]' src={Hero2_1} alt="Hero1"/>
              <button className='absolute text-[15px] w-30 bottom-12 left-10 bg-white text-black h-10 px-2 rounded-[10px]'>Order Now</button>
            </div>
            <div className='relative'>
               <img className='w-[500px] h-[250px] object-cover rounded-[10px]' src={Hero2_2} alt="Hero1"/>
               <button className='absolute text-[15px] w-30 bottom-12 left-10 bg-white text-black h-10 px-2 rounded-[10px]'>Order Now</button>
            </div>
        </div>
        <div className='relative'>
            <img className='relative w-[1505px] h-[500px] object-cover object-bottom top-50 left-3 ' src={Hero2_4} alt="Hero1"/>
            <div className='absolute inset-0 bg-black opacity-40 left-3 top-50 w-[1505px] h-[500px] '></div>
            <div className='absolute inset-0 flex flex-col items-center justify-center left-3 top-50 w-[1505px] h-[535px]'>
                <p className=' text-white text-center font-semibold text-[60px] leading-[74px]  '>Be Healthy & Eat Only Fresh <br></br>Organic Vegetables</p>
                <button className='bg-green-500 text-white h-10 w-30 rounded-[10px] mt-[40px]'>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero2