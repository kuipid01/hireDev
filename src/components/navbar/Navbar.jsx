import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const [scrollActive, setScrollActive] = useState(false);

  const checkScroll = () => {
    window.scrollY > 0 ? setScrollActive(true) : setScrollActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  });
  const user = null;
  return (
    <div
      className={`w-full h-[15vh] relative transition-all z-[9999] ${
        scrollActive ? "bg-white text-gray-700 " : "text-white bg-purple-700"
      } sticky top-0 border-b border-gray-400 `}
    >
      <nav className="w-[80%] mx-auto flex h-full justify-between items-center">
        <div>
          <Link to={"/"}>
            {" "}
            <h1 className="text-3xl cursor-pointer">
              HireDev <span className="text-xl text-gray-200"> .ng</span>{" "}
            </h1>{" "}
          </Link>
        </div>
        <div className="flex h-full justify-center items-center">
          <ul className="flex  gap-4 font-[400] mr-[3rem]">
            <Link to={"/category/frontend"}>
              <li className="cursor-pointer">Frontend</li>
            </Link>
            <Link to={"/category/backend"}>
              <li className="cursor-pointer">Backend</li>
            </Link>
            <Link to={"/category/uiux"}>
              <li className="cursor-pointer">ui/ux</li>
            </Link>
            <Link to={"/category/ai"}>
              <li className="cursor-pointer">ai</li>
            </Link>
          </ul>
          {user ? (
            <div className=" flex items-center">
              {user.imageUrl ? (
                  <Link to={"/profile/12345"}>
                <img
                  src="/public/assets/img1.jpg"
                  className="h-[40px] w-[40px] object-cover rounded-full ml-3"
                  alt="userImage"
                />
                </Link>
              ) : (
                <Link to={"/profile/123456"} className="cursor-pointer p-3">
                <FaUser />
                </Link>
              )}
            </div>
          ) : (
            <Link to={"/Join"}>
              <button className=" cursor-pointer w-max px-10 font-[700] bg-purple-900 text-gray-50 h-fit py-3 border hover:bg-purple-600  duration-300 transition-colors ease-in-out hover:text-gray-100 border-gray-50">
                Hire.
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
