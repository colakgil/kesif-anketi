// SAP karşılığı: WM / EWM / LE. Alt birimler: Sevkiyat ve Lojistik Müdürlüğü, Bobin Depo ve Sevkiyat, Depo ve Sevkiyat
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER["depo"] = {
  id: "depo",
  ad: "Depo, Sevkiyat ve Lojistik",
  alan: "Tedarik zinciri ve satış",
  aciklama: "Bobin ve mamul depo, mal kabul, sayım, sevkiyat ve nakliye",
  gruplar: [
    {
      ad: "Mal kabul ve yerleştirme",
      operasyonlar: [
        { id: "dep-01", ad: "İrsaliye ile siparişin elle karşılaştırılması" },
        { id: "dep-02", ad: "Mal kabul uyumsuzluklarının satınalmaya bildirilmesi" },
        { id: "dep-03", ad: "Etiket ve barkodların elle hazırlanması" },
        { id: "dep-04", ad: "Raf ve adres bilgilerinin Excel'de takibi" },
        { id: "dep-05", ad: "Kalite onayı bekleyen malzemelerin takibi" }
      ]
    },
    {
      ad: "Stok ve sayım",
      operasyonlar: [
        { id: "dep-06", ad: "Sayım listelerinin hazırlanması ve sonuçların girilmesi" },
        { id: "dep-07", ad: "Sayım farklarının araştırılması" },
        { id: "dep-08", ad: "Stok yaşlandırma ve hareketsiz stok analizleri" },
        { id: "dep-09", ad: "Son kullanma tarihi ve parti takibi" },
        { id: "dep-10", ad: "Depolar arası transfer taleplerinin takibi" }
      ]
    },
    {
      ad: "Sevkiyat ve nakliye",
      operasyonlar: [
        { id: "dep-11", ad: "Sevkiyat planının Excel'de hazırlanması" },
        { id: "dep-12", ad: "Nakliye firmalarından fiyat ve araç teyidi alınması" },
        { id: "dep-13", ad: "Sevk evraklarının (irsaliye, teslim tutanağı vb.) hazırlanması" },
        { id: "dep-14", ad: "Teslimat durumunun nakliyeci ve müşteriyle takibi" },
        { id: "dep-15", ad: "Nakliye faturalarının sevkiyatlarla karşılaştırılması" }
      ]
    },
    {
      ad: "Koordinasyon ve raporlama",
      operasyonlar: [
        { id: "dep-16", ad: "Üretim ve satışla stok durumu yazışmaları" },
        { id: "dep-17", ad: "İade ve hasarlı ürün süreçlerinin takibi" },
        { id: "dep-18", ad: "Palet, kasa gibi dönüşlü ambalajların takibi" },
        { id: "dep-19", ad: "Depo performans raporlarının Excel'de hazırlanması" },
        { id: "dep-20", ad: "Vardiya ve iş gücü planının manuel yapılması" }
      ]
    }
  ]
};
