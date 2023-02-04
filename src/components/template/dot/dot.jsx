import React, { useState } from "react";
import "./dot.scss";
import "./position/combine.scss";

import { dotData } from "./dotData";

import { ReactComponent as DotImg } from "../../svg/dot/dot.svg";

const Dot = ({
  template,
  dotState,
  setDotState,
  zodiacPoints,
  setZodiacPoint,
  spPoints,
  setSpPoints,
}) => {
  // set up an array for line to map()
  let lineList = [];
  for (let index = 1; index <= dotData[template].line; index++) {
    lineList.push(`line${index}`);
  }

  // 根據dotState判定dot可選與否
  function isAvailable(connectDot, dotId) {
    if (dotState[template][dotId] === true) {
      return "chosen";
    }

    // 專精點數限制(專精1,2限7點 / 專精3限9點)
    if (dotData[template].dotType === "sp") {
      let spLimited = dotData[template].spClass === 3 ? 9 : 7;
      let count = 0;
      Object.values(dotState[template]).forEach((element) => {
        element === true ? (count += 1) : (count += 0);
      });
      if (count === spLimited) {
        return "unavailable";
      }
    }

    // 起始點或連結點已選取則可以被點擊
    let isSelectable = connectDot.some(
      (element) =>
        element === "startingPoint" ||
        dotState[template][`dot${element}`] === true
    );
    return isSelectable === true ? "available" : "unavailable";
  }

  // DotState狀態改動
  function changeState(isAvailable, template, dotId) {
    // ES6之後版本
    let newState = {
      ...dotState,
      [template]: { ...dotState[template] },
    };
    //ES5(含5)以前
    // let newState = JSON.parse(JSON.stringify(dotState))
    switch (isAvailable) {
      case "available":
        newState[template][dotId] = true;
        setZodiacPoint(zodiacPoints + 1);
        dotData[template].dotType === "sp" ? setSpPoints(spPoints + 1) : console.log("");
        setDotState(newState);
        break;
      case "chosen":
        newState[template][dotId] = false;
        setZodiacPoint(zodiacPoints - 1);
        dotData[template].dotType === "sp" ? setSpPoints(spPoints - 1) : console.log("");
        setDotState(newState);
        break;

      default: // dot不可被點選時，不執行任何指令
        break;
    }
  }
  // 專有名詞是否可被點選
  function isPointer(text) {
    return text !== undefined ? "isPointer" : "notPointer";
  }

  // 專有名詞點選顯示註釋
  const [noteText, setNoteText] = useState([]);
  const [isShow, setIsShow] = useState("hide");

  function changeNoteText(text) {
    if (text !== undefined) {
      setIsShow("show");
      setNoteText(text);
      return;
    }
    setIsShow("hide");
    setNoteText([]);
  }

  return (
    <div className="rwdContainer">
      <div className={`dotContainer dot_${template}`}>
        {/* 專有名詞註釋欄位 */}
        <div
          className={`noteText ${isShow}`}
          onClick={() => changeNoteText(undefined)}
        >
          {noteText.map((item, i) => {
            return <div key={i}>{item}</div>;
          })}
          <div className="remark">{"〈點擊本視窗任意處關閉〉"}</div>
        </div>

        {/* Dot本體+文字 */}
        {dotData[template].dot.map((item, index) => {
          return (
            <div key={index} id={`dot${index + 1}`} className="dot">
              <DotImg
                className={`dotImg ${isAvailable(
                  item.connectDot,
                  `dot${index + 1}`
                )}`}
                onClick={() => {
                  changeState(
                    `${isAvailable(item.connectDot, `dot${index + 1}`)}`,
                    template,
                    `dot${index + 1}`
                  );
                }}
              />
              <div
                className={`text_container ${isPointer(item.noteText)}`}
                onClick={() => changeNoteText(item.noteText)}
              >
                {item.text.map((innerItem, i) => {
                  return (
                    <div key={i} className="text">
                      {innerItem}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* 連接線 */}
        {lineList.map((item, index) => {
          return <div key={index} id={item} className="line"></div>;
        })}
      </div>
    </div>
  );
};

export default Dot;
