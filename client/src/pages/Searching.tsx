import { useEffect } from "react";
import { useCtx } from "../context";

// Components
import MainLayout from "../components/Layouts/MainLayout";
import Search from "../components/Search";
import Trends from "../components/Trends";

const Searching = () => {
  const { setOpenMobileNavbar, loggedAccount } = useCtx();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className={`ss:h-full relative max-w-[600px] w-full`}>
        <div className="flex gap-5 px-4 items-center w-full">
          <img
            onClick={() => setOpenMobileNavbar(true)}
            src={loggedAccount.profilePhoto}
            className="rounded-full w-9 h-9 aspect-square object-cover xs:hidden"
          />
          <Search />
        </div>
        <Trends />
      </div>
    </MainLayout>
  );
};

export default Searching;
