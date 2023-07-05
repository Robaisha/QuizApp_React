import quizArray from "../../mockData/QuizData";
import React, { useState } from "react";
import Card from "../../components/QuizApp/card";
import Timer from "../../components/Timer/timer"
const QuizApp = () => {
  const [answerListByUser, setAnswerListByUser] = useState([]);
  const submitAnswer = (questionId, answerId) => {
    const obj = answerListByUser.find((obj) => obj.questionId == questionId);
    if (!obj) {
      const updatedList = [...answerListByUser, { questionId, answerId }];
      setAnswerListByUser(updatedList);
      console.log(answerListByUser);
    } else {
      const updatedArray = answerListByUser.map((item) => {
        if (item.questionId == questionId) {
          item.answerId = obj.answerId;
        }
        return item;
      });
      setAnswerListByUser(updatedArray);
    }
  };
  function calculateScore() {
    let score = 0;
    quizArray.forEach((obj, index) => {
      if (answerListByUser[index]?.answerId == obj.correctAnsId) {
        score += 1;
      }
    });
    console.log(score);
    return <div>Your overall Score is</div>;
  }  
  return (
    <div id="FirstDiv">
      <header>Quiz App</header>
      {quizArray.map((card) => {
        return <Card card={card} submitAnswer={submitAnswer} />;
      })}
      <button className="submitBtn" onClick={calculateScore}>
        Submit
      </button>
    </div>
  );
};
export default QuizApp;
