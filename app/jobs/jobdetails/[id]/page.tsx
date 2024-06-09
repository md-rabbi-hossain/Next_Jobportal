"use client";

import { AppContext, AppContextType } from "@/app/Component/Context/Provider";
import { useContext, useEffect, useState } from "react";

interface Job {
  id: number;
  [key: string]: any;
}

interface JobDataItem {
  jobs: Job[];
}

interface Params {
  id: string;
}

interface JobdetailsProps {
  params: Params;
}

const Jobdetails: React.FC<JobdetailsProps> = ({ params }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const { jobData } = useContext<AppContextType>(AppContext);

  useEffect(() => {
    if (jobData && jobData.length > 0) {
      jobData.forEach((item: JobDataItem) => {
        setJobs((prevJobs) => [...prevJobs, ...item.jobs]);
      });
    }
  }, [jobData]);
  const finded = jobs.find((job) => params.id === job.id.toString());
  return (
    <div className="mb-12 mt-20 h-[90vh]">
      {finded ? (
        <div className="w-[90%] items-center sm:flex justify-between mx-auto">
          <h1>{finded.title}</h1>
          <p>{finded.description}</p>
          {/* Add more fields to display as needed */}
        </div>
      ) : (
        <div className="w-[90%] items-center sm:flex justify-between mx-auto">
          <p>Job not found</p>
        </div>
      )}
    </div>
  );
};

export default Jobdetails;
