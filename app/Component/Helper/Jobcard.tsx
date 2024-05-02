import React from "react";
interface props {
  Job: Job;
}
const Jobcard = ({ Job }: props) => {
  return (
    <div className="p-4 mb-6 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg h-[200px] overflow-hidden">
      <h1 className="text-black font-semibold">{Job.title}</h1>
      <p className="text-gray-700 overflow-hidden   h-24 overflow-ellipsis">
        {Job.description}
      </p>
    </div>
  );
};

export default Jobcard;
