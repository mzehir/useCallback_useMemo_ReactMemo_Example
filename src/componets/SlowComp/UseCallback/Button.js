import React from "react";

const Button = ({ handleClick }) => {
  console.log("Button - rerender");
  return (
    <div>
      <button onClick={handleClick}>Sayacı artır</button>
    </div>
  );
};

export default Button;
