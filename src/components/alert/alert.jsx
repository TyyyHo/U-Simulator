import React from "react";
import "./alert.css";
import "./alert_mobile.css";

const Alert = ({ alertMsg, setAlertMsg }) => {
  function animatmationActive() {
    return alertMsg !== "" ? "active" : "noAnimation";
  }

  return (
    <div
      className={`alert ${animatmationActive()}`}
      onAnimationEnd={() => setAlertMsg("")}
    >
      <div>{`${alertMsg}！`}</div>
    </div>
  );
};

export default Alert;
