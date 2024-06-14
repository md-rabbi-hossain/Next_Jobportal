import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiMoney } from "react-icons/bi";
import { FaMapLocation } from "react-icons/fa6";

// Define the interface for the props of CardTwo component
interface CardTwoProps {
  item: {
    id: number;
    title: string;
    salary: string;
  };
}

// Define the CardTwo component with TypeScript types
const CardTwo: React.FC<CardTwoProps> = ({ item }) => {
  return (
    <>
      {item.map((job, index) => (
        <Link href={`/jobs/jobdetails/${job.id}`} key={index}>
          <div className="p-4 mb-6 relative border-2 border-gray-400 hover:scale-110 hover:shadow-sm transition-all duration-300 rounded-lg">
            <div className="flex items-center space-x-3">
              <div>
                <Image src={job.image} alt={job.title} height={50} width={50} />
              </div>
              <div>
                <h1 className="text-[17px] font-semibold mb-[0.4rem]">
                  {job.title}
                </h1>
                <div className="flex items-center space-x-4 md:space-x-10 ">
                  <div className="flex items-center space-x-2">
                    <FaMapLocation className=" w-[0.8rem] h-[0.6rem] text-pink-700" />
                    <p className="text-[14px] text-black font-semibold">
                      {job.location}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BiMoney className=" w-[0.8rem] h-[0.6rem] text-pink-700" />
                    <p className="text-[14px] text-black font-semibold">
                      {job.salary}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CardTwo;
