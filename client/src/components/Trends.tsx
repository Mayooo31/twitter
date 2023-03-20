import { useLocation } from "react-router-dom";
import { useCtx } from "../context";
import Trend from "./Trend";

const Trends = () => {
  const { theme } = useCtx();
  const location = useLocation();

  // #1e2732
  return (
    <div
      style={{
        background:
          location.pathname === "/search"
            ? "bg-transparent"
            : theme.bgName === "bg-blue"
            ? "#131c26"
            : "#0a0909",
      }}
      className={`rounded-2xl overflow-hidden`}
    >
      <h1 className="text-xl font-extrabold pt-2 pb-3 px-4">Trendy pro vás</h1>
      <Trend popularIn="Front End" popular="React JS" numOfTweets="1.2 mil." />
      <Trend popularIn="Front End" popular="Tailwind" numOfTweets="633 tis." />
      <Trend popularIn="Back End" popular="Express JS" numOfTweets="188 tis." />
      <Trend popularIn="Back End" popular="Mongo DB" numOfTweets="97 tis." />
      <Trend popularIn="Soccer" popular="Lionel Messi" numOfTweets="914 tis." />
      <Trend popularIn="IT" popular="ChatGPT" numOfTweets="3.2 mil." />
      <Trend popularIn="IT" popular="HireMe" numOfTweets="1.1 tis." />
      <Trend popularIn="IT" popular="Google" numOfTweets="5.4 mil." />
      <Trend popularIn="Česko" popular="Spotify" numOfTweets="900 tis." />
      <button
        style={{ color: theme.color }}
        className="px-4 text-left py-4 hover:bg-[#41576f23] cursor-pointer w-full"
      >
        Zobrazit více
      </button>
    </div>
  );
};

export default Trends;
