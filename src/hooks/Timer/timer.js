import { useEffect, useState } from "react";
const useTimer = (timeEnd) => {
  const [timeLeft, setTimeLeft] = useState(10);
  
  useEffect(() => {
    const interval = setInterval(function () {
      setTimeLeft((prevtime) => prevtime - 1);
    }, 1000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    if (timeLeft <= 0) {
      timeEnd();
    }
  }, [timeLeft]);
  return { timeLeft ,setTimeLeft};
};
export default useTimer;
