import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { defaultDotState } from "../dotState";

const Pending = ({ dotState, setDotState, setZodiacPoint, setSpPoints }) => {
  // 抓取參數
  let { importStr } = useParams();

  // 利用參數修改dotState
  useEffect(() => {
    function setup() {
      //set dotState
      let importArr = importStr.split(",");
      let importDotState = JSON.parse(JSON.stringify(defaultDotState));

      importArr.forEach((element) => {
        let tempArr = element.split("-");
        importDotState[tempArr[0]][`dot${tempArr[1]}`] = true;
      });
      setDotState(importDotState);

      // set counter
      let arrForCount = Object.values(importDotState);
      let count = 0;
      let spCount = 0;
      arrForCount.forEach((element) => {
        Object.values(element).forEach((e) => {
          if (e === true) {
            count += 1;

            if (element.type === "sp") {
              spCount += 1;
            }
          }
        });
      });

      setZodiacPoint(count);
      setSpPoints(spCount);
    }

    setup();
  });

  return (
    <div>
      Pending
      {<Navigate to="/" />}
    </div>
  );
};

export default Pending;
