import { useEffect } from "react";

// Components
import NavigationPanel from "../components/NavigationPanel";
import NavbarBookmarks from "../components/NavbarBookmarks";
import Tweet from "../components/Tweet";
import RightPanel from "../components/RightPanel";

// Css and styles
import styles from "../styles";

const Bookmarks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`ss:h-full max-w-[600px]`}>
      <NavbarBookmarks />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
};

export default Bookmarks;
