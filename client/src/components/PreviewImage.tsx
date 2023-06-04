import React, { useEffect } from "react";

// Custom hooks
import { useCtx } from "../context";

// Css and icons
import "../index.css";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const PreviewImage = () => {
  const { previewImage, setPreviewImage } = useCtx();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setPreviewImage((prevState) => ({
          ...prevState,
          selectedImage:
            prevState.selectedImage === 0
              ? prevState.images.length - 1
              : prevState.selectedImage! - 1,
        }));
      } else if (event.key === "ArrowRight") {
        setPreviewImage((prevState) => ({
          ...prevState,
          selectedImage:
            prevState.selectedImage === prevState.images.length - 1
              ? 0
              : prevState.selectedImage! + 1,
        }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen z-[100]">
      <span
        onClick={() =>
          setPreviewImage({
            images: [],
            selectedImage: undefined,
          })
        }
        className="absolute top-0 left-0 w-full h-screen custom-blur bg-[#c1c1c110]"
      />
      <button
        onClick={() =>
          setPreviewImage({
            images: [],
            selectedImage: undefined,
          })
        }
      >
        <XMarkIcon className="absolute top-2 left-2 h-10 w-10 p-2 text-white rounded-full cursor-pointer bg-[#06050599] z-[111]" />
      </button>

      {/* If more than 1 photo show buttons to slide to another photo */}
      {previewImage.images.length > 1 && (
        <>
          <button
            onClick={() =>
              setPreviewImage((prevState) => {
                return {
                  ...prevState,
                  selectedImage:
                    prevState.selectedImage === 0
                      ? prevState.images.length - 1
                      : prevState.selectedImage! - 1,
                };
              })
            }
          >
            <ArrowLeftIcon className="absolute top-[50%] left-5 translate-y-[-50%] h-10 w-10 p-2 text-white rounded-full cursor-pointer bg-[#06050599] z-[111]" />
          </button>
          <button
            onClick={() =>
              setPreviewImage((prevState) => {
                return {
                  ...prevState,
                  selectedImage:
                    prevState.selectedImage === prevState.images.length - 1
                      ? 0
                      : prevState.selectedImage! + 1,
                };
              })
            }
          >
            <ArrowRightIcon className="absolute top-[50%] right-5 translate-x-[-50%] translate-y-[-50%] h-10 w-10 p-2 text-white rounded-full cursor-pointer bg-[#06050599] z-[111]" />
          </button>
        </>
      )}

      {previewImage.images.map(
        (image: { image: string; _id: string }, index: number) => {
          return (
            <img
              key={image._id ?? image}
              style={{
                transform: `translateX(calc(-50% - ${
                  index - previewImage.selectedImage!
                }* 100vw)) translateY(-50%)`,
              }}
              src={image.image ?? image}
              className="absolute top-[50%] left-[50%] object-contain h-screen w-screen max-h-fit max-w-fit"
            />
          );
        }
      )}
    </div>
  );
};

export default PreviewImage;
