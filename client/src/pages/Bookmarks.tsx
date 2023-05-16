import { useEffect } from "react";

// Components
import NavbarBookmarks from "../components/NavbarBookmarks";
import Tweet from "../components/Tweet";

// Css and styles
import MainLayout from "../components/Layouts/MainLayout";

const Bookmarks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className={`ss:h-full w-full max-w-[600px]`}>
        <NavbarBookmarks />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </MainLayout>
  );
};

export default Bookmarks;
