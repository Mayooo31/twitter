import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";

// Components
import Search from "../components/Search";
import Trends from "../components/Trends";

const RightPanelHome = () => {
  const [stickyPanel, setStickyPanel] = useState<string>("65px");
  const stickyRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const panelHeight = stickyRef.current.offsetHeight;

    const calculatedPanel = screenHeight - panelHeight;
    if (calculatedPanel > 65) return;

    setStickyPanel(`${calculatedPanel}px`);
  }, []);

  return (
    <div className="hidden md:flex flex-col gap-2 max-w-[350px] ml-5 mt-3 mr-8">
      <Search />
      <div
        style={{ top: stickyPanel }}
        ref={stickyRef}
        className="flex flex-col gap-4 sticky left-0"
      >
        <Trends />
        <Footer />
      </div>
    </div>
  );
};

export default RightPanelHome;
