import React from "react";
import { useCtx } from "../context";
import { MoonLoader } from "react-spinners";

type PropsType = {
  isLoading: boolean;
  size: number;
  customCss: string;
};

const LoadingSpinner = ({ isLoading, size, customCss }: PropsType) => {
  const { theme } = useCtx();

  return (
    <div className={`w-full flex py-5 ${customCss}`}>
      <MoonLoader
        color={theme.color}
        loading={isLoading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpinner;
