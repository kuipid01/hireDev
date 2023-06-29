import React, { useState } from "react";
import { categoriesData } from "../../Constants/constants";
import { Link } from "react-router-dom";
const CustomSlider = ({ type }) => {
  return (
    <div className="">
      <h1 className="ml-[15px] text-2xl font-[600] text-gray-600 my-7">
        {" "}
        {type} Categories{" "}
      </h1>
      <div className="w-full justify-center mt-10 h-fit bg-gray-100 flex flex-wrap gap-10 ">
        {categoriesData.map((cat) => (
          <div
            key={cat.id}
            className=" rounded-[5px] overflow-hidden relative w-[44%] md:w-[22%] h-[200px] md:h-[350px] "
          >
            <img
              src={cat.categoryImageUrl}
              className="w-full h-full object-cover"
              alt="catImg"
            />
            <Link to={`category/${cat.link}`}>
              <div className="w-full h-full absolute top-0 left-0 bg-black opacity-80 md:opacity-60 hover:opacity-70 transition-all cursor-pointer"></div>
            </Link>
            <div className="absolute font-[300] md:font-[500] text-gray-200 left-3 bottom-2">
              <p className="text-xl">{cat.name}</p>
              <i className="text-sm">{cat.description}</i>
            </div>
          </div>
        ))}
      </div>
      <Link to={`categories`}>
        <button className="flex mx-auto w-fit h-fit px-7 py-2 mt-6 text-purple-500  border border-purple-600 bg-transparent">
          See All
        </button>
      </Link>
    </div>
  );
};

export default CustomSlider;
