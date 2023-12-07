import React, { useState, useEffect, memo } from "react";
import "./section.css";

const MemoSection = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="sectionRootStyle boxShadowSectionStyle">
      <h1 className="titleStyle">reactMemo Örneği</h1>

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
      <h3>1- Standart Olarak Oluşturulan Çocuk Bileşeni</h3>

      <span id="childStandartSectionSpan" className="viewSpanStyle">
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
      <h3>2- reactMemo İle Oluşturulan Çocuk Bileşeni</h3>

      <span id="childMemoSectionSpan" className="viewSpanStyle">
        reactMemo İle Oluşturulan Çocuk Bileşeni Güncellendi
      </span>
    </div>
  );
});

const SubjectExpressionSection = () => {
  return (
    <>
      <h3 style={{ marginBottom: "0" }}>3- reactMemo Hakkında</h3>

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
