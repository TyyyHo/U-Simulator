import React from "react";
import "./signBoard.scss";

import { dotData } from "../dot/dotData";

const signBoard = ({ isSymbol, template }) => {
  return (
    <div id="signBoard">
      <div id="triangleL"></div>
      <div id="rectangle"></div>
      <div id="triangleR"></div>
      <div className="content">
        <div>{isSymbol === true ? template : dotData[template].id}</div>
      </div>
    </div>
  );
};

export default signBoard;
