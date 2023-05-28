import React, { useEffect, useState } from "react";

import photo from "../assets/photo1.jpg";
import FollowButton from "./FollowButton";
import { useCtx } from "../context";
import { AccountDataType } from "../types/types";
import { useNavigate } from "react-router-dom";

type Props = {
  data: AccountDataType;
};

const AccountItem = ({ data }: Props) => {
  const navigate = useNavigate();
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
      <img
        onClick={() => navigate(`/${data.username}`)}
        src={data.profilePhoto}
        className="w-12 h-12 aspect-square object-cover rounded-full"
      />
      <div
        onClick={() => navigate(`/${data.username}`)}
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
