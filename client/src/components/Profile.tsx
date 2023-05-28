import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCtx } from "../context";

// Components
import FollowButton from "./FollowButton";

// Css, icons and styles
import "../index.css";
import userPhoto from "../assets/user.jpg";
import {
  EllipsisHorizontalIcon,
  BellAlertIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

// Utils
import getYear from "../utils/getYear";
import getMonth from "../utils/getMonth";
import LoadingSpinner from "./LoadingSpinner";

// Types
import { AccountDataType } from "../types/types";

type PropsType = {
  data: AccountDataType;
  isLoading: boolean;
  isError: boolean;
};

const Profile = ({ data, isLoading, isError }: PropsType) => {
  const { loggedAccount, setOpenEditProfile } = useCtx();
  const { username } = useParams();
  const [isFollowing, setIsFollowing] = useState<boolean>(true);

  useEffect(() => {
    data && setIsFollowing(loggedAccount.following.includes(data._id));
  }, [data]);

  return (
    <div className={`mb-3`}>
      <div className="relative custom-ratio object-cover">
        {data?.secondPhoto ? (
          <img
            src={data.secondPhoto}
            className="custom-ratio object-cover cursor-pointer"
          />
        ) : (
          <div className="custom-ratio bg-gray-700 object-cover" />
        )}

        <img
          src={data?.profilePhoto ? data.profilePhoto : userPhoto}
          className="w-[22%] aspect-square object-cover rounded-full border-[3px] border-solid border-[#15202b] absolute translate-y-[50%] bottom-0 left-5 z-10 cursor-pointer"
        />
      </div>
      <div className="min-h-[100px]">
        {isLoading ? (
          <LoadingSpinner
            isLoading={isLoading}
            size={35}
            customCss="w-full flex py-5 justify-center"
          />
        ) : (
          !isError && (
            <div className="px-4 pt-3 flex flex-col">
              <div className="mt-10 mr-auto xxs:mt-0 xxs:mr-0 xxs:ml-auto flex gap-2">
                {loggedAccount.username === username! ? (
                  <button
                    onClick={() => setOpenEditProfile(true)}
                    className={`px-4 py-2 cursor-pointer whitespace-nowrap rounded-full border-[1px] border-solid border-[#dbdbdb72] hover:bg-[#d8cbcb20]`}
                  >
                    Upravit profil
                  </button>
                ) : (
                  <>
                    <EllipsisHorizontalIcon className="h-9 w-9 p-1 cursor-pointer rounded-full border-[1px] border-solid border-[#dbdbdb72] hover:bg-[#2c3640]" />
                    <BellAlertIcon className="h-9 w-9 p-1 cursor-pointer rounded-full border-[1px] border-solid border-[#dbdbdb72] hover:bg-[#2c3640]" />
                    <FollowButton
                      followedUserId={data._id}
                      isFollowing={isFollowing}
                      setIsFollowing={setIsFollowing}
                    />
                  </>
                )}
              </div>
              <h1 className="text-xl font-extrabold mt-[5%]">{data.nick}</h1>
              <p className="text-grayish font-normal">@{data.username}</p>
              {data.about && (
                <p className="text-white font-normal mt-2">{data.about}</p>
              )}
              <div className="flex gap-1 items-center mt-2">
                <CalendarDaysIcon className="h-5 w-5 text-grayish" />
                <p className="text-grayish font-normal">
                  Uživatel se připojil {getMonth(data.createdAt)}{" "}
                  {getYear(data.createdAt)}
                </p>
              </div>
              <div className="flex gap-4 items-center mt-2">
                <Link
                  to={`/${username}/following`}
                  className="text-grayish font-normal hover:underline cursor-pointer"
                >
                  <span className="font-semibold text-white">
                    {data.following.length}
                  </span>{" "}
                  Sledování
                </Link>
                <Link
                  to={`/${username}/followers`}
                  className="text-grayish font-normal hover:underline cursor-pointer"
                >
                  <span className="font-semibold text-white">
                    {data.followers.length}{" "}
                  </span>{" "}
                  Sledujících
                </Link>
              </div>
              <p className="text-grayish font-normal mt-2">
                Uživatele nesleduje nikdo, koho sledujete
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Profile;
