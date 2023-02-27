import React from "react";

// Components
import NavigationPanel from "../NavigationPanel";
import RightPanel from "../RightPanel";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => (
  <div className="mb-[52px] xs:mb-0 xs:flex xs:justify-center">
    <NavigationPanel />
    {children}
    <span className="sticky top-0 h-screen w-[1px] bg-[#d2d2d248]" />
    <RightPanel />
  </div>
);

export default MainLayout;
