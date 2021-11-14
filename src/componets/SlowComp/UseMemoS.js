import React, { useState } from "react";

const UseMemoS = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const dublicate = () => {
    [...new Array(10000000)].forEach((item) => {});

    return count * 2;
  };

  const dublicatedCount = dublicate();

  return (
    <div>
      <h3>Yavaş</h3>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Sayacı Artır
      </button>
      <p>{dublicatedCount}</p>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default UseMemoS;
