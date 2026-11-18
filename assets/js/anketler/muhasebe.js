window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER.muhasebe = {
  id: "muhasebe",
  ad: "Muhasebe",
  alan: "Finans",
  aciklama: "Dönem kapanışı, vergi, sabit kıymetler, belge ve denetim",
  gruplar: [
    {
      ad: "Genel muhasebe ve dönem kapanışı",
      operasyonlar: [
        { id: "muh-01", ad: "Ay sonu kapanış kontrol listelerinin takibi" },
        { id: "muh-02", ad: "Muhasebe hesap bakiyelerinin Excel'de analizi" },
        { id: "muh-03", ad: "Tahakkuk ve dönemsellik hesaplamaları" },
        { id: "muh-04", ad: "Hesaplar arasındaki farkların araştırılması" },
        { id: "muh-05", ad: "Dönem sonu düzeltme işlemlerinin koordinasyonu" }
      ]
    },
    {
      ad: "Vergi ve yasal süreçler",
      operasyonlar: [
        { id: "muh-06", ad: "KDV beyannamesi öncesi manuel kontroller" },
        { id: "muh-07", ad: "Muhtasar ve diğer vergi hazırlıkları" },
        { id: "muh-08", ad: "KDV iade dosyalarının hazırlanması" },
        { id: "muh-09", ad: "e-Defter ve e-Berat kontrolleri" },
        { id: "muh-10", ad: "Vergi incelemeleri için belge toplama" }
      ]
    },
    {
      ad: "Sabit kıymetler",
      operasyonlar: [
        { id: "muh-11", ad: "Aktifleştirme öncesi bilgi ve belge toplama" },
        { id: "muh-12", ad: "Fiziksel sayım sonuçlarının SAP ile karşılaştırılması" },
        { id: "muh-13", ad: "Amortisman kontrolleri" },
        { id: "muh-14", ad: "Sabit kıymet transfer ve çıkış belgeleri" },
        { id: "muh-15", ad: "Eksik demirbaş bilgilerinin tamamlanması" }
      ]
    },
    {
      ad: "Belge ve denetim operasyonları",
      operasyonlar: [
        { id: "muh-16", ad: "Eksik muhasebe belgelerinin departmanlardan istenmesi" },
        { id: "muh-17", ad: "Masraf fişlerinin ve onaylarının kontrolü" },
        { id: "muh-18", ad: "Bağımsız denetçilere belge hazırlanması" },
        { id: "muh-19", ad: "Şirketler arası hesap farklılıklarının araştırılması" },
        { id: "muh-20", ad: "Birden fazla SAP raporunun Excel'de birleştirilmesi" }
      ]
    }
  ]
};
