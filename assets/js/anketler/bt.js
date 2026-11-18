// SAP karşılığı: Basis / yetki / destek (Bilgi Teknolojileri)
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER.bt = {
  id: "bt",
  ad: "Bilgi Teknolojileri",
  alan: "Destek birimleri",
  aciklama: "Destek talepleri, yetki, ana veri, raporlama ve altyapı",
  gruplar: [
    {
      ad: "Kullanıcı desteği ve talepler",
      operasyonlar: [
        { id: "bt-01", ad: "Destek taleplerinin e-posta veya telefonla alınması ve takibi" },
        { id: "bt-02", ad: "Şifre sıfırlama ve hesap kilidi açma talepleri" },
        { id: "bt-03", ad: "Tekrarlayan kullanıcı sorularının yanıtlanması" },
        { id: "bt-04", ad: "Yeni çalışan için hesap, cihaz ve erişim hazırlığı" },
        { id: "bt-05", ad: "İşten ayrılanların hesap ve erişimlerinin kapatılması" }
      ]
    },
    {
      ad: "Yetki, ana veri ve SAP desteği",
      operasyonlar: [
        { id: "bt-06", ad: "SAP kullanıcı ve yetki taleplerinin onaylarıyla birlikte takibi" },
        { id: "bt-07", ad: "Yetki ve erişim listelerinin denetim için hazırlanması" },
        { id: "bt-08", ad: "Ana veri açma ve düzeltme taleplerinin karşılanması" },
        { id: "bt-09", ad: "Toplu veri yükleme ve düzeltme işlemleri" },
        { id: "bt-10", ad: "Kullanıcılar için özel rapor ve veri çekme talepleri" }
      ]
    },
    {
      ad: "Altyapı ve varlık yönetimi",
      operasyonlar: [
        { id: "bt-11", ad: "Donanım ve yazılım envanterinin Excel'de takibi" },
        { id: "bt-12", ad: "Lisans ve abonelik yenilemelerinin takibi" },
        { id: "bt-13", ad: "Yedekleme ve sistem kontrollerinin manuel yapılması" },
        { id: "bt-14", ad: "Arka plan işlerinin ve entegrasyon hatalarının izlenmesi" },
        { id: "bt-15", ad: "Tedarikçi ve servis sağlayıcılarla destek yazışmaları" }
      ]
    },
    {
      ad: "Geliştirme, güvenlik ve raporlama",
      operasyonlar: [
        { id: "bt-16", ad: "Geliştirme ve değişiklik taleplerinin takibi" },
        { id: "bt-17", ad: "Test senaryolarının hazırlanması ve sonuçların toplanması" },
        { id: "bt-18", ad: "Kullanıcı eğitim dokümanlarının hazırlanması" },
        { id: "bt-19", ad: "Güvenlik ve denetim bulgularının takibi" },
        { id: "bt-20", ad: "BT hizmet ve maliyet raporlarının hazırlanması" }
      ]
    }
  ]
};
