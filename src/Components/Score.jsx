import React from 'react'

const Score = ({ currPoints, currRank, setShowScore, totalPoints, wordsFound, setContinueGame, restartGame }) => {
  // currPoints={currPoints} setShowScore={setShowScore} currRank={currRank}
  let isQueen = currPoints >= totalPoints;
  return (
    <div id='scoreboard'>
      <div id='scoreModal' onClick={(e) => e.stopPropagation()}>
        {!isQueen && <div className='close' onClick={() => {
          setShowScore(false);
          setContinueGame(true);
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
        </div>}
        <h2 className='title'>{isQueen ? "Queen Bee" : currRank}</h2>
        <div className='subtitle'>
          {isQueen ?
            <p>You found everything! All <span>{wordsFound.length} words</span>, worth <span>{currPoints} points</span>.</p>
            :
            <p>You reached the highest rank, with <span>{wordsFound.length} words</span> and <span>{currPoints} points</span>.</p>}
        </div>
        <div className="btn-container">
          {!isQueen && <button className="btn" onClick={() => {
            setContinueGame(true);
            setShowScore(false);
          }}>Keep Playing</button>}
          <button id='newGame' className="btn" onClick={() => restartGame()}>New Game</button>
        </div>
      </div>
    </div>
  )
}

export default Score