import { useState } from 'react';

export const CountCats = () => {
  const [countCats, setCountCats] = useState(1);

  function handleClick() {
    setCountCats(countCats + 1);
  }

  function getCats() {
    const cats = []
    for(let i = 0; i < countCats; i++) {
        cats.push("🐈 ")
    }
    return cats
  }

  return (
    <>
    <h2>useState</h2>

    <p>{getCats()}</p>

    <button onClick={handleClick}>
      There are {countCats} cats 🥳
    </button>
    
    </>
  );
}