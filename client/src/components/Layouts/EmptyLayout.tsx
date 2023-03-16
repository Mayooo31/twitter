import React from "react";

type Props = {
  children: React.ReactNode;
};

const EmptyLayout = ({ children }: Props) => (
  <div className="grid place-items-center">{children}</div>
);

export default EmptyLayout;
