import React, { useEffect, useState } from "react";

import photo from "../assets/photo1.jpg";
import FollowButton from "./FollowButton";
import { useCtx } from "../context";

const AccountItem = () => {
  const { theme } = useCtx();

  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [widthOfButton, setWidthOfButton] = useState<number>(97);

  useEffect(() => {
    if (!isFollowing) {
      setWidthOfButton(97);
    }
  }, [isFollowing]);

  return (
    <div
      className={`flex items-center py-3 px-4 ${
        theme.bgName === "bg-blue"
          ? "hover:bg-[#41576f23]"
          : "hover:bg-[#0d0d0d]"
      } cursor-pointer`}
    >
      <img src={photo} className="w-12 h-12 rounded-full" />
      <div
        style={{
          width: `${"calc(100% - " + (28 + 48 + widthOfButton + "px)")}`,
        }}
        className={`flex flex-col ml-3`}
      >
        <h1 className="hover:underline font-bold text-ellipsis whitespace-nowrap overflow-hidden">
          Elon Musk
        </h1>
        <p className="text-sm text-[#b3b3b3b8] font-medium text-ellipsis whitespace-nowrap overflow-hidden">
          @elonmusk
        </p>
      </div>
      <div className="h-[32px] ml-auto">
        <FollowButton
          setWidthOfButton={setWidthOfButton}
          customCss="h-full"
          isFollowing={isFollowing}
          setIsFollowing={setIsFollowing}
        />
      </div>
    </div>
  );
};

export default AccountItem;
