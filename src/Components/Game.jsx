import React, { useState } from 'react'
import RankStatus from './Game/RankStatus'
import WordList from './Game/WordList'
import Board from './Game/Board'

const Game = () => {
  const [currRank, setCurrRank] = useState("good");
  const [currPoints, setCurrPoints] = useState(11);

  const [expanded, setExpanded] = useState(true);

  const [wordsFound, setWordsFound] = useState([
    "thorn",
    "thrill",
  ])

  return (
    <div id='game'>
      <div className="section">
        <RankStatus currRank={currRank} currPoints={currPoints} />
        <WordList expanded={expanded} setExpanded={setExpanded} wordsFound={wordsFound} />
      </div>
      <div className="section">
        <Board />
      </div>
    </div>
  )
}

export default Game