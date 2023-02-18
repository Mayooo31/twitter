import React from "react";
import { useParams } from "react-router-dom";

// Components
import MainAccount from "../components/sections/MainAccount";
import NavigationPanel from "../components/NavigationPanel";
import RightPanelAccount from "../components/sections/RightPanelAccount";

const Account = () => {
  const params = useParams();
  const { accId } = params;

  return (
    <div className="mb-[52px] xs:mb-0 ss:flex ss:justify-center">
      <NavigationPanel />
      <MainAccount />
      <RightPanelAccount />
    </div>
  );
};

export default Account;
