import { useEffect, useState } from "react";
//const [interval,setInterval]=useState(0)
const Timer = () => {
  let timeLeft = 10;
  useEffect(()=>{
    const interval = setInterval(function () {
      return (
        <div>
          {timeLeft <= 0 ? (
            
            <div>Finished</div>
          ) : (
            <div>{timeLeft} seconds remaining</div>
          )}
        </div>
      );
      timeLeft -= 1;
    }, 1000);
    return()=>clearInterval(interval);
  })
};
export default Timer;
