import React from "react";

const More = ({ finded }) => {
  return (
    <>
      <div className="w-[80%] items-center sm:flex justify-between mx-auto">
        {finded && (
          <div className="mt-10">
            <h1 className="text-[20px] font-semibold">Job Description</h1>
            <p>{finded.description}</p>
            <div className="mt-10">
              <h1 className="text-[20px] font-semibold">Job Requirements </h1>
              <p>{finded.requirements}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default More;
