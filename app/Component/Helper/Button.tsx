import React from "react";

interface props {
  text: string;
}

const Button = ({ text }: props) => {
  return (
    <>
      <div className="text-center mt-[3rem]">
        <button className="px-8 mb-[2rem] py-2 hover:bg-blue-900 transition-all duration-300 bg-blue-700 rounded-lg text-white font-semibold ">
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
