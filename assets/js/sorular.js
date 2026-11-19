/*
 * Her operasyon için sorulan ortak detay soruları.
 * İlk soru (otomasyon) "tam-otomatik" cevaplanırsa kalan sorular atlanır.
 */
window.KESIF_SORULAR = [
  {
    id: "otomasyon",
    baslik: "Bu iş bugün ne kadar otomatik?",
    kisaAd: "Otomasyon durumu",
    secenekler: [
      { id: "manuel", ad: "Tamamen manuel" },
      { id: "kismen", ad: "Kısmen otomatik" },
      { id: "buyuk-olcude", ad: "Büyük ölçüde otomatik" },
      { id: "tam-otomatik", ad: "Tamamen otomatik" }
    ]
  },
  {
    id: "siklik",
    baslik: "Ne sıklıkla yapılıyor?",
    kisaAd: "İşlem sıklığı",
    secenekler: [
      { id: "her-gun", ad: "Her gün" },
      { id: "haftada-birkac", ad: "Haftada birkaç kez" },
      { id: "ayda-birkac", ad: "Ayda birkaç kez" },
      { id: "seyrek", ad: "Daha seyrek" }
    ]
  },
  {
    id: "hacim",
    baslik: "Ayda yaklaşık kaç işlem yapılıyor?",
    kisaAd: "İşlem hacmi (aylık)",
    secenekler: [
      { id: "1-10", ad: "1–10" },
      { id: "11-50", ad: "11–50" },
      { id: "51-200", ad: "51–200" },
      { id: "200+", ad: "200'den fazla" },
      { id: "bilmiyorum", ad: "Bilmiyorum" }
    ]
  },
  {
    id: "ekipZamani",
    baslik: "Ekip olarak toplam ne kadar zaman harcanıyor?",
    kisaAd: "Harcanan toplam ekip zamanı",
    secenekler: [
      { id: "1-saatten-az", ad: "Haftada 1 saatten az" },
      { id: "1-5-saat", ad: "Haftada 1–5 saat" },
      { id: "6-15-saat", ad: "Haftada 6–15 saat" },
      { id: "16-saat-ustu", ad: "Haftada 16 saatten fazla" },
      { id: "bilmiyorum", ad: "Bilmiyorum" }
    ]
  },
  {
    id: "calisanSayisi",
    baslik: "Bu işle kaç kişi ilgileniyor?",
    kisaAd: "İlgilenen çalışan sayısı",
    secenekler: [
      { id: "1", ad: "1" },
      { id: "2-3", ad: "2–3" },
      { id: "4-6", ad: "4–6" },
      { id: "7+", ad: "7 veya daha fazla" }
    ]
  },
  {
    id: "enBuyukSorun",
    baslik: "En büyük sorun nedir?",
    kisaAd: "En büyük sorun",
    secenekler: [
      { id: "zaman-kaybi", ad: "Zaman kaybı" },
      { id: "manuel-hata", ad: "Manuel işlem hataları" },
      { id: "onay-iletisim", ad: "Onay ve iletişim gecikmeleri" },
      { id: "finansal-risk", ad: "Finansal risk" },
      { id: "sorun-yok", ad: "Belirgin sorun yok" }
    ]
  }
];
