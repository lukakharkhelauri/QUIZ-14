import React, { useState } from 'react';
import classes from '../modules/Index.module.scss'
import { quizData } from '../quizData/QuizData';

function Question({ questionData, onNextQuestion, onCorrectAnswer}) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const optionClickHnadler = (option) => {
        setSelectedAnswer(option);
        setIsCorrect(option === questionData.correctAnswer);

        if (option === questionData.correctAnswer) {
            onCorrectAnswer()
        }
    }

    const handleNextClick = () => {
        setSelectedAnswer(null);
        setIsCorrect(null);
        onNextQuestion();
      };

  
    return (
      <>
        <div className={classes['question']}>
            <h6>{questionData.question}</h6>
                <ul>
                    {questionData.options.map((option, index) => (
                        <li
                            key={index}
                            className={`${
                            selectedAnswer === option ? 'selected' : ''
                            } ${isCorrect !== null && option === questionData.correctAnswer ? 'correct' : ''}`}
                            onClick={() => optionClickHnadler(option)}
                        >
                            {option}
                         </li>
                    ))}
                </ul>
            <button onClick={handleNextClick} disabled={selectedAnswer === null}>Next Question</button>
        </div>
      </>
    )
  }
  
  export default Question
  