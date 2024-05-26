"use client";

import React, { useContext } from "react";
import Heading from "../Helper/Heading";
import Jobcard from "../Helper/Jobcard";
import { AppContext } from "../Context/Provider";
import Button from "../Helper/Button";
import Link from "next/link";

interface Job {
  id: string;
  jobs: string;
}

const FeatureJob: React.FC = () => {
  const { jobData } = useContext(AppContext);

  return (
    <>
      <Heading
        Heading="Featured jobs"
        subheading="Know your worth and find the job and qualify your life"
      />
      <div className="mt-20 w-[90%] mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-12 items-center ">
        {jobData.map((item: Job) => (
          <Jobcard item={item.jobs} key={item.id} />
        ))}
      </div>
      <Link href="/jobs">
        <Button text="View all job" />
      </Link>
    </>
  );
};

export default FeatureJob;
