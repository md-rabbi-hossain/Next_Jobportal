import React from "react";
interface props {
  Job: props;
  company: string;
  location: string;
  description: string;
  salary: string;
}
const DetailsJob = ({ Job }: props) => {
  return (
    <div className="p-4 mb-6 border-2 border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      <h1 className="text-xl font-semibold text-gray-800 mb-2">{Job.title}</h1>
      <p className="text-sm text-gray-600 mb-1">
        {Job.company} - {Job.location}
      </p>
      <p className="text-gray-700 overflow-hidden   h-24  overflow-ellipsis">
        {Job.description}
      </p>
      <p className="text-lg font-semibold text-blue-600">{Job.salary}</p>
    </div>
  );
};

export default DetailsJob;
