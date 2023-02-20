import React from "react";
import Footer from "../Footer";
import Photos from "../Photos";

// Components
import Search from "../Search";
import Trends from "../Trends";

import photo from "../../assets/photo1.jpg";

const RightPanelAccount = () => {
  const photos: string[] = [photo, photo, photo];

  return (
    <div className="hidden md:flex flex-col gap-3 max-w-[350px] ml-5 mt-3 mr-8">
      <Search />
      {photos.length !== 0 && <Photos photos={photos} />}
      <Trends />
      <Footer />
    </div>
  );
};

export default RightPanelAccount;
