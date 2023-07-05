import React from "react";
import { useState } from "react";
const Card = (props) => {
  let {
    card: { questionId, questionText, answerArray },
  } = props;
  let {submitAnswer}=props
  const [isActive,setIsActive]=useState(false)
  const handleClick = event => {
    setIsActive(true);
  };
  return (
    <div>
      <div className="card">
        <div>Question No {questionId}</div>
        <div className="question">{questionText}</div>
        {answerArray.map((obj) => {
          return (
            <button className={isActive ? 'submit' : ''} onClick={() => submitAnswer(questionId, obj.answerId)}>
              {obj.answer}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
