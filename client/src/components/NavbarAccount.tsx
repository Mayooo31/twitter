import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useCtx } from "../context";

// css and styles
import "../index.css";

const NavbarAccount = () => {
  const { theme } = useCtx();
  const navigate = useNavigate();

  return (
    <div
      style={{ background: theme.name === "blue" ? "#15202bda" : "#000000c9" }}
      onClick={() => window.scrollTo(0, 0)}
      className={`sticky flex items-center top-0 left-0 xs:left-[70px] w-full h-[53px]  pb-[3px] z-50 custom-blur cursor-pointer`}
    >
      <button
        onClick={() => navigate(-1)}
        className="relative top-[1px] group h-full px-6 grid place-items-center"
      >
        <ArrowLeftIcon className="w-9 h-9 p-2 rounded-full group-active:bg-[#e9e9e925] group-hover:bg-[#e9e9e925]" />
      </button>
      <div>
        <p className="font-bold text-lg">Elon Musk ✨</p>
        <p className="text-xs font-normal text-grayish">22,9 tis. Tweetů</p>
      </div>
    </div>
  );
};

export default NavbarAccount;
