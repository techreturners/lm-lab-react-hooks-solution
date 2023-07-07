import useFetch from "./use_fetch_data";

export const Todo = () => {
    
  const url = "https://jsonplaceholder.typicode.com/todos/1"

  const {data, isFetching} = useFetch(url)

    return (
        <>
        
        <h1>Custom Hook</h1>

        {isFetching ? <p>Fetching...</p> : <p>{data?.title}</p>}

        </>
    )}