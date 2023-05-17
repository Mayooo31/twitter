import React, { useRef, useState } from "react";
import { useCtx } from "../context";

// Types
import { EditedType } from "../types/types";

// Icons nad photos
import { CameraIcon, XMarkIcon } from "@heroicons/react/24/outline";
import photo from "../assets/photo1.jpg";
import photo2 from "../assets/musk.jpg";
import user from "../assets/user.jpg";

const EditProfile = () => {
  const { theme, setOpenEditProfile } = useCtx();

  const [edited, setEdited] = useState<EditedType>({
    name: "Mario",
    about: "nothing special...",
    image: photo,
    bigImage: photo2,
  });

  //   Inputs transitions
  const [focusName, setFocusName] = useState(false);
  const [focusAbout, setFocusAbout] = useState(false);
  const inputNameRef = useRef<HTMLInputElement>(null!);
  const inputAboutRef = useRef<HTMLTextAreaElement>(null!);

  const editHandler = () => {
    console.log({
      image: edited.image,
      bigImage: edited.bigImage,
      name: edited.name,
      about: edited.about,
    });
  };
  return (
    <div
      style={{ background: theme.background }}
      className="fixed top-0 left-0 w-full max-w-[600px] ss:rounded-2xl ss:top-[50%] ss:left-[50%] ss:h-fit ss:translate-x-[-50%] ss:translate-y-[-50%] h-screen z-[100] py-3"
    >
      <div className="flex justify-between px-4 pb-3">
        <span className="flex gap-6 items-center">
          <XMarkIcon
            onClick={() => setOpenEditProfile(false)}
            className="w-8 h-8 cursor-pointer"
          />
          <p className="font-bold text-lg">Upravit profil</p>
        </span>
        <button
          onClick={() => editHandler()}
          className="text-black bg-white rounded-full px-4 py-1"
        >
          Uložit
        </button>
      </div>
      <div className="relative">
        {edited.bigImage ? (
          <img src={edited.bigImage} className="custom-ratio object-cover" />
        ) : (
          <div className="custom-ratio bg-gray-700 object-cover" />
        )}

        <label
          className="cursor-pointer absolute top-[50%] translate-y-[-50%] left-[30%] bg-[#222222c2] hover:bg-[#3a3737c2] ease-linear duration-50 p-2 rounded-full"
          htmlFor="bigImage"
        >
          <CameraIcon className="w-8 h-8 cursor-pointer" />
        </label>
        <input
          onChange={(event) => {
            const file = event.target.files && event.target.files[0];
            file &&
              setEdited((prevState) => {
                return { ...prevState, bigImage: URL.createObjectURL(file) };
              });
          }}
          className="hidden"
          type="file"
          name="bigImage"
          id="bigImage"
        />
        <span
          onClick={() =>
            setEdited((prevState) => {
              return { ...prevState, bigImage: "" };
            })
          }
          className="cursor-pointer absolute top-[50%] translate-y-[-50%] right-[30%] bg-[#222222c2] hover:bg-[#3a3737c2] ease-linear duration-50 p-2 rounded-full"
        >
          <XMarkIcon className="w-8 h-8 cursor-pointer" />
        </span>

        <div className="absolute w-[22%] translate-y-[50%] bottom-0 left-5">
          <img
            src={edited.image ? edited.image : user}
            className="z-10 w-full aspect-square object-cover rounded-full border-[3px] border-solid border-[#15202b]"
          />

          <label
            className="cursor-pointer absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] bg-[#222222c2] hover:bg-[#3a3737c2] ease-linear duration-50 p-2 rounded-full"
            htmlFor="image"
          >
            <CameraIcon className="w-8 h-8 cursor-pointer" />
          </label>
          <input
            onChange={(event) => {
              const file = event.target.files && event.target.files[0];
              file &&
                setEdited((prevState) => {
                  return { ...prevState, image: URL.createObjectURL(file) };
                });
            }}
            className="hidden"
            type="file"
            name="image"
            id="image"
          />
        </div>
      </div>
      <div className="flex flex-col px-5 gap-6 mt-[16%]">
        <div className="relative w-full">
          <label
            style={{
              color:
                focusName || inputNameRef.current?.value || edited.name
                  ? theme.color
                  : "#ffffffb3",
            }}
            className={`absolute cursor-text w-full font-normal ease-linear duration-75 ${
              focusName || inputNameRef.current?.value || edited.name
                ? "top-[12.5%] left-[3%] text-sm"
                : "top-[25%] left-[3%] text-lg"
            }`}
            htmlFor="name"
          >
            Jméno
          </label>
          <input
            onChange={(event) => {
              setEdited((prevState) => {
                return { ...prevState, name: event.target.value.trim() };
              });
            }}
            defaultValue={edited.name}
            style={{ borderColor: focusName ? theme.color : "#ffffffb3" }}
            ref={inputNameRef}
            onFocus={() => setFocusName(true)}
            onBlur={() => setFocusName(false)}
            id="name"
            type="text"
            className={`w-full bg-transparent px-2 pb-[6px] pt-7 outline-none border-solid border-[1px] border-grayish rounded-md`}
          />
        </div>
        <div className="relative w-full">
          <label
            style={{
              color:
                focusAbout || inputAboutRef.current?.value || edited.about
                  ? theme.color
                  : "#ffffffb3",
            }}
            className={`absolute cursor-text w-full font-normal ease-linear duration-75 ${
              focusAbout || inputAboutRef.current?.value || edited.about
                ? "top-[12.5%] left-[3%] text-sm"
                : "top-[25%] left-[3%] text-lg"
            }`}
            htmlFor="about"
          >
            O mně
          </label>
          <textarea
            onChange={(event) => {
              setEdited((prevState) => {
                return { ...prevState, about: event.target.value.trim() };
              });
            }}
            defaultValue={edited.about}
            style={{ borderColor: focusAbout ? theme.color : "#ffffffb3" }}
            ref={inputAboutRef}
            onFocus={() => setFocusAbout(true)}
            onBlur={() => setFocusAbout(false)}
            id="about"
            className={`w-full bg-transparent px-2 pb-[6px] pt-7 outline-none border-solid border-[1px] border-grayish rounded-md`}
          />
        </div>
      </div>
      <h2 className="mt-6 text-grayish w-full text-center mb-3">
        Pro další nastavení si pořiďte{" "}
        <span className="underline hover:no-underline cursor-pointer">
          premium
        </span>
        .
      </h2>
    </div>
  );
};

export default EditProfile;
