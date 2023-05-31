import React, { useEffect } from "react";

// Components
import NavbarHome from "../components/NavbarHome";
import WriteATweet from "../components/WriteATweet";
import Tweet from "../components/Tweet";
import MainLayout from "../components/Layouts/MainLayout";
import LoadingSpinner from "../components/LoadingSpinner";
import CustomError from "../components/CustomError";

// Custom hooks
import useSendData from "../hooks/useSendData";
import { useCtx } from "../context";

const Home = () => {
  const { loggedAccount } = useCtx();
  const { isLoading, isError, error, mutate, data } = useSendData();

  useEffect(() => {
    window.scrollTo(0, 0);
    mutate({
      url: "/tweet/following-tweets",
      method: "POST",
      body: { following: loggedAccount.following },
    });
  }, []);

  return (
    <MainLayout>
      <div className={`min-h-screen w-full max-w-[600px]`}>
        <NavbarHome />
        <WriteATweet isModal={false} />
        {isLoading ? (
          <LoadingSpinner
            isLoading={isLoading}
            size={35}
            customCss="w-full flex py-5 justify-center"
          />
        ) : isError ? (
          <CustomError message={(error as Error).message} />
        ) : data?.length === 0 ? (
          <CustomError message="Nikoho nesledujete takže nevidíte žádné tweety. :)" />
        ) : (
          data &&
          data.map((tweet: any) => {
            return (
              <Tweet
                key={tweet._id}
                data={{
                  tweet: {
                    ...tweet,
                    createdBy: tweet.createdBy._id,
                  },
                  nick: tweet.createdBy.nick,
                  username: tweet.createdBy.username,
                  profilePhoto: tweet.createdBy.profilePhoto,
                }}
              />
            );
          })
        )}
      </div>
    </MainLayout>
  );
};

export default Home;
