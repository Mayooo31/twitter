import React from "react";
import { useCtx } from "../context";
import { BeatLoader, MoonLoader } from "react-spinners";

type PropsType = {
  isLoading: boolean;
  size: number;
  customCss: string;
  type?: number;
  color?: string;
};

const LoadingSpinner = ({
  isLoading,
  size,
  customCss,
  type = 1,
  color,
}: PropsType) => {
  const { theme } = useCtx();

  return (
    <div className={`${customCss}`}>
      {type === 1 && (
        <MoonLoader
          color={color ?? theme.color}
          loading={isLoading}
          size={size}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {type === 2 && (
        <BeatLoader
          color={color ?? theme.color}
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
