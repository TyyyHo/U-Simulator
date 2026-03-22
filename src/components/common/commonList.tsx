import React from "react";
import "./commonList.css";
import "./commonList_mobile.css";
import "../shared/listBase.css";
import "../shared/listBase_mobile.css";
import { commonSymbolData } from "../template/symbol/data/commonSymbolData";

const CommonList = ({ setTemplate, zodiacPoints, setAlertMsg }) => {
  const commonOption = Object.entries(commonSymbolData).map(([id, option]) => ({
    ...option,
    id,
  }));

  function commonRule(limit) {
    return zodiacPoints >= limit ? "available" : null;
  }

  function commonClick(limit, id) {
    if (commonRule(limit) === "available") {
      setTemplate(id);
      return;
    }
    setAlertMsg(`至少需配置${limit}點特性才能啟用該星系`);
  }

  return (
    <div className="commonContainer">
      <div className="commonList">
        {commonOption.map((item, index) => {
          return (
            <div
              className={`commonOption ${commonRule(item.limit)}`}
              key={index}
              onClick={() => commonClick(item.limit, item.id)}
            >
              <span>{item.id}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommonList;
