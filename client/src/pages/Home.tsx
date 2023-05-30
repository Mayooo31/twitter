import React, { useEffect } from "react";

// Components
import NavbarHome from "../components/NavbarHome";
import WriteATweet from "../components/WriteATweet";
import Tweet from "../components/Tweet";
import MainLayout from "../components/Layouts/MainLayout";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className={`min-h-screen w-full max-w-[600px]`}>
        <NavbarHome />
        {/* <WriteATweet isModal={false} /> */}
        <Tweet />
      </div>
    </MainLayout>
  );
};

export default Home;
