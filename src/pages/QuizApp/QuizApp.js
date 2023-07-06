import quizArray from "../../mockData/QuizData";
import React, { useState } from "react";
import Card from "../../components/Card/Card";
import useTimer from "../../hooks/Timer/timer";

const QuizApp = () => {
  const [answerListByUser, setAnswerListByUser] = useState([]);
  const [cardNo, setCardNo] = useState(0);
  const [score, setScore] = useState(null);
  const [showScore, setShowScore] = useState(false);

  const { timeLeft } = useTimer(() => calculateScore(answerListByUser));

  const showNextCard = () => {
    setCardNo(cardNo + 1);
  };
  const storeDuplicateAnswer = (questionId, answerId) => {
    const obj = answerListByUser.find((obj) => obj.questionId == questionId);
    if (!obj) {
      const updatedList = [...answerListByUser, { questionId, answerId }];
      setAnswerListByUser(updatedList);
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
  const submitAnswer = (questionId, answerId) => {
    const updatedList = [...answerListByUser, { questionId, answerId }];
    setAnswerListByUser(updatedList);
    showNextCard();
    if (updatedList.length == quizArray.length) {
      calculateScore(updatedList);
    }
  };
  function calculateScore(updatedList) {
    let totalScore = 0;
    quizArray?.forEach((obj, index) => {
      if (updatedList[index]?.answerId == obj.correctAnsId) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
    setShowScore(true);
  }

  return (
    <div id="FirstDiv">
      <header>Quiz App</header>
      <div>
        {timeLeft <= 0 ? (
          <>
            <div>Finished</div>
            {showScore && (
              <div className="overallScore">Your overall Score is {score}</div>
            )}
          </>
        ) : (
          <>
            {showScore ? (
              <>
                <div>Finished</div>
                <div className="overallScore">
                  Your overall Score is {score}
                </div>
              </>
            ) : (
              <div>{timeLeft} seconds remaining</div>
            )}
            {quizArray.map((card, index) => {
              if (cardNo == index) {
                return (
                  <Card card={card} key={index} submitAnswer={submitAnswer} />
                );
              }
            })}
          </>
        )}
      </div>
    </div>
  );
};
export default QuizApp;
