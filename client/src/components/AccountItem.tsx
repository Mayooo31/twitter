import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import FollowButton from "./FollowButton";

// Custom hooks
import { useCtx } from "../context";

// Types
import { AccountDataType } from "../types/types";

type Props = {
  data: AccountDataType;
};

const AccountItem = ({ data }: Props) => {
  const navigate = useNavigate();
  const { theme, loggedAccount } = useCtx();

  const [isFollowing, setIsFollowing] = useState<boolean>(
    loggedAccount.following.includes(data?._id)
  );
  const [widthOfButton, setWidthOfButton] = useState<number>(97);

  useEffect(() => {
    if (!isFollowing) {
      setWidthOfButton(97);
    }
  }, [isFollowing]);

  return (
    <div
      onClick={() => {
        navigate(`/${data.username}`);
        window.scrollTo(0, 0);
      }}
      className={`flex items-center py-3 px-4 ${
        theme.bgName === "bg-blue"
          ? "hover:bg-[#41576f23]"
          : "hover:bg-[#0d0d0d]"
      } cursor-pointer`}
    >
      <img
        src={data.profilePhoto}
        className="w-12 h-12 aspect-square object-cover rounded-full"
      />
      <div
        style={{
          width: `${"calc(100% - " + (28 + 48 + widthOfButton + "px)")}`,
        }}
        className={`flex flex-col ml-3`}
      >
        <h1 className="hover:underline font-bold text-ellipsis whitespace-nowrap overflow-hidden">
          {data.nick}
        </h1>
        <p className="text-sm text-[#b3b3b3b8] font-medium text-ellipsis whitespace-nowrap overflow-hidden">
          @{data.username}
        </p>
      </div>
      <div className="h-[32px] ml-auto">
        <FollowButton
          followedUserId={data._id}
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
