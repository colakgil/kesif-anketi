// SAP karşılığı: MM (Satınalma). Alt birimler: Tedarik Zinciri Direktörlüğü, Satın Alma Müdürlüğü, yurt içi/yurt dışı satın alma, Y.D. Alım ve Operasyon
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER["satinalma"] = {
  id: "satinalma",
  ad: "Tedarik Zinciri ve Satın Alma",
  alan: "Tedarik zinciri ve satış",
  aciklama: "Yurt içi ve yurt dışı satın alma, ithalat, tedarikçi ve fatura süreçleri",
  gruplar: [
    {
      ad: "Talep ve teklif",
      operasyonlar: [
        { id: "sal-01", ad: "Departmanlardan gelen taleplerin e-posta veya Excel ile toplanması" },
        { id: "sal-02", ad: "Tedarikçilerden teklif isteme ve takip etme" },
        { id: "sal-03", ad: "Tekliflerin Excel'de karşılaştırılması" },
        { id: "sal-04", ad: "Satınalma onaylarının toplanması" },
        { id: "sal-05", ad: "Numune ve teknik şartname yazışmaları" }
      ]
    },
    {
      ad: "Sipariş ve termin takibi",
      operasyonlar: [
        { id: "sal-06", ad: "Sipariş teyitlerinin tedarikçilerden alınması" },
        { id: "sal-07", ad: "Termin takibi ve gecikmeler için tedarikçiyle yazışma" },
        { id: "sal-08", ad: "Açık siparişlerin Excel'de izlenmesi" },
        { id: "sal-09", ad: "Sipariş değişikliklerinin tedarikçiye bildirilmesi" },
        { id: "sal-10", ad: "Acil ihtiyaçlar için üretim ve planlamayla koordinasyon" }
      ]
    },
    {
      ad: "Yurt dışı alım ve ithalat",
      operasyonlar: [
        { id: "dst-06", ad: "İthalat siparişlerinin ve yüklemelerin takibi" },
        { id: "dst-07", ad: "Tedarikçi evraklarının kontrolü" },
        { id: "dst-08", ad: "Gümrük vergi ve masraflarının hesaplanması" },
        { id: "dst-09", ad: "İthalat maliyet dosyalarının Excel'de hazırlanması" },
        { id: "dst-10", ad: "Varış ve gümrükleme sürecinin takibi" },
        { id: "dst-11", ad: "Navlun tekliflerinin toplanması ve karşılaştırılması" },
        { id: "dst-15", ad: "Liman bekleme sürelerinin ve demuraj masraflarının takibi" }
      ]
    },
    {
      ad: "Tedarikçi yönetimi",
      operasyonlar: [
        { id: "sal-11", ad: "Tedarikçi performansının Excel'de değerlendirilmesi" },
        { id: "sal-12", ad: "Sözleşme ve fiyat anlaşmalarının takibi" },
        { id: "sal-13", ad: "Fiyat artış taleplerinin değerlendirilmesi" },
        { id: "sal-14", ad: "Tedarikçi belgelerinin (sertifika, sözleşme vb.) toplanması" },
        { id: "sal-15", ad: "Yeni tedarikçi araştırma ve kayıt süreci" }
      ]
    },
    {
      ad: "Fatura, mutabakat ve raporlama",
      operasyonlar: [
        { id: "sal-16", ad: "Fatura, sipariş ve mal girişi uyumsuzluklarının araştırılması" },
        { id: "sal-17", ad: "Tedarikçi cari hesap mutabakatları" },
        { id: "sal-18", ad: "Fiyat farkı ve iade faturalarının takibi" },
        { id: "sal-19", ad: "Satınalma raporlarının Excel'de hazırlanması" },
        { id: "sal-20", ad: "Malzeme ve tedarikçi kartı açma taleplerinin takibi" }
      ]
    }
  ]
};
