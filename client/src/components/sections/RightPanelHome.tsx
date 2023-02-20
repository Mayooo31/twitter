import React from "react";
import Footer from "../Footer";

// Components
import Search from "../Search";
import Trends from "../Trends";

const RightPanelHome = () => {
  return (
    <div className="hidden md:flex flex-col gap-3 max-w-[350px] ml-5 mt-3 mr-8">
      <Search />
      <Trends />
      <Footer />
    </div>
  );
};

export default RightPanelHome;
