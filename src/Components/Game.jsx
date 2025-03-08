import React, { useState, useEffect } from 'react'
import RankStatus from './Game/RankStatus'
import WordList from './Game/WordList'
import Board from './Game/Board'

const Game = ({ letters, shuffle, middle, ranks, dictionary, pangrams, totalPoints, setShowScore }) => {
  const [currRank, setCurrRank] = useState("beginner");
  const [currPoints, setCurrPoints] = useState(0);

  const [expanded, setExpanded] = useState(false);

  const [wordsFound, setWordsFound] = useState([
  ])

  useEffect(() => {
    let newRank = "";
    Object.keys(ranks).forEach((rank) => {
      if (currPoints >= ranks[rank].points) {
        newRank = rank
      }
    })

    setCurrRank(newRank);

    if (currPoints >= totalPoints) { // reached total points game over!
      // TODO
      // setShowScore(true);
    }

  }, [currPoints])


  return (
    <div id='game'>
      <div className="section">
        <RankStatus currRank={currRank} currPoints={currPoints} ranks={ranks} />
        <WordList expanded={expanded} setExpanded={setExpanded} wordsFound={wordsFound} />
      </div>
      <div className="section">
        <Board
          middle={middle}
          letters={letters}
          shuffle={shuffle}
          dictionary={dictionary}
          pangrams={pangrams}
          wordsFound={wordsFound}
          setWordsFound={setWordsFound}
          setCurrPoints={setCurrPoints}
        />
      </div>
    </div>
  )
}

export default Game