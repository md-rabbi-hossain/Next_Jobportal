"use client";

interface props {
  children: React.ReactNode;
}

import { SessionProvider } from "next-auth/react";

const ClientProvider = ({ children }: props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default ClientProvider;
