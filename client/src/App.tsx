import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Bookmarks from "./pages/Bookmarks";
import NavigationPanel from "./components/NavigationPanel";
import RightPanel from "./components/RightPanel";
import Main from "./pages/Main";
import Searching from "./pages/Searching";
import ModalsAndOverlays from "./components/Modals & Overlays/ModalsAndOverlays";

const App = () => {
  return (
    <BrowserRouter>
      {/* Modals and overlays */}
      <ModalsAndOverlays />

      <div className="mb-[52px] xs:mb-0 xs:flex xs:justify-center">
        <NavigationPanel />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/search" element={<Searching />} />
          <Route path="/:accId" element={<Main />} />
        </Routes>
        <span className="sticky top-0 h-screen w-[1px] bg-[#d2d2d248]" />
        <RightPanel />
      </div>
    </BrowserRouter>
  );
};

export default App;
