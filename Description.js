//! Gereksiz re-render'ların Önüne Geçmek

//? Bu problemin önüne geçmek için class bileşende Pure Components ve shouldComponentUpdate kullanılabilir.
//? Fonksiyon bileşende React.memo, useMemo, useCallback kullanılabilir.

//? Memoization ihtiyaç duyulan değerin sürekli olarak hesaplanması yerine bir kere hesaplanıp
//? ihtiyaç duyulduğunda bu değerin yeniden kullanılmasına verilen addır.

//? useMemo değerleri cash eder. Değer değiştiğinde çalışır.
//? useCallback objeleri arrayları fonksiyonları cash eder. Bunlar değiştiğinde çalışır.
//? Not=> useMemo  objeleri arrayları ve fonksiyonları cash edemez.
