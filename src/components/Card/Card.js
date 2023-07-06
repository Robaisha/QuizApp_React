import React from "react";
import { useState } from "react";
import quizArray from "../../mockData/QuizData";
const Card = (props) => {
  
  let {submitAnswer,card:{questionId, questionText, answerArray }}=props

  const [selectedAnswer,setSelectedAnswer]=useState(false)

  const handleClick = (questionId, answerId) => {
    setSelectedAnswer(answerId);
    submitAnswer(questionId, answerId)
  };

  return (
    <div>
      <div className="card">
        <div>Question No {questionId} / {quizArray.length}</div>
        <div className="question">{questionText}</div>
        {answerArray.map((obj,index) => {
          return (
            <button key={index} className="answerBtn" onClick={() => handleClick(questionId, obj.answerId)}>
              {obj.answer}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
