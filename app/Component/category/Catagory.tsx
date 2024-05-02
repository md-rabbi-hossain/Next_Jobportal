import React from "react";
import Heading from "../Helper/Heading";
import CategoryCard from "../Helper/CategoryCard";

const Catagory = () => {
  return (
    <div className="pt-20 pb-12">
      <Heading
        Heading="Popular Job Catagories"
        subheading="2020 jobs live - 293 added today"
      />
      <CategoryCard />
    </div>
  );
};

export default Catagory;
