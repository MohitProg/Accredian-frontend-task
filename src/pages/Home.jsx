import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

import { MdOutlinePersonAddAlt } from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";
import { IoBagHandle } from "react-icons/io5";
import Anniversary from "../assets/Anniversary.png";
import { FaGraduationCap } from "react-icons/fa6";
import Cap from "../assets/Group.png";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import ReferalModal from "../components/ReferalModal";

const Home = () => {
  return (
    <main className="space-y-2">
      <div className="bg-[#ddeafc]  flex  items-center justify-between sm:justify-center gap-3  p-3">
        <h1 className="text-sm flex-1  sm:flex-none font-semibold ">
          Navigate your ideal career path with tailored expert advice
        </h1>

        <h1 className="text-md font-bold text-[#1a73e9]">Contact Expert</h1>
      </div>

      <Navbar />

      <section className="p-3 px-4 space-y-8 mt-5 lg:w-[80%] mx-auto  gap-4">
        <div className="bg-[#e5effb] p-3 rounded-full sm:w-[80%] lg:w-[40%] mx-auto ">
          <ul className="flex items-center justify-around">
            <li className="text-sm font-semibold text-[#1A73E8]">Refer</li>
            <li className="text-sm font-semibold text-[#4B4B4B]">Benifits</li>
            <li className="text-sm font-semibold text-[##4B4B4B]">FAQs</li>
            <li className="text-sm font-semibold text-[##4B4B4B]">Support</li>
          </ul>
        </div>

        {/* referal section  */}

        <div className="  bg-[#eef5ff] rounded-sm  grid grid-cols-1 lg:grid-cols-3  mx-auto ">
          <div className="flex cols-span-1 space-y-4 flex-col gap-4 p-6 lg:space-y-4 items-center  lg:items-start justify-center ">
            <h1 className=" lg:text-6xl text-3xl font-bold">
              Let’s Learn & Earn
            </h1>
            <div className="flex flex-col lg:items-start  lg:gap-2 items-center justify-center">
              <span className="text-sm lg:text-4xl">
                Get a chance to win up-to{" "}
              </span>
              <span className="text-[#1A73E8] text-lg  lg:text-3xl font-semibold">
                Rs. 15,000
              </span>
            </div>

            <ReferalModal />
          </div>

          <div className="hidden lg:block col-span-2">
            <img
              src={Anniversary}
              alt=""
              className="h-full w-full object-cover mt-7"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#eef5ff] min-h-[80vh] space-y-5 flex flex-col items-center justify-center gap-4 mt-6  py-8">
        <h1 className="text-center text-lg font-semibold">
          How Do I <span className="text-[#1A73E8]">Refer?</span>
        </h1>

        <div className="grid lg:w-[80%] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          <div className="bg-[#eef5ff] rounded-lg shadow-lg sm:w-[80%] mx-auto py-15 px-6  flex flex-col gap-1 justify-between items-center">
            <MdOutlinePersonAddAlt size={60} className="text-[#1A73E8]" />
            <p className="text-center text-sm text-gray-600">
              Submit referrals easily via our website’s referral section.
            </p>
          </div>
          <div className="bg-[#eef5ff] shadow-lg rounded-lg sm:w-[80%] mx-auto py-10 px-6  flex flex-col gap-1 justify-between items-center">
            <RiFileEditFill size={60} className="text-[#1A73E8]" />
            <p className="text-center text-sm text-gray-600">
              Earn rewards once your referral joins an Accredian program.
            </p>
          </div>
          <div className="bg-[#eef5ff] rounded-lg shadow-lg sm:w-[80%] mx-auto  py-10 px-6  flex flex-col gap-1 justify-between items-center">
            <IoBagHandle size={60} className="text-[#1A73E8]" />
            <p className="text-center text-sm text-gray-600">
              Referrer receives a bonus 30 days after program enrollment.
            </p>
          </div>
        </div>

        <ReferalModal />
      </section>

      {/* section 3  */}

      <section className="py-10">
        <h1 className="text-center text-lg font-semibold mt-5">
          What are The{" "}
          <span className="text-[#1A73E8]">Referral Benifits?</span>
        </h1>

        <div className=" w-full  lg:w-[70%] lg:mx-auto py-10 p-2  grid-cols-1 grid lg:grid-cols-4 gap-10 ">
          <div className=" w-full  lg:col-span-1  shadow-lg rounded-lg overflow-hidden">
            <ul className="flex flex-col gap-2 ">
              <li className="flex items-center  justify-between p-3 py-4 bg-[#1a73e9] uppercase text-white font-semibold text-sm">
                All Programs <RiArrowRightSLine className="" size={20} />
              </li>
              <li className="flex items-center  justify-between p-3 py-5   uppercase border-b-[1px] border-gray-400 font-semibold text-sm">
                Product Management <RiArrowRightSLine size={20} />
              </li>
              <li className="flex items-center  justify-between p-3 py-5  uppercase border-b-[1px] border-gray-400 font-semibold text-sm">
                Business Management <RiArrowRightSLine size={20} />
              </li>
              <li className="flex items-center  justify-between p-3 py-5  uppercase border-b-[1px] border-gray-400 font-semibold text-sm">
                Fintech <RiArrowRightSLine className="" size={20} />
              </li>
              <li className="flex items-center  justify-between p-3 py-5  uppercase border-b-[1px] border-gray-400 font-semibold text-sm">
                Senior Management <RiArrowRightSLine className="" size={20} />
              </li>
              <li className="flex items-center  justify-between p-3 py-5  uppercase border-b-[1px] border-gray-400 font-semibold text-sm">
                Data Science <RiArrowRightSLine className="" size={20} />
              </li>
              <li className="flex items-center  justify-between p-3 py-5  uppercase border-b-[1px] border-gray-400 font-semibold text-sm">
                Digital Transformation <RiArrowRightSLine size={20} />
              </li>
              <li className="flex items-center  justify-between p-3 py-5  uppercase border-b-[1px] border-gray-400 font-semibold text-sm">
                Bussiness Analytices <RiArrowRightSLine size={20} />
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 ">
            <table className="p-3 rounded-lg shadow overflow-hidden w-full">
              <thead>
                <tr className="bg-[#afcef7]  ">
                  <th
                    className="text-start p-3 text-[#1350A0] px-3 border-r-[1px]"
                    colSpan={30}
                  >
                    Programs
                  </th>

                  <th className="p-2 border-r-[1px] text-[#1350A0]">
                    Referrer Bonus
                  </th>
                  <th className="p-2 text-[#1350A0] ">Referrer Bonus</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td
                    className="text-start p-3 px-3 border-r-[1px]"
                    colSpan={30}
                  >
                    <div className="flex gap-2 items-start  w-[70%] text-[#3C4852]  text-md leading-5 ">
                      <img src={Cap} className="mt-1" alt="" />
                      Professional Certificate Program in Product Management
                    </div>
                  </td>
                  <td className="p-2 text-center border-r-[1px] text-[#3C4852]">
                    ₹ 7,000
                  </td>
                  <td className="p-2 text-center text-[#3C4852]">₹ 9,000</td>
                </tr>
                <tr>
                  <td
                    className="text-start p-3 px-3 border-r-[1px]"
                    colSpan={30}
                  >
                    <div className="flex gap-2 items-start  w-[70%] text-[#3C4852]  text-md leading-5 ">
                      <img src={Cap} className="mt-1" alt="" />
                      Professional Certificate Program in Product Management
                    </div>
                  </td>
                  <td className="p-2 text-center border-r-[1px] text-[#3C4852]">
                    ₹ 7,000
                  </td>
                  <td className="p-2 text-center text-[#3C4852]">₹ 9,000</td>
                </tr>
                <tr>
                  <td
                    className="text-start p-3 px-3 border-r-[1px]"
                    colSpan={30}
                  >
                    <div className="flex gap-2 items-start  w-[70%] text-[#3C4852]  text-md leading-5 ">
                      <img src={Cap} className="mt-1" alt="" />
                      Professional Certificate Program in Product Management
                    </div>
                  </td>
                  <td className="p-2 text-center border-r-[1px] text-[#3C4852]">
                    ₹ 7,000
                  </td>
                  <td className="p-2 text-center text-[#3C4852]">₹ 9,000</td>
                </tr>
                <tr>
                  <td
                    className="text-start p-3 px-3 border-r-[1px]"
                    colSpan={30}
                  >
                    <div className="flex gap-2 items-start  w-[70%] text-[#3C4852]  text-md leading-5 ">
                      <img src={Cap} className="mt-1" alt="" />
                      Professional Certificate Program in Product Management
                    </div>
                  </td>
                  <td className="p-2 text-center border-r-[1px] text-[#3C4852]">
                    ₹ 7,000
                  </td>
                  <td className="p-2 text-center text-[#3C4852]">₹ 9,000</td>
                </tr>
                <tr>
                  <td
                    className="text-start p-3 px-3 border-r-[1px]"
                    colSpan={30}
                  >
                    <div className="flex gap-2 items-start  w-[70%] text-[#3C4852]  text-md leading-5 ">
                      <img src={Cap} className="mt-1" alt="" />
                      Professional Certificate Program in Product Management
                    </div>
                  </td>
                  <td className="p-2 text-center border-r-[1px] text-[#3C4852]">
                    ₹ 7,000
                  </td>
                  <td className="p-2 text-center text-[#3C4852]">₹ 9,000</td>
                </tr>
                <tr>
                  <td
                    className="text-start p-3 px-3 border-r-[1px]"
                    colSpan={30}
                  >
                    <div className="flex gap-2 items-start  w-[70%] text-[#3C4852]  text-md leading-5 ">
                      <img src={Cap} className="mt-1" alt="" />
                      Professional Certificate Program in Product Management
                    </div>
                  </td>
                  <td className="p-2 text-center border-r-[1px] text-[#3C4852]">
                    ₹ 7,000
                  </td>
                  <td className="p-2 text-center text-[#3C4852]">₹ 9,000</td>
                </tr>
                <tr>
                  <td
                    className="text-start p-3 px-3 border-r-[1px]"
                    colSpan={30}
                  >
                    <div className="flex gap-2 items-start  w-[70%] text-[#3C4852]  text-md leading-5 ">
                      <img src={Cap} className="mt-1" alt="" />
                      Professional Certificate Program in Product Management
                    </div>
                  </td>
                  <td className="p-2 text-center border-r-[1px] text-[#3C4852]">
                    ₹ 7,000
                  </td>
                  <td className="p-2 text-center text-[#3C4852]">₹ 9,000</td>
                </tr>
                <tr>
                  <td
                    className="text-start p-3 px-3 border-r-[1px]"
                    colSpan={30}
                  >
                    <div className="flex gap-2 items-start  w-[70%] text-[#3C4852]  text-md leading-5 ">
                      <img src={Cap} className="mt-1" alt="" />
                      Professional Certificate Program in Product Management
                    </div>
                  </td>
                  <td className="p-2 text-center border-r-[1px] text-[#3C4852]">
                    ₹ 7,000
                  </td>
                  <td className="p-2 text-center text-[#3C4852]">₹ 9,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* section 4 frequently asked questions  */}

      <section className="py-5 space-y-4 p-3">
        <h1 className="text-center text-lg font-semibold mt-5">
          Frequently Asked
          <span className="text-[#1A73E8]">Questions</span>
        </h1>

        <div className=" grid-cols-1 lg:w-[70%] grid lg:grid-cols-4 gap-20 mx-auto ">

          <div className="flex flex-col gap-4 col-span-1">
            <div className="p-4 rounded shadow-lg text-center text-sm font-bold text-[#1A73E8]">
            Eligibility
            </div>
            <div className="p-4 rounded shadow-lg text-center text-sm font-semibold  border-2  border-[#737373] text-[#737373]">
              How To use?
            </div>
            <div  className="p-4 rounded shadow-lg text-center text-sm font-semibold  border-2  border-[#737373] text-[#737373]">
              Terms & Conditions
            </div>
          </div>

          <div className="lg:col-span-3 space-y-10">
           <h1 className="text-sm text-[#1A73E8] font-semibold">
           Do I need to have prior Product Management and Project Management experience to enroll in the program?
           </h1>
           <p className="text-[#00000096] text-sm">No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
           suitable for individuals from any field of work.</p>
           <h1 className="text-[#000000] text-sm">What is the minimum system configuration required?</h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
