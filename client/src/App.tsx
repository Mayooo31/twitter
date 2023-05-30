import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCtx } from "./context";

// Components / Pages
import ModalsAndOverlays from "./components/Modals & Overlays/ModalsAndOverlays";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Bookmarks from "./pages/Bookmarks";
import Searching from "./pages/Searching";
import FollowersAndFollowing from "./pages/FollowersAndFollowing";

const App = () => {
  const { theme } = useCtx();

  return (
    <BrowserRouter>
      <ModalsAndOverlays />
      <div
        style={{
          background: theme.background,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/search" element={<Searching />} />
          <Route path="/:username" element={<Account />} />
          <Route
            path="/:username/followers"
            element={<FollowersAndFollowing />}
          />
          <Route
            path="/:username/following"
            element={<FollowersAndFollowing />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
