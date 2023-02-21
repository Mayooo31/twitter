import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import Search from "../Search";
import Photos from "../Photos";
import Trends from "../Trends";
import Footer from "../Footer";

import photo from "../../assets/photo1.jpg";

const RightPanel = () => {
  const [stickyPanel, setStickyPanel] = useState<string>("65px");
  const stickyRef = useRef<HTMLDivElement>(null!);
  const { accId } = useParams();

  const photos: string[] = [photo, photo, photo];

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const panelHeight = stickyRef.current.offsetHeight;

    const calculatedPanel = screenHeight - panelHeight;
    if (calculatedPanel > 65) return;

    setStickyPanel(`${calculatedPanel}px`);
  }, []);

  return (
    <div className="hidden md:flex flex-col gap-2 max-w-[350px] ml-5 mt-3 mr-8">
      <Search />
      <div
        style={{ top: stickyPanel }}
        ref={stickyRef}
        className="flex flex-col gap-4 sticky left-0"
      >
        {photos.length !== 0 && accId && <Photos photos={photos} />}
        <Trends />
        <Footer />
      </div>
    </div>
  );
};

export default RightPanel;
