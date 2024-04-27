import React from "react";
import imageurl from "./../../../public/images/chair.jpg";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <div className="overflow-hidden h-[84vh] flex flex-col items-center justify-center">
      <Image src={imageurl} alt="image" width={400} height={200} />
      <button className="px-12 py-3 mt-[2rem] bg-purple-700 hover:bg-purple-900 transition-all duration-300 rounded-lg text-white">
        Sign Up Now
      </button>
    </div>
  );
};

export default SignUpPage;
