import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCtx } from "../context";

import {
  EllipsisHorizontalIcon,
  BellAlertIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

// Css and styles
import "../index.css";
import photo from "../assets/musk.jpg";
import photo2 from "../assets/photo1.jpg";
import FollowButton from "./FollowButton";

const Profile = () => {
  const { loggedAccount, setOpenEditProfile } = useCtx();
  const { username } = useParams();
  const [isFollowing, setIsFollowing] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`mb-3`}>
      <div className="relative">
        <img src={photo} className="custom-ratio object-cover cursor-pointer" />
        <img
          src={photo2}
          className="w-[22%] rounded-full border-[3px] border-solid border-[#15202b] absolute translate-y-[50%] bottom-0 left-5 z-10 cursor-pointer"
        />
      </div>
      <div className="px-4 pt-3 flex flex-col">
        <div className="mt-10 mr-auto xxs:mt-0 xxs:mr-0 xxs:ml-auto flex gap-2">
          {loggedAccount.username.toLowerCase() === username!.toLowerCase() ? (
            <button
              onClick={() => setOpenEditProfile(true)}
              className={`px-4 py-1 cursor-pointer whitespace-nowrap rounded-full border-[1px] border-solid border-[#dbdbdb72] hover:bg-[#d8cbcb20]`}
            >
              Upravit profil
            </button>
          ) : (
            <>
              <EllipsisHorizontalIcon className="h-9 w-9 p-1 cursor-pointer rounded-full border-[1px] border-solid border-[#dbdbdb72] hover:bg-[#2c3640]" />
              <BellAlertIcon className="h-9 w-9 p-1 cursor-pointer rounded-full border-[1px] border-solid border-[#dbdbdb72] hover:bg-[#2c3640]" />
              <FollowButton
                isFollowing={isFollowing}
                setIsFollowing={setIsFollowing}
              />
            </>
          )}
        </div>
        <h1 className="text-xl font-extrabold mt-[5%]">Elon Musk ✨</h1>
        <p className="text-grayish font-normal">@elonmusk</p>
        <p className="text-white font-normal mt-2">nothing</p>
        <div className="flex gap-1 items-center mt-2">
          <CalendarDaysIcon className="h-5 w-5 text-grayish" />
          <p className="text-grayish font-normal">
            Uživatel se připojil červen 2009
          </p>
        </div>
        <div className="flex gap-4 items-center mt-2">
          <p className="text-grayish font-normal hover:underline cursor-pointer">
            <span className="font-semibold text-white">178</span> Sledování
          </p>
          <p className="text-grayish font-normal hover:underline cursor-pointer">
            <span className="font-semibold text-white">129 mil.</span>{" "}
            Sledujících
          </p>
        </div>
        <p className="text-grayish font-normal mt-2">
          Uživatele nesleduje nikdo, koho sledujete
        </p>
      </div>
    </div>
  );
};

export default Profile;
