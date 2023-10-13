import React from "react";
const Display = (props) => {
  
  return (
    <>
      <div className="gameBox">
        <div className="gameDisp" id="gdisp1">
          <h1>{props.first}</h1>
        </div>
        <div className="gameDisp" id="gdisp2">
          <h1>{props.second}</h1>
        </div>
        <div className="gameDisp" id="gdisp3">
          <h1>{props.third}</h1>
        </div>
        <div className="res">
        <h1>{props.result}</h1>
      </div>
      </div>
    </>
  );
};

export default Display;
