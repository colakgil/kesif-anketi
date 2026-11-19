// Alt birim: Çevre ve Arıtma Tesisleri
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER["cevre"] = {
  id: "cevre",
  ad: "Çevre ve Arıtma",
  alan: "Teknik hizmetler ve kalite",
  aciklama: "Arıtma tesisi işletmesi, atık yönetimi, çevre izinleri ve raporlama",
  gruplar: [
    {
      ad: "Arıtma tesisi işletmesi",
      operasyonlar: [
        { id: "cev-01", ad: "Arıtma ölçüm değerlerinin (pH, KOİ vb.) elle kaydedilmesi" },
        { id: "cev-02", ad: "Kimyasal dozaj ve tüketimlerinin takibi" },
        { id: "cev-03", ad: "Arıtma çamuru miktarlarının kaydedilmesi" },
        { id: "cev-04", ad: "Debi ve sayaç okumalarının toplanması" },
        { id: "cev-05", ad: "Tesis arıza ve bakım taleplerinin iletilmesi" }
      ]
    },
    {
      ad: "Atık yönetimi",
      operasyonlar: [
        { id: "cev-06", ad: "Atık türlerine göre miktarların kaydedilmesi" },
        { id: "cev-07", ad: "Atık bertaraf ve geri dönüşüm firmalarıyla yazışmalar" },
        { id: "cev-08", ad: "Atık taşıma formlarının ve belgelerinin hazırlanması" },
        { id: "cev-09", ad: "Lisanslı firma belgelerinin geçerlilik takibi" }
      ]
    },
    {
      ad: "İzin, mevzuat ve laboratuvar",
      operasyonlar: [
        { id: "cev-10", ad: "Çevre izin ve lisanslarının süre takibi" },
        { id: "cev-11", ad: "Laboratuvar analizlerinin planlanması ve sonuçların takibi" },
        { id: "cev-12", ad: "Resmî çevre sistemlerine yapılan bildirimlerin hazırlanması" },
        { id: "cev-13", ad: "Mevzuat değişikliklerinin takibi" }
      ]
    },
    {
      ad: "Raporlama ve denetim",
      operasyonlar: [
        { id: "cev-14", ad: "Aylık ve yıllık çevre raporlarının Excel'de hazırlanması" },
        { id: "cev-15", ad: "Su ve enerji tüketim göstergelerinin raporlanması" },
        { id: "cev-16", ad: "Çevre denetimleri için belge hazırlığı" },
        { id: "cev-17", ad: "Sürdürülebilirlik ve karbon verilerinin toplanması" }
      ]
    }
  ]
};
