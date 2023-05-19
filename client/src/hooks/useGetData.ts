import React from "react";
import { useQuery } from "react-query";

// Types
import { AccountDataType } from "../types/types";

type PropsType = {
  token?: string;
  url: string;
  key: string;
  isRetry: boolean;
};

const useGetData = ({ token = "", url, key, isRetry = true }: PropsType) => {
  return useQuery({
    retry: isRetry,
    refetchOnWindowFocus: false,
    queryKey: key,
    queryFn: async () => {
      const res = await fetch(import.meta.env.VITE_API_URL + url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      }

      const data = await res.json();
      return data as AccountDataType;
    },
  });
};

export default useGetData;
