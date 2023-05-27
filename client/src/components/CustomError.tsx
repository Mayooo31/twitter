import React from "react";

const CustomError = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-center pt-20 w-[90%] mx-auto">
      <h1 className="text-2xl font-bold text-center">{message}</h1>
    </div>
  );
};

export default CustomError;
