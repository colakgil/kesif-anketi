// SAP karşılığı: PP (Üretim). Alt birimler: Converting Üretim Müdürlüğü/Yöneticiliği ve Con.* hatları (Perini, Omet, Hobema, Dispencer, Cep Mendil, Z Katlama vb.)
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER["converting"] = {
  id: "converting",
  ad: "Converting Üretim",
  alan: "Üretim",
  aciklama: "Perini, Omet, Hobema, dispenser, cep mendil ve katlamalı ürün hatları",
  gruplar: [
    {
      ad: "Hat üretim takibi",
      operasyonlar: [
        { id: "cnv-01", ad: "Hat bazında üretim miktarlarının kâğıt formdan girilmesi" },
        { id: "cnv-02", ad: "Hat duruşlarının ve nedenlerinin elle kaydedilmesi" },
        { id: "cnv-03", ad: "Vardiya raporlarının hazırlanması" },
        { id: "cnv-04", ad: "Üretim emirlerinin açılması, teyidi ve kapatılması" },
        { id: "cnv-05", ad: "Ürün ve format değişimi sürelerinin takibi" }
      ]
    },
    {
      ad: "Malzeme ve ambalaj",
      operasyonlar: [
        { id: "cnv-06", ad: "Jumbo bobin ihtiyacının PM üretimi ve depoyla koordinasyonu" },
        { id: "cnv-07", ad: "Ambalaj, koli ve etiket malzemesi ihtiyacının takibi" },
        { id: "cnv-08", ad: "Hatlara malzeme besleme taleplerinin iletilmesi" },
        { id: "cnv-09", ad: "Eksik malzeme nedeniyle değişen planların takibi" }
      ]
    },
    {
      ad: "Fire, meydan ve paketleme",
      operasyonlar: [
        { id: "cnv-10", ad: "Fire ve meydan miktarlarının toplanması" },
        { id: "cnv-11", ad: "Palet, koli ve paketleme kayıtlarının tutulması" },
        { id: "cnv-12", ad: "Mamul etiket ve barkodlarının hazırlanması" },
        { id: "cnv-13", ad: "Mamullerin depoya teslim kayıtlarının girilmesi" }
      ]
    },
    {
      ad: "Verim ve raporlama",
      operasyonlar: [
        { id: "cnv-14", ad: "Hat bazında verimlilik (OEE) raporlarının Excel'de hazırlanması" },
        { id: "cnv-15", ad: "Hat performanslarının birbiriyle karşılaştırılması" },
        { id: "cnv-16", ad: "Plan–fiili üretim sapmalarının analizi" },
        { id: "cnv-17", ad: "Kalite ve bakımla günlük koordinasyon" }
      ]
    }
  ]
};
