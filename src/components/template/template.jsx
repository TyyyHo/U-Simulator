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
  zodiacPoints,
  setZodiacPoint,
  spPoints,
  setSpPoints,
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
              zodiacPoints={zodiacPoints}
              spPoints={spPoints}
            />
          ),
          false: (
            <>
              <Dot
                template={template}
                dotState={dotState}
                setDotState={setDotState}
                zodiacPoints={zodiacPoints}
                setZodiacPoint={setZodiacPoint}
                spPoints={spPoints}
                setSpPoints={setSpPoints}
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
