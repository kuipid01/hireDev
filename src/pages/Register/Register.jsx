import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaUser,
  FaInbox,
  FaLock,
} from "react-icons/fa";
const Register = () => {

   
  return (
    <>
   
    <div className="flex flex-col-reverse px-[10px] md:px-0 md:flex-row  w-full  mx-auto h-screen  justify-center items-center">
      <div className="w-full md:w-[30%] relative h-full ">
        <img
          src="assets/registerImage.jpg"
          className="absolute top-0 left-0 w-full h-full  "
          alt=""
        />
        <div className="absolute flex flex-col justify-center items-center bg-purple-700 opacity-80 text-white top-0 left-0 w-full h-full  ">
          <h1 className="text-3xl font-[600] mb-4">Welcome Back!</h1>
          <p className="text-center font-[300] mb-6 text-xl">
            To keep connected with us please <br />
            login with your login info
          </p>
          <Link to={'/login'}>
          <button className="px-20 py-3 w-fit h-fit font-[600] border-2 rounded-full border-white bg-transparent">
            SIGN IN
          </button>
          </Link>
          
        </div>
      </div>
      <div className="w-full md:w-[70%]  flex flex-col justify-center items-center  h-full  ">
        <h1 className="font-[700] text-3xl text-purple-600 mb-4">
          Create Account
        </h1>
        <div className="flex gap-[10px] text-gray-900 text-2xl">
          <FaFacebook /> <FaGithub /> <FaGoogle />
        </div>

        <div className="flex flex-col  p-10 md:p-0 gap-2 w-[400px] h-fit py-4">
          <div className="w-full h-[45px] text-gray-500 relative bg-purple-200 flex">
            <FaUser className="absolute left-2 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              className="bg-transparent w-full pl-10 outline-none  "
              placeholder="Enter Username ..."
            />
            {/* <input type="text" className=" outline-none " placeholder="Enter Username ..."  /> */}
          </div>
          <div className="w-full h-[45px] text-gray-500 relative bg-purple-200 flex">
            <FaInbox className="absolute left-2 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              className="bg-transparent w-full pl-10 outline-none  "
              name=""
              placeholder="Enter email ..."
              id=""
            />
          </div>
          <div className="w-full h-[45px] text-gray-500 relative bg-purple-200 flex">
            <FaLock className="absolute left-2 top-1/2 -translate-y-1/2" />

            <input
              type="password"
              className="bg-transparent w-full pl-10 outline-none  "
              placeholder="Enter Password ..."
            />
          </div>
          <div className="w-full h-[45px] mb-5 text-gray-500 relative bg-purple-200 flex">
            <FaLock className="absolute left-2 top-1/2 -translate-y-1/2" />

            <input
              type="password"
              className="bg-transparent w-full pl-10 outline-none  "
              placeholder="Enter  Password Again ..."
            />
          </div>
          <div className="w-full h-[45px] text-gray-500 relative bg-purple-200 flex">
            <select
              placeholder=""
              className="bg-transparent w-full pl-10 outline-none  "
              name=""
              id=""
            >
              <option className="text-gray-600" value="">
                Select User Type
              </option>
              <option className="text-gray-600" value="hirer">
                Hirer
              </option>
              <option className="text-gray-600" value="dev">
                Dev
              </option>
            </select>
          </div>
          <button className="w-full py-3 rounded-full bg-purple-700 text-gray-100">
            Join HireDev
          </button>
        </div>
        <div></div>
      </div>
    </div>
     </>
  );
};

export default Register;
