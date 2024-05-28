"use client";

import React, { useContext } from "react";
import { AppContext, AppContextType, JobData } from "../Context/Provider"; // Assuming you have JobData type defined in your context file
import Image from "next/image";
import Link from "next/link";
import Allcategory from "@/app/category/page";
import Button from "./Button";

interface CategoryCardProps {
  // Define any props your component might receive here
}

const CategoryCard: React.FC<CategoryCardProps> = () => {
  const { jobData } = useContext(AppContext) as AppContextType;
  const firstSixCategories = jobData?.slice(0, 6) || [];
  return (
    <>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-[4rem] gap-[3rem] items-center">
        {firstSixCategories.map((item: JobData) => (
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
      <Link href="/category">
        <Button text="View all" />
      </Link>
    </>
  );
};

export default CategoryCard;
