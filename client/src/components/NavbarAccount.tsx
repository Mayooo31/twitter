import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

// css and styles
import "../index.css";

const theme: string = "rgb(255, 122, 0)";

const NavbarAccount = () => {
  const navigate = useNavigate();

  return (
    <div
      className={`sticky flex items-center top-0 left-0 xs:left-[70px] w-full h-[53px] bg-[#15202bed] pb-[3px] z-50 custom-blur`}
    >
      <button
        onClick={() => navigate(-1)}
        className="relative top-[1px] group h-full px-6 grid place-items-center cursor-pointer"
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
