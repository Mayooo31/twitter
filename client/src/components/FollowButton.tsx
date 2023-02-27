import React, { useState } from "react";

type Props = {
  isFollowing: boolean;
  setIsFollowing: React.Dispatch<React.SetStateAction<boolean>>;
  customCss?: string;
  setWidthOfButton?: React.Dispatch<React.SetStateAction<number>>;
};

const FollowButton = ({
  isFollowing,
  setIsFollowing,
  customCss,
  setWidthOfButton,
}: Props) => {
  const [hovering, setHovering] = useState("Sleduji");

  return (
    <>
      {isFollowing && (
        <button
          onClick={() => setIsFollowing(false)}
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
          onClick={() => setIsFollowing(true)}
          className={`px-4 cursor-pointer rounded-full border-[1px] border-solid border-white bg-white text-black ${customCss}`}
        >
          Sledovat
        </button>
      )}
    </>
  );
};

export default FollowButton;
