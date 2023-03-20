import React from "react";
import { useCtx } from "../context";

import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline";

const colors: { color: string; name: string }[] = [
  { color: "#1d9bf0", name: "blue" },
  { color: "#ffd400", name: "yellow" },
  { color: "#f91880", name: "pink" },
  { color: "#7856ff", name: "purple" },
  { color: "#ff7a00", name: "orange" },
  { color: "#00ba7c", name: "green" },
];

const ThemeSettings = () => {
  const { theme, setTheme, setOpenThemeSettings } = useCtx();

  return (
    <div
      style={{ background: theme.bgName === "bg-blue" ? "#15202b" : "#000" }}
      className="fixed top-0 left-0 ssm:top-[50%] ssm:left-[50%] ssm:translate-x-[-50%] ssm:translate-y-[-50%] max-w-[700px] w-full h-screen ssm:h-auto ssm:py-8 ssm:rounded-2xl ssm:w-[90%] z-[100] bg-red-600"
    >
      <div className="flex items-center ssm:justify-center py-2">
        <button
          onClick={() => setOpenThemeSettings(false)}
          className="group px-6 cursor-pointer ssm:hidden"
        >
          <ArrowLeftIcon className="w-9 h-9 p-2 rounded-full group-active:bg-[#e9e9e925] group-hover:bg-[#e9e9e925]" />
        </button>
        <h1 className="font-bold text-xl ssm:text-3xl">Přizpůsobte si zobrazení</h1>
      </div>
      <div className="mx-8 flex flex-col">
        <p className="text-gray-500 text-sm ssm:text-lg w-[80%] m-auto mt-5 text-center">
          Tato nastavení platí pro všechny účty Twitter v tomto prohlížeči.
        </p>
        <h2 className="mt-8 mb-2 text-gray-500 font-bold">Barva</h2>
        <div
          style={{ background: theme.name === "black" ? "#16181c" : "#1e2732" }}
          className="grid grid-cols-3 ssm:grid-cols-6 gap-y-4 place-items-center py-3 rounded-2xl"
        >
          {colors.map(color => (
            <button
              onClick={() => setTheme({ ...theme, color: color.color, name: color.name })}
              style={{ background: color.color }}
              className="w-10 h-10 rounded-full flex items-center justify-center"
            >
              {theme.color === color.color && <CheckIcon className="w-6 h-6" />}
            </button>
          ))}
        </div>

        <h2 className="mt-4 mb-2 text-gray-500 font-bold">Pozadí</h2>
        <div
          style={{ background: theme.name === "black" ? "#16181c" : "#1e2732" }}
          className="rounded-2xl py-2 flex flex-col ssm:flex-row ssm:px-4 items-center gap-2"
        >
          <button
            onClick={() =>
              setTheme({
                ...theme,
                background: "#15202b",
                bgName: "bg-blue",
              })
            }
            className="w-[90%] rounded-md h-[60px] border-solid border-[2px] relative"
            style={{
              background: "#15202b",
              borderColor: theme.background === "#15202b" ? theme.color : "transparent",
            }}
          >
            <span
              style={{
                borderColor: theme.background === "#15202b" ? theme.color : "gray",
                background: theme.background === "#15202b" ? theme.color : "transparent",
              }}
              className="absolute top-[50%] left-6 translate-y-[-50%] w-6 h-6 border-solid border-[2px] rounded-full flex items-center justify-center"
            >
              {theme.background === "#15202b" && <CheckIcon className="w-4 h-4" />}
            </span>
            Tmavé
          </button>
          <button
            onClick={() =>
              setTheme({
                ...theme,
                background: "#000",
                bgName: "bg-black",
              })
            }
            className="w-[90%] rounded-md h-[60px] border-solid border-[2px] relative"
            style={{
              background: "#000",
              borderColor: theme.background === "#000" ? theme.color : "transparent",
            }}
          >
            <span
              style={{
                borderColor: theme.background === "#000" ? theme.color : "gray",
                background: theme.background === "#000" ? theme.color : "transparent",
              }}
              className="absolute top-[50%] left-6 translate-y-[-50%] w-6 h-6 border-solid border-[2px] rounded-full flex items-center justify-center"
            >
              {theme.background === "#000" && <CheckIcon className="w-4 h-4" />}
            </span>
            Černé
          </button>
        </div>
        <button
          className="px-4 py-1 mt-5 rounded-full m-auto"
          style={{ background: theme.color }}
          onClick={() => setOpenThemeSettings(false)}
        >
          Hotovo
        </button>
      </div>
    </div>
  );
};

export default ThemeSettings;
