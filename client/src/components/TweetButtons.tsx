import React from "react";

import {
  ArrowPathRoundedSquareIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

const TweetButtons = () => {
  return (
    <div className="flex justify-between">
      <div className="relative left-[-8px] group flex gap-[2px] items-center cursor-pointer text-grayish hover:text-[#3597ff]">
        <ChatBubbleOvalLeftIcon className="h-8 xxs:h-9 w-8 xxs:w-9 ml-auto group-hover:bg-[#2c8df41c] rounded-full p-2" />
        <span className="whitespace-nowrap font-normal text-sm">637</span>
      </div>
      <div className="group flex gap-[2px] items-center cursor-pointer text-grayish hover:text-[#32ab2a]">
        <ArrowPathRoundedSquareIcon className="h-8 xxs:h-9 w-8 xxs:w-9 ml-auto group-hover:bg-[#3ec0351d] rounded-full p-2" />
        <span className="whitespace-nowrap font-normal text-sm">2 739</span>
      </div>
      <div className="group flex gap-[2px] items-center cursor-pointer text-grayish hover:text-[#F91880]">
        <HeartIcon className="h-8 xxs:h-9 w-8 xxs:w-9 ml-auto group-hover:bg-[#f918812c] rounded-full p-2" />
        <span className="whitespace-nowrap font-normal text-sm">24,4 tis.</span>
      </div>
      <div className="group hidden xxs:block cursor-pointer text-grayish hover:text-[#3597ff]">
        <ShareIcon className="h-8 xxs:h-9 w-8 xxs:w-9 ml-auto group-hover:bg-[#2c8df41c] rounded-full p-2" />
      </div>
    </div>
  );
};

export default TweetButtons;
