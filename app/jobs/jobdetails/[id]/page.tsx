"use client";

import { AppContext, AppContextType } from "@/app/Component/Context/Provider";
import Applybutton from "@/app/Component/Helper/Applybutton";
import Button from "@/app/Component/Helper/Button";
import Jobcardthree from "@/app/Component/Helper/Jobcardthree";
import More from "@/app/Component/Helper/More";
import { getServerSession } from "next-auth";
import { useContext, useEffect, useState } from "react";
import { Discuss } from "react-loader-spinner";

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
    <div className="mb-12 mt-[20vh] h-[90vh]">
      {finded ? (
        <div className="w-[80%] items-center sm:flex justify-between mx-auto">
          <Jobcardthree finded={finded} />
          <Applybutton />
        </div>
      ) : (
        <div className="w-[90%]  h-[100%] items-center sm:flex justify-center mx-auto">
          <Discuss
            visible={true}
            height="80"
            width="80"
            ariaLabel="discuss-loading"
            wrapperStyle={{}}
            wrapperClass="discuss-wrapper"
          />
        </div>
      )}
      <More finded={finded} />
    </div>
  );
};

export default Jobdetails;
