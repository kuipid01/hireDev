import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-[85vh] flex justify-center  bg-purple-700">
      <div className="w-[98%]  md:w-[80%] flex">
        <div className="w-full px-3 md:w-2/3 text-white flex  flex-col justify-center h-full ">
          <h1 className="text-[25px] md:text-[35px] mb-5 leading-[45px]">
           Hire the best <i className="text-gray-200">developers</i> for
            your project in Nigeria.{" "}
          </h1>
          <div className="w-full relative h-[40px] md:h-[50px] bg-green-200">
            <img src="" alt="" />
            <input
              className="w-full placeholder:text-[13px] md:w-1/2 text-gray-900 outline-none border-none h-full bg-transparent pl-3"
              placeholder="Try Searching React Developer...."
              type="text"
            />
            <button className="w-[30%] hover:bg-purple-600 transition-all h-full absolute top-0 right-0 bg-purple-500 text-white font-[500]">
              Search
            </button>
          </div>
          <div className="flex gap-1 mt-5">
          <h1 >Trending:</h1>
           <span className="bg-transparent border border-gray-500 py-1 px-3 text-[12px] flex justify-center items-center rounded-full font-[300]">React</span>
          <span  className="bg-transparent border border-gray-500 py-1 px-3 text-[12px] flex justify-center items-center rounded-full font-[300]">React</span>
          <span className="bg-transparent border border-gray-500 py-1 px-3 text-[12px] flex justify-center items-center rounded-full font-[300]">React</span>
          <span className="bg-transparent border border-gray-500 py-1 px-3 text-[12px] flex justify-center items-center rounded-full font-[300]">React</span>
         
        </div>
        </div>
      <div className='hidden md:w-1/3' >

      </div>
      </div>
    </div>
  );
};

export default LandingPage;
