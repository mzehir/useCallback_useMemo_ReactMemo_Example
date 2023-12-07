import React, { useState, useEffect, memo, useCallback } from "react";
import "./section.css";

const UseCallbackSection = () => {
  const [count, setCount] = useState(0);

  const testMethodStandart = () => {
    // Herhangi bir iş yapmaz sadece childde gönderme amacıyla oluşturuldu
  };

  const testMethodStandartUseCallback = useCallback(() => {
    // Herhangi bir iş yapmaz sadece childde gönderme amacıyla oluşturuldu
  }, []);

  return (
    <div className="sectionRootStyle boxShadowSectionStyle">
      <h1 className="titleStyle">useCallback Örneği</h1>

      {/* işlemler */}
      <div className="operationsAndViewsWrapperStyle boxShadowSectionItemStyle">
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
      <div className="operationsAndViewsWrapperStyle boxShadowSectionItemStyle">
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
      <h3>1- reactMemo İle Oluşturulan Birinci Çocuk Bileşeni</h3>

      <span id="childMemoSectionFirstSpan" className="viewSpanStyle">
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
      <h3>2- reactMemo İle Oluşturulan İkinci Çocuk Bileşeni</h3>

      <span id="childMemoSectionSecondSpan" className="viewSpanStyle">
        reactMemo İle Oluşturulan İkinci Çocuk Bileşeni Güncellendi
      </span>
    </div>
  );
});

const SubjectExpressionSection = () => {
  return (
    <>
      <h3 style={{ marginBottom: "0" }}>3- useCallback Hakkında</h3>

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
