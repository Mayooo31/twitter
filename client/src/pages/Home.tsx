// Components
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import NavigationPanel from "../components/NavigationPanel";
import RightPanel from "../components/RightPanel";
import Tweet from "../components/Tweet";

// Css and styles
import "../index.css";
import styles from "../styles";

const Home = () => {
  return (
    <div className="mb-[52px] xs:mb-0 ss:flex ss:justify-center">
      <NavigationPanel />
      <Main />
      <RightPanel />
    </div>
  );
};

export default Home;
