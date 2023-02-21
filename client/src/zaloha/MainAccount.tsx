import React from "react";

// Components
import NavbarAccount from "../NavbarAccount";
import Profile from "../Profile";
import ProfileButtons from "../ProfileButtons";
import Tweet from "../Tweet";

// Css
import styles from "../../styles";

const MainAccount = () => {
  return (
    <div className={`sb ss:h-full max-w-[600px] ${styles.borderRight}`}>
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
