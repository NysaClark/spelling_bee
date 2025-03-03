import { useState } from "react";

import Start from "./Components/Start";
import Loading from "./Components/Loading";
import Game from "./Components/Game";
import Score from "./Components/Score";

import gamesList from "./games.json";
import pangramsList from "./pangrams.json";

function App() {
  const [showStart, setShowStart] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const [letters, setLetters] = useState([]);
  const [middle, setMiddle] = useState("");
  const [dictionary, setDictionary] = useState([]);
  const [pangrams, setPangrams] = useState([]);

  const [loading, setLoading] = useState(false);

  const startGame = () => {
    setShowStart(false);
    setLoading(true);

    const randomGame = gamesList[Math.floor(Math.random() * 17589)]
  
    setLetters(randomGame.char)
    setMiddle(randomGame.middle)
    setDictionary(randomGame.dictionary)
    setPangrams(pangramsList[randomGame.id.split("_")[0]]);

    setShowGame(true);
    setLoading(false);
  };

  return (
    <div id="container">
      {loading && <Loading />}
      { showStart && <Start startGame={startGame} /> }
      { showGame && <Game />}
      { showScore && <Score />}
    </div>
  );
}

export default App;
