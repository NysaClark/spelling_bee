import { useState } from "react";

import Start from "./Components/Start";
import Loading from "./Components/Loading";
import Game from "./Components/Game";
import Score from "./Components/Score";

function App() {
  const [showStart, setShowStart] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const [loading, setLoading] = useState(false);

  const startGame = () => {
    setShowStart(false);
    setLoading(true);


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
