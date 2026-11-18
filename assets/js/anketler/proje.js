// SAP karşılığı: PS (Proje Sistemi)
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER.proje = {
  id: "proje",
  ad: "Proje Yönetimi",
  alan: "Destek birimleri",
  aciklama: "Proje planı, bütçe, hakediş, kaynak ve raporlama",
  gruplar: [
    {
      ad: "Planlama ve takip",
      operasyonlar: [
        { id: "prj-01", ad: "Proje planının Excel'de veya ayrı bir araçta hazırlanması" },
        { id: "prj-02", ad: "İlerleme durumunun ekiplerden toplanması" },
        { id: "prj-03", ad: "Termin ve ara hedeflerin takibi" },
        { id: "prj-04", ad: "Toplantı notlarının ve alınan kararların takibi" },
        { id: "prj-05", ad: "Proje değişiklik taleplerinin takibi" }
      ]
    },
    {
      ad: "Bütçe ve maliyet",
      operasyonlar: [
        { id: "prj-06", ad: "Proje bütçesinin Excel'de hazırlanması ve güncellenmesi" },
        { id: "prj-07", ad: "Bütçe ile fiili harcamaların karşılaştırılması" },
        { id: "prj-08", ad: "Proje harcama onaylarının toplanması" },
        { id: "prj-09", ad: "Hakediş ve ilerleme faturalarının hazırlanması" },
        { id: "prj-10", ad: "Proje sonu maliyet tahmininin güncellenmesi" }
      ]
    },
    {
      ad: "Kaynak, satınalma ve taşeron",
      operasyonlar: [
        { id: "prj-11", ad: "Kaynak ve iş gücü planının manuel yapılması" },
        { id: "prj-12", ad: "Projeye harcanan çalışma saatlerinin toplanması" },
        { id: "prj-13", ad: "Proje malzeme ve hizmet taleplerinin takibi" },
        { id: "prj-14", ad: "Taşeron sözleşme ve hakedişlerinin takibi" },
        { id: "prj-15", ad: "Ekipman ve malzeme teslimlerinin takibi" }
      ]
    },
    {
      ad: "Raporlama ve doküman",
      operasyonlar: [
        { id: "prj-16", ad: "Proje durum raporlarının hazırlanması" },
        { id: "prj-17", ad: "Yönetim için tüm projelerin özetinin hazırlanması" },
        { id: "prj-18", ad: "Proje dokümanlarının (çizim, sözleşme, tutanak) arşivlenmesi" },
        { id: "prj-19", ad: "Risk ve sorun listelerinin güncellenmesi" },
        { id: "prj-20", ad: "Proje kapanış ve devir belgelerinin hazırlanması" }
      ]
    }
  ]
};
