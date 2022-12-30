import React, {useState,useContext} from 'react'
import questions from '../questions'
import './QuestionBox.css'
// import {ToggleTheme} from '../App'

export default function QuestionBox() {
  // const theme = useContext(ToggleTheme)
  // const themeStyle={
  //   backgroundColor: theme ? "gray" : "white",
  //   text: theme ? "Light" : "Dark"
  // }
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  return (
    <div className='container'>
      <div className='app'>
      {showScore ? (
        <>
            <div className='score'>
              <p>You scored {score} out of {questions.length}</p>
            </div>
        </>
      ) : (
        <>
            <div className='nav'>
              <h1>Kalvium</h1>
              <button>Light</button>
            </div>
            <div className='box'>
              <h1>Question: {questions[currentQuestion + 1].options.id}</h1>
              <p>{questions[currentQuestion].text}</p>
              <div className='option-box'>
                <div className='options'>
                  {questions[currentQuestion].options.map((options)=>(<button onClick={()=>{handleAnswerOptionClick(options.isCorrect)}}>{options.text}</button>))}
                </div>
              </div>
              <div className='buttons'>
                <button> Highlight </button>
                <button> UnHighlight </button>
              </div>
            </div>
        </>
      )}
    </div>
    </div>  
  )
}
