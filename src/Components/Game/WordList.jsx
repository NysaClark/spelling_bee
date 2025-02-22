import React from 'react'

const WordList = ({ setExpanded, expanded, wordsFound }) => {
  return (
    <div id='wordList' className={expanded ? "expanded" : ""}>
      <div className="header">
        {(expanded || wordsFound.length === 0) && <div className="wordCount">You have found {wordsFound.length} word{wordsFound.length === 0 || wordsFound > 1 ? "s" : ""}</div>}

        {(!expanded && wordsFound.length > 0) &&
          <div className="listPreview">
            {wordsFound.reverse().map((word, index) => {
              return (
                <div className='word' key={index}>{word}</div>
              )
            })}
          </div>
        }

        <div className="dropdown-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ?
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          }
        </div>
      </div>
      <div className={expanded ? "list expanded" : "list"}>
        {wordsFound.reverse().map((word, index) => {

          return (
            <div className='word' key={index}>{word}</div>
          )
        })}
      </div>
    </div>
  )
}

export default WordList