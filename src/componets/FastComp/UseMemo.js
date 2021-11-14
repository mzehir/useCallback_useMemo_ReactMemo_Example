import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const dublicatedCount = useMemo(() => {
    [...new Array(10000000)].forEach((item) => {}); //! Burası artık count değeri değiştiğinde çalışacaktır.

    return count * 2;
  }, [count]);

  return (
    <div>
      <h3>Hızlı</h3>
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

export default UseMemo;
