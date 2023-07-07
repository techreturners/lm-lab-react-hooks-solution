import { useState, useMemo } from "react";
import './use_memo.css';

export const MemoExample = () => {

    const [number, setNumber] = useState(0);
    
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number]);

    console.log(number)

    return (
        <>
            <h1>useMemo</h1>

            <button onClick={() => setNumber(3)}>Double 3</button>

            <div style={{
                backgroundColor: '#333',
                color: '#CCC',
                padding: '2rem',
                margin: '2rem'
            }}>{doubleNumber}</div>
        </>
    )
}

function slowFunction(num: number) {
    console.log('calling slow function... 🐌')
    for(let i = 0; i <= 1000000000; i++) {
    // ⏰
    }
    return num * 2;
}