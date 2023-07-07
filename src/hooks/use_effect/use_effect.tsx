// make an api call using useEffect
interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

import { useState, useEffect } from "react"

export const APICall = () => {

    const [json, setJson] = useState<Todo | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
                const json = await response.json();
                console.log(json);
                setJson(json)
            } catch (error) {
                console.log(error);
            }
        };
        fetchData()
    }, [])

    return (
        <>
            <h1>useEffect</h1>
            <p>{json?.title}</p>
        </>
    )
}