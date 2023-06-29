import React, { useEffect, useState } from "react";
import "./slide.scss";
const Slider = () => {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8];
  const [translateValue, setTranslateValue] = useState(0);
  const [divWidth, setdivWidth] = useState(0);
  const [singledivWidth, setSingledivWidth] = useState(0);
  let slidesToShow = 6;
  const setRight = () => {
    console.log('clicked')

setTranslateValue(prevValue => translateValue>=1120 ? prevValue=0 : prevValue+290)

  }
  useEffect(() => {
  let width = (slides.length * 290)


  setdivWidth(width)
  setSingledivWidth(divWidth/slidesToShow)
  }, [slides])


  const setLeft = () => {


setTranslateValue(prevValue => translateValue<=0 ? prevValue=0 : prevValue-290)

  }
let sliderStyle = {
    transform: `translateX(-${translateValue}px)`,
    width: `${divWidth}px`
}
let slideStyle = {
    
    width: `${singledivWidth}px`
}
console.log(divWidth,singledivWidth)
  return (
    <div className="w-full relative p-1 overflow-hidden h-screen flex flex-col justify-center items-center">
        <div className="w-[80vw] overflow-hidden   p-1 h-fit">
        <div style={sliderStyle} className={` ml-[0px] gap-[10px] p-2  slider-container `}>

         {slides.map((slide) => (
            <div style={slideStyle}  className="relative shadow  rounded overflow-hidden p-2 flex  h-full ">
                <img src="/public/assets/img10.jpg" className="w-full h-full object-cover" alt="" />
<div className="w-full h-full absolute top-0 left-0 bg-black opacity-60">

</div>
            </div>
         ))}
         </div>


        </div>
        <div className="flex absolute px-[20px]  -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2  w-full justify-between">
         <button  onClick={setLeft}   className="py-2 px-3 border border-gray-500 mt-4">Left</button>
         <button onClick={setRight} className="py-2 px-3 border border-gray-500 mt-4">right</button>
         </div>

    </div>
  );
};

export default Slider;
