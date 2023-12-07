import React from "react";
import "./sections/section.css";
// import "./App.css";

import UseMemoSection from "./sections/UseMemoSection";
import MemoSection from "./sections/MemoSection";
import UseCallbackSection from "./sections/UseCallbackSection";

const App = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginTop:"15px" }}>
        <h1 className="titleStyle">
          USE_MEMO - USE_CALLBACK - REACT_MEMO
        </h1>
      </div>

      <div className="sectionsWrapperStyle">
        <UseMemoSection />

        <MemoSection />

        <UseCallbackSection />
      </div>
    </>
  );
};

export default App;
