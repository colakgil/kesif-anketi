// SAP karşılığı: FI / CO. Alt birimler: Finans Direktörlüğü, Muhasebe Müdürlüğü/Yöneticiliği, Bütçe Planlama ve Kontrol, Bütçe ve Raporlama, Yatırımcı İlişkileri ve Finansman
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER["finans"] = {
  id: "finans",
  ad: "Finans, Muhasebe, Bütçe ve Raporlama",
  alan: "Finans ve destek birimleri",
  aciklama: "Banka ve finansman, muhasebe, vergi, bütçe, maliyet ve yönetim raporlaması",
  gruplar: [
    {
      ad: "Banka, hazine ve finansman",
      operasyonlar: [
        { id: "fin-01", ad: "Bankalarla e-posta ve belge yazışmaları" },
        { id: "fin-02", ad: "Kredi ödeme planlarının kontrolü" },
        { id: "fin-04", ad: "Teminat mektuplarının takibi" },
        { id: "fin-07", ad: "Nakit akış tahmini için manuel veri toplama" },
        { id: "fin-08", ad: "Finansman tekliflerinin karşılaştırılması" }
      ]
    },
    {
      ad: "Ödeme ve tahsilat",
      operasyonlar: [
        { id: "fin-11", ad: "Departmanlardan ödeme onayı toplama" },
        { id: "fin-12", ad: "Ödeme ve tahsilat istisnalarını araştırma" },
        { id: "fin-14", ad: "Bankalardan belge ve teyit toplama" }
      ]
    },
    {
      ad: "Genel muhasebe ve dönem kapanışı",
      operasyonlar: [
        { id: "muh-01", ad: "Ay sonu kapanış kontrol listelerinin takibi" },
        { id: "muh-02", ad: "Muhasebe hesap bakiyelerinin Excel'de analizi" },
        { id: "muh-03", ad: "Tahakkuk ve dönemsellik hesaplamaları" },
        { id: "muh-04", ad: "Hesaplar arasındaki farkların araştırılması" },
        { id: "muh-16", ad: "Eksik muhasebe belgelerinin departmanlardan istenmesi" }
      ]
    },
    {
      ad: "Vergi, yasal süreçler ve sabit kıymet",
      operasyonlar: [
        { id: "muh-06", ad: "KDV beyannamesi öncesi manuel kontroller" },
        { id: "muh-07", ad: "Muhtasar ve diğer vergi hazırlıkları" },
        { id: "muh-08", ad: "KDV iade dosyalarının hazırlanması" },
        { id: "muh-09", ad: "e-Defter ve e-Berat kontrolleri" },
        { id: "muh-13", ad: "Amortisman kontrolleri" }
      ]
    },
    {
      ad: "Bütçe ve maliyet kontrol",
      operasyonlar: [
        { id: "kon-01", ad: "Departmanlardan bütçe verilerinin Excel ile toplanması" },
        { id: "kon-02", ad: "Bütçe dosyalarının birleştirilmesi ve sürüm takibi" },
        { id: "kon-04", ad: "Bütçe–fiili sapma açıklamalarının departmanlardan istenmesi" },
        { id: "kon-06", ad: "Ürün maliyetlerinin Excel'de analizi" },
        { id: "kon-11", ad: "Müşteri ve ürün kârlılık raporlarının Excel'de hazırlanması" }
      ]
    },
    {
      ad: "Raporlama ve yatırımcı ilişkileri",
      operasyonlar: [
        { id: "kon-16", ad: "Aylık yönetim raporunun Excel ve sunum olarak hazırlanması" },
        { id: "kon-18", ad: "Yönetimden gelen anlık analiz taleplerinin karşılanması" },
        { id: "fin-15", ad: "SAP raporlarını Excel'de birleştirme" },
        { id: "muh-18", ad: "Bağımsız denetçilere belge hazırlanması" },
        { id: "fin-21", ad: "Yatırımcı ilişkileri için sunum ve bilgi notlarının hazırlanması" }
      ]
    }
  ]
};
