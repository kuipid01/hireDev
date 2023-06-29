import React from "react";
import { topDevs } from "../../Constants/constants";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const TopDev = ({ category }) => {
  const arr = 5;
  for (let index = 0; index < arr.length; index++) {
    <div>
      {" "}
      <FaStar />
    </div>;
  }
  return (
    <div className="h-fit w-full px-3 min-h-screen  flex flex-col  items-start">
      <h1 className="ml-[115px] text-2xl font-[600] text-gray-600 text-left my-7">
        {" "}
        {category ? category : "Top Rated Devs"}{" "}
        {category && <span className="uppercase"> Projects</span>}{" "}
      </h1>
      <div className="flex w-full gap-3 flex-row items-center justify-between md:justify-center flex-wrap">
        {topDevs.map((dev) => (
          <div
            key={dev.id}
            className="shadow shadow-gray-300 p-1 cursor-pointer w-[47%] md:w-[20%] relative h-fit min-h-[150px] md:h-[300px]"
          >
            <div className=" w-full relative h-[150px] md:h-2/3 ">
              <img
                src={dev.userImage}
                className="w-full h-full object-cover"
                alt="devImage"
              />
              <Link to={`/profile/${dev.name}`}>
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60 hover:opacity-70 transition-all cursor-pointer"></div>
              </Link>
            </div>

            <div className="w-full h-1/3 hover:bg-gray-200 transition-all p-2">
              <p className="mt-1 md:mt-2 mb-1 font-[600] text-gray-900 text-[15px]">
                {dev.name}
              </p>
              <p className="flex flex-wrap gap-2">
                {dev.stack.map((exp) => (
                  <span
                    key={exp}
                    className="w-fit text-[8px] md:text-[10px] px-2 py-[0.5px] border-[0.5px] outline-none rounded-lg border-gray-300 bg-transparent"
                  >
                    {" "}
                    {exp}
                  </span>
                ))}
              </p>
              <div className="w-fit mt-1 h-[20px] flex justify-center items-center">
                <FaStar className=" text-yellow-400 text-[15px]" />{" "}
                <FaStar className=" text-yellow-400 text-[15px]" />
                <FaStar className=" text-yellow-400 text-[15px]" />
                <FaStar className=" text-yellow-400 text-[15px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link className="w-full flex items-center" to={`/devs`}>
        <button className="flex mx-auto w-fit h-fit px-7 py-2 mt-6 text-purple-500  border border-purple-600 bg-transparent">
          See More 
        </button>
      </Link>
    </div>
  );
};

export default TopDev;
