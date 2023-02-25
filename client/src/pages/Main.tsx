import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

// Components
import NavbarAccount from "../components/NavbarAccount";
import NavbarHome from "../components/NavbarHome";
import WriteATweet from "../components/WriteATweet";
import Profile from "../components/Profile";
import ProfileButtons from "../components/ProfileButtons";
import Tweet from "../components/Tweet";

// Css
import styles from "../styles";

const Main = () => {
  const location = useLocation();
  const { accId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`ss:h-full max-w-[600px]`}>
      {accId && <NavbarAccount />}
      {accId && <Profile />}
      {accId && <ProfileButtons />}
      {location.pathname === "/" && <NavbarHome />}
      {location.pathname === "/" && <WriteATweet isModal={false} />}
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
