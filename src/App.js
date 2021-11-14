import React, { useState, useMemo } from "react";
import "./App.css";
import UseMemoS from "./componets/SlowComp/UseMemoS";
import UseMemo from "./componets/FastComp/UseMemo";

import UseCallbackS from "./componets/SlowComp/UseCallback/UseCallbackS";
import UseCallback from "./componets/FastComp/UseCallback/UseCallback";

const App = () => {
  return (
    <div className="App">
      <h2>UseMemo Örneği</h2>
      <div style={{ border: "1px solid red" }}>
        <UseMemoS></UseMemoS>
        <hr />
        <UseMemo></UseMemo>
      </div>
      <hr />
      <h2>UseCallback Örneği</h2>
      <div style={{ border: "1px solid green" }}>
        <UseCallbackS></UseCallbackS>
        <hr />
        <UseCallback></UseCallback>
      </div>
    </div>
  );
};

export default App;
