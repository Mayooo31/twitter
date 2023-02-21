import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import TweetButtons from "./TweetButtons";

// css and styles
import photo from "../assets/photo1.jpg";
import photo2 from "../assets/messi.jpg";
import styles from "../styles";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

const Tweet = () => {
  const [nickWidth, setNickWidth] = useState<number>();
  const [usernameWidth, setUsernameWidth] = useState<number>();
  const containerRef = useRef<HTMLDivElement>();
  const nickRef = useRef<HTMLSpanElement>();
  const usernameRef = useRef<HTMLSpanElement>();
  const dateRef = useRef<HTMLSpanElement>();
  const navigate = useNavigate();

  // shrink spans (nick and username) if its no space...
  useEffect(() => {
    const contWidth = +containerRef.current?.offsetWidth!;
    const nickWidth = +nickRef.current?.offsetWidth!;
    const usernameWidth = +usernameRef.current?.offsetWidth!;
    const dateRefWidth = +dateRef.current?.offsetWidth!;

    const maxPossibleWidth = nickWidth + usernameWidth + dateRefWidth + 38;
    const gapWidth = maxPossibleWidth - contWidth;

    if (gapWidth > 0) {
      setNickWidth(nickWidth - gapWidth / 2);
      setUsernameWidth(usernameWidth - gapWidth / 2);
    }
  }, [containerRef.current?.offsetWidth]);
  //

  return (
    <div
      className={`px-4 pt-3 pb-1 flex gap-3 ${styles.borderBottom} hover:bg-[#20304077] cursor-pointer`}
    >
      <div onClick={() => navigate("/mario")} className="shrink-0">
        <img className="w-12 h-12 rounded-full" src={photo} />
      </div>
      <div className="w-full">
        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="flex gap-1 items-center w-full relative"
        >
          <span
            onClick={() => navigate("/mario")}
            style={{ width: nickWidth }}
            ref={nickRef as React.RefObject<HTMLSpanElement>}
            className="text-ellipsis whitespace-nowrap overflow-hidden font-bold hover:underline"
          >
            Mario🐱‍👤👌
          </span>
          <span
            onClick={() => navigate("/mario")}
            style={{ width: usernameWidth }}
            ref={usernameRef as React.RefObject<HTMLSpanElement>}
            className="font-normal text-grayish text-ellipsis whitespace-nowrap overflow-hidden"
          >
            @supermario
          </span>
          <span
            ref={dateRef as React.RefObject<HTMLSpanElement>}
            className="font-normal text-grayish whitespace-nowrap"
          >
            · 23.4.2022
          </span>
          <EllipsisHorizontalIcon className="h-8 w-8 p-[2px] absolute top-[50%] right-[-5px] translate-y-[-50%] ml-auto cursor-pointer text-grayish hover:text-[#3597ff] hover:bg-[#3597ff23] rounded-full" />
        </div>
        <span className="font-medium text-[#dadada]">
          No to je síla. Můj první tweet nehehehe. 👌😎🤷‍♂️
        </span>
        <img src={photo2} className="my-2 rounded-2xl" />
        <TweetButtons />
      </div>
    </div>
  );
};

export default Tweet;
