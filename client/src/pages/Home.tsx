// Components
import MainHome from "../components/sections/MainHome";
import NavigationPanel from "../components/NavigationPanel";
import RightPanelHome from "../components/sections/RightPanelHome";

// Css and styles
import "../index.css";

const Home = () => {
  return (
    <div className="mb-[52px] xs:mb-0 ss:flex ss:justify-center">
      <NavigationPanel />
      <MainHome />
      <RightPanelHome />
    </div>
  );
};

export default Home;
