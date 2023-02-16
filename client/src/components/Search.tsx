import React, { useState } from "react";

// Icons
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";

// Temporarily theme
const theme: string = "rgb(255, 122, 0)";

const Search = () => {
  const [input, setInput] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="relative">
      <input
        value={input}
        onChange={e => setInput(e.currentTarget.value)}
        onFocus={() => setIsFocused(true)}
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
          onClick={() => setInput("")}
          style={{ color: theme }}
          className="absolute top-[50%] right-2 translate-y-[-50%] w-7 h-7 cursor-pointer"
        />
      )}
    </div>
  );
};

export default Search;
