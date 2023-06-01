import React from "react";
import { useParams } from "react-router-dom";

// Css and styles
import "../index.css";

// Components
import LoadingSpinner from "./LoadingSpinner";

// Custom hooks
import useGetData from "../hooks/useGetData";

const Photos = () => {
  const { username } = useParams();

  const { data, isLoading } = useGetData({
    url: `/tweet/${username}/last-images`,
    key: `/${username}/images`,
    isRetry: false,
  });

  const customGrid =
    !data || data.length === 1 || data.length === 0
      ? "g-1"
      : data.length === 2
      ? "g-2"
      : data.length === 3
      ? "g-3"
      : data.length === 4
      ? "g-4"
      : data.length === 5
      ? "g-5"
      : "g-6";

  if ((!isLoading && data && data.length === 0) || (!isLoading && !data))
    return <></>;

  return (
    <div
      className={`grid w-full justify-center items-center h-[200px] rounded-2xl overflow-hidden ${customGrid}`}
    >
      {isLoading ? (
        <LoadingSpinner
          isLoading={isLoading}
          size={35}
          customCss="w-full flex py-5 justify-center"
        />
      ) : (
        data &&
        data.map((photo: { image: string; _id: string }) => (
          <img
            key={photo._id}
            src={photo.image}
            className="object-cover w-full h-full cursor-pointer"
          />
        ))
      )}
    </div>
  );
};

export default Photos;
