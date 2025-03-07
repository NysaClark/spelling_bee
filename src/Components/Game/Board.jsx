import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Board = ({ middle, letters, shuffle, dictionary, pangrams }) => {
  const [userInput, setUserInput] = useState([]);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const handleInput = (key) => {

    if (alphabet.includes(key.toLowerCase())) {
      if (userInput.length > 20) {
        toast('Too long!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });

        setUserInput([])
      }
      setUserInput((prev) => [...prev, key])
    } else if (key === "Backspace") {
      handleDelete()
    } else if (key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => handleInput(event.key);

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [userInput]);

  const handleDelete = () => {
    setUserInput((prev) => (prev.slice(0, -1)));
  }


  const handleSubmit = () => {
    let pts = 0;
    // check if the word is at least 4 chars long
    if (userInput.length >= 4) {
      // check if all chars are in letters array
      if (!userInput.filter((char => !letters.includes(char) && char !== middle)).length) {
        // check if word has middle letter
        if (userInput.filter((char) => char === middle).length !== 0) {
          // check if word is in dictionary
          if (dictionary.includes(userInput.join(""))) {

            if (userInput.length > 4) {
              pts += userInput.length
            } else {
              pts += 1;
            }

            // check if word is in the panagrams arr
            if (pangrams.includes(userInput.join(""))) {
              // +7 extra points
              pts += 7;
              // message popup "Panagram!"
              // toast(`Panagram! ${pts}+`, {
              //   position: "top-center",
              //   autoClose: 2000,
              //   hideProgressBar: true,
              //   closeOnClick: false,
              //   pauseOnHover: false,
              //   draggable: false,
              //   progress: undefined,
              //   theme: "light",
              // });

              // ! Get rid of icon
              toast.warn(`Panagram! ${pts}+`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
              });
            } else { //else (not panagram but in wordlist)
              // +points
              let msg = "Good";

              if (userInput.length > 4) {
                msg = "Great";
                if (userInput.length >= 7) {
                  msg = "Excellent";
                }
              }

              toast(`${msg}! ${pts}+`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
              });
              // message popup "Good! / Great! / Excellent! etc"
              // message based on word length
            }
          } else {//else (not in word list / not valid word)
            //message popup "Not in word list"
            toast('Not in word list!', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "dark",
            });
          }
        } else { //else (missing middle letter)
          //message popup "Missing center letter"
          toast('Missing center letter!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
        }
      } else { //else (bad letters)
        toast('Bad letters!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
      }
    } else { //else (too short < 4)
      toast('Too short!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }

    setUserInput([])
  }

  return (
    <div id="board">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      // transition={Bounce}
      />
      <div id="inputBox">
        {userInput.map((char, index) => {
          let isValid = letters.includes(char) || middle === char;
          let isMiddle = char === middle;
          return (
            <span key={index} className={isValid ? isMiddle ? "char middle" : "char" : "char invalid"}>{char}</span>
          )
        })}
        <span id="cursor"></span>
      </div>
      <div className="grid">
        <div id="hive">
          <div
            onClick={() => handleInput(middle)}
            // onClick={() => setUserInput((prev) => [...prev, middle])}
            className="hive-cell center"
          >
            {middle}
          </div>
          {letters.map((letter, index) => {
            return (
              <div
                key={index}
                onClick={() => handleInput(letter)}
                // onClick={() => setUserInput((prev) => [...prev, letter])}
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
            <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" /></svg>
        </button>
        <button className="btn" onClick={() => handleSubmit()}>Enter</button>
      </div>
    </div>
  );
};

export default Board;
