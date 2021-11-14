import React, { useState, useCallback } from "react";
import Button from "./Button";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);

  return (
    <div>
      <h3>Hızlı</h3>
      <p>{count}</p>
      <Button handleClick={handleClick}></Button>
    </div>
  );
};

export default UseCallback;
