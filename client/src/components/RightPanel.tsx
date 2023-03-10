import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

// Components
import Search from "./Search";
import Photos from "./Photos";
import Trends from "./Trends";
import Footer from "./Footer";

import photo from "../assets/photo1.jpg";
import MightLike from "./MightLike";

const theme: string = "rgb(255, 122, 0)";

const RightPanel = () => {
  const [stickyPanel, setStickyPanel] = useState<string>("65px");
  const stickyRef = useRef<HTMLDivElement>(null!);
  const { accId } = useParams();
  const location = useLocation();

  const photos: string[] = [photo, photo, photo, photo];

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const panelHeight = stickyRef.current.offsetHeight;

    const calculatedPanel = screenHeight - panelHeight;
    if (calculatedPanel > 65) return;

    setStickyPanel(`${calculatedPanel}px`);
  }, []);

  return (
    <div className="hidden relative md:flex flex-col gap-2 max-w-[350px] ml-5 mt-3 mr-8">
      {location.pathname !== "/search" && <Search />}
      <div
        style={{ top: location.pathname === "/search" ? "0px" : stickyPanel }}
        ref={stickyRef}
        className="flex flex-col gap-4 sticky left-0"
      >
        {photos.length !== 0 && accId && <Photos photos={photos} />}
        {location.pathname !== "/search" && <Trends />}
        <div className={`rounded-2xl overflow-hidden bg-[#1e2732]`}>
          <h1 className="text-xl font-extrabold pt-2 pb-3 px-4">Mohlo by se vám líbit</h1>
          <MightLike />
          <MightLike />
          <MightLike />
          <button
            style={{ color: theme }}
            className="px-4 text-left py-4 hover:bg-[#41576f23] cursor-pointer w-full"
          >
            Zobrazit více
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RightPanel;
