import React from "react";
import { useState } from "react";
import "./instruction.scss";
import "./instruction_mobile.scss";

import { ReactComponent as DotImg } from "../svg/dot/dot.svg";
import { ReactComponent as SymbolImg } from "../svg/symbol/atom.svg";

const Instruction = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="instruction">
      <img
        src="/img/instruction/question2.png"
        alt="instruction"
        onClick={() => setDisplay(!display)}
      />
      <div className="rwdContainer">

      
      <div className={`${display} instructionText`} onClick={() => setDisplay(!display)} >
        <div className="textContainer">
          <ul>
            <li>
              點擊下方導覽列可以切換所在的星系，每個星系有多個星團，每個星團有不同主題的屬性。
            </li>
            <li>
              點擊畫面中央的星團可進入並點選恆星來獲取屬性，每選取一個恆星消耗一點特性點數，上限100點。
            </li>
            <li>
              一般星系無配置上限，但有各自的進入門檻：
              <ul>
                <pre>
                  <li>I   :無限制</li>
                  <li>II  :至少配置5點特性</li>
                  <li>III :至少配置10點特性</li>
                  <li>IV  :至少配置15點特性</li>
                  <li>V   :至少配置29點特</li>
                  <li>VI  :至少配置36點特性</li>
                  <li>VII :至少配置52點特性</li>
                  <li>VIII:至少配置61點特性</li>
                  <li>IX  :至少配置80點特性</li>
                </pre>
              </ul>
            </li>

            <li>
              專精星團門檻及上限:
              <ul>
                <li>專精一階(上限7點) : 至少配置22點特性</li>
                <li>專精二階(上限7點) : 至少配置45點特性且專精一階配置7點</li>
                <li>專精三階(上限9點) : 至少配置70點特性且專精二階配置7點</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="sContainer">
          <div className="symbol">
            <SymbolImg className="symbolImg chosen" />
            :已有配置特性
          </div>
          <div className="symbol">
            <SymbolImg className="symbolImg available" />
            :可以配置特性
          </div>
          <div className="symbol">
            <SymbolImg className="symbolImg unavailable" />
            :未達門檻
          </div>
        </div>
        <div className="dContainer">
          <div className="dot">
            <DotImg className="dotImg chosen" />
            :已被選取
          </div>
          <div className="dot">
            <DotImg className="dotImg available" />
            :可被選取
          </div>
          <div className="dot">
            <DotImg className="dotImg unavailable" />
            :不可被選取
          </div>
        </div>
        <br />
        <div className="remark">{"〈點擊本視窗任意處關閉〉"}</div>
      </div>
      </div>
    </div>
  );
};

export default Instruction;
