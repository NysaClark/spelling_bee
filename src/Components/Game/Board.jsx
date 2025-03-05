import React, { useState } from "react";

const Board = ({ middle, letters, shuffle }) => {
  const [userInput, setUserInput] = useState("");

  // TODO handleInput

  const handleDelete = () => {
    let temp = userInput.split("")
    temp.pop()
    setUserInput(temp.join(""))
  }
 
  // TODO handleSubmit
  // check if length >= 4
    // check if all chars are in letters array
      // check if word has middle letter

        // check if word is in dictionary
          // check if in panagram
            // + points
            // message popup "Panagram!"
          
            //else (not panagram but in wordlist)
            // +points
            // message popup "Good! / Great! / Excellent! etc"
            // message based on word length

        //else (not in word list/ not valid word)
          //message popup "Not in word list"

      //else (missing middle letter)
        //message popup "Missing center letter"

    //else (bad letters)
      //message popup "Bad Letters"

  //else (too short < 4)
    //message popup "Too Short"

  // hide message popup after delay
  // clear userInput = ""

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
            onClick={() => setUserInput((prev) => prev + middle)}
            className="hive-cell center"
          >
            {middle}
          </div>
          {letters.map((letter, index) => {
            return (
              <div
                key={index}
                onClick={() => setUserInput((prev) => prev + letter)}
                className="hive-cell"
              >
                {letter}
              </div>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={() => handleDelete()}>
          Delete
        </button>
        <button className="btn" onClick={() => shuffle()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
          {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg>
        </button>
        <button className="btn">Enter</button>
      </div>
    </div>
  );
};

export default Board;
