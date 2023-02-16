import React from "react";
import SearchPanel from "./Search";
import TrendsPanel from "./Trends";

const RightPanel = () => {
  return (
    <div className="hidden md:block w-[290px] h-[600px] ml-5 mt-3">
      <SearchPanel />
      <TrendsPanel />
    </div>
  );
};

export default RightPanel;
