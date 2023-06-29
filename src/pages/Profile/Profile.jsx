import React, { useState } from "react";
import {
  FaHome,
  FaOldRepublic,
  FaPlus,
  FaStar,
  FaEdit,
  FaGlasses,
  FaFolderOpen,
  FaPlusSquare,
  FaMailBulk,
} from "react-icons/fa";
import {
  AiOutlineDelete,
  AiOutlineExpand,
  AiOutlineMenu,
} from "react-icons/ai";
import { topDevs } from "../../Constants/constants";
import { Link } from "react-router-dom";

const Profile = () => {
  const [pictureScroll, setPictureScroll] = useState(false);
  const [showNav, setShowNav] = useState(-70);
  let styleNav = {
    left: `${showNav}%`,
    transition: "left 0.5s ease-in-out",
  };
  let opacityStyle = {
    transition: "opacity 0.2s ease-out",
  };
  const setNav = () => {
    setShowNav(-70);
  };
  console.log(showNav);
  return (
    <div>
      <div className="w-full relative">
        <div
          style={opacityStyle}
          className={`absolute top-0 left-0   h-screen w-full`}
        >
          <div className="w-full mt-[8vh] py-8 flex gap-3 px-[30px] flex-wrap ">
            {topDevs.map((dev) => (
              <div
                key={dev.id}
                className=" shadow shadow-purple-400 rounded-[10px] p-1 w-[150px] sm:w-[35%] md:w-[30%] h-fit relative  md:h-[500px] min-h-fit max-h-[400px]"
              >
                <div className=" w-full relative h-[70px] md:h-2/3 overflow-hidden  rounded-tr-[10px] rounded-tl-[10px]  ">
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
                    <p className="mt-2 mb-1 font-[600] text-gray-900 text-[10px] md:text-[15px] text-ellipsis">
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
        </div>
        {showNav === 0 ? (
          <div
            onClick={setNav}
            className={`fixed top-0 left-0 ${
              showNav === -70 ? "" : "bg-gray-400 opacity-50 "
            }  h-screen w-full`}
          ></div>
        ) : (
          ""
        )}
        {showNav === -70 ? (
          <div className="h-[50px] absolute top-0 left-0 bg-gray-300  flex items-center justify-between p-2 w-full ">
            {" "}
            <AiOutlineMenu
              onClick={() => setShowNav(0)}
              className="  cursor-pointer text-xl"
            />{" "}
            <span className="font-[400] pr-[1rem]">Projects</span>
          </div>
        ) : (
          ""
        )}
        <div
          style={styleNav}
          className={` ${ showNav===0 ? 'fixed z-[10000] top-0' : 'absolute' }  flex items-center md:py-8  flex-col top-0  bg-gray-200 h-screen w-[70%] md:w-[40%]`}
        >
          <div className=" relative mb-2  w-fit h-fit rounded-full p-1 border-purple-400 border">
            <img
              src="/assets/img4.jpg"
              className="w-[150px] h-[150px] rounded-full "
              alt=""
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-200 ">
              <input type="file" name="file" className="hidden" id="pp" />
              <label htmlFor="pp">
                {" "}
                <FaPlusSquare className="absolute cursor-pointer bottom-0 left-1/2 -translate-x-1/2 bg-gray-200 " />{" "}
              </label>
            </div>
          </div>
          <p className="text-[20px] md:text-[24px] font-[600] leading-[44px]">
            Adegoke Stephen
          </p>
          <small className="font-[300]">Kubwa,Nigeria</small>
          <div className="flex text-[14px] md:text-base mt-4 w-full justify-evenly ">
            <div className="flex items-center  flex-col">
              <h1 className="text-[15px] md:text-xl">400</h1>
              <small>projects</small>
            </div>
            <div className="flex items-center  flex-col">
              <h1 className="text-[15px] md:text-xl">3000+</h1>
              <small>likes</small>
            </div>
            <div className="flex items-center  flex-col">
              <h1 className="text-[15px] md:text-xl">200</h1>
              <small>reviews</small>
            </div>
          </div>
          <div className="mt-5 md:mt-20 w-[70%] -ml-2 pl-3 pt-2  mb-20 flex gap-6 flex-col ">
            <div className="w-full text-gray-600 flex items-center gap-4">
              <FaHome className="text-gray-500" />{" "}
              <span className="font-[500]">Home</span>
            </div>
            <div className="w-full text-gray-500 flex items-center gap-4">
              <Link
                to={"/hire"}
                className="w-full text-gray-500 flex items-center gap-4"
              >
                <FaOldRepublic className="text-gray-500" />{" "}
                <span className="font-[500]">Hires</span>
              </Link>
            </div>
            <div className="w-full text-gray-500 flex items-center gap-4">
              <Link
                to={"/profile/kuipid/edit"}
                className="w-full text-gray-500 flex items-center gap-4"
              >
                <FaFolderOpen className="text-gray-500" />{" "}
                <span className="font-[500]">Profile</span>
              </Link>
            </div>
            <div className="w-full text-gray-500 flex items-center gap-4">
              <Link
                to={"/profile/kuipid/edit"}
                className="w-full text-gray-500 flex items-center gap-4"
              >
                <FaMailBulk className="text-gray-500" />{" "}
                <span className="font-[500]">Messages</span>
              </Link>
            </div>
            <div className="w-full text-gray-500 flex items-center gap-4">
              <Link
                to={"/profile/kuipid/addprojects"}
                className="w-full text-gray-500 flex items-center gap-4"
              >
                <FaPlus className="text-gray-500" />{" "}
                <span className="font-[500]">Add Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // begin comment

    //     <div>
    //        {
    //         showNav ===-500 ? <div className="h-[50px] bg-gray-300 flex items-center justify-between p-2 w-full ">  <AiOutlineMenu onClick={ () => setShowNav(0)} className="text-xl"/> <span className="font-[400]">Menu</span></div> : ''
    //       }
    //  <div onClick={setNav } className="flex  md:px-[70px] bg-gray-200 relative w-full  mt-0 text-gray-900">
    //      {
    //       showNav=== && <div style={styleNav}  className="shadow bg-gray-100 p-2 shadow-gray-400 sticky w-[300px] md:w-1/3 h-full top-[5vh]  ">
    //       <div  className="min-w-fit w-full md:w-[300px] shadow rounded-sm shadow-purple-400  p-3 items-center flex flex-col h-fit">
    //         <div className=" relative mb-2  w-fit h-fit rounded-full p-1 border-purple-400 border">
    //           <img
    //             src="/assets/img4.jpg"
    //             className="w-[150px] h-[150px] rounded-full "
    //             alt=""
    //           />
    //           <div  className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-200 ">
    //             <input type="file" name="file" className="hidden" id='pp' />
    //             <label htmlFor="pp"> <FaPlusSquare className="absolute cursor-pointer bottom-0 left-1/2 -translate-x-1/2 bg-gray-200 "/> </label>

    //           </div>

    //         </div>

    //         <p className="text-[20px] md:text-[24px] font-[600] leading-[44px]">
    //           Adegoke Stephen
    //         </p>
    //         <small className="font-[300]">Kubwa,Nigeria</small>
    //         <div className="flex text-[14px] md:text-base mt-4 w-full justify-evenly ">
    //           <div className="flex items-center  flex-col">
    //             <h1 className="text-xl">400</h1>
    //             <small>projects</small>
    //           </div>
    //           <div className="flex items-center  flex-col">
    //             <h1 className="text-xl">3000+</h1>
    //             <small>likes</small>
    //           </div>
    //           <div className="flex items-center  flex-col">
    //             <h1 className="text-xl">200</h1>
    //             <small>reviews</small>
    //           </div>
    //         </div>
    //       </div>
    //       <div   className="mt-5 md:mt-20 w-[70%] -ml-2 pl-3 pt-2  mb-20 flex gap-6 flex-col ">
    //         <div className="w-full text-gray-600 flex items-center gap-4">
    //           <FaHome className="text-gray-500" />{" "}
    //           <span className="font-[500]">Home</span>
    //         </div>
    //         <div className="w-full text-gray-500 flex items-center gap-4">
    //           <Link to={'/hire'} className="w-full text-gray-500 flex items-center gap-4">

    //           <FaOldRepublic className="text-gray-500" />{" "}
    //           <span className="font-[500]">Hires</span>
    //           </Link>
    //         </div>
    //         <div className="w-full text-gray-500 flex items-center gap-4">
    //         <Link to={'/profile/kuipid/edit'} className="w-full text-gray-500 flex items-center gap-4">

    //           <FaFolderOpen className="text-gray-500" />{" "}
    //           <span className="font-[500]">Profile</span>
    //           </Link>
    //         </div>
    //         <div className="w-full text-gray-500 flex items-center gap-4">
    //         <Link to={'/profile/kuipid/edit'} className="w-full text-gray-500 flex items-center gap-4">

    //           <FaMailBulk className="text-gray-500" />{" "}
    //           <span className="font-[500]">Messages</span>
    //           </Link>
    //         </div>
    //         <div className="w-full text-gray-500 flex items-center gap-4">
    //         <Link to={'/profile/kuipid/addprojects'} className="w-full text-gray-500 flex items-center gap-4">
    //           <FaPlus className="text-gray-500" />{" "}
    //           <span className="font-[500]">Add Projects</span>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //      }

    //       <div className="w-full bg-red-600  md:w-2/3 h-fit flex gap-3 flex-col md:flex-row items-center justify-evenly flex-wrap">
    //         {topDevs.map((dev) => (
    //           <div
    //             key={dev.id}
    //             className=" shadow shadow-purple-400 rounded-[10px] p-1 w-[200px] sm:w-[35%] md:w-[30%] relative  h-[500px] min-h-fit max-h-[400px]"
    //           >
    //             <div className=" w-full relative h-2/3 overflow-hidden  rounded-tr-[10px] rounded-tl-[10px]  ">
    //               <img
    //                 src={dev.userImage}
    //                 className="w-full h-full object-cover"
    //                 alt="devImage"
    //               />

    //               <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60 hover:opacity-70 transition-all ">
    //                 <AiOutlineExpand
    //                   onClick={() => setPictureScroll(true)}
    //                   className="absolute top-3 left-3 cursor-pointer text-white"
    //                 />
    //               </div>
    //             </div>
    //             <Link to={"/project/kuipid/mern"}>
    //               <div className="w-full h-1/3 hover:bg-gray-200 cursor-pointer transition-all p-2">
    //                 <p className="mt-2 mb-1 font-[600] text-gray-900 text-[15px] text-ellipsis">
    //                   A skyrocket launching blog built with the mern stack{" "}
    //                 </p>
    //                 <div className="w-fit mt-1 h-[20px] flex justify-center items-center">
    //                   <FaStar className=" text-yellow-400 text-[15px]" />{" "}
    //                   <FaStar className=" text-yellow-400 text-[15px]" />
    //                   <FaStar className=" text-yellow-400 text-[15px]" />
    //                   <FaStar className=" text-yellow-400 text-[15px]" />
    //                 </div>
    //                 <div className="flex gap-3 text-lg text-gray-700 mt-3">
    //                   <FaEdit className="  text-purple-500" />
    //                   <AiOutlineDelete className="  text-purple-500" />
    //                 </div>
    //               </div>
    //             </Link>
    //           </div>
    //         ))}
    //       </div>

    //       {pictureScroll && (
    //         <>
    //           <div
    //             onClick={() => setPictureScroll(false)}
    //             className="fixed z-[9999] left-0 h-full w-full top-0 bg-gray-500 opacity-40 p-4"
    //           ></div>
    //           <div className="fixed left-1/2 z-[99999] -translate-x-1/2 h-[90%] rounded-xl w-[90%] top-1/2 -translate-y-1/2 bg-gray-200  p-4"></div>
    //         </>
    //       )}
    //     </div>
    //     </div>
  );
};

export default Profile;
