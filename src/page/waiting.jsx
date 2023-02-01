import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { defaultDotState } from "../dotState";

const Waiting = ({ setDotState }) => {
  // 抓取參數
  let { importStr } = useParams();

  // 利用參數修改dotState
  function setup() {
    let importArr = importStr.split(",");
    let importDotState = JSON.parse(JSON.stringify(defaultDotState));

    importArr.forEach((element) => {
      let tempArr = element.split("-");
      importDotState[tempArr[0]][`dot${tempArr[1]}`] = true;
    });

    setDotState(importDotState);
  }

  useEffect(() => {
    setup();
  });

  return (
    <div>
      waiting
      {<Navigate to="/" />}
    </div>
  );
};

export default Waiting;
