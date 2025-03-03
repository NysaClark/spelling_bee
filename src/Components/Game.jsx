import React, { useState } from 'react'
import RankStatus from './Game/RankStatus'
import WordList from './Game/WordList'
import Board from './Game/Board'

const Game = () => {
  const [currRank, setCurrRank] = useState("beginner");
  const [currPoints, setCurrPoints] = useState(1);

  const [expanded, setExpanded] = useState(false);

  const [wordsFound, setWordsFound] = useState([
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