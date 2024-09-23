"use client";

import React, { useContext } from "react";
import Heading from "../Helper/Heading";
import Jobcard from "../Helper/Jobcard";
import { AppContext } from "../Context/Provider";
import Button from "../Helper/Button";

interface Job {
  id: string;
  jobs: string;  // Assuming this is a job title/description
}

const FeatureJob: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("FeatureJob must be used within an AppWrapper");
  }
  const { jobData } = context;
  return (
    <>
      <Heading
        Heading="Featured jobs"
        subheading="Know your worth and find the job and qualify your life"
      />
      <div className="mt-20 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {jobData.map((item: Job) => (
          <Jobcard item={item} key={item.id} />  // Pass the full 'item' object to Jobcard
        ))}
      </div>
      <Button text="View all jobs" url="/jobs" />
    </>
  );
};

export default FeatureJob;

