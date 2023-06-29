import React, { useState } from "react";
import {
  FaHome,
  FaOldRepublic,
  FaPlus,
  FaStar,
  FaEdit,
  FaGlasses,
  FaFolderOpen,
  FaPlusSquare
} from "react-icons/fa";
import { AiOutlineDelete, AiOutlineExpand } from "react-icons/ai";
import { topDevs } from "../../Constants/constants";
import { Link } from "react-router-dom";

const Profile = () => {
  const [pictureScroll, setPictureScroll] = useState(false);
  return (
    <div className="flex px-[70px] relative w-full  mt-10 text-gray-900">
      <div className="sticky w-1/3 h-full   top-[15vh] left-0 ">
        <div className="min-w-fit w-[300px] shadow rounded-sm shadow-purple-400  p-3 items-center flex flex-col h-fit">
          <div className=" relative mb-2  w-fit h-fit rounded-full p-1 border-purple-400 border">
            <img
              src="/assets/img4.jpg"
              className="w-[150px] h-[150px] rounded-full "
              alt=""
            />
            <div  className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-200 ">
              <input type="file" name="file" className="hidden" id='pp' />
              <label htmlFor="pp"> <FaPlusSquare className="absolute cursor-pointer bottom-0 left-1/2 -translate-x-1/2 bg-gray-200 "/> </label>
           
            </div>
           
          </div>

          <p className="text-[24px] font-[600] leading-[44px]">
            Adegoke Stephen
          </p>
          <small className="font-[300]">Kubwa,Nigeria</small>
          <div className="flex mt-4 w-full justify-evenly ">
            <div className="flex items-center  flex-col">
              <h1 className="text-xl">400</h1>
              <small>projects</small>
            </div>
            <div className="flex items-center  flex-col">
              <h1 className="text-xl">3000+</h1>
              <small>likes</small>
            </div>
            <div className="flex items-center  flex-col">
              <h1 className="text-xl">200</h1>
              <small>reviews</small>
            </div>
          </div>
        </div>
        <div className="mt-20 mb-20 flex gap-6 flex-col ">
          <div className="w-full text-gray-600 flex items-center gap-4">
            <FaHome className="text-gray-500" />{" "}
            <span className="font-[500]">Home</span>
          </div>
          <div className="w-full text-gray-500 flex items-center gap-4">
            <Link to={'/hire'} className="w-full text-gray-500 flex items-center gap-4">
           
            <FaOldRepublic className="text-gray-500" />{" "}
            <span className="font-[500]">Hires</span>
            </Link>
          </div>
          <div className="w-full text-gray-500 flex items-center gap-4">
          <Link to={'/profile/kuipid/edit'} className="w-full text-gray-500 flex items-center gap-4">
           
            <FaFolderOpen className="text-gray-500" />{" "}
            <span className="font-[500]">Profile</span>
            </Link>
          </div>
          <div className="w-full text-gray-500 flex items-center gap-4">
          <Link to={'/profile/kuipid/addprojects'} className="w-full text-gray-500 flex items-center gap-4">
            <FaPlus className="text-gray-500" />{" "}
            <span className="font-[500]">Add Projects</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-2/3 h-fit flex gap-3 flex-row items-center justify-evenly flex-wrap">
        {topDevs.map((dev) => (
          <div
            key={dev.id}
            className=" shadow shadow-purple-400 rounded-[10px] p-1  sm:w-[35%] md:w-[30%] relative  h-[500px] min-h-fit max-h-[400px]"
          >
            <div className=" w-full relative h-2/3 overflow-hidden  rounded-tr-[10px] rounded-tl-[10px]  ">
              <img
                src={dev.userImage}
                className="w-full h-full object-cover"
                alt="devImage"
              />

              <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60 hover:opacity-70 transition-all ">
                <AiOutlineExpand
                  onClick={() => setPictureScroll(true)}
                  className="absolute top-3 left-3 cursor-pointer text-white"
                />
              </div>
            </div>
            <Link to={"/project/kuipid/mern"}>
              <div className="w-full h-1/3 hover:bg-gray-200 cursor-pointer transition-all p-2">
                <p className="mt-2 mb-1 font-[600] text-gray-900 text-[15px] text-ellipsis">
                  A skyrocket launching blog built with the mern stack{" "}
                </p>
                <div className="w-fit mt-1 h-[20px] flex justify-center items-center">
                  <FaStar className=" text-yellow-400 text-[15px]" />{" "}
                  <FaStar className=" text-yellow-400 text-[15px]" />
                  <FaStar className=" text-yellow-400 text-[15px]" />
                  <FaStar className=" text-yellow-400 text-[15px]" />
                </div>
                <div className="flex gap-3 text-lg text-gray-700 mt-3">
                  <FaEdit className="  text-purple-500" />
                  <AiOutlineDelete className="  text-purple-500" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {pictureScroll && (
        <>
          <div
            onClick={() => setPictureScroll(false)}
            className="fixed z-[9999] left-0 h-full w-full top-0 bg-gray-500 opacity-40 p-4"
          ></div>
          <div className="fixed left-1/2 z-[99999] -translate-x-1/2 h-[90%] rounded-xl w-[90%] top-1/2 -translate-y-1/2 bg-gray-200  p-4"></div>
        </>
      )}
    </div>
  );
};

export default Profile;
