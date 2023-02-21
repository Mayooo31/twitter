import React from "react";
import { useParams, useLocation } from "react-router-dom";

// Components
import NavbarAccount from "../NavbarAccount";
import NavbarHome from "../NavbarHome";
import WriteATweet from "../WriteATweet";
import Profile from "../Profile";
import ProfileButtons from "../ProfileButtons";
import Tweet from "../Tweet";

// Css
import styles from "../../styles";

const Main = () => {
  const location = useLocation();
  const { accId } = useParams();

  return (
    <div className={`sb ss:h-full max-w-[600px] ${styles.borderRight}`}>
      {accId && <NavbarAccount />}
      {accId && <Profile />}
      {accId && <ProfileButtons />}
      {location.pathname === "/" && <NavbarHome />}
      {location.pathname === "/" && <WriteATweet />}
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
