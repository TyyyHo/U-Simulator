import React from "react";
import "./specializationList.scss";
import "./specializationList_mobile.scss";

import { SpSymbolData } from "../template/symbol/data/SpSymbolData";

const SpecializationList = ({
  setTemplate,
  dotState,
  zodiacLimit,
  spLimit,
  setAlertMsg,
}) => {
  const specializationOption = Object.keys(SpSymbolData);

  function spRule(target) {
    if (spLimit === 0) {
      return zodiacLimit >= 22 ? "available" : "underThreshold";
    }
    const firstSymbol = SpSymbolData[target].symbol[0];
    return dotState[firstSymbol].dot1 === true ? "available" : "spIsUnique";
  }

  return (
    <div className="spContainer">
      <div className="specializationList">
        {specializationOption.map((item, index) => {
          return (
            <div
              className={`specializationOption ${spRule(item)}`}
              key={index}
              onClick={() => {
                if (spRule(item) === "available") {
                  setTemplate(item);
                }
                if (spRule(item) === "underThreshold") {
                  setAlertMsg("至少需配置22點特性才能選擇專精");
                }
                if (spRule(item) === "spIsUnique") {
                  setAlertMsg("專精只能選擇一種");
                }
              }}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecializationList;
