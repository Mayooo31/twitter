import React, { useState } from "react";

// Hooks
import { useCtx } from "../context";
import useSendData from "../hooks/useSendData";

// css, icons and styles
import {
  HeartIcon as HeartIconLiked,
  BookmarkIcon as BookmarkIconTrue,
} from "@heroicons/react/24/solid";
import {
  ArrowPathRoundedSquareIcon,
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

type PropsType = {
  data: {
    tweetId: string;
    likes: string[];
    retweets: string[];
    comments: string[];
  };
};

const TweetButtons = ({ data }: PropsType) => {
  const { loggedAccount, setLoggedAccount } = useCtx();
  const { isError, error, mutate } = useSendData();

  const [like, setLike] = useState<{ count: number; liked: boolean }>({
    count: 0,
    liked: data.likes.includes(loggedAccount.id),
  });
  const [retweet, setRetweet] = useState<{ count: number; retweeted: boolean }>(
    {
      count: 0,
      retweeted: data.retweets.includes(loggedAccount.id),
    }
  );
  const [bookmarked, setBookmarked] = useState<boolean>(
    loggedAccount.bookmarks.includes(data.tweetId)
  );

  const likehandler = async () => {
    setLike((prevState) => ({
      count:
        prevState.liked === true ? prevState.count - 1 : prevState.count + 1,
      liked: !prevState.liked,
    }));
    mutate({
      url: "/tweet/like",
      method: "PUT",
      body: { tweetId: data.tweetId },
    });
  };

  const retweethandler = async () => {
    setRetweet((prevState) => ({
      count:
        prevState.retweeted === true
          ? prevState.count - 1
          : prevState.count + 1,
      retweeted: !prevState.retweeted,
    }));
    mutate({
      url: "/tweet/retweet",
      method: "PUT",
      body: { tweetId: data.tweetId },
    });
  };

  const bookmarkhandler = async () => {
    const action = bookmarked ? "remove" : "add";
    mutate({
      url: `/bookmarks/${action}/${data.tweetId}`,
      method: "PUT",
      body: {},
    });

    !isError &&
      setLoggedAccount((prevState) => {
        return {
          ...prevState,
          bookmarks:
            action === "remove"
              ? prevState.bookmarks.filter(
                  (bookmark) => bookmark !== data.tweetId
                )
              : [...prevState.bookmarks, data.tweetId],
        };
      });
  };

  return (
    <div className="flex justify-between">
      <button className="relative left-[-8px] group flex gap-[2px] items-center cursor-pointer text-grayish hover:text-[#3597ff]">
        <ChatBubbleOvalLeftIcon className="h-8 xxs:h-9 w-8 xxs:w-9 ml-auto group-hover:bg-[#2c8df41c] rounded-full p-2" />
        <span className="whitespace-nowrap font-normal text-xs relative left-[-5px] xxs:left-0">
          {data.comments.length}
        </span>
      </button>
      <button
        onClick={() => {
          retweethandler();
        }}
        style={{ color: retweet.retweeted ? "#32ab2a" : "#ffffffb3" }}
        className="group flex gap-[2px] items-center cursor-pointer"
      >
        <ArrowPathRoundedSquareIcon className="h-8 xxs:h-9 w-8 xxs:w-9 ml-auto group-hover:bg-[#3ec0351d] rounded-full p-2 group-hover:text-[#32ab2a]" />
        <span className="whitespace-nowrap font-normal text-xs relative left-[-5px] xxs:left-0 group-hover:text-[#32ab2a]">
          {data.retweets.length + retweet.count}
        </span>
      </button>
      <button
        onClick={() => {
          likehandler();
        }}
        style={{ color: like.liked ? "#F91880" : "#ffffffb3" }}
        className="group flex gap-[2px] items-center cursor-pointer"
      >
        {like.liked ? (
          <HeartIconLiked className="h-8 xxs:h-9 w-8 xxs:w-9 ml-auto group-hover:bg-[#f918812c] rounded-full p-2 group-hover:text-[#F91880]" />
        ) : (
          <HeartIcon className="h-8 xxs:h-9 w-8 xxs:w-9 ml-auto group-hover:bg-[#f918812c] rounded-full p-2 group-hover:text-[#F91880]" />
        )}
        <span className="whitespace-nowrap font-normal text-xs relative left-[-5px] xxs:left-0 group-hover:text-[#F91880]">
          {data.likes.length + like.count}
        </span>
      </button>
      <button
        onClick={() => {
          setBookmarked(!bookmarked);
          bookmarkhandler();
        }}
        className="group hidden xxs:block cursor-pointer text-grayish hover:text-[#3597ff]"
      >
        {bookmarked ? (
          <BookmarkIconTrue className="h-8 xxs:h-9 w-8 xxs:w-9 ml-auto text-[#3597ff] group-hover:bg-[#2c8df41c] rounded-full p-2 lg:block" />
        ) : (
          <BookmarkIcon className="h-8 xxs:h-9 w-8 xxs:w-9 ml-auto group-hover:bg-[#2c8df41c] rounded-full p-2 lg:block" />
        )}
      </button>
    </div>
  );
};

export default TweetButtons;
