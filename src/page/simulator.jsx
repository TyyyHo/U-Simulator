import { React, useEffect, useState } from "react";

import Template from "../components/template/template";
import SpecializationList from "../components/specialization/specializationList";
import CommonList from "../components/common/commonList";
import Port from "../components/port/port";
import Counter from "../components/counter/counter";
import Instruction from "../components/instruction/instruction";
import Alert from "../components/alert/alert";

function Simulator({ dotState, setDotState }) {
  const [template, setTemplate] = useState("I");
  const [alertMsg, setAlertMsg] = useState("");
  const [zodiacLimit, setZodiacLimit] = useState(0);
  const [spLimit, setSpLimit] = useState(0);

  function dotInit() {
    let count = 0;
    let spCount = 0;
    // 物件轉陣列
    let detectObj = Object.values(dotState);

    // 若dotState中，dot的值為true，則將zodiacLimit+1；若為專精則spLimit也+1
    detectObj.forEach((element) => {
      Object.values(element).forEach((e) => {
        if (e === true) {
          count += 1;

          if (element.type === "sp") {
            spCount += 1;
          }
        }
      });
    });
    setZodiacLimit(count);
    setSpLimit(spCount);
  }

  useEffect(() => {
    dotInit();
  });

  return (
    <div className="App">
      <Template
        template={template}
        setTemplate={setTemplate}
        dotState={dotState}
        setDotState={setDotState}
        zodiacLimit={zodiacLimit}
        setZodiacLimit={setZodiacLimit}
        spLimit={spLimit}
      />
      <SpecializationList
        setTemplate={setTemplate}
        dotState={dotState}
        zodiacLimit={zodiacLimit}
        spLimit={spLimit}
        setAlertMsg={setAlertMsg}
      />
      <CommonList
        setTemplate={setTemplate}
        zodiacLimit={zodiacLimit}
        setAlertMsg={setAlertMsg}
      />
      <Port
        setTemplate={setTemplate}
        dotState={dotState}
        setDotState={setDotState}
        setZodiacLimit={setZodiacLimit}
        setSpLimit={setSpLimit}
      />
      <Counter zodiacLimit={zodiacLimit} />
      <Instruction />
      <Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
    </div>
  );
}

export default Simulator;
