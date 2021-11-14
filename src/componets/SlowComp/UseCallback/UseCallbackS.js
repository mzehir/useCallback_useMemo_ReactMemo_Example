import React, { useState } from "react";
import Button from "./Button";

const UseCallbackS = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Yavaş</h3>
      <p>{count}</p>
      <Button
        handleClick={() => setCount((prevState) => prevState + 1)}
      ></Button>
    </div>
  );
};

export default UseCallbackS;
