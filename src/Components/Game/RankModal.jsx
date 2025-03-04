import React from 'react'

const RankModal = ({ setShowModal, currPoints, currRank, ranks }) => {
  return (
    <div className="modal" >
      <div id='rankModal' onClick={(e) => e.stopPropagation()}>
        <div className='close' onClick={() => setShowModal(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </div>
        <h2 className='title'>Rankings</h2>
        <p className='subtitle'>Ranks are based on a percentage of possible points in a puzzle.</p>
        <table id='ranking'>
          <thead>
            <tr className='row'>
              <th></th>
              <th className='rank'>Rank</th>
              <th></th>
              <th className='minScore'>Minimum score</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(ranks).reverse().map((rank, index) => {
              let nextRank = Object.keys(ranks).reverse()[index - 1] || false;
              let isFilled = currPoints >= ranks[rank].points;
              let isGenius = rank === "genius";

              return (
                <tr key={index} className={currRank === rank ? "row currRank" : isFilled ? "row faded" : "row"}>
                  <td className={isGenius ? isFilled ? 'progress square filled' : "progress square" : isFilled ? 'progress filled' : "progress"}>
                    {currRank === rank ? currPoints : ""}
                  </td>
                  <td className='rank'>
                    {(currRank === rank && currRank !== "genius") ?
                      <>
                        <div>{rank}</div>
                        <div>{ranks[nextRank].points - currPoints} points to next rank, {ranks['genius'].points - currPoints} to Genius</div>
                      </> :
                      <>
                        <div>{currRank === "genius" && isGenius ?
                          <><span>{rank}</span><span id='icon'>🎓</span></> : rank}
                        </div>
                      </>
                    }
                  </td>
                  <td></td>
                  <td className='minScore'>{ranks[rank].points}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RankModal