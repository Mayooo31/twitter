import React, { useState } from "react";

import {
  EllipsisHorizontalIcon,
  BellAlertIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

// Css and styles
import photo from "../assets/musk.jpg";
import photo2 from "../assets/photo1.jpg";

const Profile = () => {
  const [isFollowing, setIsFollowing] = useState<string | boolean>("true");
  const [hovering, setHovering] = useState("Sleduji");

  return (
    <div className={`xs:ml-[70px] ss:ml-0 mb-3`}>
      <div className="relative">
        <img src={photo} className="object-cover cursor-pointer" />
        <img
          src={photo2}
          className="w-[22%] rounded-full border-[3px] border-solid border-[#15202b] absolute translate-y-[50%] bottom-0 left-5 z-10 cursor-pointer"
        />
      </div>
      <div className="px-4 pt-3 flex flex-col">
        <div className="ml-auto flex gap-2">
          <EllipsisHorizontalIcon className="h-9 w-9 p-1 cursor-pointer rounded-full border-[1px] border-solid border-[#dbdbdb72] hover:bg-[#2c3640]" />
          <BellAlertIcon className="h-9 w-9 p-1 cursor-pointer rounded-full border-[1px] border-solid border-[#dbdbdb72] hover:bg-[#2c3640]" />
          {isFollowing === "true" && (
            <button
              onClick={() => setIsFollowing("false")}
              onMouseEnter={() => setHovering("Přestat sledovat")}
              onMouseLeave={() => setHovering("Sleduji")}
              className="px-4 cursor-pointer rounded-full border-[1px] border-solid border-[#dbdbdb72] hover:border-[#890505] hover:bg-[#b6181821] hover:text-[#f4212e]"
            >
              {hovering}
            </button>
          )}
          {isFollowing === "false" && (
            <button
              onClick={() => setIsFollowing("true")}
              className="px-4 cursor-pointer rounded-full border-[1px] border-solid bg-white text-black"
            >
              Sledovat
            </button>
          )}
        </div>
        <h1 className="text-xl font-extrabold mt-[5%]">Elon Musk ✨</h1>
        <p className="text-grayish font-normal">@elonmusk</p>
        <div className="flex gap-1 items-center mt-3">
          <CalendarDaysIcon className="h-5 w-5 text-grayish" />
          <p className="text-grayish font-normal">Uživatel se připojil červen 2009</p>
        </div>
        <div className="flex gap-4 items-center mt-2">
          <p className="text-grayish font-normal">
            <span className="font-semibold text-white">178</span> Sledování
          </p>
          <p className="text-grayish font-normal">
            <span className="font-semibold text-white">129 mil.</span> Sledujících
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
