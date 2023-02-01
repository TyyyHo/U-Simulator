import React from "react";
import "./returnBtn.scss";

import { dotData } from "../dot/dotData";
import { ReactComponent as Arrow } from "./returnArrow.svg";

const ReturnBtn = ({ template, setTemplate }) => {
  const previousPage = dotData[template].previous;
  return (
    <div id="returnBtn" onClick={() => setTemplate(previousPage)}>
      <Arrow />
    </div>
  );
};

export default ReturnBtn;
