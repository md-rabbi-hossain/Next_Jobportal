import React from "react";
interface props {
  Job: Job;
}
const Jobcard = ({ Job }: props) => {
  console.log(Job);
  return (
    <div className="p-4 mb-6 relative border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300  border-gray-500 rounded-lg opacity-5 "></div>
  );
};

export default Jobcard;
