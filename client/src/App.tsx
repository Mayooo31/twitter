import { BrowserRouter, Routes, Route } from "react-router-dom";

// Hooks
import { useCtx } from "./context";

// Components
import Account from "./pages/Account";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import Overlay from "./components/Overlay";

const App = () => {
  const { openMobileNavbar, setOpenMobileNavbar, setShowMore, showMore } = useCtx();

  return (
    <BrowserRouter>
      <Overlay isOpen={showMore} closeOverlay={setShowMore} />
      <Overlay isOpen={openMobileNavbar} closeOverlay={setOpenMobileNavbar} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/:accId" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
