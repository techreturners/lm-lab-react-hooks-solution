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
            <h2>useMemo</h2>

            <button onClick={() => setNumber(3)}>Double 3</button>

            <p className='use-memo__text'>{doubleNumber}</p>
        </>
    )
}

function slowFunction(num: number) {
    console.log('calling slow function... 🐌')
    for(let i = 0; i <= 1000000000; i++) {
    // ⏰
    }
    const result = num * 2;
	console.log(`result: ${result}`);
	return result;
}