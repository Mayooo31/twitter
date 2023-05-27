import { useRef, useState } from "react";
import { useCtx } from "../context";

// Types
import { EditedType } from "../types/types";

// Icons nad photos
import { CameraIcon, XMarkIcon } from "@heroicons/react/24/outline";
import user from "../assets/user.jpg";

// Hooks
import useSendData from "../hooks/useSendData";
import LoadingSpinner from "./LoadingSpinner";

const EditProfile = ({ refetch }: { refetch: () => void }) => {
  const { isLoading, isError, error, mutateAsync } = useSendData();
  const { theme, setOpenEditProfile, loggedAccount, setLoggedAccount } =
    useCtx();
  const [edited, setEdited] = useState<EditedType>({
    name: loggedAccount.nick,
    about: loggedAccount.about,
    image: loggedAccount.profilePhoto,
    bigImage: loggedAccount.secondPhoto,
    blobImage: loggedAccount.profilePhoto,
    blobBigImage: loggedAccount.secondPhoto,
  });

  //   Inputs transitions
  const [focusName, setFocusName] = useState(false);
  const [focusAbout, setFocusAbout] = useState(false);
  const inputNameRef = useRef<HTMLInputElement>(null!);
  const inputAboutRef = useRef<HTMLTextAreaElement>(null!);

  const editHandler = async () => {
    const formData = new FormData();
    formData.append("nick", edited.name);
    formData.append("about", edited.about);
    formData.append("profilePhoto", edited.image);
    formData.append("secondPhoto", edited.bigImage);
    formData.append("oldSecondPhoto", loggedAccount.secondPhoto);
    formData.append("oldProfilePhoto", loggedAccount.profilePhoto);

    const data = await mutateAsync({
      url: "/account/edit",
      method: "PATCH",
      body: formData,
      json: false,
    });

    setLoggedAccount((prevState) => {
      return {
        ...prevState,
        nick: data._doc.nick,
        about: data._doc.about,
        profilePhoto: data._doc.profilePhoto,
        secondPhoto: data._doc.secondPhoto,
      };
    });

    setOpenEditProfile(false);
    refetch();
  };

  return (
    <div
      style={{
        background: theme.background,
      }}
      className="fixed overflow-hidden top-0 left-0 w-full max-w-[600px] ss:rounded-2xl ss:top-[50%] ss:left-[50%] ss:h-fit ss:translate-x-[-50%] ss:translate-y-[-50%] h-screen z-[100] py-3"
    >
      {isLoading && (
        <LoadingSpinner
          isLoading={isLoading}
          size={100}
          customCss="w-full flex py-0 absolute z-[100] h-full bg-[#00000076] justify-center items-center"
        />
      )}
      <div className="flex justify-between px-4 pb-3">
        <span className="flex gap-6 items-center">
          <XMarkIcon
            onClick={() => setOpenEditProfile(false)}
            className="w-8 h-8 cursor-pointer"
          />
          <p className="font-bold text-lg">Upravit profil</p>
        </span>
        <button
          style={{
            opacity: edited.name.length < 1 ? "60%" : "100%",
          }}
          disabled={edited.name.length < 1}
          onClick={() => editHandler()}
          className="text-black rounded-full px-4 bg-white"
        >
          Uložit
        </button>
      </div>
      <div className="relative">
        {edited.blobBigImage ? (
          <img
            src={edited.blobBigImage}
            className="custom-ratio object-cover"
          />
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
                return {
                  ...prevState,
                  bigImage: file,
                  blobBigImage: URL.createObjectURL(file!),
                };
              });
          }}
          className="hidden"
          type="file"
          name="secondPhoto"
          id="bigImage"
        />
        <span
          onClick={() =>
            setEdited((prevState) => {
              return { ...prevState, bigImage: "", blobBigImage: "" };
            })
          }
          className="cursor-pointer absolute top-[50%] translate-y-[-50%] right-[30%] bg-[#222222c2] hover:bg-[#3a3737c2] ease-linear duration-50 p-2 rounded-full"
        >
          <XMarkIcon className="w-8 h-8 cursor-pointer" />
        </span>

        <div className="absolute w-[22%] translate-y-[50%] bottom-0 left-5">
          <img
            src={edited.blobImage ? edited.blobImage : user}
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
                  return {
                    ...prevState,
                    image: file,
                    blobImage: URL.createObjectURL(file!),
                  };
                });
            }}
            className="hidden"
            type="file"
            name="profilePhoto"
            id="image"
          />
        </div>
      </div>
      <div className="flex flex-col px-5 gap-6 mt-[16%]">
        <div className="relative w-full">
          <label
            style={{
              color:
                edited.name.length < 1
                  ? "red"
                  : focusName || inputNameRef.current?.value || edited.name
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
            style={{
              borderColor:
                edited.name.length < 1
                  ? "red"
                  : focusName
                  ? theme.color
                  : "#ffffffb3",
            }}
            ref={inputNameRef}
            onFocus={() => setFocusName(true)}
            onBlur={() => setFocusName(false)}
            id="name"
            type="text"
            className={`w-full bg-transparent px-2 pb-[6px] pt-7 outline-none border-solid border-[1px] border-grayish rounded-md`}
          />
          {edited.name.length < 1 && (
            <p className="text-sm text-[#ff1b1b] pt-1">
              Jméno nemůže zůstat prázdné.
            </p>
          )}
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
          premium💰
        </span>
        .
      </h2>
    </div>
  );
};

export default EditProfile;
