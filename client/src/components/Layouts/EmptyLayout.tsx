import React from "react";

type Props = {
  children: React.ReactNode;
};

const EmptyLayout = ({ children }: Props) => <>{children}</>;

export default EmptyLayout;
