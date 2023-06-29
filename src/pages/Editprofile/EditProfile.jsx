import React from 'react'
import { Link } from 'react-router-dom'

const EditProfile = () => {
  return (
    <div className='w-full  p-[86px]'>
<div className='flex mb-5 gap-3 text-gray-400'>
    <Link to={'/'}>
    <span>Home </span>  
    </Link>
    <Link to={'/profile/123'}>
    <span>Profile</span>
    </Link>
    <Link >
    <span>Edit</span> 
    </Link>
</div>
  
    <div className='flex w-full  gap-[10px]'>
        <div className="left w-1/2 flex flex-col">
<input type="text"  className="p-2 border border-gray-300 outline-none mb-2" placeholder='Enter Fullname' />
<input type="text"  className="p-2 border border-gray-300 outline-none mb-2" placeholder='Enter Username' />
<input type="text"  className="p-2 border border-gray-300 outline-none mb-2" placeholder='Enter Tech stack seperated by a comma' />
<input type="text"  className="p-2 border border-gray-300 outline-none mb-2" placeholder='Enter languages of expertise  seperated by a comma' />
<select placeholder="" className="p-2 border mb-2 border-gray-300 outline-none"  name="" id="">
            <option className="text-gray-600" value="">Select Prefered Job Type</option>
                <option className="text-gray-600" value="Hybrid">Hybrid</option>
                <option  className="text-gray-600" value="Remote">Remote</option>
                <option  className="text-gray-600" value="Onsite">Onsite</option>
            </select>
            <textarea onResize={scroll} className="p-2 border border-gray-300 outline-none mb-2" name="" id="" cols="30" rows="5" resize='none' placeholder='Shortdescription of your self'></textarea>

        </div>
<div className="right w-1/2 flex flex-col">
<input type="text"  className="p-2 border border-gray-300 outline-none mb-2" placeholder='Enter Portfolio Url' />
<input type="text"  className="p-2 border border-gray-300 outline-none mb-2" placeholder='Enter Github Url' />

</div>

    </div>
    <button className='w-full h-fit py-2 hover:bg-purple-800 transition-all mt-10 font-[300] rounded bg-purple-700 text-white'>Update Profile</button>
    </div>
  )
}

export default EditProfile