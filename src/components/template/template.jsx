import React from "react";
import "./template.scss";
import "./template_mobile.scss";

import { symbolList } from "./symbolList";

import Dot from "./dot/dot";
import Symbol from "./symbol/symbol";
import ReturnBtn from "./returnBtn/returnBtn";
import SignBoard from "./signBoard/signBoard";

const Template = ({
  template,
  setTemplate,
  dotState,
  setDotState,
  zodiacLimit,
  setZodiacLimit,
  spLimit,
  setSpLimit,
}) => {

  // isDot
  let isSymbol = symbolList.some((element) => element === template);

  return (
    <div className="template">
      <SignBoard isSymbol={isSymbol} template={template} />
      {
        {
          true: (
            <Symbol
              template={template}
              setTemplate={setTemplate}
              dotState={dotState}
              zodiacLimit={zodiacLimit}
              spLimit={spLimit}
            />
          ),
          false: (
            <>
              <Dot
                template={template}
                dotState={dotState}
                setDotState={setDotState}
                zodiacLimit={zodiacLimit}
                setZodiacLimit={setZodiacLimit}
                spLimit={spLimit}
                setSpLimit={setSpLimit}
              />
              <ReturnBtn template={template} setTemplate={setTemplate} />
            </>
          ),
        }[isSymbol]
      }
    </div>
  );
};

export default Template;
