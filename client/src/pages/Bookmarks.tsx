import { useEffect } from "react";

// Components
import NavbarBookmarks from "../components/NavbarBookmarks";
import Tweet from "../components/Tweet";

// Css and styles
import MainLayout from "../components/Layouts/MainLayout";
import useGetData from "../hooks/useGetData";
import { TweetDataType } from "../types/types";
import CustomError from "../components/CustomError";
import LoadingSpinner from "../components/LoadingSpinner";

const Bookmarks = () => {
  const { data, isLoading, isError, refetch, error } = useGetData({
    url: `/bookmarks`,
    isRetry: false,
  });

  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className={`min-h-screen w-full max-w-[600px]`}>
        <NavbarBookmarks />

        {isLoading ? (
          <LoadingSpinner
            isLoading={isLoading}
            size={35}
            customCss="w-full flex py-5 justify-center"
          />
        ) : isError ? (
          <CustomError message={(error as Error).message} />
        ) : data.length === 0 ? (
          <CustomError message="Nenašli jsme žádné záložky." />
        ) : (
          data.map((tweet: any) => (
            <Tweet
              key={tweet._id}
              data={{
                tweet: {
                  _id: tweet._id,
                  comments: tweet.comments,
                  createdAt: tweet.createdAt,
                  createdBy: tweet.createdBy._id,
                  image: tweet.image,
                  likes: tweet.likes,
                  retweets: tweet.retweets,
                  tweet: tweet.tweet,
                },
                nick: tweet.createdBy.nick,
                username: tweet.createdBy.username,
                profilePhoto: tweet.createdBy.profilePhoto,
              }}
            />
          ))
        )}
      </div>
    </MainLayout>
  );
};

export default Bookmarks;
