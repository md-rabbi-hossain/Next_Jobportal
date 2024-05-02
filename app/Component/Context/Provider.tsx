"use client";

import { JobData } from "@/data";
import React, { createContext, ReactNode } from "react";

type JobDataType = typeof JobData;

type ContextType = {
  jobData: JobDataType;
};

export const AppContext = createContext<ContextType | undefined>(undefined);

export function AppWrapper({ children }: { children: ReactNode }) {
  const jobData: JobDataType = JobData;

  return (
    <AppContext.Provider value={{ jobData }}>{children}</AppContext.Provider>
  );
}
