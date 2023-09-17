import React, { useState } from 'react'
import photo3 from "../photo/pexels-cats-coming-406152.jpg"
import photo4 from "../photo/pexels-robin-stickel-70497.jpg"
import photo5 from "../photo/pexels-terje-sollie-299347.jpg"
import photo6 from "../photo/pexels-tioroshi-lazaro-2874979.jpg"
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"
function ImageSlider() {
    const slides=[
        {
            url:photo3,
            title:"toto",
        },
        {
            url:photo4,
            title:"poto",
        },
        {
            url:photo5,
            title:"soto",
        },
        {
            url:photo6,
            title:"moto",
        },
    ];

    const [currentIndex,setCurrentIndex]=useState(0);

    const prevSlide=()=>{
        const isFirstSlide = currentIndex===0;
        const newIndex= isFirstSlide? slides.length -1 :currentIndex-1;
        setCurrentIndex(newIndex)
    }
    const nextSlide=()=>{
        const isLastSlide = currentIndex===slides.length -1;
        const newIndex= isLastSlide? 0 :currentIndex +1 ;
        setCurrentIndex(newIndex)
    }

    const goToSlide=(slideIndex)=>{
        setCurrentIndex(slideIndex)
    }
  return (
    <div className='max-w-[1400px] relative h-[580px] w-full m-auto py-16 px-4 group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{backgroundImage:`url(${slides[currentIndex].url})`}}></div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide,slideIndex)=>(
            <div className='text-2xl cursor-pointer' key={slideIndex} onClick={()=>goToSlide(slideIndex)}>
              
              <RxDotFilled/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
