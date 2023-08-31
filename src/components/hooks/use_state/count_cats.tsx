import { useState } from 'react';

export const CountCats = () => {

  const [cats, setCats] = useState<string[]>([]);

  function handleClick() {
    setCats([...cats, "🐈"]);
  }

  return (
    <>
    <h2>useState</h2>

    <p>{cats}</p>

    <button onClick={handleClick}>
      There are {cats.length} cats 🥳
    </button>
    
    </>
  );
}