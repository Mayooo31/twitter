import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";
import { useCtx } from "../context";

// css and styles
import "../index.css";
import LoadingSpinner from "./LoadingSpinner";

// Types
import { AccountDataType } from "../types/types";

type PropsType = {
  data: AccountDataType;
  isLoading: boolean;
};

const NavbarAccount = ({ data, isLoading }: PropsType) => {
  const { theme } = useCtx();
  const { username } = useParams();
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: theme.bgName === "bg-blue" ? "#15202bda" : "#000000c9",
      }}
      onClick={() => window.scrollTo(0, 0)}
      className={`sticky flex items-center top-0 left-0 xs:left-[70px] w-full h-[53px]  pb-[3px] z-50 custom-blur cursor-pointer`}
    >
      <button
        onClick={() => navigate(-1)}
        className="relative top-[1px] group h-full px-6 grid place-items-center"
      >
        <ArrowLeftIcon className="w-9 h-9 p-2 rounded-full group-active:bg-[#e9e9e925] group-hover:bg-[#e9e9e925]" />
      </button>
      {isLoading ? (
        <LoadingSpinner
          isLoading={isLoading}
          size={25}
          customCss="justify-self-start"
        />
      ) : (
        <div>
          <p className="font-bold text-lg">{username}</p>
          <p className="text-xs font-normal text-grayish">
            {data?.tweets?.length ? data.tweets.length : 0} Tweetů
          </p>
        </div>
      )}
    </div>
  );
};

export default NavbarAccount;
