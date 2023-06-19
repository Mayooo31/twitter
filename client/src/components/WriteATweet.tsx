import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import { toast } from "react-toastify";

// Css and icons
import styles from "../styles";
import {
  PhotoIcon,
  GifIcon,
  FaceSmileIcon,
  MapPinIcon,
  CalendarDaysIcon,
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Custom hooks
import { useCtx } from "../context";
import useSendData from "../hooks/useSendData";

type Props = {
  isModal: boolean;
};

type imageType = { image: File | null; blobImage: string };

const WriteATweet = ({ isModal }: Props) => {
  const { isLoading, isError, error, mutate, data } = useSendData();
  const { setOpenWriteATweet, theme, loggedAccount } = useCtx();
  const navigate = useNavigate();

  const location = useLocation();
  const tweetRef = useRef<HTMLTextAreaElement>(null);
  const [isTweetEmpty, setIsTweetEmpty] = useState<boolean>(true);
  const [image, setImage] = useState<imageType>({
    image: null,
    blobImage: "",
  });

  const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value) {
      setIsTweetEmpty(false);
    } else {
      setIsTweetEmpty(true);
    }
  };

  const createHandler = async () => {
    const formData = new FormData();
    formData.append("tweet", tweetRef.current?.value.trim()!);
    formData.append("image", image.image ?? "");

    mutate({
      url: "/tweet/create",
      method: "POST",
      body: formData,
      json: false,
    });
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as Error).message);
    } else if (data) {
      setOpenWriteATweet(false);

      if (location.pathname === `/${loggedAccount.username}`) {
        loggedAccount.refetchAccountData();
      } else {
        navigate(`/${loggedAccount.username}`);
      }
    }
  }, [isError, data]);

  return (
    <div
      style={{ background: theme.background }}
      className={`xs:block px-4 py-2 ${isModal ? "" : styles.borderBottom} ${
        isModal
          ? "fixed overflow-y-auto top-0 left-0 sm:top-[10%] sm:max-h-[80%] w-full rounded-[0] sm:left-[50%] z-[100] h-screen sm:h-fit sm:w-[600px] max-w-full bg-inherit sm:translate-x-[-50%] sm:rounded-2xl"
          : "hidden relative"
      }`}
    >
      {isModal && (
        <button onClick={() => setOpenWriteATweet(false)} className="mb-4">
          <XMarkIcon className="h-10 w-10 p-2 hover:bg-[#bdb6ae1b] rounded-full cursor-pointer" />
        </button>
      )}
      <div className="flex gap-3">
        <img
          onClick={() => navigate(`/${loggedAccount.username}`)}
          src={loggedAccount.profilePhoto}
          className="w-12 h-12 rounded-full aspect-square object-cover cursor-pointer"
        />
        <div className="w-full flex flex-col pt-2">
          <TextareaAutosize
            ref={tweetRef}
            placeholder="Co se právě děje?"
            className="bg-transparent outline-none w-full text-xl resize-none"
            minRows={image.blobImage ? 2 : isModal ? 5 : 2}
            maxRows={6}
            onChange={textAreaHandler}
          />
          {image.blobImage && (
            <div className="relative">
              <img
                className="rounded-xl max-h-[60vh] min-w-full sm:min-w-[80%] object-cover"
                src={image.blobImage}
              />
              <XMarkIcon
                onClick={() => setImage({ image: null, blobImage: "" })}
                className="absolute top-2 left-2 h-10 w-10 p-2 text-white rounded-full cursor-pointer bg-[#06050599]"
              />
            </div>
          )}
          {isModal && (
            <span className="w-full h-[1px] mb-2 mt-4 bg-[#d5d5d53c]" />
          )}
          <div
            className={`flex gap-4 items-center pt-2 pb-1 left-[-5px] ${
              isModal ? "static" : "relative"
            }`}
          >
            <input
              onChange={(event) => {
                const file = event.target.files && event.target.files[0];
                file &&
                  setImage({
                    image: file,
                    blobImage: URL.createObjectURL(file!),
                  });
              }}
              type="file"
              id="image"
              className="hidden"
            />
            <label htmlFor="image">
              <PhotoIcon
                style={{ color: theme.color }}
                className={`h-9 w-9 p-2 rounded-full cursor-pointer ${theme.bgName}`}
              />
            </label>
            <GifIcon
              style={{ color: theme.color }}
              className={`h-9 w-9 p-2 rounded-full cursor-pointer ${theme.bgName}`}
            />
            <FaceSmileIcon
              style={{ color: theme.color }}
              className={`h-9 w-9 p-2 rounded-full cursor-pointer ${theme.bgName}`}
            />
            <MapPinIcon
              style={{ color: theme.color }}
              className={`h-9 w-9 p-2 rounded-full cursor-pointer ${theme.bgName}`}
            />
            <CalendarDaysIcon
              style={{ color: theme.color }}
              className={`h-9 w-9 hidden sm:block p-2 rounded-full cursor-pointer ${theme.bgName}`}
            />
            <AdjustmentsHorizontalIcon
              style={{ color: theme.color }}
              className={`h-9 w-9 hidden sm:block p-2 rounded-full cursor-pointer ${theme.bgName}`}
            />

            <button
              disabled={isLoading}
              onClick={createHandler}
              style={{
                opacity: isTweetEmpty ? "60%" : "100%",
                backgroundColor: theme.color,
                color: isTweetEmpty ? "#f5f5f5af" : "whitesmoke",
              }}
              className={`px-4 py-2 rounded-full ml-auto right-[-5px] ${
                isModal ? "xs:static absolute top-[10px] right-4" : "absolute"
              }`}
            >
              Tweetovat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteATweet;
