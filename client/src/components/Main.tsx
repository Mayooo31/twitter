// Components
import Navbar from "./Navbar";
import NavigationPanel from "./NavigationPanel";
import Tweet from "./Tweet";

// Css and styles
import "../index.css";
import styles from "../styles";

const Main = () => {
  return (
    <div className="mb-[52px] xs:mb-0 ss:flex ss:justify-center">
      <NavigationPanel />
      <div className={`sb ss:overflow-auto ss:h-screen ${styles.borderRight}`}>
        <Navbar />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
};

export default Main;
