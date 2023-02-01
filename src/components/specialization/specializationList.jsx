import React from "react";
import "./specializationList.scss";
import "./specializationList_mobile.scss";

import { SpSymbolData } from "../template/symbol/data/SpSymbolData";

const SpecializationList = ({
  setTemplate,
  dotState,
  zodiacLimit,
  spLimit,
}) => {
  const specializationOption = Object.keys(SpSymbolData);

  function spRule(target) {
    if (spLimit === 0) {
      return zodiacLimit >= 22 ? "available" : null;
    }
    const firstSymbol = SpSymbolData[target].symbol[0];
    return dotState[firstSymbol].dot1 === true ? "available" : null;
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
                spRule(item) === "available"
                  ? setTemplate(item)
                  : console.log("專精僅能選擇一類");
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecializationList;
