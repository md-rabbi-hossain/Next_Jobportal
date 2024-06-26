"use client";
import React, { useContext } from "react";
import { AppContext } from "@/app/Component/Context/Provider";
import DetailsJob from "@/app/Component/Helper/Detailsjob";

interface CategoryDetailsProps {
  params: {
    id: string;
  };
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ params }) => {
  const { jobData } = useContext(AppContext);
  const foundData = jobData.find((item) => params.id === item.id.toString());

  return (
    <div className="py-20 mt-[4rem]">
      <div className="container text-black  mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to our Job Portal</h1>
        <p className="text-lg mb-8">
          Explore exciting job opportunities in This Category.
        </p>
      </div>
      <div className="mt-20 w-[90%] mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {foundData.jobs.map((Job) => {
          return <DetailsJob Job={Job} key={Job.id} />;
        })}
      </div>
    </div>
  );
};

export default CategoryDetails;
