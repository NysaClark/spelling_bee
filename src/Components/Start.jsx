import React from 'react';
import logo from "../bee-icon.png"

const Start = ({ startGame }) => {
  return (
    <div id="start">
      <div className="logo">
        <img src={logo} alt="Bee Logo" />
      </div>
      <h1 className="title">Spelling Bee</h1>
      <h2 className="subtitle">How many words can you make with 7 letters?</h2>
      <div className="btn-container">
        <div className="btn" onClick={() => startGame()}>
          Play
        </div>
      </div>
    </div>
  )
}

export default Start