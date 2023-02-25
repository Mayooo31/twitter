import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCtx } from "../context";
import TextareaAutosize from "react-textarea-autosize";

// Icons
import {
  PhotoIcon,
  GifIcon,
  FaceSmileIcon,
  MapPinIcon,
  CalendarDaysIcon,
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Css
import photo from "../assets/photo1.jpg";
import styles from "../styles";

// Temporarily theme
const theme: string = "rgb(255, 122, 0)";

type Props = {
  isModal: boolean;
};

const WriteATweet = ({ isModal }: Props) => {
  const [isTweetEmpty, setIsTweetEmpty] = useState<boolean>(true);
  const { setOpenWriteATweet } = useCtx();
  const navigate = useNavigate();

  const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value) {
      setIsTweetEmpty(false);
    } else {
      setIsTweetEmpty(true);
    }
  };

  return (
    <div
      className={`xs:block ${styles.borderBottom} px-4 py-2 ${
        isModal
          ? "fixed top-0 left-0 sm:top-[10%] w-full rounded-[0] sm:left-[50%] z-[100] h-screen sm:h-fit sm:w-[600px] max-w-full bg-[#15202b] sm:translate-x-[-50%] sm:rounded-2xl"
          : "hidden relative"
      }`}
    >
      {isModal && (
        <button onClick={() => setOpenWriteATweet(false)} className="mb-4">
          <XMarkIcon className="h-10 w-10 p-2 hover:bg-[#bdb6ae1b] rounded-full cursor-pointer" />
        </button>
      )}
      <div className="flex gap-3">
        <img
          onClick={() => navigate("/mario")}
          src={photo}
          className="w-12 h-12 rounded-full cursor-pointer"
        />
        <div className="w-full flex flex-col pt-2">
          <TextareaAutosize
            placeholder="Co se právě děje?"
            className="bg-transparent outline-none w-full text-xl resize-none"
            minRows={isModal ? 5 : 2}
            maxRows={6}
            onChange={textAreaHandler}
          />
          {isModal && <span className="w-full h-[1px] mb-2 bg-[#d5d5d53c]" />}
          <div
            className={`flex gap-4 items-center pt-2 pb-1 left-[-5px] ${
              isModal ? "static" : "relative"
            }`}
          >
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
              className={`px-4 py-2 rounded-full ml-auto right-[-5px] ${
                isModal ? "xs:static absolute top-[10px] right-4" : "absolute"
              }`}
            >
              Tweetovat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteATweet;
