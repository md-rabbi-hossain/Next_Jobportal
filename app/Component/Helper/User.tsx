"use client";

import { useContext, useState } from "react";
import { Session } from "next-auth";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Button from "./Button";

interface Props {
  session: Session;
}
const User = ({ session }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(true);
  };
  const Close = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div className="relative flex  items-center  gap-5">
      <div className="cursor-pointer" onClick={toggleDropdown}>
        <Image
          src={`${session?.user?.image}`}
          alt="userimage"
          className="h-12 w-12 rounded-full"
          width={48}
          height={48}
        />
      </div>
      {isDropdownOpen && (
        <div
          className="absolute right-0 mt-[19rem] w- bg-blue-400 h-60 rounded-lg shadow-lg z-50  sm:block md:block"
          onClick={Close}
        >
          <div className="p-4">
            <p className="text-gray-800">{session.user?.name}</p>
            <p className="text-gray-500">{session.user?.email}</p>
            <button
              onClick={() => signOut()}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      )}
      <div
        className="
      mb-3"
      >
        {session && <Button text="Post job" url="/post" />}
      </div>
    </div>
  );
};

export default User;
