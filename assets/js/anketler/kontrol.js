// SAP karşılığı: CO (Maliyet Muhasebesi ve Kontrol)
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER.kontrol = {
  id: "kontrol",
  ad: "Bütçe ve Maliyet Kontrol",
  alan: "Finans",
  aciklama: "Bütçe, maliyet analizi, kârlılık ve yönetim raporlaması",
  gruplar: [
    {
      ad: "Bütçe ve planlama",
      operasyonlar: [
        { id: "kon-01", ad: "Departmanlardan bütçe verilerinin Excel ile toplanması" },
        { id: "kon-02", ad: "Bütçe dosyalarının birleştirilmesi ve sürüm takibi" },
        { id: "kon-03", ad: "Bütçe revizyonlarının ve onaylarının takibi" },
        { id: "kon-04", ad: "Bütçe–fiili sapma açıklamalarının departmanlardan istenmesi" },
        { id: "kon-05", ad: "Yıl sonu tahmini güncellemelerinin manuel hazırlanması" }
      ]
    },
    {
      ad: "Maliyet analizi",
      operasyonlar: [
        { id: "kon-06", ad: "Ürün maliyetlerinin Excel'de analizi" },
        { id: "kon-07", ad: "Masraf yeri giderlerinin kontrolü ve sorumlularla teyidi" },
        { id: "kon-08", ad: "Dağıtım anahtarlarının (m², kişi sayısı vb.) manuel güncellenmesi" },
        { id: "kon-09", ad: "Standart–fiili maliyet farklarının araştırılması" },
        { id: "kon-10", ad: "Stok değerleme ve maliyet kontrollerinin manuel yapılması" }
      ]
    },
    {
      ad: "Kârlılık ve fiyatlama",
      operasyonlar: [
        { id: "kon-11", ad: "Müşteri ve ürün kârlılık raporlarının Excel'de hazırlanması" },
        { id: "kon-12", ad: "Fiyat ve iskonto etkisinin manuel hesaplanması" },
        { id: "kon-13", ad: "Yeni ürün veya teklif için maliyet hesaplamaları" },
        { id: "kon-14", ad: "Yatırım taleplerinin ve geri dönüş hesaplarının değerlendirilmesi" },
        { id: "kon-15", ad: "Şirketler arası fiyat ve masraf yansıtmalarının hesaplanması" }
      ]
    },
    {
      ad: "Yönetim raporlaması",
      operasyonlar: [
        { id: "kon-16", ad: "Aylık yönetim raporunun Excel ve sunum olarak hazırlanması" },
        { id: "kon-17", ad: "SAP raporlarının Excel'de birleştirilmesi" },
        { id: "kon-18", ad: "Yönetimden gelen anlık analiz taleplerinin karşılanması" },
        { id: "kon-19", ad: "Gösterge tablolarının manuel güncellenmesi" },
        { id: "kon-20", ad: "Rapor rakamlarının muhasebe ile mutabakatı" }
      ]
    }
  ]
};
