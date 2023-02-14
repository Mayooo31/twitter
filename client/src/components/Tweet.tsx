import React, { useEffect, useRef, useState } from "react";
import photo from "../assets/photo1.jpg";
import {
  EllipsisHorizontalIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import TweetButtons from "./TweetButtons";

const Tweet = () => {
  const [nickWidth, setNickWidth] = useState<number>();
  const [usernameWidth, setUsernameWidth] = useState<number>();

  const containerRef = useRef<HTMLDivElement>();
  const nickRef = useRef<HTMLSpanElement>();
  const usernameRef = useRef<HTMLSpanElement>();

  // shrink spans (nick and username) if its no space...
  useEffect(() => {
    const contWidth = +containerRef.current?.offsetWidth!;
    const nickWidth = +nickRef.current?.offsetWidth!;
    const usernameWidth = +usernameRef.current?.offsetWidth!;

    const maxPossibleWidth = nickWidth + usernameWidth + 70;
    const gapWidth = maxPossibleWidth - contWidth;

    if (gapWidth > 0) {
      setNickWidth(nickWidth - gapWidth / 2);
      setUsernameWidth(usernameWidth - gapWidth / 2);
    }
  }, [containerRef.current?.offsetWidth]);

  return (
    <div className="px-4 pt-3 pb-1 flex gap-3 border-b-[#d2d2d248] border-b-[1px] border-solid">
      <div className="shrink-0">
        <img className="w-12 h-12 rounded-full" src={photo} />
      </div>
      <div className="w-full">
        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="flex gap-1 items-center w-full"
        >
          <span
            style={{ width: nickWidth }}
            ref={nickRef as React.RefObject<HTMLSpanElement>}
            className="text-ellipsis whitespace-nowrap overflow-hidden font-bold"
          >
            Mario🐱‍👤👌
          </span>
          <span
            style={{ width: usernameWidth }}
            ref={usernameRef as React.RefObject<HTMLSpanElement>}
            className="font-normal text-grayish text-ellipsis whitespace-nowrap overflow-hidden"
          >
            @supermario
          </span>
          <span className="font-normal text-grayish whitespace-nowrap w-[33px]">
            · 12h
          </span>
          <EllipsisHorizontalIcon className="h-6 w-6 ml-auto cursor-pointer text-grayish hover:text-[#3597ff]" />
        </div>
        <div>
          <span className="font-normal">
            No to je síla. Můj první tweet nehehehe. 👌😎🤷‍♂️
          </span>
        </div>
        <TweetButtons />
      </div>
    </div>
  );
};

export default Tweet;
