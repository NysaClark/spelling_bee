import { useState, useEffect } from "react";

import Start from "./Components/Start";
import Loading from "./Components/Loading";
import Game from "./Components/Game";
import Score from "./Components/Score";

function App() {
  const [showStart, setShowStart] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const [loading, setLoading] = useState(false);

  const [letters, setLetters] = useState([]);
  const [middle, setMiddle] = useState("");
  const [dictionary, setDictionary] = useState([]);
  const [pangrams, setPangrams] = useState([]);
  const [ranks, setRanks] = useState({});

  const [totalPoints, setTotalPoints] = useState(0);

  const [currRank, setCurrRank] = useState("beginner");
  const [currPoints, setCurrPoints] = useState(0);

  const [wordsFound, setWordsFound] = useState([
  ])

  const [continueGame, setContinueGame] = useState(false);


  const shuffle = () => {
    const temp = [...letters];
    for (let i = temp.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[rand]] = [temp[rand], temp[i]];
    }
    // return temp;
    setLetters(temp);
  };

  const startGame = async () => {
    setShowStart(false);
    setLoading(true);

    await fetch("https://spelling-bee-api-jy7l.onrender.com")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const { letters, middle, dictionary, pangrams, ranks, totalPoints } =
          data;
        setLetters(letters);
        setMiddle(middle);
        setDictionary(dictionary);
        setPangrams(pangrams);
        setRanks(ranks);
        setTotalPoints(totalPoints);
      })
      .catch((err) => {
        console.log(err);
      });

    setShowGame(true);
    setLoading(false);
  };

  const restartGame = async() => {
    setShowScore(false)
    setShowGame(false)

    setCurrRank("beginner");
    setCurrPoints(0);
    setWordsFound([]);
    setContinueGame(false);
    await startGame()
  }

  return (
    <div id="container">
      {loading && <Loading />}
      {showStart && <Start startGame={startGame} />}
      {showGame && (
        <Game
          dictionary={dictionary}
          pangrams={pangrams}
          letters={letters}
          shuffle={shuffle}
          middle={middle}
          ranks={ranks}
          totalPoints={totalPoints}
          setShowScore={setShowScore}
          // setShowGame={setShowGame}
          currRank={currRank}
          setCurrRank={setCurrRank}
          currPoints={currPoints}
          setCurrPoints={setCurrPoints}
          wordsFound={wordsFound}
          setWordsFound={setWordsFound}
          continueGame={continueGame}
        />
      )}
      {showScore &&
      <Score
        currPoints={currPoints}
        totalPoints={totalPoints}
        setShowScore={setShowScore}
        currRank={currRank}
        wordsFound={wordsFound}
        setContinueGame={setContinueGame}
        restartGame={restartGame}
      />}
    </div>
  );
}

export default App;
