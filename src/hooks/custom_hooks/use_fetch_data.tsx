import { useState, useEffect } from "react";

function isError(e: unknown): e is Error {
    return (e as Error).message !== undefined;
  }

  interface Response {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

export const useFetch = (url: string) => {
    const [data, setData] = useState<Response>();
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
            console.log(e.message)
          }
        }
      };
      fetchData();
    }, [url]);

  return {data, isFetching};
};

export default useFetch;