import React, { useState, useEffect, memo, useCallback } from "react";

const rootStyle = {
  width: "25vw",
  border: "1px solid black",
  padding: "10px",
};

const operationsAndViewsWrapperStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  border: "1px dotted blue",
  padding: "25px",
};

const viewSpanStyle = {
  fontWeight: 400,
  background: "white",
  color: "black",
  padding: "10px 15px",
  borderRadius: "4px",
  border: "1px solid rgb(79, 98, 148)",
  boxShadow: "0 0 4px rgb(79, 98, 148)",
  display: "none",
};

const UseCallbackSection = () => {
  const [count, setCount] = useState(0);

  const testMethodStandart = () => {
    // Herhangi bir iş yapmaz sadece childde gönderme amacıyla oluşturuldu
  };

  const testMethodStandartUseCallback = useCallback(() => {
    // Herhangi bir iş yapmaz sadece childde gönderme amacıyla oluşturuldu
  }, []);

  return (
    <div style={rootStyle}>
      <h1>useCallback Örneği</h1>

      {/* işlemler */}
      <div style={operationsAndViewsWrapperStyle}>
        <h2
          style={{
            textDecoration: "underline",
          }}
        >
          Ebeveyn Bileşen
        </h2>

        <p>Değer: {count}</p>
        <button onClick={() => setCount(count + 1)}>1 ekle</button>
      </div>

      <br />

      {/* Gösterimler */}
      <div style={operationsAndViewsWrapperStyle}>
        <h2
          style={{
            textDecoration: "underline",
          }}
        >
          Gösterimler
        </h2>

        <ChildMemoSectionFirst testMethodStandart={testMethodStandart} />

        <Divider />

        <ChildMemoSectionSecond
          testMethodStandartUseCallback={testMethodStandartUseCallback}
        />

        <Divider />

        <SubjectExpressionSection />
      </div>
    </div>
  );
};

export default UseCallbackSection;

const ChildMemoSectionFirst = memo(() => {
  useEffect(() => {
    const childElement = document.getElementById("childMemoSectionFirst");
    const childElementSpan = document.getElementById(
      "childMemoSectionFirstSpan"
    );

    if (childElement) {
      childElement.style.backgroundColor = "yellow";
      childElementSpan.style.display = "block";

      setTimeout(() => {
        childElement.style.backgroundColor = "";
        childElementSpan.style.display = "none";
      }, 500);
    }
  });

  return (
    <div id={"childMemoSectionFirst"}>
      <h3>reactMemo İle Oluşturulan Birinci Çocuk Bileşeni</h3>

      <span id="childMemoSectionFirstSpan" style={viewSpanStyle}>
        reactMemo İle Oluşturulan Birinci Çocuk Bileşeni Güncellendi
      </span>
    </div>
  );
});

const ChildMemoSectionSecond = memo(() => {
  useEffect(() => {
    const childElement = document.getElementById("childMemoSectionSecond");
    const childElementSpan = document.getElementById(
      "childMemoSectionSecondSpan"
    );

    if (childElement) {
      childElement.style.backgroundColor = "yellow";
      childElementSpan.style.display = "block";

      setTimeout(() => {
        childElement.style.backgroundColor = "";
        childElementSpan.style.display = "none";
      }, 500);
    }
  });

  return (
    <div id={"childMemoSectionSecond"}>
      <h3>reactMemo İle Oluşturulan İkinci Çocuk Bileşeni</h3>

      <span id="childMemoSectionSecondSpan" style={viewSpanStyle}>
        reactMemo İle Oluşturulan İkinci Çocuk Bileşeni Güncellendi
      </span>
    </div>
  );
});

const SubjectExpressionSection = () => {
  return (
    <>
      <h3 style={{ marginBottom: "0" }}>useCallback Hakkında</h3>

      <p>
        Kısa bir şekilde ifade etmek gerekirse useCallback neredeyse useMemo ile
        aynıdır. İkisinin arasındaki fark useCallback bir işlevi cash'da
        tutarken, useMemo ise bir değeri cash'da tutar.
      </p>

      <p>useCallback'in yukarıdaki örneğin anlatımına geçelim:</p>

      <p>Yukarıda 1 ebeveyn 2 çocuk bileşen var.</p>

      <p>
        Birinci çocuk bileşen reactMemo ile sarılmış bir function bileşendir. Ve
        ebeveyn, bu bileşene testMethodStandart adında standar bir
        fonksiyon(prop) gönderir
      </p>

      <p>
        İkinci çocuk bileşen yine reactMemo ile sarılmış bir function
        bileşendir. Ve ebeveyn, bu bileşene testMethodStandartUseCallback adında
        useCallback ile sarılmış bir fonksiyon(prop) gönderir
      </p>

      <p>
        Yukarıdaki ebeveyn bileşende ye alan butona tıkladığımızda, mevcut
        değere sürekli 1 eklenir ve bu değer sadece ebeveyn bileşen tarafından
        kullanılır. Çocuk bileşenlerin hiçbirinin bu değer ile bir etkileşimi
        olmaz.
      </p>

      <p>
        Birinci çocuk bileşen ve İkinci çocuk bileşen yukarıdaki değer değişse
        bile güncellenmemeli. Çünkü reactMemo ile sarmıştık. Fakat Bu iki çocuk
        bileşen, ebeveyn bileşenden bir fonksiyon propu aldığı için reactMemo bu
        güncellemeyi artık engelleyemez.
      </p>

      <p>
        Böyle bir durumda çocuk bileşen boş yere çalışmasın isteniyorsa çocuk
        bileşene gönderilen fonksiyon prop yada propları yukarıdaki
        testMethodStandartUseCallback fonksiyonundaki gibi useCallback ile
        sarılmalıdır.
      </p>
    </>
  );
};

const Divider = () => {
  return <div style={{ padding: "0.5px", backgroundColor: "gray" }}></div>;
};
