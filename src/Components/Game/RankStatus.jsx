import React, {useState} from 'react'
import RankModal from './RankModal'

const RankStatus = ({ currPoints, currRank, ranks }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div id='rankStatus' onClick={() => setShowModal(true)}>
      {showModal && <RankModal setShowModal={setShowModal} currPoints={currPoints} currRank={currRank} ranks={ranks} /> }
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