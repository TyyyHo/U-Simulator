import React from "react";
import "./commonList.scss";
import "./commonList_mobile.scss";
import { commonSymbolData } from "../template/symbol/data/commonSymbolData";

const CommonList = ({ setTemplate, zodiacPoints, setAlertMsg }) => {
  const commonId = Object.keys(commonSymbolData);
  const commonOption = Object.values(commonSymbolData);
  commonId.forEach((element, index) => {
    commonOption[index].id = element;
  });

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
