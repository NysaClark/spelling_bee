import React, { useState } from 'react'
import RankStatus from './Game/RankStatus'
import WordList from './Game/WordList'
import Board from './Game/Board'

const Game = ({letters, shuffle, middle, ranks}) => {
  const [currRank, setCurrRank] = useState("beginner");
  const [currPoints, setCurrPoints] = useState(1);

  const [expanded, setExpanded] = useState(false);

  const [wordsFound, setWordsFound] = useState([
  ])

  return (
    <div id='game'>
      <div className="section">
        <RankStatus currRank={currRank} currPoints={currPoints} ranks={ranks} />
        <WordList expanded={expanded} setExpanded={setExpanded} wordsFound={wordsFound} />
      </div>
      <div className="section">
        <Board middle={middle} letters={letters} shuffle={shuffle} />
      </div>
    </div>
  )
}

export default Game