import React, { useState, useMemo } from "react";
import "./section.css";

let perfomanceSectionRender = 0;
let nonPerformingSectionRender = 0;

const UseMemoSection = () => {
  const [numberList, setNumberList] = useState([1, 2, 3, 4, 5]);
  const [randomNumber, setRandomNumber] = useState(0);

  //* useMemo ile toplama işlemi
  const sumWithMemo = useMemo(() => {
    perfomanceSectionRender++;
    return numberList.reduce((acc, num) => acc + num, 0);
  }, [numberList]);

  //* standart toplama işlemi
  const sumWithoutMemo = () => {
    nonPerformingSectionRender++;
    return numberList.reduce((acc, num) => acc + num, 0);
  };

  return (
    <div className="sectionRootStyle boxShadowSectionStyle">
      <h1 className="titleStyle">useMemo Örneği</h1>

      {/* işlemler */}
      <div className="operationsAndViewsWrapperStyle boxShadowSectionItemStyle">
        <h2
          style={{
            textDecoration: "underline",
          }}
        >
          İşlemler
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <button
            onClick={() => {
              //* Rasgele sayıyı üret
              setRandomNumber(Math.random());
            }}
          >
            Rastgele Sayı Üret
          </button>

          <p>Üretilen Rastgele Sayı: {randomNumber}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <button
            onClick={() => {
              //* Listeye rastgele sayı ekle
              setNumberList((prevList) => [
                ...prevList,
                Math.floor(Math.random() * 10) + 1,
              ]);
            }}
          >
            Listeye Rastgele Sayı Ekle
          </button>
          <p>Listeye Eklenen Rastgele Sayılar: {numberList.join(", ")}</p>
        </div>
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

        <PerformanceSection
          sumWithMemo={sumWithMemo}
          renderCount={perfomanceSectionRender}
        />

        <Divider />

        <NonPerformingSection
          sumWithoutMemo={sumWithoutMemo}
          renderCount={nonPerformingSectionRender}
        />

        <Divider />

        <SubjectExpressionSection />
      </div>
    </div>
  );
};

export default UseMemoSection;

const PerformanceSection = ({ sumWithMemo, renderCount }) => {
  return (
    <>
      <h3>1- Performanslı Bölüm</h3>

      <span className="viewSpanStyle">
        useMemo fonksiyon render Sayısı: {renderCount}
      </span>

      <p>
        useMemo fonksiyon ile listeye eklenen rastgele sayıların toplamı:
        {sumWithMemo}
      </p>
    </>
  );
};

const NonPerformingSection = ({ sumWithoutMemo, renderCount }) => {
  return (
    <>
      <h3>2- Performanssız Bölüm</h3>

      <span className="viewSpanStyle">
        standart fonksiyon render Sayısı: {renderCount}
      </span>

      <p>
        standart fonksiyon ile listeye eklenen rastgele sayıların toplamı:
        {sumWithoutMemo()}
      </p>
    </>
  );
};

const SubjectExpressionSection = () => {
  return (
    <>
      <h3 style={{ marginBottom: "0" }}>3- useMemo Hakkında</h3>

      <p>
        Bu hook, bir değeri hesaplamak ve bu değeri önbellekte (cache) tutmak
        için kullanılır. useMemo genellikle, bir bileşenin yeniden render
        edilmesi sırasında maliyetli bir hesaplama yapılması gerektiğinde
        kullanılır. Özellikle, bir değerin hesaplanması zaman alıyorsa veya bu
        değer sık sık değişmiyorsa useMemo kullanarak bu değeri önbellekte
        tutabilirsiniz.
      </p>

      <p>
        useMemo her türlü fonksiyonel component tipinde kullanılabilir. Sınıflı
        componentlerde kullanılamaz, çünkü hook'lar sadece fonksiyonel
        componentlerde çalışır. Functional component, memoized component, custom
        hook vb. her türlü component içinde kullanılabilir.
      </p>

      <p>
        Genellikle useCallback ile karşılaştırılsada useMemo bir değeri ön
        bellekte saklamak için kullanılır.
      </p>
    </>
  );
};

const Divider = () => {
  return <div style={{ padding: "0.5px", backgroundColor: "gray" }}></div>;
};
