// SAP karşılığı: SD (Satış ve Dağıtım)
window.KESIF_ANKETLER = window.KESIF_ANKETLER || {};
window.KESIF_ANKETLER.satis = {
  id: "satis",
  ad: "Satış",
  alan: "Satış ve tedarik zinciri",
  aciklama: "Teklif, sipariş, fiyat, teslimat takibi ve müşteri ilişkileri",
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
        { id: "sat-09", ad: "Müşteri sözleşme koşullarının takibi" },
        { id: "sat-10", ad: "Kredi limiti ve risk kontrolü için bilgi toplama" }
      ]
    },
    {
      ad: "Sevkiyat ve teslimat takibi",
      operasyonlar: [
        { id: "sat-11", ad: "Müşterilere sipariş ve teslimat durumu bildirimi" },
        { id: "sat-12", ad: "Sevkiyat planının depo ve lojistikle koordinasyonu" },
        { id: "sat-13", ad: "Stok ve termin bilgisinin üretim veya planlamadan öğrenilmesi" },
        { id: "sat-14", ad: "İade ve şikâyet taleplerinin takibi" },
        { id: "sat-15", ad: "Fatura ve irsaliye düzeltme taleplerinin takibi" }
      ]
    },
    {
      ad: "Raporlama ve müşteri ilişkileri",
      operasyonlar: [
        { id: "sat-16", ad: "Satış raporlarının Excel'de hazırlanması" },
        { id: "sat-17", ad: "Satış tahminlerinin toplanması ve birleştirilmesi" },
        { id: "sat-18", ad: "Müşteri ziyaret ve görüşme notlarının tutulması" },
        { id: "sat-19", ad: "Müşteri kartı açma ve güncelleme taleplerinin takibi" },
        { id: "sat-20", ad: "Vadesi geçen alacaklar için müşteriyle yazışma" }
      ]
    }
  ]
};
