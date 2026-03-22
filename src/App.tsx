import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Simulator from "./page/simulator";
import Pending from "./page/pending";

import { defaultDotState } from "./dotState";

function App() {
  const [dotState, setDotState] = useState(defaultDotState);
  const [zodiacPoints, setZodiacPoint] = useState(0);
  const [spPoints, setSpPoints] = useState(0);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={
              <Simulator
                dotState={dotState}
                setDotState={setDotState}
                zodiacPoints={zodiacPoints}
                setZodiacPoint={setZodiacPoint}
                spPoints={spPoints}
                setSpPoints={setSpPoints}
              />
            }
          />
          <Route
            path="/:importStr"
            element={
              <Pending
                dotState={dotState}
                setDotState={setDotState}
                setZodiacPoint={setZodiacPoint}
                setSpPoints={setSpPoints}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
