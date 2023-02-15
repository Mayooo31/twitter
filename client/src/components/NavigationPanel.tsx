import React from "react";

import photo from "../assets/photo1.jpg";

// Icons
import {
  HomeIcon as HomeIconSelected,
  MagnifyingGlassIcon as MagnifyingGlassIconSelected,
  BellIcon as BellIconSelected,
  EnvelopeIcon as EnvelopeIconSelected,
} from "@heroicons/react/24/solid";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  EnvelopeIcon,
  ClipboardDocumentListIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const NavigationPanel = () => {
  return (
    <div
      className={`bg-[#15202b] z-50 fixed bottom-0 left-0 xs:h-full w-full xs:w-[70px] flex xs:flex-col justify-around xs:justify-start items-center border-t-[#d2d2d248] border-t-[1px] border-solid xs:border-t-[0px] xs:border-r-[1px] xs:border-r-[#d2d2d248] ss:static ss:h-screen`}
    >
      <button className="hidden xs:grid place-items-center w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          fill="whitesmoke"
          className="w-8 h-8 my-3"
        >
          {" "}
          <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
        </svg>
      </button>
      <button className="h-full xs:h-[55px] w-[25%] xs:w-full py-3 xs:py-0 center grid place-items-center">
        <HomeIcon className="w-7 h-7" />
      </button>
      <button className="h-full xs:h-[55px] w-[25%] xs:w-full py-3 xs:py-0 center grid place-items-center">
        <MagnifyingGlassIcon className="w-7 h-7" />
      </button>
      <button className="h-full xs:h-[55px] w-[25%] xs:w-full py-3 xs:py-0 center grid place-items-center">
        <BellIcon className="w-7 h-7" />
      </button>
      <button className="h-full xs:h-[55px] w-[25%] xs:w-full py-3 xs:py-0 center grid place-items-center">
        <EnvelopeIcon className="w-7 h-7" />
      </button>
      <button className="hidden  xs:h-[55px] xs:w-full xs:py-0 center xs:grid place-items-center">
        <BookmarkIcon className="w-7 h-7" />
      </button>
      <button className="hidden  xs:h-[55px] xs:w-full xs:py-0 center xs:grid place-items-center">
        <ClipboardDocumentListIcon className="w-7 h-7" />
      </button>
      <button className="hidden  xs:h-[55px] xs:w-full xs:py-0 center xs:grid place-items-center">
        <UserIcon className="w-7 h-7" />
      </button>
      <button className="hidden  xs:h-[55px] xs:w-full xs:py-0 center xs:grid place-items-center">
        <EllipsisHorizontalCircleIcon className="w-7 h-7" />
      </button>
      <div className="absolute xs:static bottom-16 right-3 xs:mt-3 bg-[#ff7300] p-3 rounded-full">
        <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />
      </div>
      <img className="hidden xs:block w-10 h-10 rounded-full mt-auto mb-4" src={photo} />
    </div>
  );
};

export default NavigationPanel;
