import React, { useState, useMemo } from "react";

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
};

let perfomanceSectionRender = 0;
let nonPerformingSectionRender = 0;

const MemozitainSection = () => {
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
    <div style={rootStyle}>
      <h1>useMemo Örneği</h1>

      {/* işlemler */}
      <div style={operationsAndViewsWrapperStyle}>
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
      <div style={operationsAndViewsWrapperStyle}>
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

export default MemozitainSection;

const PerformanceSection = ({ sumWithMemo, renderCount }) => {
  return (
    <>
      <h3>Performanslı Bölüm</h3>

      <span style={viewSpanStyle}>
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
      <h3>Performanssız Bölüm</h3>

      <span style={viewSpanStyle}>
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
      <h3 style={{ marginBottom: "0" }}>useMemo Hakkında</h3>

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
    </>
  );
};

const Divider = () => {
  return <div style={{ padding: "0.5px", backgroundColor: "gray" }}></div>;
};
