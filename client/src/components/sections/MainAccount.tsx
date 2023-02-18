import React from "react";

// Components
import NavbarAccount from "../NavbarAccount";
import Tweet from "../Tweet";

// Css
import styles from "../../styles";
import Profile from "../Profile";
import ProfileButtons from "../ProfileButtons";

const MainAccount = () => {
  return (
    <div
      className={`sb ss:overflow-auto ss:h-screen max-w-[600px] ${styles.borderRight}`}
    >
      <NavbarAccount />
      <Profile />
      <ProfileButtons />
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

export default MainAccount;
