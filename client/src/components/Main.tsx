import React from "react";

// Components
import Navbar from "./Navbar";
import Tweet from "./Tweet";
import WriteATweet from "./WriteATweet";

// Css
import styles from "../styles";

const Main = () => {
  return (
    <div className={`sb ss:overflow-auto ss:h-screen ${styles.borderRight}`}>
      <Navbar />
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

export default Main;
