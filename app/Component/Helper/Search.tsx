"use client";

import React, { useContext, useState, ChangeEvent } from "react";
import { AppContext, AppContextType } from "../Context/Provider";

interface SearchProps { }

const Search: React.FC<SearchProps> = () => {
  const { jobData } = useContext(AppContext) as AppContextType;

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Job[]>([]);

  interface Job {
    name: string;
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const filteredResults = jobData.filter((job: Job) =>
      job.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults || []);
  };

  console.log(searchResults)

  return (
    <div>
      <div className="mt-[1.5rem]">
        <input
          type="text"
          placeholder="Search job"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-[60%] md:w-[70%] lg:w-[75%] px-5 py-4 outline-none rounded-l-md bg-gray-200"
        />
        <button
          onClick={handleSearch}
          className="px-5 py-4 outline-none rounded-r-md bg-blue-500 text-white"
          aria-label="Search"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
