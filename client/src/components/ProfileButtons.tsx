import React, { useState } from "react";
import styles from "../styles";

// css and styles
const theme: string = "rgb(255, 122, 0)";

const ProfileButtons = () => {
  const [selected, setSelected] = useState("tweets");

  return (
    <div className={`flex ${styles.borderBottom}`}>
      <button
        onClick={() => setSelected("tweets")}
        className="w-[20%] h-[53px] cursor-pointer hover:bg-[#2c3640]"
      >
        <div className="relative h-full w-fit m-auto grid place-items-center">
          <span
            style={{
              color: selected === "tweets" ? "white" : "#ffffffb3",
              fontWeight: selected === "tweets" ? 700 : 600,
            }}
            className="font-semibold"
          >
            Tweety
          </span>
          {selected === "tweets" && (
            <span
              style={{ backgroundColor: theme }}
              className="absolute bottom-0 w-full h-1 rounded-full"
            ></span>
          )}
        </div>
      </button>
      <button
        onClick={() => setSelected("tweets and answers")}
        className="w-[40%] h-[53px] cursor-pointer hover:bg-[#2c3640]"
      >
        <div className="relative h-full w-fit m-auto grid place-items-center">
          <span
            style={{
              color: selected === "tweets and answers" ? "white" : "#ffffffb3",
              fontWeight: selected === "tweets and answers" ? 700 : 600,
            }}
            className="font-semibold"
          >
            Tweety a odpovědi
          </span>
          {selected === "tweets and answers" && (
            <span
              style={{ backgroundColor: theme }}
              className="absolute bottom-0 w-full h-1 rounded-full"
            ></span>
          )}
        </div>
      </button>
      <button
        onClick={() => setSelected("media")}
        className="w-[20%] h-[53px] cursor-pointer hover:bg-[#2c3640]"
      >
        <div className="relative h-full w-fit m-auto grid place-items-center">
          <span
            style={{
              color: selected === "media" ? "white" : "#ffffffb3",
              fontWeight: selected === "media" ? 700 : 600,
            }}
            className="font-semibold"
          >
            Média
          </span>
          {selected === "media" && (
            <span
              style={{ backgroundColor: theme }}
              className="absolute bottom-0 w-full h-1 rounded-full"
            ></span>
          )}
        </div>
      </button>
      <button
        onClick={() => setSelected("likes")}
        className="w-[20%] h-[53px] cursor-pointer hover:bg-[#2c3640]"
      >
        <div className="relative h-full w-fit m-auto grid place-items-center">
          <span
            style={{
              color: selected === "likes" ? "white" : "#ffffffb3",
              fontWeight: selected === "likes" ? 700 : 600,
            }}
            className="font-semibold"
          >
            Lajky
          </span>
          {selected === "likes" && (
            <span
              style={{ backgroundColor: theme }}
              className="absolute bottom-0 w-full h-1 rounded-full"
            ></span>
          )}
        </div>
      </button>
    </div>
  );
};

export default ProfileButtons;
