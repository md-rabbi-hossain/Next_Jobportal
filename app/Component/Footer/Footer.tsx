import React from "react";
import { FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-[1.5rem] pb-[3rem] bg-black">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mt-[4rem] gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10">
        <div>
          <h1 className=" text-[24px] mb-[1rem] font-bold uppercase text-white">
            Jobify
          </h1>
          <p className="text-[14px] text-white text-opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            similique praesentium soluta nihil, rerum cupiditate temporibus
          </p>

          <div className="mt-[1.5rem]  flex items-center space-x-3">
            <div className=" cursor-pointer flex items-center h-[2.4rem] w-[2.4rem] rounded-lg bg-blue-600 justify-center ">
              <FaFacebookF className="text-white" />
            </div>
            <div className=" cursor-pointer flex items-center h-[2.4rem] w-[2.4rem] rounded-lg bg-red-400 justify-center ">
              <FaInstagram className="text-white" />
            </div>
            <div className=" cursor-pointer flex items-center h-[2.4rem] w-[2.4rem] rounded-lg bg-red-600 justify-center ">
              <FaYoutube className="text-white" />
            </div>
            <div className=" cursor-pointer flex items-center h-[2.4rem] w-[2.4rem] rounded-lg bg-blue-600 justify-center ">
              <FaTwitter className="text-white" />
            </div>
          </div>
        </div>
        {/* this is 2nd */}
        <div className="">
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            About us
          </h1>
          <p className="cursor-pointertext-[15px] w-fit text-white text-opacity-25 hover:text-yellow-300 mb-[0.7rem]">
            {" "}
            job
          </p>
          <p className=" cursor-pointer text-[15px] w-fit text-white text-opacity-25 hover:text-yellow-300 mb-[0.7rem]">
            {" "}
            privacy
          </p>
          <p className=" cursor-pointer text-[15px] w-fit text-white text-opacity-25 hover:text-yellow-300 mb-[0.7rem]">
            {" "}
            policy
          </p>
          <p className=" cursor-pointer text-[15px] w-fit text-white text-opacity-25 hover:text-yellow-300 mb-[0.7rem]">
            {" "}
            Application
          </p>
          <p className=" cursor-pointer text-[15px] w-fit text-white text-opacity-25 hover:text-yellow-300 mb-[0.7rem]">
            {" "}
            Candidates
          </p>
        </div>

        <div className="">
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Quick Link
          </h1>
          <p className=" cursor-pointer text-[15px] w-fit text-white text-opacity-25 hover:text-yellow-300 mb-[0.7rem]">
            {" "}
            All job
          </p>
          <p className=" cursor-pointer text-[15px] w-fit text-white text-opacity-25 hover:text-yellow-300 mb-[0.7rem]">
            {" "}
            job details
          </p>
          <p className=" cursor-pointer text-[15px] w-fit text-white text-opacity-25 hover:text-yellow-300 mb-[0.7rem]">
            {" "}
            How to appy
          </p>
          <p className=" cursor-pointer text-[15px] w-fit text-white text-opacity-25 hover:text-yellow-300 mb-[0.7rem]">
            {" "}
            Resume
          </p>
        </div>
        <div className="">
          <h1 className=" cursor-pointer text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Get in Touch
          </h1>
          <p className=" cursor-pointer text-[15px] w-fit text-white text-opacity-25 hover:text-yellow-300 mb-[0.7rem]">
            {" "}
            01872246546
          </p>
          <p className=" cursor-pointer text-[15px] w-fit text-white text-opacity-25 hover:text-yellow-300 mb-[0.7rem]">
            {" "}
            mdrabbihossain1443@gmail.com
          </p>
          <p className=" cursor-pointer text-[15px] w-fit text-white text-opacity-25 hover:text-yellow-300 mb-[0.7rem]">
            {" "}
            Gazipur Dhaka Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
