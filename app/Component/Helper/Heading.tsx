import React from "react";

interface props {
  Heading: string;
  subheading: string;
}

const Heading = ({ Heading, subheading }) => {
  return (
    <div className="text-center p-3">
      <h1 className="text-black text-opacity-90 text-[27px]">{Heading}</h1>
      <p className="text-gray-900 mt-[1rem]  text-[15px] text-opacity-80 font-medium">
        {subheading}
      </p>
    </div>
  );
};

export default Heading;
