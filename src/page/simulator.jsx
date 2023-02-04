import { useState } from "react";

import { defaultDotState } from "../dotState";

import Template from "../components/template/template";
import SpecializationList from "../components/specialization/specializationList";
import CommonList from "../components/common/commonList";
import Port from "../components/port/port";
import Counter from "../components/counter/counter";
import Instruction from "../components/instruction/instruction";
import Alert from "../components/alert/alert";

function Simulator({
  dotState,
  setDotState,
  zodiacPoints,
  setZodiacPoint,
  spPoints,
  setSpPoints,
}) {
  const [template, setTemplate] = useState("I");
  const [alertMsg, setAlertMsg] = useState("");

  function reset(setBarState) {
    setDotState(defaultDotState);
    setZodiacPoint(0);
    setSpPoints(0);
    setBarState("none");
    setTemplate("I");
  }

  function FnImport(url, setBarState) {
    //set dotState
    let importStr = decodeURIComponent(
      url.replace("https://ud-simulator.web.app/", "")
    );
    let importArr = importStr.split(",");
    let importDotState = {
      ...defaultDotState,
    };

    importArr.forEach((element) => {
      let tempArr = element.split("-");
      importDotState[tempArr[0]][`dot${tempArr[1]}`] = true;
    });

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

    // 修改dotState並回首頁
    setDotState(importDotState);
    setBarState("none");
    setTemplate("I");
  }

  return (
    <div className="App">
      <Template
        template={template}
        setTemplate={setTemplate}
        dotState={dotState}
        setDotState={setDotState}
        zodiacPoints={zodiacPoints}
        setZodiacPoint={setZodiacPoint}
        spPoints={spPoints}
        setSpPoints={setSpPoints}
      />
      <SpecializationList
        setTemplate={setTemplate}
        dotState={dotState}
        zodiacPoints={zodiacPoints}
        spPoints={spPoints}
        setAlertMsg={setAlertMsg}
      />
      <CommonList
        setTemplate={setTemplate}
        zodiacPoints={zodiacPoints}
        setAlertMsg={setAlertMsg}
      />
      <Port
        dotState={dotState}
        reset={reset}
        FnImport={FnImport}
      />
      <Counter zodiacPoints={zodiacPoints} />
      <Instruction />
      <Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
    </div>
  );
}

export default Simulator;
