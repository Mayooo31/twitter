import React from "react";
import Footer from "./Footer";

// Components
import Search from "./Search";
import Trends from "./Trends";

const RightPanel = () => {
  return (
    <div className="hidden md:flex flex-col gap-3 w-[290px] ml-5 mt-3">
      <Search />
      <Trends />
      <Footer />
    </div>
  );
};

export default RightPanel;
