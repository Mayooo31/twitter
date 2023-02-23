import { useEffect } from "react";

// Components
import NavigationPanel from "../components/NavigationPanel";
import NavbarBookmarks from "../components/NavbarBookmarks";
import Tweet from "../components/Tweet";
import RightPanel from "../components/sections/RightPanel";

// Css and styles
import styles from "../styles";

const Bookmarks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mb-[52px] xs:mb-0 xs:flex xs:justify-center">
      <NavigationPanel />
      <div className={`ss:h-full max-w-[600px] ${styles.borderRight}`}>
        <NavbarBookmarks />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
      <RightPanel />
    </div>
  );
};

export default Bookmarks;
