import React from "react";
import { useCtx } from "../context";
import { MoonLoader } from "react-spinners";

const LoadingSpinner = ({ isLoading, size }: any) => {
  const { theme } = useCtx();

  return (
    <div className="w-full flex justify-center py-5">
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
