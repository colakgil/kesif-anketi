// SAP karşılığı: PP (Üretim Planlama). Alt birimler: Üretim Planlama, Üretim/Makine Mühendisi, Mühendis ve Amirler, Meydan ve Fire
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER["planlama"] = {
  id: "planlama",
  ad: "Üretim Planlama, Mühendislik ve Üretim Destek",
  alan: "Üretim",
  aciklama: "Üretim planlama, üretim ve makine mühendisliği, meydan ve fire",
  gruplar: [
    {
      ad: "Planlama ve çizelgeleme",
      operasyonlar: [
        { id: "urt-01", ad: "Üretim planının Excel'de hazırlanması" },
        { id: "urt-02", ad: "Plan değişikliklerinin ilgili birimlere duyurulması" },
        { id: "urt-03", ad: "Kapasite ve vardiya planının manuel yapılması" },
        { id: "urt-04", ad: "Satıştan gelen termin sorularının yanıtlanması" },
        { id: "urt-05", ad: "Acil sipariş ve öncelik değişikliklerinin koordinasyonu" }
      ]
    },
    {
      ad: "Malzeme ve ihtiyaç takibi",
      operasyonlar: [
        { id: "urt-06", ad: "Eksik malzeme listelerinin hazırlanması ve takibi" },
        { id: "urt-07", ad: "Malzeme terminlerinin satınalmadan öğrenilmesi" },
        { id: "urt-08", ad: "Ürün ağacı ve reçete değişikliklerinin takibi" },
        { id: "urt-09", ad: "Fason üretim ve dış işlem takibi" },
        { id: "urt-10", ad: "Hammadde ve yarı mamul stok kontrollerinin elle yapılması" }
      ]
    },
    {
      ad: "Mühendislik ve süreç iyileştirme",
      operasyonlar: [
        { id: "urt-21", ad: "Reçete ve ürün spesifikasyonlarının güncellenmesi" },
        { id: "urt-22", ad: "Makine ayar ve standartlarının dokümante edilmesi" },
        { id: "urt-23", ad: "İyileştirme projeleri ve aksiyonlarının takibi" },
        { id: "urt-24", ad: "Teknik çizim ve dokümanların arşivlenmesi" },
        { id: "urt-19", ad: "Yeni ürün devreye alma takibi" }
      ]
    },
    {
      ad: "Meydan, fire ve raporlama",
      operasyonlar: [
        { id: "urt-13", ad: "Fire ve hurda verilerinin toplanması" },
        { id: "urt-25", ad: "Meydan ve fire alanı stoklarının takibi" },
        { id: "urt-16", ad: "Verimlilik ve performans raporlarının Excel'de hazırlanması" },
        { id: "urt-17", ad: "Plan–fiili üretim sapmalarının analizi" },
        { id: "urt-20", ad: "Üretim maliyeti için veri toplama ve teyit" }
      ]
    }
  ]
};
