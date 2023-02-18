import { ArrowLeftIcon } from "@heroicons/react/24/solid";

// css and styles
const theme: string = "rgb(255, 122, 0)";

const NavbarAccount = () => {
  return (
    <div
      className={`sticky flex items-center top-0 left-0 xs:left-[70px] w-full xs:w-[calc(100%-70px)] ss:w-full h-[53px] bg-[#15202bed] pb-[3px] z-50`}
    >
      <div className="h-full px-6 grid place-items-center cursor-pointer">
        <ArrowLeftIcon className="w-5 h-5" />
      </div>
      <div>
        <p className="font-bold text-lg">Elon Musk ✨</p>
        <p className="text-xs font-normal text-grayish">22,9 tis. Tweetů</p>
      </div>
    </div>
  );
};

export default NavbarAccount;
