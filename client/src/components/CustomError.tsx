import React from "react";

const CustomError = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-center pt-20">
      <h1 className="text-2xl font-bold">{message}</h1>
    </div>
  );
};

export default CustomError;
