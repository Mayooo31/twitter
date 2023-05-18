import React, { useEffect } from "react";
import { useCtx } from "../context";
import { useParams } from "react-router-dom";

// Custom Hooks
import useGetData from "../hooks/useGetData";

// Components
import NavbarAccount from "../components/NavbarAccount";
import Profile from "../components/Profile";
import ProfileButtons from "../components/ProfileButtons";
import Tweet from "../components/Tweet";
import MainLayout from "../components/Layouts/MainLayout";
import EditProfile from "../components/EditProfile";

const Account = () => {
  const { openEditProfile } = useCtx();
  const { username } = useParams();
  const { data, isLoading, isError, refetch } = useGetData({
    url: `/account/${username}`,
    key: username!,
  });
  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      {openEditProfile && <EditProfile />}
      <div className={`min-h-screen w-full max-w-[600px]`}>
        <NavbarAccount data={data} isLoading={isLoading} />
        <Profile data={data} isLoading={isLoading} />
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
