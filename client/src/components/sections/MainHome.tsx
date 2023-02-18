import React from "react";

// Components
import NavbarHome from "../NavbarHome";
import Tweet from "../Tweet";
import WriteATweet from "../WriteATweet";

// Css
import styles from "../../styles";

const MainHome = () => {
  return (
    <div
      className={`sb ss:overflow-auto ss:h-screen max-w-[600px] ${styles.borderRight}`}
    >
      <NavbarHome />
      <WriteATweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
};

export default MainHome;
