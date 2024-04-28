"use client";

import { Session } from "next-auth";
import Image from "next/image";

interface props {
  session: Session;
}

const User = ({ session }: props) => {
  console.log(session);
  return (
    <div className="cursor-pointer">
      <Image
        src={`${session?.user?.image}`}
        alt="userimage"
        className="h-{50px} w-[50px] rounded-full"
        width={50}
        height={50}
      />
    </div>
  );
};

export default User;
