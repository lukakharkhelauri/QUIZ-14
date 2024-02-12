import React, { useState } from 'react';
import classes from '../modules/Index.module.scss'
import Question from './Question'
import { quizData } from '../quizData/QuizData';


function Quiz() {
    const [question, setQuestion] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)

    const nextQuestionHandler = () => {
        setQuestion((prev) => prev + 1);
    }

    const correctAnswerHandler = () => {
        setCorrectAnswers((prev) => prev + 1)
    }
  
    return (
      <>
        <div className={classes['quiz']}>
            {question < quizData.length ? (
                <Question 
                questionData={quizData[question]}
                onNextQuestion={nextQuestionHandler}
                onCorrectAnswer={correctAnswerHandler}
                />
                
            ) : (
                <div className={classes['quiz-finish']}>
                    <h6>Quiz is done!  Your score: {correctAnswers}/{quizData.length}</h6>
                </div>
            )}
        </div>
      </>
    )
  }
  
  export default Quiz
  