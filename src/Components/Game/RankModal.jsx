import React from 'react'

const RankModal = ({ setShowModal, currPoints, currRank, ranks }) => {
  return (
    <div className="modal" >
      <div id='rankModal' onClick={(e) => e.stopPropagation()}>
        <div className='close' onClick={() => setShowModal(false)}>X</div>
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