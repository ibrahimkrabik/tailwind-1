import React from 'react'

import photo1 from "../photo/IMG_20220202_140340_011.jpg"
import photo2 from "../photo/IMG_20220202_140335_095.jpg"
import photo3 from "../photo/IMG_20220202_140336_948.jpg"

function Rooms() {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p className='pt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur nihil deleniti dicta iure nam?</p>
        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover h-full w-full' src={photo1} alt="/" />
            <img className='row-span-2 object-cover h-full w-full' src={photo2} alt="/" />
            <img className='object-cover h-full w-full' src={photo3} alt="/" />

        </div>
      
    </div>
  )
}

export default Rooms
