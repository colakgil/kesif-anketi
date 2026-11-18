// SAP ekibi (iç SAP destek, modül sorumluları, ABAP ve Basis)
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER.sap = {
  id: "sap",
  ad: "SAP Ekibi",
  alan: "SAP ekibi",
  aciklama: "Kullanıcı desteği, geliştirme, yetki, sistem yönetimi ve projeler",
  gruplar: [
    {
      ad: "Kullanıcı desteği ve talepler",
      operasyonlar: [
        { id: "sap-01", ad: "Destek taleplerinin e-posta veya telefonla alınması ve takibi" },
        { id: "sap-02", ad: "Tekrarlayan kullanıcı sorularının ve hatalarının yanıtlanması" },
        { id: "sap-03", ad: "Hata analizi için kullanıcıdan bilgi ve ekran görüntüsü toplanması" },
        { id: "sap-04", ad: "Kullanıcılar için özel rapor ve veri çekme talepleri" },
        { id: "sap-05", ad: "Ay sonu ve dönem kapanışı desteği" }
      ]
    },
    {
      ad: "Geliştirme ve değişiklik yönetimi",
      operasyonlar: [
        { id: "sap-06", ad: "Geliştirme taleplerinin toplanması ve önceliklendirilmesi" },
        { id: "sap-07", ad: "İhtiyaç analizi ve tasarım dokümanlarının yazılması" },
        { id: "sap-08", ad: "Geliştirme onaylarının ve süre tahminlerinin takibi" },
        { id: "sap-09", ad: "Canlıya taşıma taleplerinin ve geçişlerin takibi" },
        { id: "sap-10", ad: "Kod inceleme ve geliştirme standartlarının kontrolü" }
      ]
    },
    {
      ad: "Yetki, ana veri ve sistem yönetimi",
      operasyonlar: [
        { id: "sap-11", ad: "Kullanıcı açma ve yetki taleplerinin onaylarıyla birlikte takibi" },
        { id: "sap-12", ad: "Yetki ve erişim listelerinin denetim için hazırlanması" },
        { id: "sap-13", ad: "Toplu veri yükleme ve düzeltme işlemleri" },
        { id: "sap-14", ad: "Arka plan işlerinin ve entegrasyon hatalarının izlenmesi" },
        { id: "sap-15", ad: "Sistem performansı ve günlük kontrollerin manuel takibi" }
      ]
    },
    {
      ad: "Test, doküman ve proje",
      operasyonlar: [
        { id: "sap-16", ad: "Test senaryolarının hazırlanması ve sonuçların toplanması" },
        { id: "sap-17", ad: "Kullanıcı eğitimlerinin ve eğitim dokümanlarının hazırlanması" },
        { id: "sap-18", ad: "Sistem ve süreç dokümanlarının güncel tutulması" },
        { id: "sap-19", ad: "Danışman firma işlerinin ve SAP'ye açılan destek kayıtlarının takibi" },
        { id: "sap-20", ad: "Proje, iş yükü ve maliyet raporlarının hazırlanması" }
      ]
    }
  ]
};
