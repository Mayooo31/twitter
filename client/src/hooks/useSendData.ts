import { useMutation } from "react-query";
import { useCtx } from "../context";
import { toast } from "react-toastify";

type PropsType = {
  url: string;
  method?: string;
  body: any;
  json?: boolean;
};

const useSendData = () => {
  const { loggedAccount } = useCtx();

  const typeJSON = {
    Authorization: `Bearer ${loggedAccount.token}`,
    "Content-Type": "application/json",
  };
  const typeFORMDATA = {
    Authorization: `Bearer ${loggedAccount.token}`,
  };

  return useMutation(
    async ({ url, method = "POST", body, json = true }: PropsType) => {
      const res = await fetch(import.meta.env.VITE_API_URL + url, {
        method,
        headers: json ? typeJSON : typeFORMDATA,
        body: json ? JSON.stringify(body) : body,
      });

      if (!res.ok) {
        const error = await res.json();

        // toast.error((error as Error).message);
        throw new Error(error.message);
      }

      const data = await res.json();
      return data;
    }
  );
};

export default useSendData;
