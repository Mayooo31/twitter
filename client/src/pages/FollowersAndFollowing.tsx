import React, { useEffect } from "react";

import MainLayout from "../components/Layouts/MainLayout";
import NavbarFollowersAndFollowing from "../components/NavbarFollowersAndFollowing";
import Tweet from "../components/Tweet";

const FollowersAndFollowing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className={`min-h-screen w-full max-w-[600px]`}>
        <NavbarFollowersAndFollowing />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </MainLayout>
  );
};

export default FollowersAndFollowing;
