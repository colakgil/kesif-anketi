// SAP karşılığı: SD (Satış ve Dağıtım) / SD-FT. Alt birimler: satış ve pazarlama, zincir mağazalar, bölge bayi satışları, İhracat Müdürlüğü
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER["satis"] = {
  id: "satis",
  ad: "Satış, Pazarlama ve İhracat",
  alan: "Tedarik zinciri ve satış",
  aciklama: "Bayi ve zincir mağaza satışı, pazarlama, fiyatlama ve ihracat",
  gruplar: [
    {
      ad: "Teklif ve sipariş",
      operasyonlar: [
        { id: "sat-01", ad: "E-posta veya telefonla gelen siparişlerin SAP'ye elle girilmesi" },
        { id: "sat-02", ad: "Tekliflerin Excel veya Word'de hazırlanması" },
        { id: "sat-03", ad: "Teklif takibi ve müşteriye hatırlatma" },
        { id: "sat-04", ad: "Sipariş değişiklik ve iptal taleplerinin takibi" },
        { id: "sat-05", ad: "Müşteri sipariş formlarının (PDF, Excel) kontrolü ve aktarılması" }
      ]
    },
    {
      ad: "Fiyat, iskonto ve koşullar",
      operasyonlar: [
        { id: "sat-06", ad: "Fiyat listelerinin Excel'de hazırlanması ve güncellenmesi" },
        { id: "sat-07", ad: "Özel fiyat ve iskonto onaylarının toplanması" },
        { id: "sat-08", ad: "Kampanya ve prim hesaplamaları" },
        { id: "sat-10", ad: "Kredi limiti ve risk kontrolü için bilgi toplama" }
      ]
    },
    {
      ad: "Bayi, zincir mağaza ve pazarlama",
      operasyonlar: [
        { id: "sat-21", ad: "Zincir mağaza sipariş, listeleme ve sözleşme takibi" },
        { id: "sat-22", ad: "Bölge bayilerinin hedef ve performans takibinin Excel'de yapılması" },
        { id: "sat-23", ad: "Pazarlama kampanya ve promosyon materyallerinin takibi" },
        { id: "sat-24", ad: "Rakip fiyat ve pazar bilgisinin toplanması" },
        { id: "sat-18", ad: "Müşteri ziyaret ve görüşme notlarının tutulması" }
      ]
    },
    {
      ad: "Sevkiyat ve teslimat takibi",
      operasyonlar: [
        { id: "sat-11", ad: "Müşterilere sipariş ve teslimat durumu bildirimi" },
        { id: "sat-12", ad: "Sevkiyat planının depo ve lojistikle koordinasyonu" },
        { id: "sat-14", ad: "İade ve şikâyet taleplerinin takibi" },
        { id: "sat-15", ad: "Fatura ve irsaliye düzeltme taleplerinin takibi" }
      ]
    },
    {
      ad: "İhracat operasyonları",
      operasyonlar: [
        { id: "dst-01", ad: "İhracat evraklarının (fatura, çeki listesi, menşe vb.) hazırlanması" },
        { id: "dst-02", ad: "Gümrük müşaviriyle belge ve bilgi yazışmaları" },
        { id: "dst-03", ad: "Yükleme ve konteyner planının koordinasyonu" },
        { id: "dst-05", ad: "Akreditif şartlarına göre evrak kontrolü" },
        { id: "dst-16", ad: "Dahilde işleme izin belgelerinin takibi ve kapatılması" },
        { id: "dst-17", ad: "İhracat teşvik ve destek başvurularının hazırlanması" }
      ]
    },
    {
      ad: "Raporlama ve müşteri ilişkileri",
      operasyonlar: [
        { id: "sat-16", ad: "Satış raporlarının Excel'de hazırlanması" },
        { id: "sat-17", ad: "Satış tahminlerinin toplanması ve birleştirilmesi" },
        { id: "sat-19", ad: "Müşteri kartı açma ve güncelleme taleplerinin takibi" },
        { id: "sat-20", ad: "Vadesi geçen alacaklar için müşteriyle yazışma" }
      ]
    }
  ]
};
