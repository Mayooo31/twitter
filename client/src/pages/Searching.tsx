import { useEffect } from "react";

// Components
import Search from "../components/Search";
import Trends from "../components/Trends";

// Css and styles
import photo from "../assets/photo1.jpg";
import styles from "../styles";
import { useCtx } from "../context";

const Searching = () => {
  const { setOpenMobileNavbar } = useCtx();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`ss:h-full relative max-w-[600px] w-full`}>
      <div className=" flex gap-5 px-4 items-center w-full">
        <img
          onClick={() => setOpenMobileNavbar(true)}
          src={photo}
          className="rounded-full w-9 h-9 xs:hidden"
        />
        <Search />
      </div>
      <Trends />
    </div>
  );
};

export default Searching;
