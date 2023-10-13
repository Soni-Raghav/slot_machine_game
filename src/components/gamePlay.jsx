import React, { useState } from "react";
import Display from "./Display";
const GamePlay = () => {
  const [firstNum, setFirstNum] = useState();
  const [secondNum, setSecondNum] = useState();
  const [thirdNum, setThirdNum] = useState();
    const[result,setRes]=useState("");
  function myFunction() {
    setFirstNum(Math.floor(Math.random() * 3));

    setSecondNum(Math.floor(Math.random() * 3));

    setThirdNum(Math.floor(Math.random() * 3));
    
    if ((firstNum === secondNum) &&( secondNum === thirdNum)) {
      setRes("Jackpot Win..")
    } else {
      setRes("No Win!..");
    }
  }

  return (
    <>
      <Display first={firstNum} second={secondNum} third={thirdNum} result={result} />
      
      <div className="gamePlay">
        <button type="button" id="playBtn" onClick={myFunction}>
          Play
        </button>
      </div>
    </>
  );
};
export default GamePlay;
