"use client";
import React, { useContext } from "react";
import { AppContext } from "../Component/Context/Provider";
import CardTwo from "../Component/Helper/CardTwo";

interface JobItem {
  id: number;
  title: string;
  description: string;
  jobs: string;
}

const Alljobs: React.FC = () => {
  const { jobData } = useContext(AppContext);
  const jobs: JobItem[] = jobData as JobItem[];
  return (
    <div className="mt-[10rem] w-[90%] mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-12 items-center ">
      {jobs.map((item) => (
        <CardTwo key={item.id} item={item.jobs} />
      ))}
    </div>
  );
};

export default Alljobs;
