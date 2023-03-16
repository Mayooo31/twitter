import { useState } from "react";

// Hooks
import { useNavigate } from "react-router-dom";
import { useCtx } from "../context";

// Css and styles
import {
  ArrowRightOnRectangleIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BookmarkIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  ChevronDownIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  Cog8ToothIcon,
  HeartIcon,
  PencilSquareIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import photo from "../assets/photo1.jpg";
import "../index.css";

type Props = {
  coords: { x: string; y: string };
};

const MobileNavbar = ({ coords }: Props) => {
  const { openMobileNavbar, setOpenMobileNavbar, theme } = useCtx();
  const [showStudio, setShowStudio] = useState<boolean>(false);
  const [showTools, setShowTools] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div
      style={{ top: coords.y, left: coords.x, background: theme.background }}
      className={`overflow-auto xs:rounded-2xl xs:w-[300px] xs:h-auto xs:max-h-[600px] flex flex-col p-4 fixed xs:translate-x-[0%] xs:translate-y-[-80%] ease-out z-[100] max-w-[300px] w-full h-screen ${
        openMobileNavbar
          ? "duration-200 translate-x-[0px]"
          : "duration-0 translate-x-[-100%]"
      }`}
    >
      <div className="flex justify-between items-center mb-5 xs:hidden">
        <h1 className="text-lg font-bold">Informace o účtu</h1>
        <XMarkIcon onClick={() => setOpenMobileNavbar(false)} className="w-8 h-8 p-1" />
      </div>
      <div className="flex flex-col mb-2 xs:hidden">
        <div className="flex justify-between items-center mb-1">
          <img src={photo} className="w-10 h-10 rounded-full" />
          <PlusIcon className="w-8 h-8 p-1 rounded-full border-[#d2d2d244] border-[2px] border-solid" />
        </div>
        <p className="text-lg font-bold">Mario🤢🐱‍👤😒</p>
        <p className="text-grayish">@supermario</p>
      </div>
      <div className="flex gap-4 mb-4 xs:hidden">
        <p className="font-normal text-grayish">
          <span className="font-bold text-secondary">445</span> sledovani
        </p>
        <p className="font-normal text-grayish">
          <span className="font-bold text-secondary">21</span> sledujicich
        </p>
      </div>
      <div className="flex flex-col">
        <button
          onClick={() => {
            setOpenMobileNavbar(false);
            navigate("/mario");
            window.scrollTo(0, 0);
          }}
          className="flex gap-5 py-3 items-center xs:hidden"
        >
          <UserIcon className="w-6 h-6" />
          <p className="text-xl font-bold">Profil</p>
        </button>
        <button className={`flex gap-5 py-3 items-center ${theme.name}`}>
          <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />
          <p className="text-xl font-bold">Témata</p>
        </button>
        <button
          onClick={() => {
            setOpenMobileNavbar(false);
            navigate("/bookmarks");
            window.scrollTo(0, 0);
          }}
          className="flex gap-5 py-3 items-center xs:hidden"
        >
          <BookmarkIcon className="w-6 h-6" />
          <p className="text-xl font-bold">Záložky</p>
        </button>
        <button className="flex gap-5 py-3 items-center xs:hidden">
          <ClipboardDocumentListIcon className="w-6 h-6" />
          <p className="text-xl font-bold">Seznamy</p>
        </button>
        <button className={`flex gap-5 py-3 items-center bg ${theme.name}`}>
          <HeartIcon className="w-6 h-6" />
          <p className="text-xl font-bold">Kruh Twitter</p>
        </button>
      </div>
      <span className="h-[1px] w-full bg-[#d2d2d248]" />
      <div className="mt-2">
        <button
          onClick={() => setShowStudio(!showStudio)}
          className={`flex justify-between w-full items-center py-3 ${theme.name}`}
        >
          <p className="text-base">Tvůrčí studio</p>
          <ChevronDownIcon
            style={{ color: showStudio ? theme.color : "" }}
            className={`w-5 h-5 duration-200 ${
              showStudio ? "rotate-[-180deg]" : "rotate-[0deg]"
            }`}
          />
        </button>
        {showStudio && (
          <div>
            <button className={`flex gap-3 items-center py-2 w-full ${theme.name}`}>
              <ChartBarIcon className="w-5 h-5" />
              <p className="font-normal">Analýzy</p>
            </button>
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => setShowTools(!showTools)}
          className={`flex justify-between w-full items-center py-3 ${theme.name}`}
        >
          <p className="text-base">Profesionální nástroje</p>
          <ChevronDownIcon
            style={{ color: showTools ? theme.color : "" }}
            className={`w-5 h-5 duration-200 ${
              showTools ? "rotate-[-180deg]" : "rotate-[0deg]"
            }`}
          />
        </button>
        {showTools && (
          <div>
            <button className={`flex gap-3 items-center py-2 w-full ${theme.name}`}>
              <RocketLaunchIcon className="w-5 h-5" />
              <p className="font-normal">Twitter pro profesionály</p>
            </button>
            <button className={`flex gap-3 items-center py-2 w-full ${theme.name}`}>
              <ArrowTrendingUpIcon className="w-5 h-5" />
              <p className="font-normal">Reklamy na Twitteru</p>
            </button>
            <button className={`flex gap-3 items-center py-2 w-full ${theme.name}`}>
              <BanknotesIcon className="w-5 h-5" />
              <p className="font-normal">Monetizace</p>
            </button>
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className={`flex justify-between w-full items-center py-3 ${theme.name}`}
        >
          <p className="text-base">Nastavení a podpora</p>
          <ChevronDownIcon
            style={{ color: showSettings ? theme.color : "" }}
            className={`w-5 h-5 duration-200 ${
              showSettings ? "rotate-[-180deg]" : "rotate-[0deg]"
            }`}
          />
        </button>
        {showSettings && (
          <div className="mb-5">
            <button className={`flex gap-3 items-center py-2 w-full ${theme.name}`}>
              <Cog8ToothIcon className="w-5 h-5" />
              <p className="font-normal">Nastavení a soukromí</p>
            </button>
            <button className={`flex gap-3 items-center py-2 w-full ${theme.name}`}>
              <QuestionMarkCircleIcon className="w-5 h-5" />
              <p className="font-normal">Centrum nápovědy</p>
            </button>
            <button className={`flex gap-3 items-center py-2 w-full ${theme.name}`}>
              <ClockIcon className="w-5 h-5" />
              <p className="font-normal">Spořič dat</p>
            </button>
            <button className={`flex gap-3 items-center py-2 w-full ${theme.name}`}>
              <PencilSquareIcon className="w-5 h-5" />
              <p className="font-normal">Zobrazení</p>
            </button>
            <button className={`flex gap-3 items-center py-2 w-full ${theme.name}`}>
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              <p className="font-normal">Odhlásit se</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
