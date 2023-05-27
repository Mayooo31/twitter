import React, { useEffect } from "react";
import { useCtx } from "../context";
import { useParams } from "react-router-dom";

// Custom
import useGetData from "../hooks/useGetData";
import CustomError from "../components/CustomError";

// Components
import NavbarAccount from "../components/NavbarAccount";
import Profile from "../components/Profile";
import ProfileButtons from "../components/ProfileButtons";
import Tweet from "../components/Tweet";
import MainLayout from "../components/Layouts/MainLayout";
import EditProfile from "../components/EditProfile";
import LoadingSpinner from "../components/LoadingSpinner";
import { TweetDataType } from "../types/types";

const Account = () => {
  const { openEditProfile } = useCtx();
  const { username } = useParams();
  const { data, isLoading, isError, refetch, error } = useGetData({
    url: `/account/${username}`,
    key: username!,
    isRetry: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      {openEditProfile && <EditProfile refetch={refetch} />}
      <div className={`min-h-screen w-full max-w-[600px]`}>
        <NavbarAccount data={data!} isLoading={isLoading} />
        <Profile data={data!} isLoading={isLoading} isError={isError} />
        <ProfileButtons />
        {isLoading ? (
          <LoadingSpinner
            isLoading={isLoading}
            size={35}
            customCss="w-full flex py-5 justify-center"
          />
        ) : isError ? (
          <CustomError message={(error as Error).message} />
        ) : data?.tweets.length === 0 ? (
          <CustomError message="Nenašli jsme žádné tweety." />
        ) : (
          data?.tweets.map((tweet: TweetDataType) => (
            <Tweet
              key={tweet._id}
              data={{
                tweet,
                nick: data.nick,
                username: data.username,
                profilePhoto: data.profilePhoto,
              }}
            />
          ))
        )}
      </div>
    </MainLayout>
  );
};

export default Account;
