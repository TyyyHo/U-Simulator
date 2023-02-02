import React from "react";
import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Simulator from "./page/simulator";
import Pending from "./page/pending";

import { defaultDotState } from "./dotState";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { firebase } from "./firebaseConfig";

function App() {
  firebase(initializeApp, getAnalytics);
  const [dotState, setDotState] = useState(defaultDotState);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Simulator dotState={dotState} setDotState={setDotState} />
              }
            />
            <Route
              path={`:importStr`}
              element={<Pending setDotState={setDotState} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
