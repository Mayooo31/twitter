import { UserIcon } from "@heroicons/react/24/solid";
import React from "react";

import photo from "../assets/photo1.jpg";

const SearchedResult = () => {
  return (
    <div className="flex items-center gap-3 px-4 py-4 hover:bg-[#41576f23] cursor-pointer">
      <img src={photo} className="w-[60px] h-[60px] rounded-full" />
      <div className="w-[calc(100%-75px)]">
        <h1 className="font-bold text-ellipsis whitespace-nowrap overflow-hidden">
          Mario🐱‍👤👌
        </h1>
        <p className="font-normal text-grayish text-ellipsis whitespace-nowrap overflow-hidden">
          @elonmusk
        </p>
        <div className="flex gap-1 items-center font-normal text-grayish">
          <UserIcon className="w-4 h-4" />
          <p>Sledujete</p>
        </div>
      </div>
    </div>
  );
};

export default SearchedResult;
