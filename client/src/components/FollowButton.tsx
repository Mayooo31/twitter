import React, { useState } from "react";
import useSendData from "../hooks/useSendData";

type Props = {
  isFollowing: boolean;
  setIsFollowing: React.Dispatch<React.SetStateAction<boolean>>;
  customCss?: string;
  setWidthOfButton?: React.Dispatch<React.SetStateAction<number>>;
  followedUserId: string;
};

const FollowButton = ({
  isFollowing,
  setIsFollowing,
  customCss,
  setWidthOfButton,
  followedUserId,
}: Props) => {
  const [hovering, setHovering] = useState("Sleduji");

  const { mutateAsync } = useSendData();

  const followhandler = async () => {
    await mutateAsync({
      url: "/account/follow",
      method: "PUT",
      body: { followedUserId },
    });
  };

  return (
    <>
      {isFollowing && (
        <button
          onClick={() => {
            setIsFollowing(false);
            followhandler();
          }}
          onMouseEnter={() => {
            setHovering("Přestat sledovat");
            if (setWidthOfButton) setWidthOfButton(150);
          }}
          onMouseLeave={() => {
            setHovering("Sleduji");
            if (setWidthOfButton) setWidthOfButton(84);
          }}
          className={`px-4 cursor-pointer whitespace-nowrap rounded-full border-[1px] border-solid border-[#dbdbdb72] hover:border-[#890505] hover:bg-[#b6181821] hover:text-[#f4212e] ${customCss}`}
        >
          {hovering}
        </button>
      )}
      {!isFollowing && (
        <button
          onClick={() => {
            setIsFollowing(true);
            followhandler();
          }}
          className={`px-4 cursor-pointer rounded-full border-[1px] border-solid border-white bg-white text-black ${customCss}`}
        >
          Sledovat
        </button>
      )}
    </>
  );
};

export default FollowButton;
