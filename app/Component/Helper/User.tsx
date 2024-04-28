"use client";

import { useState } from "react";
import { Session } from "next-auth";
import Image from "next/image";

interface Props {
  session: Session;
}

const User = ({ session }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
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
        <div className="absolute right-0 mt-2 w- bg-blue-400 h-60 rounded-lg shadow-lg z-50">
          {/* Dropdown content */}
          <div className="p-4">
            {/* Example user data */}
            <p className="text-gray-800">{session.user?.name}</p>
            <p className="text-gray-500">{session.user?.email}</p>
            <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
