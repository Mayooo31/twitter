import React from "react";
import { useCtx } from "../context";
import { BeatLoader, MoonLoader } from "react-spinners";

type PropsType = {
  isLoading: boolean;
  size: number;
  customCss: string;
  type?: number;
};

const LoadingSpinner = ({
  isLoading,
  size,
  customCss,
  type = 1,
}: PropsType) => {
  const { theme } = useCtx();

  return (
    <div className={`${customCss}`}>
      {type === 1 && (
        <MoonLoader
          color={theme.color}
          loading={isLoading}
          size={size}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {type === 2 && (
        <BeatLoader
          color={theme.color}
          loading={isLoading}
          size={size}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
};

export default LoadingSpinner;
