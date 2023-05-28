import React, { useEffect } from "react";

import MainLayout from "../components/Layouts/MainLayout";
import NavbarFollowersAndFollowing from "../components/NavbarFollowersAndFollowing";
import AccountItem from "../components/AccountItem";
import useGetData from "../hooks/useGetData";
import LoadingSpinner from "../components/LoadingSpinner";
import CustomError from "../components/CustomError";
import { AccountDataType } from "../types/types";

const FollowersAndFollowing = () => {
  const endPath = window.location.pathname.split("/");

  const { data, isLoading, isError, refetch, error } = useGetData({
    url: `/account/${endPath[1]}/${endPath[2]}`,
    key: `/${endPath[1]}/${endPath[2]}`,
    isRetry: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className={`min-h-screen w-full max-w-[600px]`}>
        <NavbarFollowersAndFollowing
          nick={data?.nick ?? ""}
          isLoading={isLoading}
        />

        {isLoading ? (
          <LoadingSpinner
            isLoading={isLoading}
            size={35}
            customCss="w-full flex py-5 justify-center"
          />
        ) : isError ? (
          <CustomError message={(error as Error).message} />
        ) : data[endPath[2]].length === 0 ? (
          <CustomError
            message={
              endPath[2] === "following"
                ? "Uživatel nikoho nesleduje..."
                : "Uživatele nikdo nesleduje..."
            }
          />
        ) : (
          data[endPath[2]].map((account: AccountDataType) => {
            return <AccountItem data={account} />;
          })
        )}
      </div>
    </MainLayout>
  );
};

export default FollowersAndFollowing;
