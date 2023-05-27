import { useCtx } from "../context";

// Styles
import styles from "../styles";

// Types
import { selectedType } from "../types/types";

type Props = {
  selected: selectedType;
  setSelected: React.Dispatch<React.SetStateAction<selectedType>>;
};

const ProfileButtons = ({ selected, setSelected }: Props) => {
  const { theme } = useCtx();

  return (
    <div className={`flex ${styles.borderBottom}`}>
      <button
        onClick={() => setSelected("tweets")}
        className={`w-[20%] h-[53px] cursor-pointer ${theme.bgName}`}
      >
        <div className="relative h-full w-fit m-auto grid place-items-center">
          <span
            style={{
              color: selected === "tweets" ? "white" : "#ffffffb3",
              fontWeight: selected === "tweets" ? 700 : 600,
            }}
            className="font-semibold"
          >
            Tweety
          </span>
          {selected === "tweets" && (
            <span
              style={{ backgroundColor: theme.color }}
              className="absolute bottom-0 w-full h-1 rounded-full"
            ></span>
          )}
        </div>
      </button>
      <button
        onClick={() => setSelected("tweets and answers")}
        className={`w-[40%] h-[53px] cursor-pointer ${theme.bgName}`}
      >
        <div className="relative h-full w-fit m-auto grid place-items-center">
          <span
            style={{
              color: selected === "tweets and answers" ? "white" : "#ffffffb3",
              fontWeight: selected === "tweets and answers" ? 700 : 600,
            }}
            className="font-semibold"
          >
            Tweety a odpovědi
          </span>
          {selected === "tweets and answers" && (
            <span
              style={{ backgroundColor: theme.color }}
              className="absolute bottom-0 w-full h-1 rounded-full"
            ></span>
          )}
        </div>
      </button>
      <button
        onClick={() => setSelected("media")}
        className={`w-[20%] h-[53px] cursor-pointer ${theme.bgName}`}
      >
        <div className="relative h-full w-fit m-auto grid place-items-center">
          <span
            style={{
              color: selected === "media" ? "white" : "#ffffffb3",
              fontWeight: selected === "media" ? 700 : 600,
            }}
            className="font-semibold"
          >
            Média
          </span>
          {selected === "media" && (
            <span
              style={{ backgroundColor: theme.color }}
              className="absolute bottom-0 w-full h-1 rounded-full"
            ></span>
          )}
        </div>
      </button>
      <button
        onClick={() => setSelected("likes")}
        className={`w-[20%] h-[53px] cursor-pointer ${theme.bgName}`}
      >
        <div className="relative h-full w-fit m-auto grid place-items-center">
          <span
            style={{
              color: selected === "likes" ? "white" : "#ffffffb3",
              fontWeight: selected === "likes" ? 700 : 600,
            }}
            className="font-semibold"
          >
            Lajky
          </span>
          {selected === "likes" && (
            <span
              style={{ backgroundColor: theme.color }}
              className="absolute bottom-0 w-full h-1 rounded-full"
            ></span>
          )}
        </div>
      </button>
    </div>
  );
};

export default ProfileButtons;
