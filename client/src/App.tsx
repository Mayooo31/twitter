import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Bookmarks from "./pages/Bookmarks";
import Searching from "./pages/Searching";
import ModalsAndOverlays from "./components/Modals & Overlays/ModalsAndOverlays";

const App = () => {
  return (
    <BrowserRouter>
      <ModalsAndOverlays />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/search" element={<Searching />} />
        <Route path="/:accId" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
