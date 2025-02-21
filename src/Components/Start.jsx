import React from 'react';

const Start = () => {
  return (
    <div id="start">
      <div className="logo">
        Logo
      </div>
      <h1 className="title">Spelling Bee</h1>
      <h2 className="subtitle">How many words can you make with 7 letters?</h2>
      <div className="btn-container">
        <div className="btn" onClick={() => console.log("play")}>
          Play
        </div>
      </div>
    </div>
  )
}

export default Start