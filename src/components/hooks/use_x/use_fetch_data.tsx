import { useState, useEffect } from "react";
import { isError } from "../../../helpers/is_error";

export const useFetch = <TResponse,>(url: string) => {

  const [data, setData] = useState<TResponse | undefined>();
  const [isFetching, setIsFetching] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        setIsFetching(false);
        if (response.status === 200) {
          const json = await response.json();
          setData(json);
        }
      } catch (e: unknown) {
        setIsFetching(false);
        if (isError(e)) {
          console.error(e.message)
        }
      }
    };
    fetchData();
  }, [url]);

  return { data, isFetching };
}