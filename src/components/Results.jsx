import React from 'react'

function Results(props) {
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        {/* variable name score in Question component */}
        Total Score:{props.totalscore}
      
    </div>
    <button id='next-button' onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default Results
