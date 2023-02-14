import React from "react";
import { useParams } from "react-router-dom";

const Account = () => {
  const params = useParams();
  const { accId } = params;

  return <div>Account {accId}</div>;
};

export default Account;
