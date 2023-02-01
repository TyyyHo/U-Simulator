import React from "react";
import "./symbol.scss";
import "./position/combine.scss";

import { symbolData } from "./data/combineSymbolData";
import { dotData } from "../dot/dotData";

import { ReactComponent as SymbolImg } from "../../svg/symbol/atom.svg";

const Symbol = ({ template, setTemplate, dotState, zodiacLimit, spLimit }) => {
  // set up an array for line to map()
  let lineList = [];
  for (let index = 1; index <= symbolData[template].line; index++) {
    lineList.push(`line${index}`);
  }

  // 判定是否可被選取
  function isAvailable(target) {
    if (dotData[target].dotType === "sp") {
      let spClass = dotData[target].spClass;
      switch (spClass) {
        case 2:
          if (spLimit >= 7 && zodiacLimit >= 45) {
            return "available";
          }
          return;
        case 3:
          if (spLimit >= 14 && zodiacLimit >= 70) {
            return "available";
          }
          return;

        default:
          return "available";
      }
    }

    return "available";
  }

  // 判定symbol內是否有被選取
  function isActive(symbolName) {
    let dotStateToArr = Object.values(dotState[symbolName]);
    let isActive = dotStateToArr.some((element) => element === true);
    return isActive;
  }

  // 切換template
  function templateSwitch(target) {
    if (dotData[target].dotType === "sp") {
      let spClass = dotData[target].spClass;
      switch (spClass) {
        case 2:
          if (spLimit >= 7 && zodiacLimit >= 45) {
            setTemplate(target);
          }
          break;
        case 3:
          if (spLimit >= 14 && zodiacLimit >= 70) {
            setTemplate(target);
          }
          break;

        default:
          setTemplate(target);
          break;
      }

      return;
    }

    setTemplate(target);
  }

  return (
    <div className="rwdContainer">
      <div className={`symbolContainer symbol_${template}`}>
        {symbolData[template].symbol.map((item, index) => {
          return (
            <div
              key={index}
              id={item}
              className={`symbol ${isActive(item)}  ${isAvailable(item)}`}
              onClick={() => templateSwitch(item)}
            >
              <SymbolImg className="symbolImg" />
            </div>
          );
        })}

        {lineList.map((item, index) => {
          return <div key={index} id={item} className="line"></div>;
        })}
      </div>
    </div>
  );
};

export default Symbol;
