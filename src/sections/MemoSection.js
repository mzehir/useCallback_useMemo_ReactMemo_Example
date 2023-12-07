import React, { useState, useEffect, memo } from "react";

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

const MemoSection = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={rootStyle}>
      <h1>reactMemo Örneği</h1>

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

        <ChildStandartSection />

        <Divider />

        <ChildMemoSection />

        <Divider />

        <SubjectExpressionSection />
      </div>
    </div>
  );
};

export default MemoSection;

const ChildStandartSection = () => {
  useEffect(() => {
    const childElement = document.getElementById("childStandartSection");

    const childStandartSectionSpan = document.getElementById(
      "childStandartSectionSpan"
    );

    if (childElement) {
      childElement.style.backgroundColor = "yellow";
      childStandartSectionSpan.style.display = "block";

      setTimeout(() => {
        childElement.style.backgroundColor = "";
        childStandartSectionSpan.style.display = "none";
      }, 500);
    }
  });

  return (
    <div id={"childStandartSection"}>
      <h3>Standart Olarak Oluşturulan Çocuk Bileşeni</h3>

      <span id="childStandartSectionSpan" style={viewSpanStyle}>
        Standart Olarak Oluşturulan Çocuk Bileşeni Güncellendi
      </span>
    </div>
  );
};

const ChildMemoSection = memo(() => {
  useEffect(() => {
    const childElement = document.getElementById("childMemoSection");
    const childElementSpan = document.getElementById("childMemoSectionSpan");

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
    <div id={"childMemoSection"}>
      <h3>reactMemo İle Oluşturulan Çocuk Bileşeni</h3>

      <span id="childMemoSectionSpan" style={viewSpanStyle}>
        reactMemo İle Oluşturulan Çocuk Bileşeni Güncellendi
      </span>
    </div>
  );
});

const SubjectExpressionSection = () => {
  return (
    <>
      <h3 style={{ marginBottom: "0" }}>reactMemo Hakkında</h3>

      <p>
        reactMemo, bir bişeşeni sardığımız üst katman bileşenidir. Sarılan
        bileşene "A" dersek, "A" bileşenini reactMemo ile sardıktan sonra "A"
        bileşinine gönderilen proplar değişmez ise "A" bileşeni tekrardan update
        yada render olmaz. Tabi bazı istisnai durumlar hariç.
      </p>

      <p>
        Resmi React dökümanında bu yöntemin sadece performans iyileştirmesi ve
        gerekiyorsa yeniden render ve updateleri engellemek için var olduğu ve
        güvenilir olduğu yazıyor.
      </p>

      <p>
        Eğer bir bileşenin prop'ları genellikle değişmezse ve çoğu zaman aynı
        değerlere sahipse, reactMemo kullanmak faydalı olabilir. Yada prop
        almayan bir bileşenin sabit içeriğinin oluşturulması performansa etki
        ediyorsa ve ebeveyn bileşeninden dolayı sürekli update ediliyorsa
        kullanılabilir.
      </p>

      <p>
        Fakat reactMemo ile sarmak istediğimiz bileşenin performansa etkisi
        düşükse yada aldığı proplar sürekli değişiyorsa kullanmak pek fayda
        sağlamaz.
      </p>

      <p>
        Genellikle useCallback ile karşılaştırılsada useMemo bir değeri ön
        bellekte saklamak için kullanılır.
      </p>

      <p>
        Yukarıdaki örnekte reactMemo ile oluşturulan ve reactMemo kullanılmada
        oluşturulan 2 çocuk bileşen vardır. Ebeveyn bileşendeki değer
        değiştiğinde bu iki çocuk bileşen arasındaki güncelleme farkı
        gözükmektedir.
      </p>
    </>
  );
};

const Divider = () => {
  return <div style={{ padding: "0.5px", backgroundColor: "gray" }}></div>;
};
