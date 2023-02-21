import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import photo from "../assets/photo1.jpg";

// Icons
import {
  HomeIcon as HomeIconSelected,
  MagnifyingGlassIcon as MagnifyingGlassIconSelected,
  BellIcon as BellIconSelected,
  EnvelopeIcon as EnvelopeIconSelected,
  BookmarkIcon as BookmarkIconSelected,
  ClipboardDocumentListIcon as ClipboardDocumentListIconSelected,
  UserIcon as UserIconSelected,
  EllipsisHorizontalCircleIcon as EllipsisHorizontalCircleIconSelected,
  HashtagIcon as HashtagIconSelected,
  EllipsisHorizontalIcon,
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
  HashtagIcon,
} from "@heroicons/react/24/outline";

const NavigationPanel = () => {
  const [selected, setSelected] = useState<string>("home");
  const navigate = useNavigate();

  return (
    <div
      className={`xs:sticky fixed xs:top-0 bg-[#15202b] z-50 bottom-0 left-0 xs:h-screen w-full min-w-[70px] xs:w-[70px] flex xs:flex-col justify-around xs:justify-start items-center border-t-[#d2d2d248] border-t-[1px] border-solid xs:border-t-[0px] xs:border-r-[1px] xs:border-r-[#d2d2d248] lg:w-[250px] lg:items-start`}
    >
      <button className="hidden xs:flex xs:justify-center xs:items-center w-full lg:justify-start lg:ml-3">
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
      <button
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
        className="h-full xs:h-[55px] w-[25%] xs:w-full py-3 xs:py-0 center justify-center flex xs:justify-center xs:items-center lg:justify-start lg:gap-5 lg:w-fit hover:bg-[#ffffff1e] lg:pl-3 lg:pr-6 lg:rounded-full"
      >
        {selected === "home" ? (
          <HomeIconSelected className="w-7 h-7" />
        ) : (
          <HomeIcon className="w-7 h-7" />
        )}
        <p className="hidden lg:block text-xl">Hlavní stránka</p>
      </button>
      <button className="hidden h-full xs:h-[55px] center lg:flex xs:items-center lg:justify-start lg:gap-5 lg:w-fit hover:bg-[#ffffff1e] lg:pl-3 lg:pr-6 lg:rounded-full">
        {selected === "hashtag" ? (
          <HashtagIconSelected className="w-7 h-7" />
        ) : (
          <HashtagIcon className="w-7 h-7" />
        )}
        <p className="hidden lg:block text-xl">Prozkoumat</p>
      </button>
      {/* NO LG */}
      <button className="h-full xs:h-[55px] w-[25%] xs:w-full py-3 xs:py-0 center flex xs:justify-center xs:items-center md:hidden justify-center">
        {selected === "search" ? (
          <MagnifyingGlassIconSelected className="w-7 h-7" />
        ) : (
          <MagnifyingGlassIcon className="w-7 h-7" />
        )}
      </button>
      {/* NO LG END */}
      <button className="h-full xs:h-[55px] w-[25%] xs:w-full py-3 xs:py-0 center flex xs:justify-center xs:items-center lg:justify-start lg:gap-5 lg:w-fit hover:bg-[#ffffff1e] lg:pl-3 lg:pr-6 lg:rounded-full justify-center">
        {selected === "bell" ? (
          <BellIconSelected className="w-7 h-7" />
        ) : (
          <BellIcon className="w-7 h-7" />
        )}
        <p className="hidden lg:block text-xl">Oznámení</p>
      </button>
      <button className="h-full xs:h-[55px] w-[25%] xs:w-full py-3 xs:py-0 center flex xs:justify-center xs:items-center lg:justify-start lg:gap-5 lg:w-fit hover:bg-[#ffffff1e] lg:pl-3 lg:pr-6 lg:rounded-full justify-center">
        {selected === "message" ? (
          <EnvelopeIconSelected className="w-7 h-7" />
        ) : (
          <EnvelopeIcon className="w-7 h-7" />
        )}
        <p className="hidden lg:block text-xl">Zprávy</p>
      </button>
      <button className="hidden  xs:h-[55px] xs:w-full xs:py-0 center xs:flex xs:justify-center xs:items-center lg:justify-start lg:gap-5 lg:w-fit hover:bg-[#ffffff1e] lg:pl-3 lg:pr-6 lg:rounded-full">
        {selected === "bookmark" ? (
          <BookmarkIconSelected className="w-7 h-7" />
        ) : (
          <BookmarkIcon className="w-7 h-7" />
        )}
        <p className="hidden lg:block text-xl">Záložky</p>
      </button>
      <button className="hidden  xs:h-[55px] xs:w-full xs:py-0 center xs:flex xs:justify-center xs:items-center lg:justify-start lg:gap-5 lg:w-fit hover:bg-[#ffffff1e] lg:pl-3 lg:pr-6 lg:rounded-full">
        {selected === "clipboard" ? (
          <ClipboardDocumentListIconSelected className="w-7 h-7" />
        ) : (
          <ClipboardDocumentListIcon className="w-7 h-7" />
        )}
        <p className="hidden lg:block text-xl">Seznamy</p>
      </button>
      <button className="hidden  xs:h-[55px] xs:w-full xs:py-0 center xs:flex xs:justify-center xs:items-center lg:justify-start lg:gap-5 lg:w-fit hover:bg-[#ffffff1e] lg:pl-3 lg:pr-6 lg:rounded-full">
        {selected === "user" ? (
          <UserIconSelected className="w-7 h-7" />
        ) : (
          <UserIcon className="w-7 h-7" />
        )}
        <p className="hidden lg:block text-xl">Profil</p>
      </button>
      <button className="hidden  xs:h-[55px] xs:w-full xs:py-0 center xs:flex xs:justify-center xs:items-center lg:justify-start lg:gap-5 lg:w-fit hover:bg-[#ffffff1e] lg:pl-3 lg:pr-6 lg:rounded-full">
        {selected === "more" ? (
          <EllipsisHorizontalCircleIconSelected className="w-7 h-7" />
        ) : (
          <EllipsisHorizontalCircleIcon className="w-7 h-7" />
        )}
        <p className="hidden lg:block text-xl">Více</p>
      </button>
      <button className="absolute xs:static bottom-16 right-3 xs:mt-3 bg-[#ff7300] p-3 rounded-full lg:w-[220px] lg:grid lg:place-items-center">
        <ChatBubbleBottomCenterTextIcon className="w-8 h-8 lg:hidden" />
        <p className="hidden lg:flex text-xl ">Tweetovat</p>
      </button>
      <div className="hidden xs:flex mt-auto mb-4 lg:w-[240px] mr-[10px] lg:gap-2 lg:items-center lg:rounded-full hover:bg-[#ffffff1e] lg:py-2 pl-3 cursor-pointer">
        <img className="w-10 h-10 rounded-full" src={photo} />
        <div className="hidden lg:flex flex-col">
          <span className=" text-ellipsis whitespace-nowrap overflow-hidden w-[130px]">
            Mario🐱‍👤👌
          </span>
          <span className="text-grayish text-ellipsis whitespace-nowrap overflow-hidden w-[130px]">
            @supermario
          </span>
        </div>
        <EllipsisHorizontalIcon className="hidden shrink-0 lg:flex h-6 w-6 ml-auto text-grayish mr-4" />
      </div>
    </div>
  );
};

export default NavigationPanel;
