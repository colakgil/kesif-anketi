// SAP karşılığı: PP (Üretim). Alt birimler: Kağıt Üretim Müdürlüğü, PM1–PM4 yöneticilikleri, kağıt üretim, hamur hazırlama, bobin kesme
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER["pm"] = {
  id: "pm",
  ad: "Üretim PM",
  alan: "Üretim",
  aciklama: "Kağıt makineleri PM1–PM4: kağıt üretimi, hamur hazırlama ve bobin kesme",
  gruplar: [
    {
      ad: "Kağıt makinesi üretim takibi",
      operasyonlar: [
        { id: "pm-01", ad: "Vardiya üretim miktarlarının kâğıt formdan sisteme girilmesi" },
        { id: "pm-02", ad: "Makine hızı, gramaj ve nem değerlerinin elle kaydedilmesi" },
        { id: "pm-03", ad: "Kağıt kopması ve duruş kayıtlarının elle tutulması" },
        { id: "pm-04", ad: "Vardiya devir-teslim raporlarının hazırlanması" },
        { id: "pm-05", ad: "Jumbo bobin üretim kayıtlarının ve etiketlerinin hazırlanması" }
      ]
    },
    {
      ad: "Hamur hazırlama ve hammadde",
      operasyonlar: [
        { id: "pm-06", ad: "Selüloz ve atık kağıt tüketimlerinin hesaplanması" },
        { id: "pm-07", ad: "Kimyasal ve katkı malzemesi tüketimlerinin takibi" },
        { id: "pm-08", ad: "Hamur reçetesi ve karışım oranlarının takibi" },
        { id: "pm-09", ad: "Hammadde stok kontrollerinin elle yapılması" },
        { id: "pm-10", ad: "Hammadde ihtiyacının satınalma ve depoya bildirilmesi" }
      ]
    },
    {
      ad: "Bobin kesme ve sevke hazırlık",
      operasyonlar: [
        { id: "pm-11", ad: "Bobin kesme planının siparişlere göre hazırlanması" },
        { id: "pm-12", ad: "Kesilen bobinlerin ölçü, ağırlık ve etiket kontrolü" },
        { id: "pm-13", ad: "Bobin üretim teyitlerinin sisteme girilmesi" },
        { id: "pm-14", ad: "Bobin depo ve sevkiyatla stok yazışmaları" }
      ]
    },
    {
      ad: "Fire, verim ve raporlama",
      operasyonlar: [
        { id: "pm-15", ad: "Fire ve broke miktarlarının toplanması" },
        { id: "pm-16", ad: "PM1–PM4 verimlilik raporlarının Excel'de hazırlanması" },
        { id: "pm-17", ad: "Enerji, buhar ve su tüketim verilerinin toplanması" },
        { id: "pm-18", ad: "Plan–fiili üretim sapmalarının analizi" },
        { id: "pm-19", ad: "Kalite ve bakımla günlük koordinasyon" }
      ]
    }
  ]
};
