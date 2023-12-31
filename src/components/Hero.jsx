import React from 'react'
import img from '../photo/IMG_20220202_140328_750.jpg'

function Hero() {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src={img} alt="ali" />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen '/>
        <div className='absolute top-0 h-screen w-full flex flex-col justify-center text-white'>
          <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <p>All Inclusive</p>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Bashes & Getaways</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, error facere? Quaerat, pariatur voluptate officia ipsam minima tempora cupiditate odio magnam. 
            </p>
            <button className='bg-white text-black'>Reserve Now</button>
          </div>
        </div>
    </div>
  )
}

export default Hero