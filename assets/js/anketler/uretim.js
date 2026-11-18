// SAP karşılığı: PP (Üretim Planlama)
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER.uretim = {
  id: "uretim",
  ad: "Üretim ve Planlama",
  alan: "Üretim ve teknik",
  aciklama: "Üretim planı, malzeme ihtiyacı, üretim takibi ve raporlama",
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
      ad: "Üretim takibi ve veri toplama",
      operasyonlar: [
        { id: "urt-11", ad: "Üretim miktarlarının kâğıt formdan sisteme girilmesi" },
        { id: "urt-12", ad: "Duruş ve arıza kayıtlarının elle tutulması" },
        { id: "urt-13", ad: "Fire ve hurda verilerinin toplanması" },
        { id: "urt-14", ad: "Vardiya raporlarının hazırlanması" },
        { id: "urt-15", ad: "Üretim emirlerinin açılması, basılması ve kapatılması" }
      ]
    },
    {
      ad: "Raporlama ve koordinasyon",
      operasyonlar: [
        { id: "urt-16", ad: "Verimlilik ve performans raporlarının Excel'de hazırlanması" },
        { id: "urt-17", ad: "Plan–fiili üretim sapmalarının analizi" },
        { id: "urt-18", ad: "Kalite ve bakımla günlük koordinasyon" },
        { id: "urt-19", ad: "Yeni ürün devreye alma takibi" },
        { id: "urt-20", ad: "Üretim maliyeti için veri toplama ve teyit" }
      ]
    }
  ]
};
