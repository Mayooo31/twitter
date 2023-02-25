import React, { useState } from "react";

// Icons
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";

// Css
import "../index.css";
import SearchedResult from "./SearchedResult";

// Temporarily theme
const theme: string = "rgb(255, 122, 0)";

const Search = () => {
  const [input, setInput] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showsearchResult, setShowSearchResult] = useState<boolean>(false);
  const location = useLocation();

  return (
    <>
      <div
        className={`top-0 left-0 bg-[#15202b] z-30 py-2 max-w-[600px] ${
          location.pathname === "/search" ? "w-full relative" : "sticky"
        }`}
      >
        {" "}
        <input
          value={input}
          onChange={e => {
            setInput(e.currentTarget.value);
            if (!e.currentTarget.value) {
              setShowSearchResult(false);
            }
          }}
          onFocus={() => {
            setIsFocused(true);
            setShowSearchResult(true);
          }}
          onBlur={() => setIsFocused(false)}
          style={{ borderColor: isFocused ? theme : "#2f3d4d95" }}
          className="bg-[#2f3d4d95] border-solid border-[1px] text-secondary py-2 px-14 outline-none w-full rounded-full"
          placeholder="Hledat na Twitteru"
        />
        <MagnifyingGlassIcon
          style={{ color: isFocused ? theme : "#ffffffb3" }}
          className="absolute top-[50%] left-5 translate-y-[-50%] w-5 h-5"
        />
        {input && (
          <XCircleIcon
            onClick={() => {
              setInput("");
              setShowSearchResult(false);
            }}
            style={{ color: theme }}
            className="absolute top-[50%] right-2 translate-y-[-50%] w-7 h-7 cursor-pointer"
          />
        )}
      </div>
      {showsearchResult && (
        <div
          className={`top-[60px] xs:min-h-[60px] overflow-auto left-[50%] rounded-xl bg-[#15202b] z-30 custom-shadow ${
            location.pathname === "/search"
              ? "absolute h-[calc(100vh-130px)] xs:h-[calc(80vh-130px)] w-[95%] xs:w-[75%] translate-x-[-50%]"
              : "sticky h-fit max-h-[calc(50vh)] w-[100%] translate-x-[0%] mb-3"
          }`}
        >
          <SearchedResult />
          <SearchedResult />
          <SearchedResult />
          <SearchedResult />
          <SearchedResult />
          <SearchedResult />
        </div>
      )}
    </>
  );
};

export default Search;
