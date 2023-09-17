import React from 'react'
import photo1 from "../photo/IMG_20220202_140307_136.jpg"
import photo2 from "../photo/IMG_20220202_140325_242.jpg"
import photo3 from "../photo/IMG_20220202_140326_232.jpg"
import photo4 from "../photo/IMG_20220202_140328_750.jpg"
import photo5 from "../photo/modern-business-buildings-11681736.jpg"

function Plan() {
  return (
    <div className='max-w-[1400px] m-auto py-12 px-4 grid lg:grid-cols-2 gap-4'>
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover h-full w-full p-2' src={photo1} alt="/" />
        <img className='row-span-2 object-cover h-full w-full p-2' src={photo2} alt="/" />
        <img className='row-span-2 object-cover h-full w-full p-2' src={photo3} alt="/" />
        <img className='row-span-3 object-cover h-full w-full p-2' src={photo4} alt="/" />
        <img className='row-span-2 object-cover h-full w-full p-2' src={photo5} alt="/" />
      </div>

      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
        <p className='text-3xl py-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, earum!</p>
        <p className='pb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum fugit officiis vitae natus voluptatibus? Vel velit ex eum nemo laudantium.</p>
      
      <div>
        <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
        <button className='border-black bg-black text-white hover:shadow-xl'>Book Your Trip</button>
      </div>
      </div>
    </div>
  )
}

export default Plan
