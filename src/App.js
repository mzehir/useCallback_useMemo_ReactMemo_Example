import React from "react";
import "./App.css";

import UseMemoSection from "./sections/UseMemoSection";
import MemoSection from "./sections/MemoSection";

const App = () => {
  return (
    <div style={{display:"flex", flexDirection: "row", justifyContent:"start", gap:"5px"}} className="App">
      <UseMemoSection />
      <MemoSection />
    </div>
  );
};

export default App;
