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
const Login = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row-reverse  px-[10px] md:px-0  w-full  mx-auto h-screen  justify-center items-center">
          <div className="w-full md:w-[30%]  relative h-full ">
            <img
              src="assets/registerImage.jpg"
              className="absolute top-0 left-0 w-full h-full  "
              alt=""
            />
            <div className="absolute flex flex-col justify-center items-center bg-purple-700 opacity-80 text-white top-0 left-0 w-full h-full  ">
              <h1 className="text-3xl font-[600] mb-4">Hello Friend</h1>
              <p className="text-center font-[300] mb-6 text-xl">
                Enter your personal details <br />
                and start journey with us
              </p>
              <Link to={'/join'}>
              <button className="px-20 py-3 w-fit h-fit font-[600] border-2 rounded-full border-white bg-transparent">
                SIGN UP
              </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[70%]  flex flex-col justify-center items-center  h-full  ">
            <h1 className="font-[700] text-3xl text-purple-600 mb-8">
              Create Account
            </h1>
            <div className="flex gap-[10px] text-gray-900 text-2xl mb-8">
              <FaFacebook /> <FaGithub /> <FaGoogle />
            </div>
  
            <div className="flex flex-col p-10 md:p-0   p-3 gap-4 w-[400px] h-fit py-4">
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
              <div className="w-full h-[45px]  text-gray-500 relative bg-purple-200 flex">
                <FaLock className="absolute left-2 top-1/2 -translate-y-1/2" />
  
                <input
                  type="password"
                  className="bg-transparent w-full pl-10 outline-none  "
                  placeholder="Enter Password ..."
                />
              </div>
                  <p className="font-[500] text-gray-500 mx-auto ">Forgot your password?</p>
              <button className="w-full py-3 font-[600] rounded-full bg-purple-700 text-gray-100">
                Join Hiredev
              </button>
            </div>
            <div></div>
          </div>
        </div>
      );
}

export default Login