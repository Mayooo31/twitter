import React from "react";
import photo from "../assets/photo1.jpg";
import photo1 from "../assets/cat.jpg";
import "../index.css";

type Props = {
  photos: string[];
};

const Photos = ({ photos }: Props) => {
  const customGrid =
    photos.length === 1
      ? "g-1"
      : photos.length === 2
      ? "g-2"
      : photos.length === 3
      ? "g-3"
      : photos.length === 4
      ? "g-4"
      : photos.length === 5
      ? "g-5"
      : "g-6";

  return (
    <div className={`grid w-full h-[200px] rounded-2xl overflow-hidden ${customGrid}`}>
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          className="object-cover w-full h-full cursor-pointer"
        />
      ))}
    </div>
  );
};

export default Photos;
