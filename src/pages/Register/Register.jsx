import { useState } from "react"
import { Link } from "react-router-dom"


const Register = () => {
    const [loginVisble, setLoginVisble] = useState(false)
    if (loginVisble)  return (
        <div className="flex flex-col transition-all w-full h-screen bg-gray-50  justify-center items-center">
        <span>Dont have an account ? <Link  className="text-purple-600 text-[15px]"  onClick={() => setLoginVisble(false)}> <i>Register</i></Link></span>
        <div className="flex flex-col  p-3 gap-2 w-[400px] h-fit py-4">
            <input type="text" className="p-2 border border-gray-300 outline-none " placeholder="Enter Username ..."  />
         
            <input type="password" className="p-2 border border-gray-300 outline-none"  placeholder="Enter Password ..." />
         
           
            <button className="w-full py-2 rounded bg-purple-700 text-gray-100">Login </button>
        </div>
        <div></div>
    </div>
    )
  return (
    <div className="flex  transition-all w-full h-screen flex-col bg-gray-50  justify-center items-center">
        <span>Already have an account ? <Link onClick={() => setLoginVisble(true)} className="text-purple-600 text-[15px]" > <i>Login</i> </Link></span>
        <div className="flex flex-col  p-3 gap-2 w-[400px] h-fit py-4">
            <input type="text" className="p-2 border border-gray-300 outline-none " placeholder="Enter Username ..."  />
            <input type="email" className="p-2 border border-gray-300 outline-none"  name="" placeholder="Enter email ..." id="" />
            <input type="password" className="p-2 border border-gray-300 outline-none"  placeholder="Enter Password ..." />
            <input type="password" className="p-2 border border-gray-300 outline-none"  placeholder="Enter  Password Again ..." />
            <select placeholder="" className="p-2 border border-gray-300 outline-none"  name="" id="">
            <option className="text-gray-600" value="">Select User Type</option>
                <option className="text-gray-600" value="hirer">Hirer</option>
                <option  className="text-gray-600" value="dev">Dev</option>
            </select>
            <button className="w-full py-2 rounded bg-purple-700 text-gray-100">Join HireDev</button>
        </div>
        <div></div>
    </div>
  )
}

export default Register
