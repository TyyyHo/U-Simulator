import React from "react";
import "./counter.scss";
import "./counter_mobile.scss";

const Counter = ({ zodiacPoints }) => {
  function isOver() {
    return zodiacPoints > 100 ? true : false;
  }

  return (
    <div className="counter">
      <div className={`${isOver()}`}>{`${zodiacPoints}`}</div>
      <div>{"/ 100"}</div>
    </div>
  );
};

export default Counter;
