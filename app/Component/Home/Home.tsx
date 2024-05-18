import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Catagory from "../category/Catagory";
import FeatureJob from "../FeatureJob/FeatureJob";

const Home = () => {
  return (
    <div>
      <Hero />
      <Catagory />
      <FeatureJob />
    </div>
  );
};

export default Home;
