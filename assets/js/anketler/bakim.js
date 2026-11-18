// SAP karşılığı: PM (Bakım Yönetimi)
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER.bakim = {
  id: "bakim",
  ad: "Bakım ve Teknik Hizmetler",
  alan: "Üretim ve teknik",
  aciklama: "Arıza, planlı bakım, yedek parça ve dış servis",
  gruplar: [
    {
      ad: "Arıza ve iş emri",
      operasyonlar: [
        { id: "bak-01", ad: "Arıza bildirimlerinin telefon veya mesajla alınması" },
        { id: "bak-02", ad: "İş emirlerinin kâğıt üzerinde takibi ve sonradan sisteme girilmesi" },
        { id: "bak-03", ad: "Arıza önceliklerinin üretimle koordinasyonu" },
        { id: "bak-04", ad: "Bakım ekibi iş dağılımının manuel yapılması" },
        { id: "bak-05", ad: "Arıza nedeni ve duruş sürelerinin kaydedilmesi" }
      ]
    },
    {
      ad: "Planlı bakım",
      operasyonlar: [
        { id: "bak-06", ad: "Periyodik bakım takviminin Excel'de takibi" },
        { id: "bak-07", ad: "Bakım duruşlarının üretim planıyla koordinasyonu" },
        { id: "bak-08", ad: "Bakım kontrol listelerinin doldurulması ve arşivlenmesi" },
        { id: "bak-09", ad: "Yasal periyodik kontrollerin (basınçlı kap, kaldırma ekipmanı vb.) takibi" },
        { id: "bak-10", ad: "Yağlama ve rutin kontrol turlarının takibi" }
      ]
    },
    {
      ad: "Yedek parça ve dış hizmet",
      operasyonlar: [
        { id: "bak-11", ad: "Yedek parça ihtiyaçlarının belirlenmesi ve talep edilmesi" },
        { id: "bak-12", ad: "Yedek parça stok ve kritik seviye kontrolü" },
        { id: "bak-13", ad: "Dış servis ve yüklenici tekliflerinin toplanması" },
        { id: "bak-14", ad: "Dış servis işlerinin ve hakedişlerinin takibi" },
        { id: "bak-15", ad: "Garanti ve servis sözleşmelerinin takibi" }
      ]
    },
    {
      ad: "Raporlama ve doküman",
      operasyonlar: [
        { id: "bak-16", ad: "Bakım maliyetlerinin Excel'de raporlanması" },
        { id: "bak-17", ad: "Arıza sıklığı ve duruş analizlerinin hazırlanması" },
        { id: "bak-18", ad: "Ekipman kartlarının ve teknik dokümanların güncellenmesi" },
        { id: "bak-19", ad: "Enerji tüketim verilerinin toplanması" },
        { id: "bak-20", ad: "Yatırım ve yenileme taleplerinin hazırlanması" }
      ]
    }
  ]
};
