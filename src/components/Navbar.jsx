import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
  return (
   <>
     <nav className="p-2 py-4 flex items-center lg:w-[80%] mx-auto  border-gray-300 border-b-[1px] justify-between ">
        <div className="space-y-[-10px] px-3">
          <h1 className="text-3xl text-[#1a73e9] font-bold">accredian</h1>
          <span className="text-xs text-gray-600">credentials that matter</span>
        </div>

        <div className="flex items-center  gap-3 px-3 ">
          <div className="hidden lg:block">
            <ul className="flex items-center  gap-6 ">
              <li className="text-sm font-semibold text-[#1A202C]">
                Refer & Earn
              </li>
              <li className="text-sm font-semibold text-[#1A202C]">
                Resources
              </li>
              <li className="text-sm font-semibold text-[#1A202C]">About Us</li>
            </ul>
          </div>
          <button className="flex lg:hidden bg-[#1a73e9] p-2 rounded-sm px-4 text-white items-center">
            Explore <RiArrowRightSLine className="" size={20} />
          </button>
          <button className="lg:flex hidden bg-[#eaedf1]  p-2 rounded-sm px-4 text-sm font-semibold text-[#1A202C]  items-center">
            Login
          </button>
          <button className="lg:flex hidden bg-[#1a73e9] p-2 rounded-sm px-4 text-white items-center">
            Try For Free
          </button>
          <HiMenuAlt3 className="lg:hidden" size={30} />
        </div>
      </nav>
   
   </>
  )
}

export default Navbar
