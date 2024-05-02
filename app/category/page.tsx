"use client";
import React, { useContext } from "react";
import { AppContext } from "../Component/Context/Provider";
import Link from "next/link";
import Image from "next/image";

const Allcategory = () => {
  const { jobData } = useContext(AppContext);
  return (
    <div className="container">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-[4rem] gap-[3rem] items-center">
        {jobData.map((item) => (
          <Link href={`/category/categorydetails/${item.id}`} key={item.id}>
            <div className="p-4 border-2 cursor-pointer hover:scale-10 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
              <div className="flex item-center space-x-4">
                <Image src={item.icon} alt="Icon 5" width={60} height={60} />
                <div>
                  <h1 className="text-[17px] font-semibold mb-[0.4rem]">
                    {item.name}
                  </h1>
                  <p className="text-[14px] font-semibold text-black text-opacity-50">
                    {item.open} Open Position
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Allcategory;
