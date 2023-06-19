import { useQuery } from "react-query";

// Custom hooks
import { useCtx } from "../context";

type PropsType = {
  url: string;
  key?: string;
  isRetry: boolean;
};

const useGetData = ({ url, key, isRetry = true }: PropsType) => {
  const { loggedAccount } = useCtx();

  return useQuery({
    retry: isRetry,
    refetchOnWindowFocus: false,
    queryKey: key,
    queryFn: async () => {
      const res = await fetch(import.meta.env.VITE_API_URL + url, {
        headers: {
          Authorization: `Bearer ${loggedAccount.token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const error = await res.json();

        throw new Error(error.message);
      }

      const data = await res.json();
      return data;
    },
  });
};

export default useGetData;
