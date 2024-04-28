import Link from "next/link";
import React from "react";
import logoimage from "@/public/images/logo.png";
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/auth";
import User from "../Helper/User";

const Nav = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className=" h-[13vh]  shadow-md">
      <div className=" w-[90%] md:h-[90%] mx-auto flex justify-between items-center">
        <div className=" w-[150px] h-[150px] md:w-[250px] md:h-[250px]">
          <Link href={"/"}>
            <Image
              src={logoimage}
              alt="logo"
              width={200}
              height={200}
              className="w-[100%] h-[100%]"
            ></Image>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {!session && (
            <Link href="/signup">
              <button className="px-4 py-1.5  text -[14px] sm:text[16px] sm:px-6 sm:py-2 bg-blue-600 font-semibold text-white rounded-lg  hover:bg-blue-800 transition-all duration-300 ">
                signup
              </button>
            </Link>
          )}
          {session && <User session={session} />}
        </div>
      </div>
    </div>
  );
};

export default Nav;
