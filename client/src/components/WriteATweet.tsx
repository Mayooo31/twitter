import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

// Icons
import {
  PhotoIcon,
  GifIcon,
  FaceSmileIcon,
  MapPinIcon,
  CalendarDaysIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

// Css
import photo from "../assets/photo1.jpg";
import styles from "../styles";

// Temporarily theme
const theme: string = "rgb(255, 122, 0)";

const WriteATweet = () => {
  const [isTweetEmpty, setIsTweetEmpty] = useState<boolean>(true);

  const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value) {
      setIsTweetEmpty(false);
    } else {
      setIsTweetEmpty(true);
    }
  };

  return (
    <div
      className={`hidden xs:flex gap-3 xs:ml-[70px] ss:ml-0 ${styles.borderBottom} px-4 py-2 max-w-[600px]`}
    >
      <img src={photo} className="w-12 h-12 rounded-full cursor-pointer" />
      <div className="w-full flex flex-col pt-2">
        <TextareaAutosize
          placeholder="Co se právě děje?"
          className="bg-transparent outline-none w-full text-xl resize-none"
          minRows={2}
          maxRows={6}
          onChange={textAreaHandler}
        />
        <div className="flex gap-4 items-center pt-2 pb-1 relative left-[-5px]">
          <PhotoIcon
            style={{ color: theme }}
            className="h-9 w-9 p-2 hover:bg-[#ff7b001b] rounded-full cursor-pointer"
          />
          <GifIcon
            style={{ color: theme }}
            className="h-9 w-9 p-2 hover:bg-[#ff7b001b] rounded-full cursor-pointer"
          />
          <FaceSmileIcon
            style={{ color: theme }}
            className="h-9 w-9 p-2 hover:bg-[#ff7b001b] rounded-full cursor-pointer"
          />
          <MapPinIcon
            style={{ color: theme }}
            className="h-9 w-9 p-2 hover:bg-[#ff7b001b] rounded-full cursor-pointer"
          />
          <CalendarDaysIcon
            style={{ color: theme }}
            className="h-9 w-9 hidden sm:block p-2 hover:bg-[#ff7b001b] rounded-full cursor-pointer"
          />
          <AdjustmentsHorizontalIcon
            style={{ color: theme }}
            className="h-9 w-9 hidden sm:block p-2 hover:bg-[#ff7b001b] rounded-full cursor-pointer"
          />

          <button
            style={{
              backgroundColor: isTweetEmpty ? "#ff7b00ac" : theme,
              color: isTweetEmpty ? "#f5f5f5af" : "whitesmoke",
            }}
            className="px-4 py-2 rounded-full ml-auto absolute right-[-5px]"
          >
            Tweetovat
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteATweet;
