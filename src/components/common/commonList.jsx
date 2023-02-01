import React from "react";
import "./commonList.scss";
import "./commonList_mobile.scss";
import { commonSymbolData } from "../template/symbol/data/commonSymbolData";

const CommonList = ({ setTemplate, zodiacLimit }) => {
  const commonId = Object.keys(commonSymbolData);
  const commonOption = Object.values(commonSymbolData);
  commonId.forEach((element, index) => {
    commonOption[index].id = element;
  });

  function commonRule(limit) {
    return zodiacLimit >= limit ? "available" : null;
  }

  return (
    <div className="commonContainer">
      <div className="commonList">
        {commonOption.map((item, index) => {
          return (
            <div
              className={`commonOption ${commonRule(item.limit)}`}
              key={index}
              onClick={() => {
                commonRule(item.limit) === "available"
                  ? setTemplate(item.id)
                  : console.log("前置點數不足");
              }}
            >
              {item.id}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommonList;
