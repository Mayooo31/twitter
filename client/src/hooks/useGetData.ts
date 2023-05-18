import React from "react";
import { useQuery } from "react-query";

type PropsType = {
  token?: string;
  url: string;
  key: string;
};

const useGetData = ({ token = "", url, key }: PropsType) => {
  return useQuery({
    refetchOnWindowFocus: false,
    queryKey: key,
    queryFn: async () => {
      const res = await fetch(import.meta.env.VITE_API_URL + url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return await res.json();
    },
  });
};

export default useGetData;
