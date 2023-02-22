import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useCtx } from "./context";

// Components
import MobileNavbar from "./components/MobileNavbar";
import Account from "./pages/Account";
import Home from "./pages/Home";

// Routers
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:accId",
    element: <Account />,
  },
]);

const App = () => {
  const { openMobileNavbar, setOpenMobileNavbar } = useCtx();

  return (
    <div>
      {openMobileNavbar && (
        <span
          onClick={() => setOpenMobileNavbar(false)}
          className="fixed top-0 left-0 w-full h-screen bg-[#c1c1c139] xs:hidden z-[99]"
        />
      )}
      <MobileNavbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
