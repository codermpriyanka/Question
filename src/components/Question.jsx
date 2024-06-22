import React, { useState } from 'react'
import {Quiz} from '../Quiz/Quiz'
import Results from './Results'

const Question=()=> {
  const [currentQuestion,setCurrentQuestion]=useState(0)
  const[optionClicked,setOptionClicked]=useState(0)
  const[score,setScore]=useState(0)
  const[showResult,setShowresult]=useState(false)

  const changeQuestion=()=>{
    updateScore()//call here for score
    if(currentQuestion<Quiz.length-1){//condition so that next will go til the number of question
    setCurrentQuestion(currentQuestion+1)//current question wiil be increment
    setOptionClicked(0)//to make it normal default
    }
  
  else{
    setShowresult(true);
  }
}

  const updateScore=()=>{
    if(optionClicked===Quiz[currentQuestion].answer){
      setScore(score+1)//score increment from state
    }
  }
  const resetAll=()=>{
    setShowresult(false)
    setCurrentQuestion(0)
    setOptionClicked(0)
    setScore(0)
  }

  return (
    <div>
     <div className='container'>
      {showResult?(
      <Results score={score}totalscore={Quiz.length} tryAgain={resetAll}/>
      //{score} is state value
      //score props pass here
      ):(
        <>
      <div className='Question-container'>
      <span id='question-number'>{currentQuestion+1}.</span>
      <span id='question-txt'>{Quiz[currentQuestion].question}</span>
      </div>
      <div className='Option-container'>
      {Quiz[currentQuestion].options.map((option,i)=>{
        return(
          <button 
           className={`option-btn ${optionClicked==i+1?"checked":null}`}
            key={i}//here index i is 1
            onClick={()=>setOptionClicked(i+1)}>{option}</button>   //option k index 0 se start h so here i+1 hua
        )
      })}
      </div>
      <input type='button' id='next-button'value="Next" onClick={changeQuestion}/>

    </>)}
      </div>
      </div>
  )
}

export default Question
