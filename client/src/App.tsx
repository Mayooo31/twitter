import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Bookmarks from "./pages/Bookmarks";
import Searching from "./pages/Searching";
import ModalsAndOverlays from "./components/Modals & Overlays/ModalsAndOverlays";
import { useCtx } from "./context";

const App = () => {
  const { theme } = useCtx();

  return (
    <BrowserRouter>
      <ModalsAndOverlays />

      <div style={{ background: theme.background }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/search" element={<Searching />} />
          <Route path="/:username" element={<Account />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
