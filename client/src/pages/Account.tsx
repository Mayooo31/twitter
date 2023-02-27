import React, { useEffect } from "react";

// Components
import NavbarAccount from "../components/NavbarAccount";
import Profile from "../components/Profile";
import ProfileButtons from "../components/ProfileButtons";
import Tweet from "../components/Tweet";
import MainLayout from "../components/Layouts/MainLayout";

const Account = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className={`ss:h-full max-w-[600px]`}>
        <NavbarAccount />
        <Profile />
        <ProfileButtons />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </MainLayout>
  );
};

export default Account;
