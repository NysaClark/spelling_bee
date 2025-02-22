import React from 'react'

const RankStatus = ({ currPoints, currRank }) => {
  const ranks = {
    "beginner": {
      id: 0,
      points: 0,
    },
    "good start": {
      id: 1,
      points: 2,
    },
    "moving up": {
      id: 2,
      points: 4,
    },
    "good": {
      id: 3,
      points: 7,
    },
    "solid": {
      id: 4,
      points: 13,
    },
    "nice": {
      id: 5,
      points: 22,
    },
    "great": {
      id: 6,
      points: 35,
    },
    "amazing": {
      id: 7,
      points: 44,
    },
    "genius": {
      id: 8,
      points: 62,
    },
  }

  return (
    <div id='rankStatus'>
      <h3 id='currRank'>{currRank}</h3>
      <div className="progressBar">
        {Object.keys(ranks).map((rank) => {
          let isFilled = currPoints >= ranks[rank].points;
          let isGenius = rank === "genius";

          return (
            <div key={ranks[rank].id} id={currRank === rank ? "curr" : ""} className={isGenius ? isFilled ? 'progress-dot square filled' : "progress-dot square" : isFilled ? 'progress-dot filled' : "progress-dot"}>
              {currRank === rank ? currPoints : ""}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RankStatus