import { useCtx } from "../context";
import { Link, useNavigate, useParams } from "react-router-dom";

// css and styles
import "../index.css";
import styles from "../styles";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const NavbarFollowersAndFollowing = () => {
  const { theme } = useCtx();
  const navigate = useNavigate();
  const { username } = useParams();

  const followingOrFollowers = window.location.pathname.split("/")[2];

  return (
    <div
      style={{
        background: theme.bgName === "bg-blue" ? "#15202bda" : "#000000c9",
      }}
      className={`sticky top-0 left-0 duration-200 translate-y-[0px] xs:left-[70px] w-full ss:w-full pb-[1px] ${styles.borderBottom} z-50 custom-blur`}
    >
      <div
        onClick={() => window.scrollTo(0, 0)}
        className={`flex justify-between items-center top-0 left-0 xs:left-[70px] w-full h-[53px] pr-5 pl-0 pb-[3px] z-50 cursor-pointer`}
      >
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="relative top-[1px] group h-full px-6 grid place-items-center cursor-pointer"
        >
          <ArrowLeftIcon className="w-9 h-9 p-2 rounded-full group-active:bg-[#e9e9e925] group-hover:bg-[#e9e9e925]" />
        </button>
        <div className="mr-auto">
          <p className="font-bold text-xl">Elon Musk ✨</p>
          <p className="text-xs font-normal text-grayish">@_____majo_____</p>
        </div>
      </div>
      <div className="flex w-full">
        <Link
          to={`/${username}/followers`}
          className={`w-[50%] h-[53px] cursor-pointer ${
            theme.bgName === "bg-blue"
              ? "hover:bg-[#41576f23]"
              : "hover:bg-[#5e5e5e44]"
          }`}
        >
          <div className="relative h-full w-fit m-auto grid place-items-center">
            <span className="font-semibold">Sledující</span>
            {followingOrFollowers === "followers" && (
              <span
                style={{ backgroundColor: theme.color }}
                className="absolute bottom-0 w-full h-1 rounded-full"
              ></span>
            )}
          </div>
        </Link>
        <Link
          to={`/${username}/following`}
          className={`w-[50%] h-[53px] cursor-pointer ${
            theme.bgName === "bg-blue"
              ? "hover:bg-[#41576f23]"
              : "hover:bg-[#5e5e5e44]"
          }`}
        >
          <div className="relative h-full w-fit m-auto grid place-items-center">
            <span className="font-semibold">Sleduji</span>
            {followingOrFollowers === "following" && (
              <span
                style={{ backgroundColor: theme.color }}
                className="absolute bottom-0 w-full h-1 rounded-full"
              ></span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavbarFollowersAndFollowing;
