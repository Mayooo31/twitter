import React, { useState } from "react";

// css and styles
import {
  HeartIcon as HeartIconLiked,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import {
  ArrowPathRoundedSquareIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

const TweetButtons = () => {
  const [like, setLike] = useState<boolean>(false);
  const [retweet, setRetweet] = useState<boolean>(false);

  return (
    <div className="flex justify-between">
      <button className="relative left-[-8px] group flex gap-[2px] items-center cursor-pointer text-grayish hover:text-[#3597ff]">
        <ChatBubbleOvalLeftIcon className="h-8 xxs:h-9 w-8 xxs:w-9 ml-auto group-hover:bg-[#2c8df41c] rounded-full p-2" />
        <span className="whitespace-nowrap font-normal text-xs relative left-[-5px] xxs:left-0">
          637
        </span>
      </button>
      <button
        onClick={() => setRetweet(!retweet)}
        style={{ color: retweet ? "#32ab2a" : "#ffffffb3" }}
        className="group flex gap-[2px] items-center cursor-pointer"
      >
        <ArrowPathRoundedSquareIcon className="h-8 xxs:h-9 w-8 xxs:w-9 ml-auto group-hover:bg-[#3ec0351d] rounded-full p-2 group-hover:text-[#32ab2a]" />
        <span className="whitespace-nowrap font-normal text-xs relative left-[-5px] xxs:left-0 group-hover:text-[#32ab2a]">
          2 739
        </span>
      </button>
      <button
        onClick={() => setLike(!like)}
        style={{ color: like ? "#F91880" : "#ffffffb3" }}
        className="group flex gap-[2px] items-center cursor-pointer"
      >
        {like ? (
          <HeartIconLiked className="h-8 xxs:h-9 w-8 xxs:w-9 ml-auto group-hover:bg-[#f918812c] rounded-full p-2 group-hover:text-[#F91880]" />
        ) : (
          <HeartIcon className="h-8 xxs:h-9 w-8 xxs:w-9 ml-auto group-hover:bg-[#f918812c] rounded-full p-2 group-hover:text-[#F91880]" />
        )}
        <span className="whitespace-nowrap font-normal text-xs relative left-[-5px] xxs:left-0 group-hover:text-[#F91880]">
          24,4 tis.
        </span>
      </button>
      <button className="group hidden xxs:block cursor-pointer text-grayish hover:text-[#3597ff]">
        <ShareIcon className="h-8 xxs:h-9 w-8 xxs:w-9 ml-auto group-hover:bg-[#2c8df41c] rounded-full p-2 lg:hidden" />
        <ArrowDownTrayIcon className="hidden h-8 xxs:h-9 w-8 xxs:w-9 ml-auto group-hover:bg-[#2c8df41c] rounded-full p-2 lg:block" />
      </button>
    </div>
  );
};

export default TweetButtons;
