import { useState } from "react";

import Start from "./Components/Start";
import Loading from "./Components/Loading";
import Game from "./Components/Game";
import Score from "./Components/Score";

function App() {
  const [showStart, setShowStart] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const [letters, setLetters] = useState([]);
  const [middle, setMiddle] = useState("");
  const [dictionary, setDictionary] = useState([]);
  const [pangrams, setPangrams] = useState([]);
  const [ranks, setRanks] = useState({})
  // const [totalPoints, setTotalPoints] = useState(0);

  const [loading, setLoading] = useState(false);

  const shuffle = () => {
    const temp = [...letters];
    for (let i = temp.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[rand]] = [temp[rand], temp[i]];
    }
    // return temp;
    setLetters(temp)
  }

  const startGame = () => {
    setShowStart(false);
    setLoading(true);

    fetch("https://spelling-bee-api-jy7l.onrender.com")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        const {letters, middle, dictionary, pangrams, ranks} = data;
        setLetters(letters)
        setMiddle(middle)
        setDictionary(dictionary)
        setPangrams(pangrams)
        setRanks(ranks)
        // setTotalPoints(totalPoints)
      })

    setShowGame(true);
    setLoading(false);
  };

  return (
    <div id="container">
      {loading && <Loading />}
      { showStart && <Start startGame={startGame} /> }
      { showGame && <Game dictionary={dictionary} pangrams={pangrams} letters={letters} shuffle={shuffle} middle={middle} ranks={ranks} />}
      { showScore && <Score />}
    </div>
  );
}

export default App;
