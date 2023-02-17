import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import React from "react";

// Temporarily theme
const theme: string = "rgb(255, 122, 0)";

type Props = {
  popularIn: string;
  popular: string;
  numOfTweets: string;
};

const Trend = ({ popularIn, popular, numOfTweets }: Props) => {
  return (
    <div className="py-2 px-4 hover:bg-[#41576f23] cursor-pointer">
      <div className="flex relative">
        <p className="text-sm text-[#b3b3b3b8] font-medium">Populární: {popularIn}</p>
        <EllipsisHorizontalIcon className="absolute top-[70%] right-[-3px] translate-y-[-50%] h-8 w-8 p-[3px] rounded-full cursor-pointer text-grayish hover:text-[#3597ff] hover:bg-[#3597ff23]" />
      </div>
      <p>{popular}</p>
      <p className="text-sm text-[#b3b3b3b8] font-medium">Tweety: {numOfTweets}</p>
    </div>
  );
};

export default Trend;
