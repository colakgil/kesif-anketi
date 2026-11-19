// SAP karşılığı: QM (Kalite Yönetimi). Alt birimler: Kalite Kontrol ve Güvence Müdürlüğü, Kalite İzleme ve Operasyon, Kalite Güvence
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER["kalite"] = {
  id: "kalite",
  ad: "Kalite Kontrol ve Güvence",
  alan: "Teknik hizmetler ve kalite",
  aciklama: "Girdi ve proses kontrolü, şikâyetler, belgelendirme ve denetim",
  gruplar: [
    {
      ad: "Girdi ve proses kontrol",
      operasyonlar: [
        { id: "kal-01", ad: "Kontrol sonuçlarının kâğıt formdan sisteme veya Excel'e girilmesi" },
        { id: "kal-02", ad: "Tedarikçi analiz sertifikalarının kontrolü" },
        { id: "kal-03", ad: "Numune alma ve test takibi" },
        { id: "kal-04", ad: "Ölçüm cihazı kalibrasyon takibi" },
        { id: "kal-05", ad: "Kontrol planlarının ve formlarının güncellenmesi" }
      ]
    },
    {
      ad: "Uygunsuzluk ve şikâyet yönetimi",
      operasyonlar: [
        { id: "kal-06", ad: "Müşteri şikâyetlerinin kaydı ve takibi" },
        { id: "kal-07", ad: "Uygunsuzluk raporlarının hazırlanması" },
        { id: "kal-08", ad: "Düzeltici ve önleyici faaliyetlerin takibi" },
        { id: "kal-09", ad: "Tedarikçiye uygunsuzluk bildirimi ve yanıt takibi" },
        { id: "kal-10", ad: "Bloke ve karantina stokları için karar sürecinin takibi" }
      ]
    },
    {
      ad: "Doküman ve belgelendirme",
      operasyonlar: [
        { id: "kal-11", ad: "Kalite dokümanlarının (prosedür, talimat) güncellenmesi ve dağıtımı" },
        { id: "kal-12", ad: "Müşteriye analiz sertifikası ve kalite belgesi hazırlanması" },
        { id: "kal-13", ad: "Müşteri kalite anketlerinin ve şartnamelerinin yanıtlanması" },
        { id: "kal-14", ad: "Ürün ve yasal uygunluk belgelerinin takibi" },
        { id: "kal-15", ad: "Eğitim kayıtlarının tutulması" }
      ]
    },
    {
      ad: "Denetim ve raporlama",
      operasyonlar: [
        { id: "kal-16", ad: "İç denetim planı ve bulgularının takibi" },
        { id: "kal-17", ad: "Dış denetimler için belge hazırlığı" },
        { id: "kal-18", ad: "Tedarikçi denetim ve değerlendirmeleri" },
        { id: "kal-19", ad: "Kalite göstergelerinin Excel'de raporlanması" },
        { id: "kal-20", ad: "Kalitesizlik maliyeti için veri toplama" }
      ]
    }
  ]
};
