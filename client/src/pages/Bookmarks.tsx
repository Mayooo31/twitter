import { useEffect, useState } from "react";

// Components
import NavbarBookmarks from "../components/NavbarBookmarks";
import Tweet from "../components/Tweet";
import LoadingSpinner from "../components/LoadingSpinner";
import CustomError from "../components/CustomError";
import MainLayout from "../components/Layouts/MainLayout";

// Custom hooks
import useGetData from "../hooks/useGetData";

const Bookmarks = () => {
  const { data, isLoading, isError, error } = useGetData({
    url: `/bookmarks`,
    isRetry: false,
    key: "bookmarks",
  });
  const [bookmarks, setBookmarks] = useState<any[]>(data);

  const unBookmarkhandler = (bookmarkId: string): void => {
    setBookmarks((prevState) =>
      prevState.filter((bookmark) => bookmark._id !== bookmarkId)
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setBookmarks(data);
  }, [data]);

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
          bookmarks?.map((tweet: any) => (
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
                unBookmarkhandler,
              }}
            />
          ))
        )}
      </div>
    </MainLayout>
  );
};

export default Bookmarks;
