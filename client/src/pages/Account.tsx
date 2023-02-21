// Components
import { useEffect } from "react";
import NavigationPanel from "../components/NavigationPanel";
import Main from "../components/sections/Main";
import RightPanel from "../components/sections/RightPanel";

const Account = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mb-[52px] xs:mb-0 xs:flex xs:justify-center">
      <NavigationPanel />
      <Main />
      <RightPanel />
    </div>
  );
};

export default Account;
