import React from "react";
import "./counter.scss";
import "./counter_mobile.scss";

const Counter = ({ zodiacLimit }) => {
  function isOver() {
    return zodiacLimit > 100 ? true : false;
  }

  return (
    <div className="counter">
      <div className={`${isOver()}`}>{`${zodiacLimit}`}</div>
      <div>{"/ 100"}</div>
    </div>
  );
};

export default Counter;
