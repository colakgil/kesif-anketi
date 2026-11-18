// SAP karşılığı: SD-FT / GTS (Dış Ticaret)
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER.disticaret = {
  id: "disticaret",
  ad: "Dış Ticaret",
  alan: "Satış ve tedarik zinciri",
  aciklama: "İhracat, ithalat, gümrük, navlun ve teşvikler",
  gruplar: [
    {
      ad: "İhracat operasyonları",
      operasyonlar: [
        { id: "dst-01", ad: "İhracat evraklarının (fatura, çeki listesi, menşe vb.) hazırlanması" },
        { id: "dst-02", ad: "Gümrük müşaviriyle belge ve bilgi yazışmaları" },
        { id: "dst-03", ad: "Yükleme ve konteyner planının koordinasyonu" },
        { id: "dst-04", ad: "Müşteriye sevkiyat ve evrak bildirimi" },
        { id: "dst-05", ad: "Akreditif şartlarına göre evrak kontrolü" }
      ]
    },
    {
      ad: "İthalat operasyonları",
      operasyonlar: [
        { id: "dst-06", ad: "İthalat siparişlerinin ve yüklemelerin takibi" },
        { id: "dst-07", ad: "Tedarikçi evraklarının kontrolü" },
        { id: "dst-08", ad: "Gümrük vergi ve masraflarının hesaplanması" },
        { id: "dst-09", ad: "İthalat maliyet dosyalarının Excel'de hazırlanması" },
        { id: "dst-10", ad: "Varış ve gümrükleme sürecinin takibi" }
      ]
    },
    {
      ad: "Navlun, sigorta ve ödeme",
      operasyonlar: [
        { id: "dst-11", ad: "Navlun tekliflerinin toplanması ve karşılaştırılması" },
        { id: "dst-12", ad: "Nakliye sigortası işlemlerinin takibi" },
        { id: "dst-13", ad: "Dış ticaret ödeme ve tahsilatlarının finansla takibi" },
        { id: "dst-14", ad: "Nakliye ve gümrük masraf faturalarının kontrolü" },
        { id: "dst-15", ad: "Liman bekleme sürelerinin ve demuraj masraflarının takibi" }
      ]
    },
    {
      ad: "Mevzuat, teşvik ve raporlama",
      operasyonlar: [
        { id: "dst-16", ad: "Dahilde işleme izin belgelerinin takibi ve kapatılması" },
        { id: "dst-17", ad: "İhracat teşvik ve destek başvurularının hazırlanması" },
        { id: "dst-18", ad: "Gümrük beyannamelerinin arşivlenmesi ve kontrolü" },
        { id: "dst-19", ad: "Mevzuat ve tarife değişikliklerinin takibi" },
        { id: "dst-20", ad: "İhracat ve ithalat raporlarının Excel'de hazırlanması" }
      ]
    }
  ]
};
