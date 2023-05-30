import React, { useState } from "react";
import useSendData from "../hooks/useSendData";
import { useCtx } from "../context";

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
  const { setLoggedAccount } = useCtx();
  const { mutateAsync, isError } = useSendData();
  const [hovering, setHovering] = useState("Sleduji");

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
          onClick={(e) => {
            e.stopPropagation();
            setIsFollowing(false);
            followhandler();
            if (!isError) {
              setLoggedAccount((prevState) => {
                return {
                  ...prevState,
                  following: prevState.following.filter(
                    (followId) => followId !== followedUserId
                  ),
                };
              });
            }
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
          onClick={(e) => {
            e.stopPropagation();
            setIsFollowing(true);
            followhandler();
            if (!isError) {
              setLoggedAccount((prevState) => {
                return {
                  ...prevState,
                  following: [...prevState.following, followedUserId],
                };
              });
            }
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
