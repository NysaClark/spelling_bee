import React, { useState } from "react";

const Board = ({ cLetter, letters, setLetters }) => {
  const [userInput, setUserInput] = useState("");

  const refresh = () => {
    const temp = [...letters];
    for (let i = temp.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[rand]] = [temp[rand], temp[i]];
    }
    return temp;
  }
//   function shuffleArr (array){
//     for (var i = array.length - 1; i > 0; i--) {
//         var rand = Math.floor(Math.random() * (i + 1));
//         [array[i], array[rand]] = [array[rand], array[i]]
//     }
// }

  // const handleInput = (e) => {
  //   // e.preventDefault()
  //   console.log(e.target.value);
  //   if (e.target.value.trim() !== "") {
  //     let lastLetter =
  //       e.target.value.length &&
  //       e.target.value[e.target.value.length - 1].toLowerCase();
  //     console.log(lastLetter);
  //     if (cLetter === lastLetter || letters.includes(lastLetter)) {
  //       setUserInput((prev) => (prev += lastLetter));
  //     }
  //     // else {
  //     //   lastLetter = "";
  //     // }
  //   }
  // };

  return (
    <div id="board">
      <input
        id="inputBox"
        type="text"
        value={userInput}
        readOnly
        // onChange={(e) => handleInput(e)}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <div className="grid">
        <div id="hive">
          <div
            onClick={() => setUserInput((prev) => prev + cLetter)}
            className="hive-cell center"
          >
            {cLetter}
          </div>
          {letters.map((letter, index) => {
            return (
              <div
                key={index}
                onClick={() => setUserInput((prev) => prev + letter)}
                class="hive-cell"
              >
                {letter}
              </div>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={() => setUserInput("")}>
          Delete
        </button>
        <button className="btn" onClick={() => setLetters(refresh(letters))}>Refresh</button>
        <button className="btn">Enter</button>
      </div>
    </div>
  );
};

export default Board;
